import { RiEarthLine, RiMenu2Fill, RiMenuFill, RiSunLine } from '@remixicon/react';
import './Navbar.css';

function Navbar(): JSX.Element {
  return (
    <nav id="navbar">
      <ul className="nb-items">
        <li className="nb-item">
          <ul className="nb-group">
            <li className="nb-g-item nb-selected">
              <a className="nb-link" href="#about">
                about me
              </a>
            </li>
            <li className="nb-g-item">
              <a className="nb-link" href="#projects">
                projects
              </a>
            </li>
            <li className="nb-g-item">
              <a className="nb-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </li>
        <li className="nb-item">
          <ul className="nb-group">
            <li id="navbar-toggle" className="nb-g-item">
              <button
                id="navbar-toggle-btn"
                type="button"
                aria-label="toggle navbar"
              >
                <RiMenuFill />
              </button>
            </li>
            <li className="nb-g-item">
              <button type="button" aria-label="change color theme">
                <RiSunLine />
              </button>
            </li>
            <li className="nb-g-item">
              <RiEarthLine />
              <select
                name="page-language"
                id="nb-change-language"
                aria-label="change page language"
              >
                <option value="en">en</option>
                <option value="pt-br">pt-br</option>
              </select>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
