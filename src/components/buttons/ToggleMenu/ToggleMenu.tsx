import useMenu from '@hooks/menu';
import { RiMenuFill } from '@remixicon/react';

function ToggleMenuButton(): JSX.Element {
  const { menu, setMenu } = useMenu();
  const { showMenu, isCollapsed } = menu;

  return (
    <button
      id="navbar-toggle-btn"
      type="button"
      aria-label="toggle navbar"
      onClick={() => setMenu({ showMenu: !showMenu, isCollapsed })}
    >
      <RiMenuFill />
    </button>
  );
}

export default ToggleMenuButton;
