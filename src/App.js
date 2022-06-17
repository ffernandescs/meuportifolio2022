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
import { GoLocation, GoMail } from "react-icons/go";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Html, Javascript, ReactJS, Reactnative, NodeJs, NextJs, Firebase } from './components/index.js'
import { HashLoader } from 'react-spinners'
import {css} from '@emotion/react'
import ProgressBar from './components/ProgressBar'
import {motion} from 'framer-motion'

function App() {

const [menuFixedColor, setMenuFixedColor] = useState(false)
const [menuHamburger, setMenuHamburger] = useState(false)
const [abaSkills, setAbaSkills] = useState(false)
const [abaSobre, setAbaSobre] = useState(false)



const menuFixed = () => {
  if(window.scrollY >= 200) {
    setMenuFixedColor(true)
  } else {
    setMenuFixedColor(false)
  }
}

const btnMenuHamburger = () => {
  setMenuHamburger(!menuHamburger)
}

const btnSkill = () => {
  setAbaSkills(!abaSkills)
}

const btnSobre = () => {
  setAbaSobre(!abaSobre)
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
let [color, setColor] = useState("#ff4800");


let fontSize = '100px'

function fontSizeLoading() {
  if(window.innerWidth < 600) {
    fontSize = '50px'
  } else {
    fontSize = '100px'
  }
}



fontSizeLoading()

useEffect(() => {

  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 30)
}, [])



  return (
    
  <div className="App">
    {
      loading?
     <div className='spinner2'> 
      <HashLoader color={color} loading={loading} css={override} size={fontSize}  />
      <div className='nameCode'>Cod
        <div className="line">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>  
     </div> :
    <div className="spinner">
      <div className="containerPage">
        <header className={menuFixedColor ? "menu active" : "menu"}>
        
          <div className={menuHamburger ? "containerTopMenu menuResponsive" : "containerTopMenu"}>
          <div className="menuHamburger" onClick={btnMenuHamburger}>
            <RiMenuFill/>
            <RiCloseLine className='btnXMenu'/>
          </div>
            
            <Link className="logo" to="inicio" spy={true} smooth={true} offset={-100} duration={500}>
              <div className="line">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h1 className='titleLogo'>Cod</h1>
              <h1 className='title2'>r</h1>
              
            </Link>
            <nav className="navMenu">
              <ul className='navigation' >
                <li>
                  <Link onClick={btnMenuHamburger} to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>inicio</Link>
                </li>
                <li>
                  <Link onClick={btnMenuHamburger} to="sobre" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>Sobre</Link>
                </li>
                <li>
                  <Link onClick={btnMenuHamburger} to="skills" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>Skills</Link>
                </li>
                <li>
                  <Link onClick={btnMenuHamburger} to="portifolio" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>Portifolio</Link>
                </li>
                
                <li>
                  <Link onClick={btnMenuHamburger} to="curriculum" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>Curriculum</Link>
                </li>
                <div>
                  <Link onClick={btnMenuHamburger} to="contato" spy={true} smooth={true} offset={-100} duration={500} className='textMenu'>
                    <button className="btnOne btnContatos">Contato</button>
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </header>
          <main>
          <div className="main" id='inicio'>
            <motion.div
              initial={{left: "-30%"}}
              whileInView={{left: "0%"}}
              transition={{duration : 2, type: 'spring'}}
              className="texHome">
              <h1 className='nameDev'>Olá, eu sou o Felipe Fernandes</h1>
              <p className='nameProfessional'>Sou Desenvolvedor Front-End.</p>
              <div className="btnHome">
                <a className='buttonHome' href="https://drive.google.com/file/d/1mSShXzYGRbRx8qJiS2ComooY_MZTelt5/view?usp=sharing" target="blank_">
                  <button className='btnOne'>Download CV</button>
                </a>
                <Link className='buttonHome' to="portifolio" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className='btnTwo'>Meu trabalho</button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{right: "-44%", top: "0%"}}
              whileInView={{right: "0%"}}
              transition={{duration : 2, type: 'spring'}}
              className="logoImg"
              >
              <img className='fundoImg' src={fundoImg} alt="" />
              <img className='imgPerfil' src={perfil} alt="" />
            </motion.div>
          </div>
        </main>
        <section>
          <div className="boxSobre">
            <div className="containerSobre">
              <motion.img
                initial={{left: "-20rem"}}
                whileInView={{left: "0rem"}}
                transition={{duration : 2, type: 'spring'}}
                src={imgBox} alt="" />
            </div>
            <div className="infoSobre" id='sobre'>
              <motion.h1
                initial={{left: "20rem"}}
                whileInView={{left: "0rem"}}
                transition={{duration : 2, type: 'spring'}} 
                className='titleSobre'>Leia sobre minha história de luta de vida</motion.h1>
              <div className="textInfo">
                <span>
                <motion.p
                  initial={{left: "20rem"}}
                  whileInView={{left: "0rem"}}
                  transition={{duration : 3.5, type: 'spring'}} 
                  className='textSobre'>Ola pessoal! sejam bem vindos ao meu site. Meu nome é Felipe, tenho<span> 28 </span>
                  anos e moro em Recife-PE, atualmente atuo como 
                  <span> Desenvolvedor Front End, 
                  </span> Sou Formado em Redes de Computadores com mais de 8 anos de experiências na area de Suporte, porem a alguns anos estou focado em desenvolvimento Web/Mobile pois estou em busca de um sonho muito antigo que é ser programador. Sou apaixonado por tecnologias e sempre procuro buscar conhecimento e aprimorar minhas habilidades em busca de um maior crescimento profissional. É sempre gratificante poder entregar a melhor experiência com os produtos e serviços desenvolvidos por mim. Eu tenho alguns projetos de minha autoria como: <span>Landing Pages, Sites, E-commerces e Apps. </span></motion.p>

                </span>
              </div>
              <div className="containerSkill">
                <div className={abaSobre ? "skill active" : "skill"}>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>HTML5</span>
                    <span className="percentual">80%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}}  
                        className="barraPercentual box1">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>Javascript</span>
                    <span className="percentual">70%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}}  
                        className="barraPercentual box2">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>CSS3</span>
                    <span className="percentual">80%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}}  
                        className="barraPercentual box3">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>ReactJS</span>
                    <span className="percentual">80%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}}  
                        className="barraPercentual box4">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>FireBase</span>
                    <span className="percentual">70%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1.5, type: 'spring'}}  
                        className="barraPercentual box5">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>React Native</span>
                    <span className="percentual">40%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}}  
                        className="barraPercentual box6">
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>NodeJs</span>
                    <span className="percentual">45%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}} 
                        className="barraPercentual box7">
                      </motion.span>
                    </div>
                  </motion.div>          
                  <motion.div
                      initial={{left: "-20rem"}}
                      whileInView={{left: "0rem"}}
                      transition={{duration : 3.5, type: 'spring'}}  
                      className="skillTitle">
                    <span>NodeJs</span>
                    <span className="percentual">45%</span>
                    <div className="barra">
                      <motion.span
                        initial={{left: "-20rem"}}
                        whileInView={{left: "0rem"}}
                        transition={{duration : 1, type: 'spring'}} 
                        className="barraPercentual box8">
                      </motion.span>
                    </div>
                  </motion.div> 
                </div>
                <div className="btnSobre">
                <a className='buttonHome'>
                  <button className='btnOne' onClick={btnSobre}>Ver mais</button>
                </a>
                <Link className='buttonHome' to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className='btnTwo'>Meus Skills</button>
                </Link>
              </div>
              </div>
              
            </div>
          </div>
        </section>
        <section id='skills'>
          <motion.div
              initial={{left: "-20rem"}}
              whileInView={{left: "0rem"}}
              transition={{duration : 2, type: 'spring'}}  
              className="containerBox">
            <h1 className='titleService' id='skills'>Minhas Habilidades</h1>
            <div className="textInfo">
              <p className='textService'>Essas são as principais habilidades e tecnologias que me dar todo suporte e me auxiliam no meu desempenho na programação diária e desenvolvimento web.</p>
            </div>            
            <div className="linkServices">
              <ul className={abaSkills ? "listaServices active" : "listaServices"}>
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
              <button onClick={btnSkill} className="btnMaisService btnOne">Ver Mais</button>
              <motion.div
                initial={{left: "20rem"}}
                whileInView={{left: "0rem"}}
                transition={{duration : 3.5, type: 'spring'}} 
                className="cardInfo">
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
              </motion.div>
            </div>
          </motion.div>
        </section>
        <motion.section
          initial={{left: "-20rem"}}
          whileInView={{left: "0rem"}}
          transition={{duration : 2, type: 'spring'}}  
          id='portifolio'>
          <div className="containerBox">
            <h1 className='titleService'>Meus Projetos</h1>  
            <p className='textService'>Esses são meus principais projetos, você pode conferir todos meus repositórios e projetos no GitHub. <a href="https://github.com/ffernandescs" target="blank_"> Acesse-o agora..</a></p>
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
        </motion.section>
        <motion.footer
          initial={{left: "-20rem"}}
          whileInView={{left: "0rem"}}
          transition={{duration : 2, type: 'spring'}}
          id='curriculum'>
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
        </motion.footer>
        <motion.footer
          initial={{left: "20rem"}}
          whileInView={{left: "0rem"}}
          transition={{duration : 2, type: 'spring'}}
          className='tagFooter' 
          id='contato'>
            <div className='contFooter'>
              <div className='footer'>
                <div className="boxFooter">
                  <h1>Contatos</h1>
                  <p className='textFooter'>Se você quiser conversar, entre em contato, estou quase sempre online.</p>
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
                <span>Copyright © 2022, FFCS - Todos os direitos reservados.</span>
              </div>
          </div>
        </motion.footer>
      </div>
    
      <div className="btnTop">
        <ScrolToTOp/>
      </div>
      
      </div>
     }
  </div>
    
    
  );
  
}

export default App;
