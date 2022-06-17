import { Link } from 'react-router-dom'
import img2 from '../../assets/img/imgReadme2.png' 
import img4 from '../../assets/img/imgReadme4.png'
import img5 from '../../assets/img/imgReadme5.png'
import img6 from '../../assets/img/imgReadme6.png'
import img7 from '../../assets/img/imgReadme7.png'
import img8 from '../../assets/img/imgReadme8.png'
import img9 from '../../assets/img/imgReadme9.png'
import img10 from '../../assets/img/imgReadme10.png'
import img11 from '../../assets/img/imgReadme11.png'


export const Javascript = () => {
    return (
        <nav className="containerPortifolio">
          <ul className="linkRotas">
            <li>
              <Link to="/">Html</Link>
            </li>
            <li>
              <Link className='borderLinkRotas' to="/javascript">Javascript</Link>
            </li>
            <li>
              <Link to="/reactjs">React</Link>
            </li>
            <li>
              <Link to="/reactnative">React Native</Link>
            </li>
            <li>
              <Link to="/nodejs">NodeJs</Link>
            </li>
            <li>
              <Link to="/nextjs">NextJs</Link>
            </li>
            <li>
              <Link to="/firebase">Firebase</Link>
            </li>
          </ul>
          <ul className='sliderProject'>
            <li>
              <img className='imgPortifolio' src={img2} alt="" />
              <div className="textPortifolio">
                <h1>Consumindo API do Carrefour</h1>
                <p>Front End baseado no site do Carrefour utilizando HTML, CSS, JavaScript e NodeJs.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/API-de-Produtos-disponibilizada-pelo-Carrefour" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://apicarrefout.netlify.app/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img4} alt="" />
              <div className="textPortifolio">
                <h1>Clone da pagina inicial Netflix</h1>
                <p>Pagina inicial do NetFlix onde foi utilizado HTML, CSS, Javascript, API Rest.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Clone-NetFlix-DIO" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://clonenetflixdio.netlify.app/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img5} alt="" />
              <div className="textPortifolio">
                <h1>E-commerce</h1>
                <p>Site de perfumaria utilizado onde foi utilizado HTML, CSS, Javascript e Firebase.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Projeto-Site-Ecommece" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://e-commercefcs.netlify.app/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img6} alt="" />
              <div className="textPortifolio">
                <h1>E-commerce "Area administrativa"</h1>
                <p>Ambiente administrativo onde foi utilizado HTML, CSS, Javascript e Firebase.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Projeto-Site-Ecommece" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://e-commercefcs.netlify.app/src/pages/login/login.html" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li> 
            <li>
              <img className='imgPortifolio' src={img8} alt="" />
              <div className="textPortifolio">
                <h1>Portifolio"</h1>
                <p>Portifolio onde foi ultilizado HTML, CSS e Javascript.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Urna-Eletr-nica-para-Estados" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://ffernandescs.github.io/Urna-Eletr-nica-para-Estados/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img9} alt="" />
              <div className="textPortifolio">
                <h1>Urna Eletrônica"</h1>
                <p>Projeto Portifolio utilizando HTML, CSS e Javascript.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/portifolio" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://ffernandescs.github.io/portifolio/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img10} alt="" />
              <div className="textPortifolio">
                <h1>Calculadora"</h1>
                <p>Projeto de simulação de Calculadora onde foi ultilizado HTML, CSS e Javascript.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Calculadora-JS" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://ffernandescs.github.io/Calculadora-JS/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
            <li>
              <img className='imgPortifolio' src={img11} alt="" />
              <div className="textPortifolio">
                <h1>Play de Musicas"</h1>
                <p>Projeto de simulação de um Play de musica onde foi ultilizado HTML, CSS e Javascript.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/Player-Estudo" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://ffernandescs.github.io/Player-Estudo/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
          </ul>
        </nav>
    )
}

