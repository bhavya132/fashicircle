import Link from "next/link";
const Header = () => {
    return (
        
        <nav className="header">
            <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
               
            
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          Fashicircle
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
            <Link href="/dashboard">
              <a class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg> */}
                Home
              </a>
              </Link>
            </li>
            <li>
            <Link href="/upload">
              <a class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg> */}
                Upload your Product
              </a>
              </Link>
            </li>
            <li>
            <Link href="/order_history">
              <a class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg> */}
                Products
              </a>
              </Link>
            </li>
            <li>
            <Link href="/bid_history">
              <a  class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg> */}
                Bid History
              </a>
              </Link>
            </li>
            <li>
            <Link href="/profile">
              <a class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg> */}
                Profile
              </a>
              </Link>
            </li>
            <li>
            <Link href="/logout">
              <a class="nav-link text-white">
                {/* <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg> */}
                Logout
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
        
        </nav>
    );
};
export default Header;