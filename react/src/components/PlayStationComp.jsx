import PlaystationImg from './pages/PlaystaionPages/PlaystationImg';
import PlayStationIcons from './pages/PlaystaionPages/PlayStationIcons';
import PlayStationCards from './pages/PlaystaionPages/PlayStationCards';
import PlayStationpagi from './pages/PlaystaionPages/PlayStationpagi';

function PlayStationComp() {
  return (
    <section>
      <div className="ps4-page">
        <PlaystationImg />
        <div className="icons-div">
          <PlayStationIcons />
        </div>
        <div className="ps4-shop">
          <PlayStationCards />
          <PlayStationpagi />
          <hr />
        </div>
      </div>
    </section>
  );
}

export default PlayStationComp;
