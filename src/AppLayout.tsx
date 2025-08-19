import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppLayout:React.FC = () => {
  return (
    <>
    <header>
        <h1>E commerce app</h1>
        <h4>Shop till you drop</h4>
    </header>
    <nav>
      <ul>
        {/* NavLink and Link is the way to navigate from one page to another using SPA */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>

        {/* <li><a href="/about">About page without NavLink</a></li> */}
      </ul>
    </nav>
    {/* Outlet refers to the content that will be filled in based 
    on the URL defined in routes.tsx */}
    <Outlet/>
    <footer>
        <p>Copyright &copy; 2025; All Right Reserved</p>
    </footer>
    </>
  )
}

export default AppLayout