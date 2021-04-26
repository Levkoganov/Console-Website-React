import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { getInput } from '../../store/actions/registerAction';
import { CheckRegistration } from '../../store/actions/isRegisterdAction';

function RegisterComp(props) {
  // STATE FOR SERVER ERRORS
  const [checkErrors, SetCheckErrors] = useState([]);

  // REDUX STATE
  const dispatch = useDispatch();
  const reduxInputValues = useSelector((state) => state.register.inputValues);
  const isRegisterd = useSelector((state) => state.checkLoggin.isRegisterd);

  // FROM INPUT FUNCTION
  const handleInput = (e) => {
    const { value, name } = e.target;
    const FormValues = { ...reduxInputValues, [name]: value };
    dispatch(getInput(FormValues));
  };

  // SUBMIT VALUES AND CHECK
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/register', reduxInputValues);

      // INVALID INPUT
      if (res.data.catchErrors) {
        const reciveErrors = res.data.catchErrors;
        SetCheckErrors(reciveErrors);

        // VALID INPUTS
      } else {
        if (!isRegisterd) {
          dispatch(CheckRegistration());
        }
        props.history.push('/auth/login');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <section>
      <div className="mt-5 register-wrap">
        <div className="col-md-6 m-auto">
          <div className="card card-body register-card">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
            </h1>

            {checkErrors.map((result) => (
              <div
                key={result + Math.random}
                className="alert alert-warning"
                role="alert"
              >
                {result}
              </div>
            ))}

            <form onSubmit={handleRegister}>
              <div className="form-group register-form-group">
                <label>Username:</label>
                <input
                  className="form-control"
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                  value={reduxInputValues.name || ''}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group register-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={reduxInputValues.email || ''}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group register-form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={reduxInputValues.password || ''}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group register-form-group">
                <label htmlFor="password2">Confirm Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={reduxInputValues.confirm_password || ''}
                  onChange={handleInput}
                />
              </div>

              <button
                className="btn btn-primary btn-block"
                onClick={handleRegister}
              >
                Register
              </button>
            </form>
            <p className="lead mt-4">
              Have An Account? <NavLink to="/auth/login">Register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterComp;
