import React from "react";

const CMoreProject = () => {
  return (
    <>
      <section id='more-projects' className='more-projects'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-stretch'>
              <div
                className='card'
                style={{
                  backgroundImage: "url('assets/img/more-projects-1.jpg')",
                }}
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href=''>Zapier</a>
                  </h5>
                  <p className='card-text'>
                    Zapier is an online automation tool that allows you to
                    connect various web applications and automate workflows
                    between them.
                  </p>
                  <div className='read-more'>
                    <a href='#'>
                      <i className='bi bi-arrow-right'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-stretch mt-4 mt-md-0'>
              <div
                className='card'
                style={{
                  backgroundImage: "url('assets/img/more-projects-2.jpg')",
                }}
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href=''>Ubey</a>
                  </h5>
                  <p className='card-text'>
                    Ubuy is an international e-commerce platform that has been
                    associated with using the MERN stack.
                  </p>
                  <div className='read-more'>
                    <a href='#'>
                      <i className='bi bi-arrow-right'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-stretch mt-4'>
              <div
                className='card'
                style={{
                  backgroundImage: "url('assets/img/more-projects-3.jpg')",
                }}
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href=''>Pizzahut</a>
                  </h5>
                  <p className='card-text'>
                    The Middle East branch of Pizza Hut has been reported to use
                    the MERN stack for its online ordering system.
                  </p>
                  <div className='read-more'>
                    <a href='#'>
                      <i className='bi bi-arrow-right'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-stretch mt-4'>
              <div
                className='card'
                style={{
                  backgroundImage: "url('assets/img/more-projects-4.jpg')",
                }}
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href=''>Inky Deals</a>
                  </h5>
                  <p className='card-text'>
                    Inky Deals, a design deals website, has been mentioned as a
                    MERN stack project.
                  </p>
                  <div className='read-more'>
                    <a href='#'>
                      <i className='bi bi-arrow-right'></i> Read More
                    </a>
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

export default CMoreProject;
