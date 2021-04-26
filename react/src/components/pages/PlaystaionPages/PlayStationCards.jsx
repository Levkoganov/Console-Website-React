import axios from 'axios';
import { useEffect, useState } from 'react';

function PlayStationCards() {
  useEffect(() => {
    getPlayStationData();
  }, [window.location.search]);

  // SAVE SERVER DATA IN A STATE
  const [dataOutPut, setDataOutPut] = useState([]);

  // GET DATA FROM SERVER
  const getPlayStationData = async () => {
    try {
      let res = await axios.get(`/playStation/${window.location.search}`);
      console.log(res);
      let getData = res.data.playStationData;
      setDataOutPut(getData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="ps4-items-header">PLAYSTATION GAMES</h1>

      <div className="ps4-items">
        {dataOutPut &&
          dataOutPut.map((item) => (
            <div key={item.idproducts}>
              <div className="card text-white bg-dark mb-3 ps4-card">
                <div className="card-img">
                  <img
                    src="/images/playstation pics/ps4_logo.jpg"
                    className="card-img-top"
                    alt="ps4img"
                  />
                </div>
                <div className="card-header">
                  <h6 className="text-center"> {item.productname}</h6>
                </div>
                <div className="card-body card-price">
                  <h6 className="text-center">{item.productprice}$</h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlayStationCards;
