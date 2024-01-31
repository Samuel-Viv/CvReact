import JohnDoe from '../image/john_doe.jpg'


const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div class="accueil " id="accueil">
            <div class="opacity"></div>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <a href="#apropos" class="btn btn-primary">
              En savoir plus
            </a>
          </div>
        </section>

        <section class="container py-3 ">
        <div class="carte row my-3 mx-2 p-5 ">
          <div class="apropos_presentation col-md-6 ">
            <div class="titre_apropos  " id="apropos">
              <h3>À propos</h3>
            </div>
          <div class="paragraphe">
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
        <div class="col-md-6">
          <div class="photo">
            <img src={JohnDoe} alt="photo de John Doe" ></img>
          </div>

          <div class="competence ">
            <h4 class="text-title">Mes compétences</h4>
              <div class="html pt-2">
                <p>HTML5 90%</p>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div class="progress-bar bg-danger html5"></div>
                </div>
              </div>

            
              <div class="css pt-2">
                <p>CSS3 80%</p>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div class="progress-bar bg-info css3"></div>
                </div>
              </div>
        
              <div class="javascript pt-2">
                <p>JAVASCRIPT 70%</p>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div class="progress-bar bg-warning js"></div>
                </div>
              </div>

              <div class="php pt-2">
                <p>PHP 60%</p>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div class="progress-bar bg-success php-bar" ></div>
                </div>
              </div>

              <div class="react pt-2">
                <p>REACT 50%</p>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 
                  <div class="progress-bar bg-primary react-bar " ></div>
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
