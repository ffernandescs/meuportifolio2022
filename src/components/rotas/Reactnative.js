import { Link } from 'react-router-dom'
import img12 from '../../assets/img/imgReadme12.png'


export const Reactnative = () => {
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
              <img className='imgPortifolio' src={img12} alt="" />
              <div className="textPortifolio">
                <h1>Em construção</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci odio maiores quasi eveniet ad aspernatur fugiat optio provident rerum, beatae velit itaque id odit sit, saepe perspiciatis porro? Nostrum.</p>
              </div>
              <div className="btnPortifolio">
                <a href="https://github.com/ffernandescs" target="blank_">
                  <button className='btnOne btnBox1'>Repositorio</button>
                </a>
                <a href="https://github.com/ffernandescs" target="blank_">
                  <button className='btnTwo btnBox2'>Aplicação</button>
                </a>
              </div>
            </li>
          </ul>
        </nav>
    )
}

