import imgB from './assets/img/imgBanner.jpg'
import imgBox from './assets/img/img2.webp'
import perfil from './assets/img/fotoPerfiil.png'
import fundoImg from './assets/img/fundoImg.png'

import { 
  FaGitSquare, 
  FaGithubSquare,  
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaArrowRight,
  FaPhoneSquare,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
  FaBootstrap,
  FaSass,
  FaChevronCircleUp
} from "react-icons/fa";
import { 
  GoLocation, GoMail } from "react-icons/go";
import './css/style.css'



function App() {
  return (
    <div className="App">
     <div className="containerPage">
      <header className="menu">
        <div className="containerTopMenu">
          <div className="logo">
            <div className="line">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h1 className='titleLogo'>Cod</h1>
            <h1 className='title2'>r</h1>
            
          </div>
          <nav>
            <ul className='navigation'>
              <li>
                <a className='textMenu' href="#">Sobre me</a>
              </li>
              <li>
                <a className='textMenu' href="#">Serviços</a>
              </li>
              <li>
                <a className='textMenu' href="#">Portifolio</a>
              </li>
              <li>
                <a className='textMenu' href="#">Testemunhas</a>
              </li>
              
              <li>
                <a className='textMenu' href="#">Contato</a>
              </li>
              <li>
                <a className='textMenu' href="#">Hire Me!</a>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>
      <main>
        <div className="main">
          <div className="texHome">
            <h1 className='nameDev'>Me chamo Felipe Fernandes</h1>
            <p className='nameProfessional'>A Professional Web Developer and UI/UX Desingner</p>
            <div className="btnHome">
              <a className='buttonHome' href="https://drive.google.com/file/d/1mSShXzYGRbRx8qJiS2ComooY_MZTelt5/view?usp=sharing" target="blank_">
                <button>Download CV</button>
              </a>
              <a className='buttonHome' href="#">
                <button>My Work</button>
              </a>
            </div>
          </div>
          <div className="logoImg">
            <img className='fundoImg' src={fundoImg} alt="" />
            <img className='imgPerfil' src={perfil} alt="" />
          </div>
        </div>
      </main>
      <section>
        <div className="containerSobre">
          <img src={imgBox} alt="" />
        </div>
        <div className="infoSobre">
          <h1 className='titleSobre'>Leia sobre minha história de luta de vida</h1>
          <p className='textSobre'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="containerSkill">
            <div className="skillTitle">
              <span>Wordpress</span>
              <span className="percentual">80%</span>
              <div className="barra">
                <span className="barraPercentual"></span>
              </div>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
              <span className="percentual">80%</span>
              <div className="barra">
                <span className="barraPercentual p1"></span>
              </div>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
              <span className="percentual">80%</span>
              <div className="barra">
                <span className="barraPercentual"></span>
              </div>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
              <span className="percentual">80%</span>
              <div className="barra">
                <span className="barraPercentual"></span>
              </div>
            </div>
          </div>
          <div className="btnSobre">
            <a className='buttonHome' href="#">
              <button>Hire Me!</button>
            </a>
            <a className='buttonHome' href="#">
              <button>Sobre Me</button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="containerBox">
          <h1 className='titleService'>Meus Serviços</h1>
          <p className='textService'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="linkServices">
            <ul className="listaServices">
              <li className="btnItem">
                <a href="https://git-scm.com/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaGitSquare/></span>
                    </div>
                    <span className="textBtnService">Git</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://github.com/ffernandescs" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaGithubSquare/></span>
                    </div>
                    <span className="textBtnService">GitHub</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaHtml5/></span>
                    </div>
                    <span className="textBtnService">HTML5</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaCss3Alt/></span>
                    </div>
                    <span className="textBtnService">CSS3</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaJsSquare/></span>
                    </div>
                    <span className="textBtnService">Java Script</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://pt-br.reactjs.org/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaReact/></span>
                    </div>
                    <span className="textBtnService">ReactJS</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://reactnative.dev/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaReact/></span>
                    </div>
                    <span className="textBtnService">React Native</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://nodejs.org/en/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaNodeJs/></span>
                    </div>
                    <span className="textBtnService">NodeJs</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://firebase.google.com/?gclsrc=ds&gclid=COKD-LXFrvgCFW7HxQodQ3wIkQ&gclsrc=ds" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">Firebase</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://getbootstrap.com/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">Bootstrap</span>
                  </div>
                  <span className="icoRigth"><FaBootstrap/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://sass-lang.com/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">Sass</span>
                  </div>
                  <span className="icoRigth"><FaSass/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://www.mongodb.com/"s target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">MongoDb</span>
                  </div>
                  <span className="icoRigth"><FaSass/></span>
                </a>
              </li>
              <li className="btnItem">
                <a href="https://nextjs.org/" target="blank_">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">NextJs</span>
                  </div>
                  <span className="icoRigth"><FaSass/></span>
                </a>
              </li>
             
            </ul>
            <button className="btnMaisService">Ver Mais</button>
            <div className="cardInfo">
              <div className="cardItem">
                <h2>50+</h2>
                <p>Clientes</p>
              </div>
              <div className="cardItem">
                <h2>68</h2>
                <p>Projetos</p>
              </div>
              <div className="cardItem">
                <h2>30</h2>
                <p>Awards</p>
              </div>
              <div className="cardItem">
                <h2>06</h2>
                <p>Anos de Experiencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="containerBox">
          <h1 className='titleService'>Meus Serviços</h1>  
          <p className='textService'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="sliderProject">
            <ul>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NodeJs</li>
              <li>React Native</li>
              <li>NextJs</li>
              <li>Firebase</li>
            </ul>
            <div className="boxPortifolio">
              <div className="itemPortifolio">
                <a href="https://git-scm.com/" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
                <a href="https://github.com/ffernandescs" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
                <a href="" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
                <a href="" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
                <a href="" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
                <a href="" target="blank_">
                  <img src="https://github.com/ffernandescs/Clone-NetFlix-DIO/raw/main/src/img/image.png" alt="" />
                </a>
              </div>
              <div className="itemPortifolio">
                
              </div>
            </div>
  
          </div>  
        </div>
      </section>
      
     </div>
     <footer>
      <div className="downloadCV">
        <div className="textBtn">
          <h1>Baixe o CV</h1>
          <a href="https://drive.google.com/file/d/1mSShXzYGRbRx8qJiS2ComooY_MZTelt5/view?usp=sharing" target="blank_">
            <button>Download</button>
          </a>
        </div>
        <img src={imgB} alt="" />
      </div>
        <div className="location">

        </div>
        <div className="contatoSocial">

        </div>
      </footer>
      <footer className='tagFooter'>
        <div className='contFooter'>
        <div className='footer'>
          <div className="boxFooter">
            <h1>Contatos</h1>
            <p>Let's make something new, different and more meaningfulor make thing more visual or conceptual?</p>
            <div className="itemContact">
              <span><FaPhoneSquare/></span>
              <div className="textContact">
                <p>Call Me</p>
                <a href="https://api.whatsapp.com/send?phone=5581982294247" target="blank_">
                  <h1>+55 9 8229-4247</h1>
                </a>
              </div>
            </div>
            <div className="itemContact">
              <span><GoMail/></span>
              <div className="textContact">
                <p>Email</p>
                <h1>f.fernandescs@gmail.com</h1>
              </div>
            </div>
            <div className="itemContact">
              <span><GoLocation/></span>
              <div className="textContact">
                <p>Endereço</p>
                <h1>Avenida Barão de Bonito, 462 - Recife - PE - 50740-080</h1>
              </div>
            </div>
            <div className="socialRede">
              <a href="https://github.com/ffernandescs" target="blank_">
                <span><FaGithubSquare/></span>
              </a>
              <a href="https://www.instagram.com/f.fernandes.dev/" target="blank_">
                <span><FaInstagram/></span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5581982294247" target="blank_">
                <span><FaWhatsappSquare/></span>
              </a>
              <a href="https://www.linkedin.com/in/felipefcs/" target="blank_">
                <span><FaLinkedin/></span>
              </a>
            </div>
            </div>
            <div className="boxFooter">

            </div>
          </div>
          <form className='formContact' action="">
            <h1>Formulario para contato.</h1>
            <label htmlFor="">
              <input type="text" placeholder='Nome' />
              <input type="text" placeholder='Email' />
            </label>
            <label htmlFor="">
              <input type="text" placeholder='Contato' />
              <input type="text" placeholder='Assunto' />
            </label>
            <label htmlFor="">
              <textarea name="" id="" cols="30" rows="6" placeholder='Digite sua Menssagem'></textarea>
            </label>
            <button>Enviar</button>
          </form>
          <div className="copyright">
            <span>Copyright ©2022Coder. All Rights Reserved.</span>
          </div>
        </div>
        
        
      </footer>
      <div className="btnTop">
        <FaChevronCircleUp/>
      </div>
      <div className="menuHamburger">
        <span className="line2 one"></span>
        <span className="line2 two"></span>
        <span className="line2 tre"></span>
      </div>
    </div>
    
    
  );
  
}

export default App;
