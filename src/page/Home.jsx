import JohnDoe from '../image/john_doe.jpg'


const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div className="accueil " id="accueil">
            <div className="opacity"></div>
            <h1 className='titre-accueil'>Bonjour, je suis John Doe</h1>
            <h2 className='h2-accueil'>Développeur web full stack</h2>
            <a href="#apropos" class="btn btn-primary">
              En savoir plus
            </a>
          </div>
        </section>

        <section className="container py-3 ">
        <div className="carte row my-3 mx-2 p-5 ">
          <div className="apropos_presentation col-md-6">
            <div className="titre_apropos  " id="apropos">
              <h3>À propos</h3>
            </div>
          <div className="paragraphe">
            <p>
              Passionné par l'informatique et les nouvelles technologie, j'ai suivi une formation
              d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
              j'ai pu acquérir des bases solides pour travailler dans le domaine du
              <strong>développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d'un alternance au sein d'une agence digitale pour
              consolider ma formation de <strong>développeur web full stack</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que j'écris et je respecte
              les bonnes pratiques du web.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="photo">
            <img src={JohnDoe} alt="John Doe" ></img>
          </div>

          <div className="competence ">
            <h4 className="text-title">Mes compétences</h4>
              <div className="html pt-2">
                <p>HTML5 90%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div className="progress-bar bg-danger html5"></div>
                </div>
              </div>

            
              <div className="css pt-2">
                <p>CSS3 80%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div className="progress-bar bg-info css3"></div>
                </div>
              </div>
        
              <div className="javascript pt-2">
                <p>JAVASCRIPT 70%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div className="progress-bar bg-warning js"></div>
                </div>
              </div>

              <div className="php pt-2">
                <p>PHP 60%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div className="progress-bar bg-success php-bar" ></div>
                </div>
              </div>

              <div className="react pt-2">
                <p>REACT 50%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div className="progress-bar bg-primary react-bar " ></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Home;
