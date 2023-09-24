import { useState } from "react"
import { Link, Outlet } from "react-router-dom"


export function BookLayout() {
    const [num, setNumero]= useState(3)
    return (
        <>
            <Link to='/libros/1'>libro 1</Link>
            <br />
            <Link to='/libros/2'>libro 2</Link>
            <br />
            <Link to='/libros/nuevo'>libro nuevo</Link>
            <br />
            <Link to={`/libros/${num}`}>libro {num}</Link>
            <Outlet context={{hello: "world"}} />
            <input 
            type="number" 
            value={num}
            onChange={e=>setNumero(e.target.value)}
            />
        </>
    )
}