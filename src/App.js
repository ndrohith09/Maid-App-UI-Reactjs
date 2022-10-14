import "./components/assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes from "./components/routes";
import logo from "./components/assets/images/logo_homie.png";
import { FiChevronsDown } from "react-icons/fi";
import Logo from './components/assets/images/logo.svg';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAVBAR */}
        <nav class="navbar navbar-light navbar-expand-md navigation-home">
          <div class="container">
            <a href="/">
              <img src={logo} alt="logo_homie" style={{ height: "40px" }} />
            </a>
            <button
              data-bs-toggle="collapse"
              class="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span class="visually-hidden">Toggle navigation</span>
              <span class="">
                <FiChevronsDown />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link home-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/service">
                    Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/book-now">
                    Book Now
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END OF NAVBAR */}

        <Routes />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
