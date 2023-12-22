import React from 'react';

const Nontifikasi = () => {
  return (
    <section className="tombol" style={{padding: '10px', margin: '5px', marginLeft: '20px',backgroundImage: 'url(../image/avatar2.jpg)'}}>
      <button className="btn btn-primary" type="submit" fdprocessedid="f3b40j" >
        <p style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>Kelola Nontifikasi Anda</p>
        {/* <a style={{ color: 'white', textDecoration:'none' }} href="../Beranda.html">Lihat Pengaturan</a> */}
      </button>
      <div className="btn" style={{Color:'white', backgroundColor:'#2AB9D9',marginLeft:'220px',borderRadius:'15px',marginBottom:'20px'}}>
        <button className="btn btn-primary" type="submit" fdprocessedid="f3b40j" style={{marginRight:'20px', marginTop:'10px', marginBottom:'10px', marginLeft:'15px'}}>Semua</button>
        <button className="btn btn-primary" type="submit" fdprocessedid="f3b40j"style={{marginRight:'20px', marginTop:'10px', marginBottom:'10px', marginLeft:'15px'}}>Pelatihan</button>
        <button className="btn btn-primary" type="submit" fdprocessedid="f3b40j"style={{marginRight:'20px', marginTop:'10px', marginBottom:'10px', marginLeft:'15px'}}>Lowongan</button>
        <button className="btn btn-primary" type="submit" fdprocessedid="f3b40j"style={{marginRight:'20px', marginTop:'10px', marginBottom:'10px', marginLeft:'15px'}}>Kelas</button>
      </div>

      <div className="cartt"style={{backgroundImage: 'url(..)', paddingRight: '330px', paddingLeft: '330px'}}>
          <div className="carding-1" style={{backgroundColor:'#2AB9D9' ,paddingTop:'10px',display:'flex',alignItems:'center',justifyContent:'center' , borderRadius:'20px', marginBottom:'10px'}}>
            <div className="card mb-3" style={{ width: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="../image/avatar-pekerjaan.svg" className="img-fluid rounded-start" alt="..." style={{ marginLeft: '15px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PT. Jaya Kencana membuka Lowongan baru!</h5>
                    <p className="card-text">Accounting - Digital Marketer - Legal Staff </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="carding-1" style={{backgroundColor:'#2AB9D9',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'20px', marginBottom:'10px', paddingTop:'10px'}}>
            <div className="card mb-3" style={{ width: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="../image/avatar-pekerjaan.svg" className="img-fluid rounded-start" alt="..." style={{ marginLeft: '15px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PT. Sumber Matair membuka Lowongan baru!</h5>
                    <p className="card-text">AHead Tools Maintenance - Daily Tools Checker - Tools Salesmen </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="carding-2" style={{backgroundColor:'#2AB9D9',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'20px', marginBottom:'10px', paddingTop:'10px'}}>
            <div className="card mb-3" style={{ width: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="../image/avatar-pelatihan.svg" className="img-fluid rounded-start" alt="..." style={{ margin: '35px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Ayo selesaikan Pelatihan Digital Marketingmu!</h5>
                    <p className="card-text">Sedikit lagi kamu akan menyelesaikan Pelatihanmu!.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="carding-3"style={{backgroundColor:'#2AB9D9',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'20px', marginBottom:'10px', paddingTop:'10px'}}>
            <div className="card mb-3" style={{ width: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="../image/avatar-kelas.svg" className="img-fluid rounded-start" alt="..." style={{ margin: '25px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Progress kelas Basic Marketingmu sekarang sudah 80%!</h5>
                    <p className="card-text">Yuk, selesaikan kelas Basic Marketingmu!.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Nontifikasi;
