import XboxImg from './pages/XboxPages/XboxImg';
import XboxIcons from './pages/XboxPages/XboxIcons';
import XboxCards from './pages/XboxPages/XboxCards';
import XboxPagi from './pages/XboxPages/XboxPagi';

function XboxComp() {
  return (
    <section>
      <div className="xbox-page">
        <XboxImg />
        <XboxIcons />
        <div className="xbox-shop">
          <XboxCards />
          <XboxPagi />
          <hr />
        </div>
      </div>
    </section>
  );
}

export default XboxComp;
