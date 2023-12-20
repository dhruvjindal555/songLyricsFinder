import React, { useState } from 'react'


export default function Navbar() {

    
    
    const [songName, setSongName] = useState("");
    
    const changeSongName=(event)=>{
        setSongName(event.target.value)
    }
    

    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" onChange={changeSongName} value={songName} placeholder="Search"  aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                </form>
            </nav>
        </>
    )
}
