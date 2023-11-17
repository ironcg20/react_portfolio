const CAbout = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>About Me</h2>
        </div>

        <div className='row content'>
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='150'>
            <p>I am working as a full-stack developer.</p>
            <ul>
              <li>
                <i className='ri-check-double-line'></i> Being a good developer
                is my dream.
              </li>
              <li>
                <i className='ri-check-double-line'></i> I can call myself a
                Full-stack Web Developer with more than 6 years of experience.
              </li>
              <li>
                <i className='ri-check-double-line'></i> I've done dozens of
                personal projects such as websites with both backend and
                frontend, PHP/Python scripts, automation apps, desktop
                applications, server setup (NGINX configuration, reverse proxy,
                load balancers), and coding challenges.
              </li>
            </ul>
          </div>
          <div
            className='col-lg-6 pt-4 pt-lg-0'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <p>
              To detail my past job experiences, I can say that I've generally
              taken freelance jobs related to Frontend development and
              automation bot coding. Currently working on multiple startups as a
              Full-stack Web Developer and generally using MERN stack to develop
              web apps. I've worked on a couple of start-ups including fields
              such as Web3, E-Commerce, etc.
            </p>
            <a href='#' className='btn-learn-more'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CAbout;
