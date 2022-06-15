import Html from './components/html'
import Javascript from './components/javascript'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,

} from "react-router-dom";
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  FaGitSquare, 
  FaGithubSquare,  
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaArrowRight
} from "react-icons/fa";


import './css/style.css'


function App() {
  return (
    <div className="App">
     <div className="containerPage">
      <header className="menu">
        <div className="logo">
          <h1 className='titleLogo'>Cod r</h1>
          
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
              <a className='textMenu' href="#">Blog</a>
            </li>
            <li>
              <a className='textMenu' href="#">Contato</a>
            </li>
            <li>
              <a className='textMenu' href="#">Hire Me!</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="main">
          <div className="texHome">
            <h1 className='nameDev'>Mr. John Weary</h1>
            <p className='nameProfessional'>A Professional Web Developer and UI/UX Desingner</p>
            <div className="btnHome">
              <a className='buttonHome' href="#">
                <button>Download CV</button>
              </a>
              <a className='buttonHome' href="#">
                <button>My Work</button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="containerSobre">

        </div>
        <div className="infoSobre">
          <h1 className='titleSobre'>Leia sobre minha história de luta de vida</h1>
          <p className='textSobre'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="containerSkill">
            <div className="skillTitle">
              <span>Wordpress</span>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
            </div>
            <div className="skillTitle">
              <span>Wordpress</span>
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
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
                <a href="#">
                  <div className="iconText">
                    <div className="icon">
                      <span><FaDatabase/></span>
                    </div>
                    <span className="textBtnService">Firebase</span>
                  </div>
                  <span className="icoRigth"><FaArrowRight/></span>
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
          <BrowserRouter>
          <Nav variant="tabs">
            <Nav.Link as={Link} to="/">HTML</Nav.Link>
            <Nav.Link as={Link} to="/Javascript">Javascript</Nav.Link>
          </Nav>

          <Switch>
            <Route path="/" exact={true} component={Html}></Route>
            <Route path="/Javascript" component={Javascript}></Route>
          </Switch>
        </BrowserRouter>
        </div>
        
        <div className="sliderProject">
        
        

        </div>
        
       
      </section>
     </div>
    </div>
    
  );
  
}

export default App;
