// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>

        <div>
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="trigger-button"
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu className="hamburger-button" />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="container">
                <ul className="nav-items">
                  <Link to="/" className="nav-link" onClick={() => close()}>
                    <li className="items-container">
                      <AiFillHome className="nav-icon" />
                      <p className="item">Home</p>
                    </li>
                  </Link>
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={() => close()}
                  >
                    <li className="items-container">
                      <BsInfoCircleFill className="nav-icon" />
                      <p className="item">About</p>
                    </li>
                  </Link>
                </ul>
                <div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    <IoMdClose className="close-icon" />
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Header
