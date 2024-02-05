import BackToTop from "../composent/BackToTop";

const Mentions = () => {
  return (
    <div>
      <main>
        <BackToTop/>
        <section className="pb-4">
          <div className="text-center pt-5">
            <h1 className="text-uppercase pt-5  pb-2" id="mentions">
              Mentions légales
            </h1>

            <div className="barre pb-5">
              <div className="barre_bleu bg-primary"></div>
            </div>
          </div>

          <div className="accordion mx-4 " id="accordions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <div className="inter-ligne pt-2">
                    <p>
                      <i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold
                    </p>
                    <p>69009 Lyon, France </p>
                    <p>
                      <i className="fa-solid fa-mobile-screen-button"></i><a href="tel:0620304050" className="lien-contact"> 06 20 30 40 50</a>
                    </p>
                    <p>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:john.doe@gmail.com" className="lien-contact">
                         john.doe@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="pb-1">Always Data</h3>
                  <div className="inter-ligne pt-2">
                    <p>91 rue du faubourg Daint Honoré </p>
                    <p>75008 Paris</p>
                    <p>
                      <i className="fa-solid fa-globe"></i>
                      <a href="https://www.alwaysdata.com/fr/" target="_blank" className="lien-contact">
                        www.alwaysdata.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Crédits
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h3>Crédits</h3>
                  <div className="inter-ligne pt-2">
                    <p>Site développé par John Doe, étudiant du CEF.</p>
                    <p>Les images libres de droit sont issues du site <a href="https://www.pixabay.com" target="_blank" className="lien-pixabay">Pixabay</a></p>
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

export default Mentions;
