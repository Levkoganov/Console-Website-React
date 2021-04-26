// DEPENDENCIES
import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// FILES
import { setUrl } from './config/Config';

// COMPONENTS
import HomeComp from './components/HomeComp';
import PlayStationComp from './components/PlayStationComp';
import XboxComp from './components/XboxComp';
import AuthComp from './components/Auth/AuthComp';
import NavComp from './components/NavComp';
import Footer from './components/Footer';
import LoginComp from './components/Auth/LoginComp';
import RegisterComp from './components/Auth/RegisterComp';
import SettingComp from './components/Auth/SettingComp';

function App() {
  // SET DEFAULT URL
  useEffect(() => {
    setUrl();
  }, []);

  const isLogged = useSelector((state) => state.checkLoggin.logged);

  return (
    <div>
      <NavComp />

      <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route
          path="/playStation"
          render={() =>
            isLogged ? <PlayStationComp /> : <Redirect to="/auth/login" />
          }
        />
        <Route
          path="/xbox"
          render={() =>
            isLogged ? <XboxComp /> : <Redirect to="/auth/login" />
          }
        />
        <Route exact path="/auth" component={AuthComp} />
        <Route path="/auth/login" component={LoginComp} />
        <Route path="/auth/register" component={RegisterComp} />
        <Route
          path="/setting/update"
          render={() =>
            isLogged ? <SettingComp /> : <Redirect to="/auth/login" />
          }
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
