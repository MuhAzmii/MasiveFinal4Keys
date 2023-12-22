import React from 'react';
import { Link } from 'react-router-dom';

const DaftarKelasPage = () => {
  return (
    <>     
      <section className="row-background" style={{backgroundImage:"url(../image/avatar3.svg)"}}>
        <div className="container" >
          <div className="row" style={{ marginBottom: '20px'}}>
            <div className="col-md-3 bg-light" style={{ borderRadius: '16px',marginTop:'10px', }}>
              <Link to={"/DeskripsiPelatihan"} style={{ textDecoration: 'none', color: '#00529E', display: 'block', height: '100%', textAlign:'center' }}>Kembali</Link>
            </div>
            <div className="col-md-3 bg-light offset-md-6" style={{ borderRadius: '16px', marginTop:'10px'}}>
              <a href="#" style={{ textDecoration: 'none', color: '#00529E', display: 'block', height: '100%', textAlign:'center' }}>Daftar Kelas yang Diikuti</a>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden text-center">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3" style={{backgroundColor: "#2AB9D9", borderRadius:'20px', marginBottom:'10px'}}>
                <img src="../image/avatar-daftarkelas.svg" alt="Image 1" style={{ backgroundColor: 'white', borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
                <h5 className="card-title" style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>Kelas Social Media Marketing (SMM)</h5>
                <Link to={"/DaftarKelas"} className="btn btn-light" style={{ color: '#00529E', marginTop: '10px', fontWeight: 'bold' }}>Daftar</Link>
              </div>
            </div>
            <div className="col">
              <div className="p-3"style={{backgroundColor: "#2AB9D9", borderRadius:'20px'}}>
                <img src="../image/avatar-daftarkelas.svg" alt="Image 2" style={{ backgroundColor: 'white', borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
                <h5 className="card-title" style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>Kelas Content Marketing</h5>
                <Link to={"/DaftarKelas"} className="btn btn-light" style={{ color: '#00529E', marginTop: '10px', fontWeight: 'bold' }}>Daftar</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden text-center">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3"style={{backgroundColor: "#2AB9D9", borderRadius:'20px', marginBottom:'30px'}}>
                <img src="../image/avatar-daftarkelas.svg" alt="Image 1" style={{ backgroundColor: 'white', borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
                <h5 className="card-title" style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>Kelas Pay-per-Click (PPC) Advertising</h5>
                <Link to={"/DaftarKelas"} className="btn btn-light" style={{ color: '#00529E', marginTop: '10px', fontWeight: 'bold' }}>Daftar</Link>
              </div>
            </div>
            <div className="col">
              <div className="p-3"style={{backgroundColor: "#2AB9D9", borderRadius:'20px'}}>
                <img src="../image/avatar-daftarkelas.svg" alt="Image 2" style={{ backgroundColor: 'white', borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
                <h5 className="card-title" style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>Kelas Mobile Marketing</h5>
                <Link to={"/DaftarKelas"} className="btn btn-light" style={{ color: '#00529E', marginTop: '10px', fontWeight: 'bold' }}>Daftar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DaftarKelasPage;
