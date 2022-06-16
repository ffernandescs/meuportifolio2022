import { Link } from 'react-router-dom'
import img2 from '../../assets/img/imgReadme2.png' 


export const NodeJs = () => {
    return (
        <nav className="containerPortifolio">
          <ul className="linkRotas">
            <li>
              <Link to="/">Html</Link>
            </li>
            <li>
              <Link to="/javascript">Javascript</Link>
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
          </ul>
        </nav>
    )
}

