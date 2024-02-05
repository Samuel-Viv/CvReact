import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [validMessageVisible, setValidMessageVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupération des valeurs des champs
    const nom = formRef.current.querySelector("#nom").value;
    const email = formRef.current.querySelector("#email").value;
    const telephone = formRef.current.querySelector("#telephone").value;
    const sujet = formRef.current.querySelector("#sujet").value;
    const message = formRef.current.querySelector("#message").value;

    // Vérification si les champs sont vides
    if (!nom || !email || !telephone || !sujet || !message) {
      setErrorMessageVisible(true);
      setValidMessageVisible(false);
    } else {
      setErrorMessageVisible(false);
      setValidMessageVisible(true);

      // Réinitialisation des champs
      formRef.current.reset();
    }
  };

  return (
    <div>
      <main>
        <section>
          <div className="image_bg">
            <div className="background_bleu py-5">
              <div className="contact container">
                <div className="blanc row text-center pt-5 px-5">
                  <div className="col-md-12">
                    <h1 className="text-uppercase pb-3" id="contact">
                      Me contacter
                    </h1>
                    <p>
                      Pour me contacter en vue d'un entretien ou d'une collaboration, merci de
                      remplir le formulaire de contact.
                    </p>
                    <div className="barre pb-5">
                      <div className="barre_bleu bg-primary"></div>
                    </div>
                  </div>

                  <div className="formulaire col-md-6 pb-2">
                    <div className="titre_formulaire">
                      <h2>Formulaire de contact</h2>
                    </div>

                    {/* Message d'erreur */}
                    {errorMessageVisible && (
                      <div className="my-2" id="error-message">
                        <div className="p-4">
                          <p className="text-red">
                            <i className="fa-solid fa-circle-xmark"></i> Tous les champs doivent
                            être remplis
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Message de validation */}
                    {validMessageVisible && (
                      <div className="my-2" id="valid-message">
                        <div className="p-4">
                          <p className="text-green">
                            <i className="fa-regular fa-thumbs-up"></i> Le formulaire a bien été
                            envoyé
                          </p>
                        </div>
                      </div>
                    )}

                    {/* formulaire   */}
                    <form action="#" method="post" ref={formRef}>
                      <input type="text" className="input my-1" id="nom" placeholder="Votre nom" />

                      <input
                        type="text"
                        className="input my-1"
                        id="email"
                        placeholder="Votre adresse mail"
                      />

                      <input
                        type="text"
                        className="input my-1"
                        id="telephone"
                        placeholder="Votre numéro de téléphone"
                      />

                      <input type="text" className="input my-1" id="sujet" placeholder="Sujet" />

                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="input my-1"
                        placeholder="Votre message"
                      ></textarea>

                      <button type="submit" className="btn btn-primary my-2">
                        Envoyer
                      </button>
                    </form>
                  </div>

                  <div className="bloc_coordonnees col-md-6 ">
                    <div className="titre_coordonnees">
                      <h2>Mes coordonnées</h2>
                    </div>

                    <div className="coordonnees text-start pt-3">
                      <p>
                        <i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold, 69009
                        <br />
                        Lyon, France
                      </p>
                      <p>
                        <i className="fa-solid fa-mobile-screen-button"></i> 06 20 30 40 50
                      </p>
                      {/* map  */}
                      <div className="map-responsive">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189863!2d4.798978899999992!3d45.77866200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1706197654327!5m2!1sfr!2sfr"
                          width="600"
                          height="450"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
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

export default Contact;
