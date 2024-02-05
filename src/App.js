import React from 'react';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
// css
import "./css/style.css";
import "./css/home.css";
import "./css/service.css";
import "./css/realisation.css";
import "./css/mentions.css";
import "./css/blog.css";
import "./css/contact.css"

import Home from "./page/Home"
import Service from "./page/Service"
import Contact from "./page/Contact"
import Blog from "./page/Blog"
import Realisation from "./page/Realisation"
import Mentions from "./page/Mentions"



export default function App() {
  return (
    <div className="App">
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top pt-0 pb-0">
        <div className="container-fluid text-uppercase p-3">
          <NavLink className="navbar-brand text-white  " to="/">john doe</NavLink>
          <button
            className="navbar-toggler custom-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mx-2">
              <li className="nav-item mx-1">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')}
 to="/">Accueil</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Service">service</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Realisation">réalisation</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Blog">blog</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Contact">me contacter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Realisation' element={<Realisation/>}></Route>
        <Route path='/Mentions' element={<Mentions/>}></Route>
      </Routes>
    </header>

    <footer  >
      <div className="container">
        <div className="row">
      <address className="col-md-6 col-lg-3 py-3 px-3" >
        <p className="name">John Doe</p>
        <p>40 Rue Laure Diebold </p>
       <p> 69009 Lyon, France </p>
       <p> Téléphone : 06 20 30 40 50 </p>
      <div className="icons px-3">
        <a href="https://codesandbox.io/p/sandbox/github-johndoe-dt6zq2?file=%2Fsrc%2Fstyles.css%3A11%2C24" target="_blank"><i className="fa-brands fa-github icon-48" ></i></a>
        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-twitter icon-48"></i></a>
        <a href="https://fr.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin icon-48"></i></a>
      </div>
    </address>

      <div className="liens_utiles col-md-6 col-lg-3 px-3 py-3">
        <h5>Liens utiles</h5>
        <div className="lien_accueil">
          <Link className="icon-link "  to="/"><i className="fa-solid fa-chevron-right text-primary"></i>Accueil</Link>
        </div>

        <div className="lien_apropos">
          <Link className="icon-link "   to="/#apropos"><i className="fa-solid fa-chevron-right text-primary"></i>À propos</Link>
        </div>
        
        <div className="lien_services">
          <Link className="icon-link "    to="/Service"><i className="fa-solid fa-chevron-right text-primary"></i>Services</Link>
        </div>

        <div className="lien_contact">
          <Link className="icon-link "   to="/Contact"><i className="fa-solid fa-chevron-right text-primary"></i>Me contacter</Link>
        </div>

        <div className="lien_mentions">
          <Link className="icon-link "   to="/Mentions"><i className="fa-solid fa-chevron-right text-primary"></i>Mentions légales</Link>
        </div>
      </div>

      <div className="footer_realisation col-md-6 col-lg-3 py-3 px-3">
        <h5>Mes dernières réalisations</h5>
        <div className="lien_mentions">
          <Link className="icon-link "   to="/realisation#realisation1"><i className="fa-solid fa-chevron-right text-primary"></i>Fresh food</Link>
        </div>

        <div className="lien_mentions">
          <Link className="icon-link "   to="/realisation#realisation2"><i className="fa-solid fa-chevron-right text-primary"></i>Restaurant Akira</Link>
        </div>

        <div className="lien_mentions">
          <Link className="icon-link "   to="/realisation#realisation3"><i className="fa-solid fa-chevron-right text-primary"></i>Espace bien-être</Link>
        </div>
      </div>

      <div className="last_articles col-md-6 col-lg-3 py-3 pb-4 px-3">
        <h5>Mes derniers articles</h5>

        <div className="lien_mentions">
          <Link className="icon-link "   to="/Blog#blog1"><i className="fa-solid fa-chevron-right text-primary"></i>Coder son site en HTML/CSS</Link>
        </div>

        <div className="lien_mentions">
          <Link className="icon-link "   to="/Blog#blog2"><i className="fa-solid fa-chevron-right text-primary"></i>Vendre ses produits sur le web</Link>
        </div>

         <div className="lien_mentions">
          <Link className="icon-link "   to="/Blog#blog3"><i className="fa-solid fa-chevron-right text-primary"></i>Se positionner sur Google</Link>
        </div>
      </div>

          
        </div>
      </div><div className="copyright">
            <p className="copy text-white text-center p-2"><small><i className="fa-regular fa-copyright"></i> Designed by John Doe</small></p>
          </div>
    </footer>
    </div>
  );
}


