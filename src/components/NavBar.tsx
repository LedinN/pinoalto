import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <a href="#home" className="logo">Pino Alto 3</a>
        <div className="nav-links">
          <a href="#services">Pictures</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    )
}
export default NavBar;