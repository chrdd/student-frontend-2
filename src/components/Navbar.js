import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bg-secondary">
             <div className="container-fluid">
                <a className="navbar-brand" href="#">Aplicatie Student</a>
                 <button className='btn btn-outline-light'>
                    Adaugare Student
                 </button>
             </div>
         </nav>
    </div>
  )
}
