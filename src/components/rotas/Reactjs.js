import { Link } from 'react-router-dom'
import img1 from '../../assets/img/imgReadme.png'
import img3 from '../../assets/img/imgReadme3.png'

export const ReactJS = () => {
    return (
        <nav className="containerPortifolio">
          <ul className="linkRotas">
            <li>
              <Link to="/">Html</Link>
            </li>
            <li>
              <Link to="/javascript">React</Link>
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
              <img className='imgPortifolio' src={img1} alt="" />
              <div className="textPortifolio">
                <h1>Portifolio</h1>
                <p>Portifolio criado utilizando tecnologias como React.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/meuportifolio2022" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://www.felipefernandescs.com/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
               
            <li>
              <img className='imgPortifolio' src={img3} alt="" />
              <div className="textPortifolio">
                <h1>Buscador de CEP</h1>
                <p>Buscador de CEP utilizando React.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs/buscador-cep-reactJs" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://buscadorcepreact.netlify.app/" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>    
               
          </ul>
        </nav>
    )
}

