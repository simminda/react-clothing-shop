import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Header = ({ isLoggedIn, onNameSubmit, onLogout }) => {
  const [name, setName] = useState('');

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isModalVisible, setIsModalVisible] = useState(false);

const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();
  onNameSubmit(username); // Update the name state with the entered username
  setUsername(''); // Reset the username state to empty
  setPassword(''); // Reset the password state to empty
  setIsModalVisible(false); // Close the modal
  setName(username); // Update the name state
};


const handleLogout = () => {
    // Perform logout logic
    onLogout();
    setName(''); // Reset the name state to empty
};


  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src="./images/logo.jpg" alt="Logo" className="logo" width="60" height="60" />
            <Link to="/" className="navbar-brand">&nbsp; The Thread Shed</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/help" className="nav-link">
                    Help Centre
                  </Link>
                </li>
              </ul>

              {isLoggedIn ? (
                <span style={{ marginRight: '15px' }}>
                  Welcome {name}!{' '}
                  <Link to="/" onClick={handleLogout}>
                    <small style={{ fontSize: '70%', color: 'black' }}>(That's not me)</small>
                  </Link>
                </span>
              ) : (
                <Link to="/" onClick={() => setIsModalVisible(true)} style={{textDecoration:'none', color:'black'}}>
                    SIGN IN &nbsp; &nbsp;
                </Link>
              )}

              {isLoggedIn ? (
              <Link to={`/user?username=${username}`} className="nav-link" style={{ color: '#0082ca' }}>
                <i className="bi bi-person-fill-check"></i>
              </Link>
              ) : (
                <Link to="/favorites" className="btn">
                <i className="bi bi-person-x"></i>
              </Link>
                )}
              <Link to="/favorites" className="btn" style={{ color: '#0082ca' }}>
                <i className="bi bi-heart"></i>
              </Link>
              <Link to="/cart" className="btn" style={{ color: '#333333' }}>
                <i className="bi bi-cart3"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Login Form */}
          <form onSubmit={handleLoginFormSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
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
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </Modal.Body>
      </Modal>


    </div>
  );
};

export default Header;
