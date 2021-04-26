import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { saveUserName } from '../store/actions/usernameAction';
import { CheckLoggin } from './../store/actions/isLoggedAction';
import { CheckRegistration } from './../store/actions/isRegisterdAction';

import { getInput } from '../store/actions/registerAction';
import { setToken } from '../config/Config';

function NavComp(props) {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.username.saveUserName);

  // LOGOUT BTN
  const logOut = () => {
    const reset = '';
    setToken(undefined);
    dispatch(saveUserName(null));
    dispatch(CheckLoggin());
    dispatch(CheckRegistration());
    dispatch(getInput(reset));
    localStorage.clear();
    props.history.push('/auth/login');
  };
  return (
    <div>
      <nav className="menu">
        <ul className="main-menu">
          <li>
            <NavLink to="/" exact>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/playStation">sony</NavLink>
          </li>
          <li>
            <NavLink to="/xbox">xbox</NavLink>
          </li>

          {loggedUser ? (
            <li className="with-submenu">
              {loggedUser}
              <i className="fa fa-caret-down"></i>
              <ul className="submenu">
                <NavLink className="dropdown-item" to="/setting/update">
                  Setting
                </NavLink>

                <button className="dropdown-item" onClick={logOut}>
                  Logout
                </button>
              </ul>
            </li>
          ) : (
            <li>
              <NavLink to="/auth">sign in</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default withRouter(NavComp);
