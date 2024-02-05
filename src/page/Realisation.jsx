import Legumes from "../image/legumes.jpg"
import Sushi from "../image/sushi.jpg"
import Zen from "../image/bien-etre.jpg"
import BackToTop from "../composent/BackToTop"

const Realisation = () => {
    return(
        <div>
            <main>
            <div className="image"></div>
            <BackToTop/>
            <section className="py-5">
        <div className="text-center">
          <h1 className="text-uppercase">Portfolio</h1>
          <p className="para-titre">Voici quelques-unes de mes réalisation</p>
          <div className="barre pb-5"><div className="barre_bleu bg-primary"></div></div>
        </div>

        <div className="realisations container">
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="realisation1 card">
                <img src={Legumes} className="card-img-top" alt="panier de légumes"></img>
                <h2 className="card-title text-center pt-3">Fresh food</h2>
                <p className="card-text text-center px-5">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <div className="bouton">
                  <a href="#" className="btn btn-outline-primary m-3">Voir</a>
                </div>
                <div className="card-footer text-center pt-3">
                  <p>Site réalisé avec du PHP et MySQL</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 py-3">
              <div className="realisation2 card">
                <img src={Sushi} className="card-img-top" alt="sushi" ></img>
                <h2 className="card-title text-center pt-3">Restaurant Akira</h2>
                <p className="card-text text-center px-5">Réalisation d'un site vitrine.</p>
                <div className="bouton">
                  <a href="#" className="btn btn-outline-primary m-3">Voir</a>
                </div>
                <div className="card-footer text-center pt-3"><p>Site réalisé avec WordPress</p></div>
              </div>
            </div>

            <div className="col-md-4 py-3">
              <div className="realisation3 card">
                <img src={Zen} className="card-img-top" alt="bien-être" ></img>
                <h2 className="card-title text-center pt-3">Espace bien-être</h2>
                <p className="card-text text-center px-5">
                  Réalisation d'un site vitrine pour un praticien de bien-être.
                </p>
                <div className="bouton">
                  <a href="#" className="btn btn-outline-primary m-3">Voir</a>
                </div>
                <div className="card-footer text-center pt-3">
                  <p>Site réalisé avec du PHP et MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </main>
        </div>
    )
}

export default Realisation