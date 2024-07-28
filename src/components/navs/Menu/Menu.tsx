import useLanguage from '@hooks/language';
import useMenu from '@hooks/menu';
import Translations from '@services/data';

function Menu(): JSX.Element {
  const { menu } = useMenu();
  const { language } = useLanguage();

  const linkNames = Translations.get(language)!.navbar.map((link, index) => {
    return (
      <li
        key={index}
        className={`nb-g-item${index === 0 ? ' nb-selected' : ''}`}
      >
        <a className="nb-link" href={`#${link.href}`}>
          {link.name}
        </a>
      </li>
    );
  });

  return <>{menu.showMenu && <ul className="nb-group">{linkNames}</ul>}</>;
}
export default Menu;
