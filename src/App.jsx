import './App.css'
import { Link,Route, Routes } from 'react-router-dom'
import {Home} from './pagina/Home'
import {BookList} from './pagina/BookList'

function App() {
  return ( 
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicial</Link>
          </li>
          <li>
            <Link to="/libros">Libros</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/libros' element={<BookList />} />
      </Routes>
    </> 
  ) 
}

export default App
