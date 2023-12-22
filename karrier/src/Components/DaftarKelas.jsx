import React, {useState} from "react";
import { Link } from "react-router-dom";

const DaftarKelas = () => {
  const [dropDownOpen, setDropdownOpen] = useState (false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropDownOpen);
  }
  return (
    <div> 
        <section className="bctengah" style={{backgroundImage:'url(../image/avatar-4.jpg)',backgroundSize: '100%,100%'}}>
          <div className="container text-center">
            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col-md-3 bg-light" style={{ borderRadius: '16px', marginTop: '10px', marginLeft: '-10px', width: '200px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }}>
                <Link to={"/DaftarKelasPage"} style={{ textDecoration: 'none', color: '#00529E', display: 'block', height: '100%', margin: '5px', width: '200px', marginLeft: '-11px' }}>Kembali</Link>
              </div>
            </div>
          </div>
          <div className="btn-group1" style={{ position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)', marginLeft: '40px',backgroundColor:'#2AB9D9',padding: '15px',fontFamily:'Verdana', color: 'white' ,borderRadius: '20px',
    fontWeight: 'bold' }}>
            <h3 className="btn-group1" style={{ paddingTop: '10px', paddingLeft: '35px', }}>Cari Kelas</h3>
            
            <button className="btn btn-light dropdown-toggle" style={{ width: '200px', borderRadius: '20px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '15px', marginLeft: '15px', marginRight: '15px' }}
             onClick={toggleDropdown}
              type="button" data-bs-toggle="dropdown" aria-expanded={dropDownOpen}> Semua </button>
            <ul className={`dropdown-menu ${dropDownOpen ? 'show' : ''}`} style={{ position: 'absolute' }}>
              <li><a className="dropdown-item" href="#">Kelas 1</a></li>
              <li><a className="dropdown-item" href="#">Kelas 2</a></li>
              <li><a className="dropdown-item" href="#">Kelas 3</a></li>
            </ul>
          </div>
          <h2 className="ddd text-center" style={{fontWeight: 'bold', color: 'white' ,backgroundColor: '#2AB9D9',paddingLeft: '74px', paddingRight:'74px',
    paddingTop: '30px',marginLeft: '62vh',position:'absolute', height: '122vh',
    fontFamily:'Verdana', borderRadius: '20px',  }}>Daftar Kelas yang Diikuti</h2>
          <div className="card mb-3" style={{ maxWidth: '540px', marginLeft: '67vh', borderRadius: '15px', marginTop: '25vh', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <div className="row g-0" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="col-md-4">
            <img src="../image/avatar-daftarkelas.svg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#00529E' }}>Kelas Social Media Marketing (SMM)</h5>
              <Link to={'/KelasDiikuti'} className="btn btn-primary nav-link active" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >Lanjut</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: '540px', marginLeft: '67vh', borderRadius: '15px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <div className="row g-0" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="col-md-4">
            <img src="../image/avatar-daftarkelas.svg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#00529E' }}>Kelas Content Marketing</h5>
              <Link to={'/KelasDiikuti'} className="btn btn-primary nav-link active" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >Lanjut</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: '540px', marginLeft: '67vh', borderRadius: '15px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <div className="row g-0" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="col-md-4">
            <img src="../image/avatar-daftarkelas.svg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#00529E' }}>Kelas Mobile Marketing</h5>
              <Link to={'/KelasDiikuti'} className="btn btn-primary nav-link active" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >Lanjut</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: '540px', marginLeft: '67vh', borderRadius: '15px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '50px' }}>
        <div className="row g-0" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="col-md-4">
            <img src="../image/avatar-daftarkelas.svg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#00529E' }}>Kelas Pay-per-click (PPC) Advertising</h5>
              <Link to={'/KelasDiikuti'} className="btn btn-primary nav-link active" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >Lanjut</Link>
            </div>
          </div>
        </div>
      </div>
        </section>
    </div>
  )
}

export default DaftarKelas;