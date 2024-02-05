import Code from "../image/code.jpg";
import Money from "../image/money.jpg";
import Ordi from "../image/ordi.jpg";
import Responsive from "../image/responsive.jpg";
import Seo from "../image/seo.jpg";
import Langage from "../image/langage.jpg";
import BackToTop from "../composent/BackToTop";

const Blog = () => {
  return (
    <div>
      <main>
        <div className="image"></div>
        <BackToTop className="back-to-top"/>
        <section className="section-blog pb-5">
          <div className="text-center p-5">
            <h1 className="text-uppercase">Blog</h1>
            <p className="para-titre">Retrouvez ici quelques articles sur le développement web.</p>
            <div className="barre pb-5">
              <div className="barre_bleu bg-primary"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 pt-2">
                <div className=" card" id="blog1">
                  <img src={Code} className="card-img-top" alt="Code HTML" />
                  <h2 className="card-title px-4 pt-3">Coder son site en HTML/CSS</h2>
                  <p className="px-4 ">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div className="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 22 août 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-2">
                <div className="card" id="blog2">
                  <img src={Money} className="card-img-top" alt="vendre ses produits sur le web" />
                  <h2 className="card-title px-4 pt-3">Vendre ses produits sur le web</h2>
                  <p className="px-4 ">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div className="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 20 août 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-2">
                <div className="card" id="blog3">
                  <img src={Ordi} className="card-img-top" alt="Un ordinateur" />
                  <h2 className="card-title px-4 pt-3">Se positionner sur google</h2>
                  <p className="px-4 ">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div className="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 1 août 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-2">
                <div className="card">
                  <img
                    src={Responsive}
                    className="card-img-top"
                    alt="Une tablette et un ordinateur"
                  />
                  <h2 className="card-title px-4 pt-3">Coder en responsive design</h2>
                  <p className="px-4 ">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div className="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 31 juillet 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-2">
                <div className="card">
                  <img src={Seo} className="card-img-top" alt="référencement SEO" />
                  <h2 className="card-title px-4 pt-3">Techniques de référencement</h2>
                  <p className="px-4 ">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div className="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 30 juillet 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 pt-2 ">
                <div className="card">
                  <img src={Langage} className="card-img-top" alt="Langage de développeur" />
                  <h2 className="card-title px-4 pt-3">Apprendre à coder</h2>
                  <p className="px-4">
                    Some quick example text to build on the card title and make un the bulk of the
                    card's content.
                  </p>
                  <div class="bouton-blog">
                    <a href="#" className="btn btn-primary mx-4 mb-2">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer pb-0">
                    <p>Publié le 12 juillet 2022</p>
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

export default Blog;
