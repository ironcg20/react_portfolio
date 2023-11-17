const CHeader = () => {
  return (
    <>
      <header
        id='header'
        class='fixed-top position-flex d-flex align-items-center'
      >
        <div class='container d-flex align-items-center justify-content-between'>
          <div class='logo'>
            <a href='index.html'>
              <img src='./assets/img/logo.png'></img>
              <span class='logo-text'>Haruto Mizuki</span>
            </a>
          </div>

          <nav id='navbar' class='navbar'>
            <ul>
              <li>
                <a class='nav-link scrollto active' href='#hero'>
                  Home
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#projects'>
                  Projects
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#Skills'>
                  Skills
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a class='getstarted scrollto' href='#about'>
                  Get Started
                </a>
              </li>
            </ul>
            <i class='bi bi-list mobile-nav-toggle'></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CHeader;
