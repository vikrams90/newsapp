import "./Nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='nav bg-dark'>
    <div className='container-fluid'>
      <div className='container navbar'>
        <div className='navbar-brand'>
          <Link
            className='navbar-text text-decoration-none text-white fs-2 nav-heading'
            to="/"
          >
            Tehlka News
          </Link>
        </div>
        <div className='nav-item d-flex align-items-center gap-3'>
          <a className='nav-link' href=''>
            <svg
              className='login-logo'
              xmlns='http://www.w3.org/2000/svg'
              width='37'
              height='37'
              viewBox='0 0 37 37'
              fill='white'
            >
              <path d='M18.284 0C13.2559 0 9.14199 5.11951 9.14199 11.4275C9.14199 17.7355 13.2559 22.855 18.284 22.855C23.3121 22.855 27.426 17.7355 27.426 11.4275C27.426 5.11951 23.3121 0 18.284 0ZM8.7306 22.855C3.88535 23.0835 0 27.0603 0 31.997V36.568H36.568V31.997C36.568 27.0603 32.7283 23.0835 27.8374 22.855C25.369 25.6433 21.9865 27.426 18.284 27.426C14.5815 27.426 11.1989 25.6433 8.7306 22.855Z' />
            </svg>
          </a>
          <Link className='nav-link' to="/fav" >
                        <svg
              className='fav-logo'
              xmlns='http://www.w3.org/2000/svg'
              width='46'
              height='39'
              viewBox='0 0 46 39'
            >
              <path d='M11.3055 0C8.19651 0 5.42666 1.30014 3.33513 3.33513C1.30014 5.37013 0 8.13999 0 11.3055C0 14.4146 1.30014 17.1844 3.33513 19.2759L22.6111 38.5519L41.887 19.2759C43.922 17.2409 45.2221 14.4711 45.2221 11.3055C45.2221 8.19651 43.922 5.42666 41.887 3.33513C39.852 1.30014 37.0822 0 33.9166 0C30.8076 0 28.0377 1.30014 25.9462 3.33513C23.9112 5.37013 22.6111 8.13999 22.6111 11.3055C22.6111 8.19651 21.3109 5.42666 19.2759 3.33513C17.2409 1.30014 14.4711 0 11.3055 0Z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
