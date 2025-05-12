import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style.css"

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-80 h-screen bg-slate-900 p-6 text-white' id='sidebar'>
        <h2>Sidebar</h2>
        <ul>
          <li>
            <NavLink className={`bg-slate-800 block my-1 p-2 rounded dashboard-link`} to={"statistic"}>All Product</NavLink>
          </li>
          <li>
             <NavLink className={`bg-slate-800 block my-1 p-2 rounded dashboard-link`} to={"product"}>Input Product</NavLink>
          </li>
          <li>
              <NavLink className={`bg-slate-800 block my-1 p-2 rounded dashboard-link`} to={"profile"}>Edit Product</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex-1'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard