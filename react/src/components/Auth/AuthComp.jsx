import { NavLink } from 'react-router-dom';

function AuthComp() {
  return (
    <section>
      <h1 className="text-center mt-5 auth-header">Welcome GUEST!</h1>
      <div className="mt-5 main-auth-div">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center form-card">
            <h1>
              <i className="fab fa-node-js fa-3x"></i>
            </h1>
            <p>Create an account or login</p>
            <NavLink
              className="btn btn-primary btn-block mb-2"
              to="/auth/register"
            >
              Register
            </NavLink>
            <NavLink className="btn btn-secondary btn-block" to="/auth/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthComp;
