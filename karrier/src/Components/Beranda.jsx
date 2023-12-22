import React from 'react';
import './Beranda.css'; // Make sure to import the corresponding CSS file
import { useEffect, useState } from 'react';

const Beranda = () => {
  // Move the state and useEffect inside the component function
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api.php?action=getData');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {/* start body */}
      <section className="banner" style={{backgroundImage:'url(/image/avatar1.jpeg)'}}>
        <div className="container33">
          <img src="/image/logo-karrier.png" alt="Karrier Logo" />
        </div>
        <h2 className="textarea">
            Mulailah Perjalanan Karrier Anda <br /> Bersama dengan Karrier.id</h2>
      </section>
      {/* end body */}

      {/* start Cari Pelatihan */}
      <div className="box-1">
        <div className="group--1">
          <div className="overlap-group--1">
            <div className="rectangle--1"></div>
            <div className="text-wrapper--1">Cari Pelatihan</div>
            <img className="img" src="/image/Cari-pelatihan.svg" alt="Cari Pelatihan" />
            <div className="box">
              <div className="group">
                <div className="overlap-group">
                  <img className="rectangle" src="/image/avatar-pelatihan.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap">
                  <img className="rectangle" src="/image/avatar-pelatihan.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap-2">
                  <img className="rectangle" src="/image/avatar-pelatihan.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap-3">
                  <img className="rectangle" src="/image/avatar-pelatihan.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
              </div>
              <div className="ellipse"></div>
            </div>
          </div>
        </div>
      </div>
      {/* end cari Pelatihan */}

      {/* start cari pekerjaan */}
      <div className="box-11">
        <div className="group--11">
          <div className="overlap-group--11">
            <div className="rectangle--11"></div>
            <div className="text-wrapper--11">Cari Pekerjaan</div>
            <img className="img" src="/image/Cari-pekerjaan.svg" alt="Cari Pekerjaan" />
            <div className="box">
              <div className="group">
                <div className="overlap-group">
                  <img className="rectangle" src="/image/avatar-pekerjaan.svg" alt="Avatar" />
                  <div className="text-wrapper">Head Accounting</div>
                  <div className="div">PT. Jaya Kusuma</div>
                </div>
                <div className="overlap">
                  <img className="rectangle" src="/image/avatar-pekerjaan.svg" alt="Avatar" />
                  <div className="text-wrapper">Head Accounting</div>
                  <div className="div">PT. Jaya Kusuma</div>
                </div>
                <div className="overlap-2">
                  <img className="rectangle" src="/image/avatar-pekerjaan.svg" alt="Avatar" />
                  <div className="text-wrapper">Head Accounting</div>
                  <div className="div">PT. Jaya Kusuma</div>
                </div>
                <div className="overlap-3">
                  <img className="rectangle" src="/image/avatar-pekerjaan.svg" alt="Avatar" />
                  <div className="text-wrapper">Head Accounting</div>
                  <div className="div">PT. Jaya Kusuma</div>
                </div>
              </div>
              <div className="ellipse1"></div>
            </div>
          </div>
        </div>
      </div>
      {/* end cari pekerjaan */}

      {/* start cari kelas */}
      <div className="box-111">
        <div className="group--111">
          <div className="overlap-group--111">
            <div className="rectangle--111"></div>
            <div className="text-wrapper--111">Cari Kelas</div>
            <img className="img" src="/image/Cari-kelas.svg" alt="Cari Kelas" />
            <div className="box">
              <div className="group">
                <div className="overlap-group">
                  <img className="rectangle" src="/image/avatar-kelas.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap">
                  <img className="rectangle" src="/image/avatar-kelas.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap-2">
                  <img className="rectangle" src="/image/avatar-kelas.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
                <div className="overlap-3">
                  <img className="rectangle" src="/image/avatar-kelas.svg" alt="Avatar" />
                  <div className="text-wrapper">Pelatihan Digital</div>
                  <div className="div">Mentor Indra, S.T, M.T</div>
                </div>
              </div>
              <div className="ellipse11"></div>
            </div>
          </div>
        </div>
      </div>      
      {/* end cari kelas */}
    </>
  );
};

export default Beranda;
