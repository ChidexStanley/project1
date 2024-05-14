import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

export default function Topbar() {
    return (
        <div className='mainTop'>
            <nav>
                <Link to="/new" className='link'>New</Link>
                <Link to="/time" className='link'>Time</Link>
                <Link to="/calculator" className='link'>Calculator</Link>
            </nav>
        </div>
    )
}
