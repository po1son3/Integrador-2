import React from 'react'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import './Cabecera.scss'

const Cabecera = () => {
return (
    <header className="main-header">

    <input type="checkbox" id="menu" />
    <SearchBar />
    <Navbar />
    
    </header> 

)
}

export default Cabecera