import React from 'react';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
import "./css/style.css";
import "./css/home.css"

import Home from "./page/Home"
import Services from "./page/Services"
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
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Sevices">service</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Realisation">réalisation</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/Blog">blog</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className={({ isActive }) => (isActive ? 'text-light  nav-link ' : 'text-secondary nav-link')} to="/contact">me contacter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Realisation' element={<Realisation/>}></Route>
        <Route path='/Mention' element={<Mentions/>}></Route>
      </Routes>
    </header>

    <footer  >
      <div class="container">
        <div class="row">
      <address class="col-md-6 col-lg-3 py-3 px-3" >
        <p class="name">John Doe</p>
        <p>40 Rue Laure Diebold </p>
       <p> 69009 Lyon, France </p>
       <p> Téléphone : 06 20 30 40 50 </p>
      <div class="icons px-3">
        <a href="https://codesandbox.io/p/sandbox/github-johndoe-dt6zq2?file=%2Fsrc%2Fstyles.css%3A11%2C24" target="_blank"><i class="fa-brands fa-github icon-48" ></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-square-twitter icon-48"></i></a>
        <a href="https://fr.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin icon-48"></i></a>
      </div>
    </address>

      <div class="liens_utiles col-md-6 col-lg-3 px-3 py-3">
        <h5>Liens utiles</h5>
        <div class="lien_accueil">
          <Link class="icon-link "  to="/"><i class="fa-solid fa-chevron-right text-primary"></i>Accueil</Link>
        </div>

        <div class="lien_apropos">
          <Link class="icon-link "   to="/#apropos"><i class="fa-solid fa-chevron-right text-primary"></i>À propos</Link>
        </div>
        
        <div class="lien_services">
          <Link class="icon-link "    to="/Services"><i class="fa-solid fa-chevron-right text-primary"></i>Services</Link>
        </div>

        <div class="lien_contact">
          <Link class="icon-link "   to="/Contact"><i class="fa-solid fa-chevron-right text-primary"></i>Me contacter</Link>
        </div>

        <div class="lien_mentions">
          <Link class="icon-link "   to="/Mentions"><i class="fa-solid fa-chevron-right text-primary"></i>Mentions légales</Link>
        </div>
      </div>

      <div class="footer_realisation col-md-6 col-lg-3 py-3 px-3">
        <h5>Mes dernières réalisations</h5>
        <div class="lien_mentions">
          <Link class="icon-link "   to="./realisation.html#realisation1"><i class="fa-solid fa-chevron-right text-primary"></i>Fresh food</Link>
        </div>

        <div class="lien_mentions">
          <Link class="icon-link "   to="./realisation.html#realisation2"><i class="fa-solid fa-chevron-right text-primary"></i>Restaurant Akira</Link>
        </div>

        <div class="lien_mentions">
          <Link class="icon-link "   to="./realisation.html#realisation3"><i class="fa-solid fa-chevron-right text-primary"></i>Espace bien-être</Link>
        </div>
      </div>

      <div class="last_articles col-md-6 col-lg-3 py-3 pb-4 px-3">
        <h5>Mes derniers articles</h5>

        <div class="lien_mentions">
          <Link class="icon-link "   to="./blog.html#blog1"><i class="fa-solid fa-chevron-right text-primary"></i>Coder son site en HTML/CSS</Link>
        </div>

        <div class="lien_mentions">
          <Link class="icon-link "   to="./blog.html#blog2"><i class="fa-solid fa-chevron-right text-primary"></i>Vendre ses produits sur le web</Link>
        </div>

         <div class="lien_mentions">
          <Link class="icon-link "   to="./blog.html#blog3"><i class="fa-solid fa-chevron-right text-primary"></i>Se positionner sur Google</Link>
        </div>
      </div>

          
        </div>
      </div><div class="copyright">
            <p class="copy text-white text-center p-2"><small><i class="fa-regular fa-copyright"></i> Designed by John Doe</small></p>
          </div>
    </footer>
    </div>
  );
}


