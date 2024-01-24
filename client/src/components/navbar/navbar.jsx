import "./navbar.css";

const MyNavbar = () => {
  return (
    <div className="navbar-container p-3">
      <div className="rounded navbar" id="main-navbar">
        <div className="brand mr-auto">ChatApp</div>
        <div className="nav mx-auto">
          <div className="nav-link" href="#hello">
            Hello Ayush
          </div>
        </div>
        <div>
          <div className="nav-link" href="#logout">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;