import { MenuProvider } from '@hooks/menu';
import ActionsMenu from '@navs/ActionsMenu/ActionsMenu';
import Menu from '@navs/Menu/Menu';
import { WindowBreakSize } from '@utils/constants';
import { isWindowLessThan } from '@utils/functions';
import { MenuOptions } from '@utils/properties';
import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function Navbar(): JSX.Element {
  const windowMustBeBreak = useRef<boolean>(isWindowLessThan(WindowBreakSize));
  const [menu, setMenu] = useState<MenuOptions>({
    showMenu: !windowMustBeBreak.current,
    isCollapsed: windowMustBeBreak.current,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (
        (!windowMustBeBreak.current && isWindowLessThan(WindowBreakSize)) ||
        (windowMustBeBreak.current && !isWindowLessThan(WindowBreakSize))
      ) {
        windowMustBeBreak.current = isWindowLessThan(WindowBreakSize);

        setMenu({
          showMenu: !windowMustBeBreak.current,
          isCollapsed: windowMustBeBreak.current,
        });
      }
    });
  });

  return (
    <MenuProvider value={{ menu, setMenu }}>
      <nav id="navbar">
        <ul className="nb-items">
          <li id="navbar-hidden-menu" className="nb-item">
            <Menu />
          </li>
          <li className="nb-item">
            <ActionsMenu />
          </li>
        </ul>
      </nav>
    </MenuProvider>
  );
}

export default Navbar;
