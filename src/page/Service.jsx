import BackToTop from "../composent/BackToTop";

const Service = () => {
  return (
    <div>
      <main>
        <div className="image"></div>

        <BackToTop/>

        <section className="container py-3">
        <div className="services">
          <h1 className="text-uppercase text-center pt-5">mon offre de services</h1>
          <p className="text-center">
            Voici les prestation sur lesquelles je peux intervenir.
          </p>
          <div className="barre"><div className="barre_bleu bg-primary"></div></div>

          <div className="all_cartes py-5 m-1 row">
            <div className="col-md-3 carte mt-2 p-3">
              <i className="fa-solid fa-display text-primary icons"></i>
              <h2 className="text-center text-uppercase">ux design</h2>
              <p className="text-center">
                L'<strong>UX Design</strong> est une méthode de conception centré sur l'utilisateur.
                Son but est d'offrir une expérience de navigation optimal à l'interaute.
              </p>
            </div>

            <div className="col-md-3 carte mt-2 p-3">
              <i className="fa-solid fa-file-code text-primary icons"></i>
              <h2 className="text-center text-uppercase">développement web</h2>
              <p className="text-center">
                Le<strong> développement de site web</strong> repose sur l'utilisation des langages
                HTML, CSS, JavaScript et PHP.
              </p>
            </div>

            <div className="col-md-3 carte mt-2 p-3">
              <i className="fa-solid fa-magnifying-glass-dollar text-primary icons"></i>
              <h2 className="text-center text-uppercase">référencement</h2>
              <p className="text-center">
                Le<strong> référencement naturel d'un site</strong>, aussi appelé SEO, consiste à
                mettre des techniques en oeuvre pour améliorer sa position dans les résultats des
                moteurs de recherche.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Service;
