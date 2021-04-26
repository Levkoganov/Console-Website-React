import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { saveUserName } from '../../store/actions/usernameAction';

function SettingComp(props) {
  // STATE FOR SERVER ERRORS
  const [checkErrors, SetCheckErrors] = useState([]);

  // SAVE INPUT DATA IN A STATE
  const [updateInput, setUpdateInput] = useState({
    newname: '',
  });

  // REDUX
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.username.saveUserName); // GET USERNAME FROM REDUX

  // GET VALUE OF INPUT
  const handleInput = (e) => {
    const { value, name } = e.target;
    const updateValue = { ...updateInput, [name]: value };
    setUpdateInput(updateValue);
  };

  // POST DATA IN SERVER
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/setting/update', {
        oldname: userName,
        newname: updateInput.newname,
      });

      if (res.data.catchErrors) {
        const reciveErrors = res.data.catchErrors;
        SetCheckErrors(reciveErrors);
      } else {
        const clearSetCheckErrors = '';
        SetCheckErrors(clearSetCheckErrors);
        dispatch(saveUserName(res.data.username));
        props.history.push('/');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <div>
      <section>
        <h1 className="text-center mt-5 update-header">UPDATE USERNAME</h1>
        <div className="mt-5 main-update-div">
          <div className="col-md-6 m-auto">
            <div className="card card-body update-card">
              {checkErrors &&
                checkErrors.map((result) => (
                  <div
                    key={result + Math.random}
                    className="alert alert-warning"
                    role="alert"
                  >
                    {result}
                  </div>
                ))}

              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label htmlFor="name">Corrent username:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="oldname"
                    value={userName}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">New username:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="newname"
                    value={updateInput.newname}
                    onChange={handleInput}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  onClick={handleUpdate}
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(SettingComp);
