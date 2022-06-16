import imgB from './assets/img/imgBanner.jpg'
import imgBox from './assets/img/img2.webp'
import perfil from './assets/img/fotoPerfiil.png'
import fundoImg from './assets/img/fundoImg.png'
import { ScrolToTOp } from './components/scroll/ScrollToTop.js'
import './css/style.css'




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
  FaSass
} from "react-icons/fa";
import { 
  GoLocation, GoMail } from "react-icons/go";
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Html, Javascript, ReactJS, Reactnative, NodeJs, NextJs, Firebase } from './components/index.js'
import { HashLoader } from 'react-spinners'
import {css} from '@emotion/react'


function App() {

const [menuFixedColor, setMenuFixedColor] = useState(false)


const menuFixed = () => {
  if(window.scrollY >= 200) {
    setMenuFixedColor(true)
  } else {
    setMenuFixedColor(false)
  }
}

window.addEventListener('scroll', menuFixed)

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  `;

const [loading, setLoading] =useState(false)
let [color, setColor] = useState("#fff");

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}, [])

  return (
  <div className="App">
    {
      loading?
     <div className='spinner2'> 
      <HashLoader color={color} loading={loading} css={override} size={100} />
      <span className='nameCode'>Code</span>
     </div> :
    <div className="spinner">
      <div className="containerPage">
        <header className={menuFixedColor ? "menu active" : "menu"}>
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
                  <Link to="inicio" spy={true} smooth={true} offset={-180} duration={500} className='textMenu'>inicio</Link>
                </li>
                <li>
                  <Link to="sobre" spy={true} smooth={true} offset={-180} duration={500} className='textMenu'>Sobre</Link>
                </li>
                <li>
                  <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>Skills</Link>
                </li>
                <li>
                  <Link to="portifolio" spy={true} smooth={true} offset={-150} duration={500} className='textMenu'>Portifolio</Link>
                </li>
                
                <li>
                  <Link to="curriculum" spy={true} smooth={true} offset={-150} duration={500} className='textMenu'>Curriculum</Link>
                </li>
                <div>
                  <Link to="contato" spy={true} smooth={true} offset={-180} duration={500} className='textMenu'>
                    <button className="btnOne btnContatos">Contato</button>
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </header>
          <main>
          <div className="main" id='inicio'>
            <div className="texHome">
              <h1 className='nameDev'>Me chamo Felipe Fernandes</h1>
              <p className='nameProfessional'>Front End Developer</p>
              <div className="btnHome">
                <a className='buttonHome' href="https://drive.google.com/file/d/1mSShXzYGRbRx8qJiS2ComooY_MZTelt5/view?usp=sharing" target="blank_">
                  <button className='btnOne'>Download CV</button>
                </a>
                <Link className='buttonHome' to="portifolio" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className='btnTwo'>Meu trabalho</button>
                </Link>
              </div>
            </div>
            <div className="logoImg">
              <img className='fundoImg' src={fundoImg} alt="" />
              <img className='imgPerfil' src={perfil} alt="" />
            </div>
          </div>
        </main>
        <section>
          <div className="boxSobre">
            <div className="containerSobre">
              <img src={imgBox} alt="" />
            </div>
            <div className="infoSobre" id='sobre'>
              <h1 className='titleSobre'>Leia sobre minha história de luta de vida</h1>
              <p className='textSobre'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
              <div className="containerSkill">
                <div className="skill">
                  <div className="skillTitle">
                    <span>HTML5</span>
                    <span className="percentual">80%</span>
                    <div className="barra">
                      <span className="barraPercentual box1"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>Javascript</span>
                    <span className="percentual">70%</span>
                    <div className="barra">
                      <span className="barraPercentual box2"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>CSS3</span>
                    <span className="percentual">80%</span>
                    <div className="barra">
                      <span className="barraPercentual box3"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>ReactJs</span>
                    <span className="percentual">60%</span>
                    <div className="barra">
                      <span className="barraPercentual box4"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>FireBase</span>
                    <span className="percentual">70%</span>
                    <div className="barra">
                      <span className="barraPercentual box7"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>React Native</span>
                    <span className="percentual">40%</span>
                    <div className="barra">
                      <span className="barraPercentual box5"></span>
                    </div>
                  </div>
                  <div className="skillTitle">
                    <span>NodeJs</span>
                    <span className="percentual">45%</span>
                    <div className="barra">
                      <span className="barraPercentual box6"></span>
                    </div>
                  </div>
                  
                  <div className="skillTitle">
                    <span>NextJs</span>
                    <span className="percentual">30%</span>
                    <div className="barra">
                      <span className="barraPercentual box8"></span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="btnSobre">
                <a className='buttonHome' href="#">
                  <button className='btnOne'>Ver mais</button>
                </a>
                <Link className='buttonHome' to="portifolio" spy={true} smooth={true} offset={-180} duration={500}>
                  <button className='btnTwo'>Meus Serviços</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id='skills'>
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
              <button className="btnMaisService btnOne">Ver Mais</button>
              <div className="cardInfo">
                <div className="cardItem">
                  <h2>C</h2>
                </div>
                <div className="cardItem">
                  <h2>O</h2>
                </div>
                <div className="cardItem">
                  <h2>D</h2>
                </div>
                <div className="cardItem">
                <div className="line">
                  <div className="line2">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='portifolio'>
          <div className="containerBox">
            <h1 className='titleService'>Portifolio</h1>  
            <p className='textService'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className='navigationRoutes'>
                <BrowserRouter>
                  <Switch>
                    <Route path="/" exact component={Html}/>
                    <Route path="/javascript" component={Javascript}/>
                    <Route path="/reactjs" component={ReactJS}/>
                    <Route path="/reactnative" component={Reactnative}/>
                    <Route path="/nodejs" component={NodeJs}/>
                    <Route path="/nextjs" component={NextJs}/>
                    <Route path="/firebase" component={Firebase}/>
                  </Switch>
                </BrowserRouter>
            </div> 
          </div>
        </section>
        <footer id='curriculum'>
          <div className="downloadCV">
            <div className="textBtn">
              <h1>Baixe o CV</h1>
              <a href="https://drive.google.com/file/d/1mSShXzYGRbRx8qJiS2ComooY_MZTelt5/view?usp=sharing" target="blank_">
                <button className='btnOne'>Download</button>
              </a>
            </div>
            <img src={imgB} alt="" />
          </div>
            <div className="location">

            </div>
            <div className="contatoSocial">

            </div>
        </footer>
        <footer className='tagFooter' id='contato'>
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
                <button className='btnOne'>Enviar</button>
              </form>
              <div className="copyright">
                <span>Copyright ©2022 Felipe Fernandes. All Rights Reserved.</span>
              </div>
          </div>
        </footer>
      </div>
    
      <div className="btnTop">
        <ScrolToTOp/>
      </div>
      <div className="menuHamburger">
        <span className="line2 one"></span>
        <span className="line2 two"></span>
        <span className="line2 tre"></span>
      </div>
      </div>
     }
  </div>
    
    
  );
  
}

export default App;
