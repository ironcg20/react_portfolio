const CTestimonial = () => {
  return (
    <section id='testimonials' className='testimonials section-bg'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Testimonials</h2>
        </div>

        <div
          className='testimonials-slider swiper frame-0f1b28 p-4 rounded-4'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-1.jpg'
                    className='testimonial-img'
                    alt=''
                  />
                  <h3>Liam Benjamin Foster</h3>
                  <h4>CEO &amp; Founder</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    We were fortunate to have Hiruto volunteer his programming
                    expertise for our organization. His passion for our cause
                    translated into a robust and user-friendly system that
                    streamlined our operations. Grateful for his contribution.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-2.jpg'
                    className='testimonial-img'
                    alt=''
                  />
                  <h3>Mia Evelyn Clark</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    Working with Hiruto was a game-changer for our online store.
                    The custom features and seamless user experience have
                    significantly boosted our sales. The project was delivered
                    on time and exceeded our expectations.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-3.jpg'
                    className='testimonial-img'
                    alt=''
                  />
                  <h3>Zoey Isabella Foster</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    Collaborating with Hiruto on our team project was a
                    pleasure. Their coding expertise and commitment to quality
                    were evident in every line of code. Their problem-solving
                    skills were invaluable in overcoming challenges.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-4.jpg'
                    className='testimonial-img'
                    alt=''
                  />
                  <h3>Aiden Nathaniel Clarke</h3>
                  <h4>CEO</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>I
                    hired Hiruto to build our Minimum Viable Product, and I
                    couldn't be happier. Their rapid development skills and
                    attention to detail got us from concept to launch faster
                    than I thought possible. A true professional.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-5.jpg'
                    className='testimonial-img'
                    alt=''
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    Hiruto seamlessly translated our design concepts into a
                    responsive and visually stunning website. His collaboration
                    skills and ability to incorporate feedback made the
                    development process a breeze. A true craftsman.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section>
  );
};

export default CTestimonial;
