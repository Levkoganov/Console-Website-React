import { saveUserName } from '../../store/actions/usernameAction';
import { CheckLoggin } from '../../store/actions/isLoggedAction';
import { setToken } from '../../config/Config';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LoginComp(props) {
  // STATE FOR SERVER ERRORS
  const [checkErrors, SetCheckErrors] = useState([]);

  // STATE FOR FORM VALUES
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  // REDUX STATE
  const dispatch = useDispatch();
  const registerValues = useSelector((state) => state.register.inputValues);
  const isRegisterd = useSelector((state) => state.checkRegisterd.isRegisterd);

  // FROM INPUT FUNCTION
  const handleInput = (e) => {
    const { value, name } = e.target;
    const FormValues = { ...loginInput, [name]: value };
    setLoginInput(FormValues);
  };

  // SUBMIT VALUES AND CHECK
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/login', loginInput);

      // CHECK FOR SERVER ERROS
      if (res.data.catchErrors) {
        const reciveErrors = res.data.catchErrors;
        SetCheckErrors(reciveErrors);

        // SUCCESSFUL LOGIN
      } else {
        dispatch(CheckLoggin());
        dispatch(saveUserName(res.data.username));
        setToken(res.data.token);
        localStorage.setItem('myData', res.data.token);

        props.history.push('/');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <section>
      <div className="mt-5 main-login-div">
        <div className="col-md-6 m-auto">
          <div className="card card-body login-card">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i>Login
            </h1>

            {/* {logged ? (
              ''
            ) : (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                please login to view this page
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )} */}

            {registerValues && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                {`${registerValues.name}, You are registered!`}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            {checkErrors.map((result) => (
              <div
                key={result + Math.random}
                className="alert alert-warning"
                role="alert"
              >
                {result}
              </div>
            ))}

            <form onSubmit={handleLogin}>
              <div className="form-group login-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={loginInput.name}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group login-form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={loginInput.name}
                  onChange={handleInput}
                />
              </div>

              <input type="checkbox" name="checkbox" id="saveme" />
              <label htmlFor="checkbox"> Remember me </label>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <NavLink to="/auth/register">Register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginComp;
