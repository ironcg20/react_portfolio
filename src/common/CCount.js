const CCount = () => {
  return (
    <>
      <section id='counts' class='counts'>
        <div class='container'>
          <div class='row'>
            <div
              class='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start'
              data-aos='fade-right'
              data-aos-delay='150'
            >
              <img src='assets/img/counts-img.svg' alt='' class='img-fluid' />
            </div>

            <div
              class='col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <div class='content d-flex flex-column justify-content-center'>
                <div class='row'>
                  <div class='col-md-6 d-md-flex align-items-md-stretch'>
                    <div class='count-box'>
                      <i class='bi bi-emoji-smile'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='50'
                        data-purecounter-duration='1'
                        class='purecounter'
                      ></span>
                      <p>
                        <strong>Happy Clients</strong>
                      </p>
                    </div>
                  </div>

                  <div class='col-md-6 d-md-flex align-items-md-stretch'>
                    <div class='count-box'>
                      <i class='bi bi-journal-richtext'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='43'
                        data-purecounter-duration='1'
                        class='purecounter'
                      ></span>
                      <p>
                        <strong>Projects</strong>
                      </p>
                    </div>
                  </div>

                  <div class='col-md-6 d-md-flex align-items-md-stretch'>
                    <div class='count-box'>
                      <i class='bi bi-clock'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='6'
                        data-purecounter-duration='1'
                        class='purecounter'
                      ></span>
                      <p>
                        <strong>Years of experience</strong>
                      </p>
                    </div>
                  </div>

                  <div class='col-md-6 d-md-flex align-items-md-stretch'>
                    <div class='count-box'>
                      <i class='bi bi-award'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='3'
                        data-purecounter-duration='1'
                        class='purecounter'
                      ></span>
                      <p>
                        <strong>Awards</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CCount;
