import { Link, Outlet } from "react-router-dom"


export function BookLayout() {
    return (
        <>
            <Link to='/libros/1'>libro 1</Link>
            <br />
            <Link to='/libros/2'>libro 2</Link>
            <br />
            <Link to='/libros/nuevo'>libro nuevo</Link>
            <Outlet/>
        </>
    )
}