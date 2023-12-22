import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#2AB9D9', marginBottom:'10px' }}>
          <div class="container-fluid">
            <a to="/Beranda" className="navbar-brand">
              <img src="/image/logo-karrier.png" style={{ width: '17%', margin: 0, padding: '5px' }} alt="Karrier Logo" />
              <img className="karier" src="/image/Karier.id.svg" alt="Karier.id Logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-1 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">
                <Link to="/Beranda" className="nav-link active">
                  <img className="logo" src="/image/Beranda-icon.svg" alt="Beranda Icon" />
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Nontifikasi" className="nav-link active">
                  <img className="logo" src="/image/Nontifikasi-icon.svg" alt="Nontifikasi Icon" />
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Lowongan" className="nav-link active">
                  <img className="logo" src="/image/Lowongan-icon.svg" alt="Lowongan Icon" />
                </Link>
                </li>
                <li class="nav-item ">
                <Link to="/Pelatihan" className="nav-link active">
                  <img className="logo" src="/image/Pelatihan-icon.svg" alt="Pelatihan Icon" />
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Profile" className="nav-link active">
                  <img className="logo" src="/image/Profil-icon.svg" alt="Profil Icon" />
                </Link>
                </li>
              </ul>
              {/* <li class="nav-item">
                <Link to="/Login" className="nav-link active">
                  <img className="logo" src="/image/Lowongan-icon.svg" alt="Lowongan Icon" />
                </Link>
                </li> */}
              <div className="cari d-flex">
             <form class="d-flex">
            <button class="btn bi-search" type="submit"></button>
            <input type="text" placeholder="Search"/>
             </form></div>
              </div>
            </div>
        </nav>
      );
    };
    
    export default Navbar;
    
