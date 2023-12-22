import React from 'react';
import './DeskripsiPelatihan.css';
import { Link } from 'react-router-dom';

const DeskripsiPelatihan = () => {
  return (
    <div>
      <div className="image">
        <img src="/image/Rectangle 96.svg" />
      </div>

      <div className="d-flex gambar">
        <div>
          <div className="container">
            <button className="btn-back d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none" style={{ marginRight: '4px' }}>
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                  fill="#00529E"
                />
              </svg>
             <Link to={"/Pelatihan"}>Kembali</Link> 
            </button>
            <div className="header">
              <h1>Digital Market</h1>
              <h3>PT. Lentera Bangun Persada</h3>
            </div>
          </div>

          <div className="deskripsi">
            <h3>Deskripsi:</h3>
            <p>
              Digital marketing adalah sebuah pemasaran yang dilakukan melalui internet atau media online. Jika dibandingkan dengan teknik pemasaran konvensional atau tradisional, saat ini metode digital marketing lebih diminati. Metode digital marketing memiliki return of investment atau ROI yang terbilang cukup tinggi. Pada dasarnya, strategi pemasaran digital atau strategi digital marketing adalah kegiatan pemasaran produk berupa barang atau jasa menggunakan media atau teknologi berbasis digital. Sebagaimana yang telah disebutkan sebelumnya, penggunaan media digital diharapkan mampu menjangkau target pasar yang lebih luas.
            </p>
          </div>
        </div>

        <img src="/image/picture1.svg" />
      </div>

      <div className="d-flex akses">
        <button className="access-btn">
          <Link to={"/DaftarKelasPage"} style={{ textDecoration: 'none', color: 'white' }}>Akses Kelas</Link>
        </button>
      </div>
    </div>
  );
};

export default DeskripsiPelatihan;
