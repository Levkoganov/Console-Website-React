import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function PlayStationpagi() {
  useEffect(() => {
    getPlayStationData();
  }, [window.location.search]);

  // PAGE URL
  const [page, setPage] = useState('');

  // NUMBER OF PAGES
  const [maxPage, setMaxPage] = useState('');

  // PREV PAGE
  const [previousPage, SetPreviousPage] = useState('');

  // NEXT PAGE
  const [nextPage, setNextPage] = useState('');

  // GET DATA FROM SERVER
  const getPlayStationData = async () => {
    try {
      let res = await axios.get(`/playStation/${window.location.search}`);

      let getPage = res.data.playStationPage;
      setPage(getPage);

      let getMaxPage = res.data.playStationMaxPage;
      setMaxPage(getMaxPage);

      let getPreviousPage = res.data.playStationPrevPage;
      SetPreviousPage(getPreviousPage);

      let getNextPage = res.data.playStationNextPage;

      setNextPage(getNextPage);
    } catch (err) {
      console.log(err);
    }
  };

  // PREV PAGE
  let showPrevPage = () => {
    if (previousPage || previousPage == 0) {
      return <Link to={`/playStation/?start=${previousPage}`}>&laquo;</Link>;
    }
  };

  // SHOW PAGES
  let LoopPages = () => {
    const arr = [];
    for (let i = 0; i < maxPage; i++) {
      arr.push(
        <NavLink
          exact
          activeClassName={
            (i == 0 && nextPage == 5) ||
            (i == 1 && page == 5) ||
            (i == 2 && page == 10) ||
            (i == 3 && page == 15)
              ? 'active1'
              : ''
          }
          key={page + Math.random()}
          to={`/playStation/?start=${i * 5}`}
        >
          {i + 1}
        </NavLink>
      );
    }
    return arr;
  };

  // NEXT PAGE
  let showNextPage = () => {
    if (nextPage) {
      return <Link to={`/playStation/?start=${nextPage}`}>&raquo;</Link>;
    }
  };

  return (
    <div>
      <div className="ps4-pagination">
        {showPrevPage()}
        {LoopPages()}
        {showNextPage()}
      </div>
    </div>
  );
}

export default PlayStationpagi;
