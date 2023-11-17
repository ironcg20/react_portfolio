const CContact = () => {
  return (
    <>
      <section id='contact' class='contact'>
        <div class='container'>
          <div class='section-title' data-aos='fade-up'>
            <h2>Contact Me</h2>
          </div>

          <div class='row'>
            <div
              class='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div class='contact-about'>
                <h3>Hiruto Mizuki</h3>
                <p>Now, let's build something amazing!</p>
                <div class='social-links'>
                  <a
                    href='#'
                    class='github'
                    data-bs-toggle='tooltip'
                    title='Github'
                  >
                    <i class='bi bi-github'></i>
                  </a>
                  <a
                    href='#'
                    class='discord'
                    data-bs-toggle='tooltip'
                    title='Discord'
                  >
                    <i class='bi bi-discord'></i>
                  </a>
                  <a
                    href='#'
                    class='telegram'
                    data-bs-toggle='tooltip'
                    title='Telegram'
                  >
                    <i class='bi bi-telegram'></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6 mt-4 mt-md-0'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div class='info'>
                <div>
                  <i class='ri-map-pin-line color-blue-purple'></i>
                  <p>
                    65 Water
                    <br />
                    AvenueBeresford, NB E8K 8J2
                  </p>
                </div>

                <div>
                  <i class='ri-mail-send-line'></i>
                  <p>ironcg20@gmail.com</p>
                </div>

                <div>
                  <i class='ri-phone-line'></i>
                  <p>+1 931 361 1910</p>
                </div>
              </div>
            </div>

            <div
              class='col-lg-5 col-md-12'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <form
                action='forms/contact.php'
                method='post'
                role='form'
                class='php-email-form'
              >
                <div class='form-group'>
                  <input
                    type='text'
                    name='name'
                    class='form-control rounded-3'
                    id='name'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='email'
                    class='form-control rounded-3'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control rounded-3'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div class='form-group'>
                  <textarea
                    class='form-control rounded-3'
                    name='message'
                    rows='5'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div class='my-3'>
                  <div class='loading'>Loading</div>
                  <div class='error-message'></div>
                  <div class='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CContact;
