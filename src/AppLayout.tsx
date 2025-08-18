import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout:React.FC = () => {
  return (
    <>
    <header>
        <h1>E commerce app</h1>
        <h4>Shop till you drop</h4>
    </header>
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