const CHero = () => {
  return (
    <>
      <section id='hero' class='d-flex align-items-center'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up' class='box-glow p-4'>
                Haruto Mizuki
              </h1>
              <h2 data-aos='fade-up' data-aos-delay='400'>
                I am working as a full-stack developer.
              </h2>
              <div data-aos='fade-up' data-aos-delay='800'>
                <a href='#about' class='scrollto btn-glass'>
                  More
                </a>
              </div>
            </div>
            <div
              class='col-lg-6 order-1 order-lg-2 hero-img'
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <img
                src='assets/img/full-stack.webp'
                class='img-fluid animated rounded-4'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CHero;
