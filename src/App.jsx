import './App.css'
import { Link,NavLink,Route, Routes } from 'react-router-dom'
import {Home} from './pagina/Home'
import {BookList} from './pagina/BookList'
import {Book} from './pagina/Book'
import {NewBook} from './pagina/NewBook'
import { NotFound } from './pagina/NotFound'
import { BookLayout } from './pagina/BookLayout'

function App() {
  return ( 
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/"
              style={
                ({isActive})=> {
                  return isActive? {color: 'red'} :{}
                }
              }
            >Inicial</NavLink>
          </li>
          <li>
            <Link to="/libros" className='libroClick'>Libros</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/libros'element={<BookLayout />} >
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='nuevo' element={<NewBook />} />
        </Route>
        {/* <Route path='/libros' element={<BookList />} /> */}
        {/* libros con sus id */}
        {/* <Route path='/libros/:id' element={<Book />} />
        <Route path='/libros/nuevo' element={<NewBook />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </> 
  ) 
}

export default App
