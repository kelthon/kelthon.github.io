import useMenu from "@hooks/menu";

function Menu(): JSX.Element {
  const { menu } = useMenu();
  
  return (
    <>
      {menu.showMenu && (
        <ul className="nb-group">
          <li className="nb-g-item nb-selected">
            <a className="nb-link" href="#about-me">
              about me
            </a>
          </li>
          <li className="nb-g-item">
            <a className="nb-link" href="#my-projects">
              projects
            </a>
          </li>
          <li className="nb-g-item">
            <a className="nb-link" href="#contact-me">
              contact
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
export default Menu;
