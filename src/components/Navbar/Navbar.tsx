import {
  RiEarthLine,
  RiMenuFill,
  RiSunFill,
  RiMoonLine,
} from '@remixicon/react';
import './Navbar.css';
import { useEffect, useState } from 'react';

function Navbar(): JSX.Element {
  const [useLightTheme, setThemeIcon] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(window.innerWidth > 768);
  const [showToggleMenuBtn, setShowToggleMenuBtn] = useState<boolean>(
    window.innerWidth <= 768,
  );

  useEffect(
    () =>
      window.addEventListener('resize', () => {
        setShowToggleMenuBtn(window.innerWidth <= 768);
        setShowMenu(window.innerWidth > 768);
      }),
    [],
  );

  const changeThemeColor = () => setThemeIcon(!useLightTheme);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav id="navbar">
      <ul className="nb-items">
        {showMenu && (
          <li id="navbar-hidden-menu" className="nb-item">
            <ul className="nb-group">
              <li className="nb-g-item nb-selected">
                <a className="nb-link" href="#about-me">
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
        )}
        <li className="nb-item">
          <ul className="nb-group">
            {showToggleMenuBtn && (
              <li id="navbar-toggle" className="nb-g-item">
                <button
                  id="navbar-toggle-btn"
                  type="button"
                  aria-label="toggle navbar"
                  onClick={toggleMenu}
                >
                  <RiMenuFill />
                </button>
              </li>
            )}
            <li className="nb-g-item">
              <button
                type="button"
                aria-label="change color theme"
                onClick={changeThemeColor}
              >
                {useLightTheme ? <RiMoonLine /> : <RiSunFill />}
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
