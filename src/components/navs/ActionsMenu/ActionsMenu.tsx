import ChangeThemeButton from '@components/buttons/ChangeTheme/ChangeTheme';
import ToggleMenuButton from '@components/buttons/ToggleMenu/ToggleMenu';
import ChangeLanguageButton from '@components/selects/SetLanguage/LanguageSelection';
import useMenu from '@hooks/menu';

function ActionsMenu(): JSX.Element {
  const { menu } = useMenu();

  return (
    <ul className="nb-group">
      <li id="navbar-toggle" className="nb-g-item">
        {menu.isCollapsed && <ToggleMenuButton />}
      </li>
      <li className="nb-g-item">
        <ChangeThemeButton />
      </li>
      <li className="nb-g-item">
        <ChangeLanguageButton />
      </li>
    </ul>
  );
}
export default ActionsMenu;
