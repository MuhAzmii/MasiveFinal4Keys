import React from 'react';

const Lowongan = () => {
  return (
   
    <section className="pppp1111" style={{ backgroundImage: "url(../image/avatar-5.jpg)", backgroundSize: "130%,100%" }}>
      <div className="button" style={{ width: "100%", height: "203px", backgroundColor: "#2AB9D9", marginTop: "30px", padding: "16px 0px" }}>
        <div className="d-flex button-top" style={{ justifyContent: "space-evenly", marginBottom: "35px", alignItems: "baseline" }}>
          <div>
            <label style={{margin:'5px'}}> Nama Pekerjaan</label>
            <input type="text" placeholder="Masukkan Kata Kunci" style={{ width: "271px", height: "45px", borderRadius: "12px", backgroundColor: "white", border: "none", textAlign: "center", color: "#8C8C8C", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal" }} />
          </div>
          <div>
            <label style={{margin:'5px'}}>Lokasi</label>
            <input type="text" placeholder="Masukkan Kata Kunci" style={{ width: "271px", height: "45px", borderRadius: "12px", backgroundColor: "white", border: "none", textAlign: "center", color: "#8C8C8C", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal" }} />
          </div>
          <div>
            <label style={{margin:'5px'}}>Klasifikasi</label>
            <select style={{ width: "271px", height: "45px", borderRadius: "12px", backgroundColor: "white", border: "none", color: "#8C8C8C", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", textAlign: "center" }}>
              <option>Semua Klasifikasi</option>
            </select>
          </div>
          <div>
            <label style={{margin:'5px'}}></label>
            <button type="submit" style={{ color: "white", fontWeight: "bold", width: "113px", height: "45px", borderRadius: "10px", background: "#00529E", border: "none" }}>Cari</button>
          </div>
        </div>
        <div className="d-flex button-bottom" style={{ justifyContent: "space-evenly" }}>
          <div>
            <select style={{ height: "45px", width: "270px", border: "none", borderRadius: "100px", backgroundColor: "white" }}>
              <option style={{textAlign:'center'}}>Jenis Pekerjaan</option>
            </select>
          </div>
          <div>
            <select style={{ height: "45px", width: "270px", border: "none", borderRadius: "100px", backgroundColor: "white" }}>
              <option style={{textAlign:'center'}}>Bayaran</option>
            </select>
          </div>
          <div>
            <select style={{ height: "45px", width: "270px", border: "none", borderRadius: "100px", backgroundColor: "white" }}>
              <option style={{textAlign:'center'}}>Tanggal Terbit</option>
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex main" style={{ justifyContent: "space-around", margin: "25px" }}>

        <div className="d-flex left" style={{ width: "300px", height: "700px", borderRadius: "10px", background: "#2AB9D9", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", margin: "10px" }}>
          <p style={{ color: "white", fontWeight: "bold" }}>3072 Lowongan</p>

          <div className="accounting" style={{ width: "233px", height: "280px",color:'black', borderRadius: "10px", background: "#FFF", fontSize: "10px", paddingLeft: "11px", paddingBottom: "8px" }}>
            <img src="../image/Rectangle 654 (1).svg" alt="accounting" />
            <h2 style={{ fontSize: "16px" }}>HEAD ACCOUNTING</h2>
            <p>PT. Jaya Kusuma Abadi</p>
            <p>Jakarta Timur, Jakarta Raya</p>
            <p>Akuntansi & Pelaporan Finansial</p>
            <p>Full TIme | Work From Office</p>

            <p style={{ marginTop: "11px" }}>10 jam yang lalu</p>
          </div>

          <div className="consultant" style={{ width: "233px", color:'black',height: "280px", borderRadius: "10px", background: "#FFF", fontSize: "10px", paddingLeft: "11px", paddingBottom: "8px" }}>
            <img src="../image/Rectangle 722.svg" alt="consultant" />
            <h2 style={{ fontSize: "16px" }}>LEGAL CONSULTANT STAFF</h2>
            <p>PT. Jaya Kusuma Abadi</p>

            <p>Jakarta Timur, Jakarta Raya</p>
            <p>Staff Hukum & Paralegal (Hukum)</p>
            <p>Full TIme | Work From Office</p>

            <p style={{ marginTop: "11px" }}>10 jam yang lalu</p>
          </div>
        </div>

        <div className="right" style={{ width: "738px", height: "750px", borderRadius: "10px", backgroundColor: "#2AB9D9", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", padding: "18px" }}>

          <div className="white-right" style={{ width: "703px", height: "708px", flexShrink: "0", borderRadius: "10px", background: "#FFF", padding: "13px" }}>

            <div className="d-flex kanan">
              <img src="../image/Rectangle 655.svg" alt="right" />
              <div className="sign">
                <div className='btn btn-primary' style={{margin:'10px', alignItems:'end', marginLeft:'350px'}}><a href="../DaftarKelas" style={{ textDecoration: "none", color: "white" }}>Lamar</a></div>
                <div className='btn btn-primary'>Simpan</div>
              </div>
            </div>
            <h1 style={{ fontSize: "24px", fontWeight: "700px" }}>HEAD ACCOUNTING</h1>
            <p style={{ fontSize: "13px", fontWeight: "400px" }}>PT. Jaya KUSUMA ABADI</p>
            <div className="d-flex icons">
              <img src="../image/geo-alt.svg" alt="location" /> 
              <p style={{ fontSize: "13px" }}>Jakarta Timur, Jakarta Raya</p>
            </div>
            <div className="d-flex icons">
              <img src="../image/building-fill.svg" alt="classification" />
              <p style={{ fontSize: "13px" }}>Akuntansi & Pelaporan Finansial</p>
            </div>
            <div className="d-flex icons">
              <img src="../image/clock.svg" alt="time" />
              <p style={{ fontSize: "12px" }}>Full Time | Work From Office</p>
            </div>
            <div className="d-flex icons">
              <img src="../image/currency-dollar.svg" alt="salary" />
              <p style={{ fontSize: "12px" }}>Rp 27.000.000 - Rp 29.000.000 per bulan</p>
            </div>

            <p style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "0px" }}>Tugas:</p>

            <ul>
              <li>Membuat laporan cash flow setiap hari.</li>
              <li>Membuat rekapan daily mutasi giro.</li>
              <li>Menerima setoran penjualan counter yang disertai dengan BPK.</li>
              <li>Membuat pelunasan AR Daily.</li>
              <li>Collect data rekening Koran asli untuk dikirim ke Acc pusat.</li>
              <li>Menginput transaksi kas dan bank yang sehubungan dengan cashflow.</li>
              <li>Membuat vucher kas dan Bank setiap hari.</li>
              <li>Melakukan penyetoran hasil penjualan setiap hari ke Bank.</li>
              <li>Melakukan pembayaran biaya rutin.</li>
              <li>Cek saldo cash flow dengan fisik uang setiap hari.</li>
              <li>Monitor AR dan follow up tagihan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Lowongan;
