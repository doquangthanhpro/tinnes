import "./App.css";

function App() {
  return (
    <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" type="text/css"/>
  <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
  <link href="http://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css"/>

      <body
        id="body"
        data-spy="scroll"
        data-target="#navigation"
        data-offset="30"
      >
        <div id="header" className="container-fluid d-flex">
          <div className="menu-overlay"></div>

          <div className="menu">
            <div className="toggler">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>

            <ul className="nav-content" id="navigation">
              <li>
                <a className="nav-link" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                >
                  CV
                </a>
                <div id="dropdown-menu">
                  <ul>
                    <li>
                      <a className="dropdown-item" href="#cv">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#experience">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#education">
                        Education
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#diplomas">
                        Diplomas
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="row align-items-center justify-content-center text-center">
            <div>
              <h1>Personal website</h1>
              <hr />
              <h4>Template</h4>
            </div>
          </div>
        </div>

        <div id="about" className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-12 picture">
                <img
                  src="https://www.atomix.com.au/media/2015/06/atomix_user31.png"
                  className="rounded-circle"
                  alt="picture"
                />
              </div>
              <div className="col-md-9 col-sm-12 offset-md-1">
                <h2>About</h2>
                <p>
                  Praesent vitae viverra augue. In pellentesque lorem aliquam
                  bibendum tristique. Maecenas sed nunc sit amet arcu lacinia
                  mattis. Donec justo enim, tristique vitae lorem sed, blandit
                  tincidunt nulla. Nunc arcu ligula, pellentesque et condimentum
                  sed, semper quis neque. Sed eget risus eget dolor mattis
                  finibus in ac orci. Donec vitae posuere quam, sed pretium
                  lacus. Nullam ut risus maximus, ultrices sapien vel, malesuada
                  magna. Maecenas finibus augue eget dictum mollis.
                </p>
                <br />
                <p>
                  Nunc consequat ullamcorper urna, quis dignissim quam semper
                  et. Phasellus pretium felis molestie nisi gravida, ac posuere
                  nisl auctor. Vestibulum malesuada, nisi at posuere mattis,
                  lectus nibh hendrerit quam, vel mattis nulla leo id sapien.
                  Morbi porttitor enim tortor, ut rutrum orci commodo in. Donec
                  pharetra nisi eu neque pharetra vulputate. Integer arcu sem,
                  pulvinar in congue sed, ornare in nibh. Sed faucibus efficitur
                  dui, et porttitor massa feugiat sit amet.
                </p>
                <br />
                <p>
                  Cras malesuada at purus sed efficitur. Donec non leo nulla.
                  Vestibulum sed imperdiet mauris. Mauris hendrerit turpis id
                  libero auctor, eu bibendum urna rhoncus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="cv">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                <h3>Skills</h3>
              </div>
              <div className="col-md-9 col-sm-12 offset-md-1">
                <div className="skills">
                  <h4>Programming languages</h4>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 85%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 60%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 55%"></div>
                    </div>
                  </div>
                </div>

                <div className="skills">
                  <h4>Frameworks</h4>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 90%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 45%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 68%"></div>
                    </div>
                  </div>
                </div>

                <div className="skills">
                  <h4>Languages</h4>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 100%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <h4>Name</h4>
                    <div className="progress">
                      <div className="progress-bar" Style="width: 55%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr id="experience" />

            <div className="row">
              <div className="col-md-2 col-sm-12">
                <h3>Experience</h3>
              </div>
              <div className="col-md-9 col-sm-12 offset-md-1">
                <div className="exp">
                  <div className="box">
                    <h4>Job</h4>
                    <h6>Company&emsp;&#8226;&emsp;Date</h6>
                    <p>Description</p>
                  </div>

                  <div className="box">
                    <h4>Job</h4>
                    <h6>Company&emsp;&#8226;&emsp;Date</h6>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="education" />

            <div className="row">
              <div className="col-md-2 col-sm-12">
                <h3>Education</h3>
              </div>
              <div className="col-md-9 col-sm-12 offset-md-1">
                <div className="box">
                  <h4>Name</h4>
                  <h6>School&emsp;&#8226;&emsp;Date</h6>
                  <p>Description</p>
                </div>

                <div className="box">
                  <h4>Name</h4>
                  <h6>School&emsp;&#8226;&emsp;Date</h6>
                  <p>Description</p>
                </div>
              </div>
            </div>

            <hr id="diplomas" />

            <div className="row">
              <div className="col-md-2 col-sm-12">
                <h3>Diplomas</h3>
              </div>
              <div className="col-md-9 col-sm-12 offset-md-1">
                <div className="box">
                  <h4>Name</h4>
                  <h6>School&emsp;&#8226;&emsp;Date</h6>
                  <p>Description</p>
                </div>

                <div className="box">
                  <h4>Name</h4>
                  <h6>School&emsp;&#8226;&emsp;Date</h6>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="portfolio">
          <h2>Latest projects</h2>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-0.3.5&s=a585a174501286c4b61c78f955265a08&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-0.3.5&s=a585a174501286c4b61c78f955265a08&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <img src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-0.3.5&s=a585a174501286c4b61c78f955265a08&auto=format&fit=crop&w=1950&q=80" />
                <div className="overlay">
                  <h3 className="project-title">Project name</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 left">
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="col-lg-8 offset-lg-1">
                <h4>Let's get in touch</h4>

                <form id="form" autocomplete="off" method="post" action="">
                  <div className="firstname">
                    <input id="firstname" type="text" name="firstname" />
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="firstname">
                      Firstname *
                    </label>
                  </div>

                  <div className="lastname">
                    <input id="lastname" type="text" name="lastname" />
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="name">
                      Lastname *
                    </label>
                  </div>

                  <div className="email">
                    <input id="email" type="email" name="email" />
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="email">
                      Email *
                    </label>
                  </div>

                  <div className="tel">
                    <input id="phone" type="tel" name="phone" />
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="phone">
                      Phone
                    </label>
                  </div>

                  <div className="subject">
                    <input id="subject" type="text" name="subject" />
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="subject">
                      Subject *
                    </label>
                  </div>

                  <div className="msg">
                    <textarea id="message" name="message"></textarea>
                    <span className="focus-border"></span>
                    <label className="label" htmlFor="message">
                      Message *
                    </label>
                  </div>

                  <div className="input-info">* required field</div>

                  <div className="btn-div">
                    <button type="submit" className="button btn-send">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-content">
            <div>
              <h4>Location</h4>
              <p>Somewhere</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>example@gmail.com</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>01 23 45 67 89</p>
            </div>

            <div>
              <h4>Social</h4>

              <a
                href="https://www.linkedin.com/in/GranaryCoder/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/GranaryCoder" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/GranaryCoder" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://codepen.io/GranaryCoder" target="_blank">
                <i className="fab fa-codepen"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
    </div>
  );
}

export default App;
