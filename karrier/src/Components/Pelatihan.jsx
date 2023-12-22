import React from 'react';
import { Link } from 'react-router-dom';


const Pelatihan = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        width: '99.5%',
        height: '760px',
        background: 'url(/image/image\\ 29.png)',
        backgroundRepeat: 'no-repeat',
        margin: '5px',
      }}
    >
      <div
        className="title"
        style={{
          height: '60px',
          width: '1080px',
          borderRadius: '20px',
          backgroundColor: '#2AB9D9',
          color: 'white',
          marginLeft: '99px',
          display: 'flex',
        }}
      >
        <div style={{ position: 'relative', bottom: '50%', marginRight: '14px' }}>
          <img src="/image/Group 228.png" alt="Group 228" />
        </div>
        <h1>Pelatihan</h1>
      </div>
      <main
        className="grid"
        style={{
          top: '400px',
          width: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          margin: '50px',
          alignItems: 'center',
          gridGap: '20px',
        }}
      >
        <article
          style={{
            boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            textAlign: 'center',
            background: 'white',
            height: '361px',
            width: '270px',
          }}
        >
          <img
            src="/image/Rectangle 654.svg"
            alt="Rectangle 654"
            style={{ height: '231.13px', width: '286.92px', borderRadius: '50px' }}
          />
          <div className="konten">
            <h4>
            <Link to="/DeskripsiPelatihan" className="ppppppp" style={{ textDecoration: 'none', color: 'black' }}>
              Digital Marketing</Link>
            </h4>
            <p>Perusahaan PT. Jaya Kusuma</p>
            <p style={{fontSize:'13px'}}>Full Time / Work From Home</p>
          </div>
        </article>
        <article
          style={{
            boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            textAlign: 'center',
            background: 'white',
            height: '361px',
            width: '270px',
          }}
        >
          <img
            src="/image/Rectangle 654.svg"
            alt="Rectangle 654"
            style={{ height: '231.13px', width: '286.92px', borderRadius: '50px' }}
          />
          <div className="konten">
            <h4>
            <Link to="DeskripsiPelatihan" className="ppppppp" style={{ textDecoration: 'none', color: 'black' }}>
              Accounting</Link>
            </h4>
            <p>Perusahaan PT. Jaya Kusuma</p>
            <p style={{fontSize:'13px'}}>Full Time / Work From Home</p>
          </div>
        </article>
        <article
          style={{
            boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            textAlign: 'center',
            background: 'white',
            height: '361px',
            width: '270px',
          }}
        >
          <img
            src="/image/Rectangle 654.svg"
            alt="Rectangle 654"
            style={{ height: '231.13px', width: '286.92px', borderRadius: '50px' }}
          />
          <div className="konten">
            <h4>
            <Link to="/DeskripsiPelatihan" className="ppppppp" style={{ textDecoration: 'none', color: 'black' }}>
              Legal Staff</Link>
            </h4>
            <p>Perusahaan PT. Jaya Kusuma</p>
            <p style={{fontSize:'13px'}}>Full Time / Work From Home</p>
          </div>
        </article>
        <article
          style={{
            boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            textAlign: 'center',
            background: 'white',
            height: '361px',
            width: '270px',
          }}
        >
          <img
            src="/image/Rectangle 654.svg"
            alt="Rectangle 654"
            style={{ height: '231.13px', width: '286.92px', borderRadius: '50px' }}
          />
          <div className="konten">
            <h4>
            <Link to="/DeskripsiPelatihan" className="ppppppp" style={{ textDecoration: 'none', color: 'black' }}>
              Operational Staff</Link>
            </h4>
            <p>Perusahaan PT. Jaya Kusuma</p>
            <p style={{fontSize:'13px'}}>Full Time / Work From Home</p>
          </div>
        </article>

      </main>
    </div>
  );
};

export default Pelatihan;
