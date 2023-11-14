import React, { useState } from 'react';
import { containerStyle } from '../Utils.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div style={containerStyle}>
      <div className="container" id="home">
        <div className="row">
          <div className="col-6" id="msrit">
            <img
              src={require('../photos/logo.png')}
              className="msrit"
              alt="msrit"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                display: 'block',
                margin: 'auto',
              }}
            />
          </div>
          <div className={`col-6 login ${selectedOption ? 'form-active' : ''}`}>
            <h2>Continue As :</h2>
            <hr />
            <div className={`d-grid gap-2 col-6 mx-auto ${selectedOption ? 'btn-hidden' : ''}`}>
              <button
                className="btn"
                type="button"
                onClick={() => handleOptionSelect('student')}
              >
                Student
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => handleOptionSelect('faculty')}
              >
                Faculty
              </button>
            </div>
            {selectedOption && (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  {selectedOption === 'student' ? (
                    <>
                      <label htmlFor="usn" className="form-label">
                        USN
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usn"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </>
                  ) : (
                    <>
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <Link to={selectedOption === 'student'?"/student":"/faculty"}>
                <button
                className="btn position-relative bottom-0 end-0"
                type="submit"
                onClick={() => handleOptionSelect('student')}
                >
                LogIn
              </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
