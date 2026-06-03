import { NavLink, Link } from "react-router";
import { useAuth } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">Iron Movies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto">
            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/search"><i className="fa fa-search" aria-hidden="true" /></NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/profile">{user.username}</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => logout()}><i className="fa fa-sign-out"></i></button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;