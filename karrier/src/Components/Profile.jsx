const Profile = () => {
  return (
    <section className="container card" style={{ position: 'relative' }}>
      <img
        src="/image/Group right.png"
        style={{ width: '232px', height: '234px', position: 'absolute', left: '88%', zIndex: '-1', top: '5%' }}
      />
      <img
        src="/image/Group bottom.png"
        style={{ width: '168px', height: '170px', position: 'absolute', top: '92%', zIndex: '-1', right: '93%' }}
      />
      <div className="user" style={{ marginTop: '55px', marginBottom: '10px' }}>
        <div className="profile-img" style={{ height: '468px', width: '100%', borderRadius: '20px', backgroundColor: '#2AB9D9' }}>
          <div className="d-flex" style={{ justifyContent: 'center' }}>
            <img className="background" src="/image/forhere.svg" style={{ alignItems: 'center'}} />
          </div>
          <div className="profile d-flex" style={{ marginLeft: '53px' }}>
            <img
              src="/image/user.svg"
              style={{ width: 'fit-content', marginBottom: '200px', position: 'absolute', bottom: '68%' }}
            />
            <div className="bio" style={{ width: '60%', marginLeft: '300px', color: 'white' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '40px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                Cailtyn Monroe
              </h4>
              <p style={{ fontSize: '24px', fontStyle: 'normal' }}>Sarjana Akuntansi di Universitas Airlangga</p>
              <p style={{ fontSize: '24px', fontStyle: 'normal' }}>Surabaya, Jawa Timur, Indonesia</p>
            </div>
            <img
              src="/image/Group user.png"
              style={{ width: '106px', height: '92px', position: 'absolute', top: '25%', right: '91%' }}
            />
            <div className="btn" style={{ display: 'flex', marginTop: '19px' }}>
              <div style={{ width: '55px' }}>
                <div className="notif" style={{ borderRadius: '50%', color: '#00529E', backgroundColor: 'white', height: '41px', width: '41px' }}>
                  <img src="/image/bell-fill.svg" style={{ height: '25px', width: '25px', marginTop: '10px' }} />
                </div>
              </div>
              <div className="btn1" style={{ marginBottom: '50px' }}>
                <button className="btn-edt" style={{ width: '182px', height: '41px', borderRadius: '20px', backgroundColor: '#FFFFFF', color: '#00529E', border: 'none' }}>
                  Edit Profil
                </button>
                <button className="btn-upd" style={{ width: '182px', height: '41px', borderRadius: '20px', marginTop: '26px', backgroundColor: '#FFFFFF', color: '#00529E', border: 'none' }}>
                  Upload Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tentang" style={{ height: '221px', width: '100%', paddingLeft: '31px', marginBottom: '15px', borderRadius: '20px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: '#2AB9D9' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '40px', color: 'white', margin: '26px' }}>Tentang</h2>
        <p style={{ fontSize: '20px', color: 'white', margin: '15px', textAlign: 'justify' }}>
          Experience in HR-Industrial Relations, HR Operations, People Engagement, Corporate Legal, and Facility Management in
          manufacture, retail, offline / online store, e-commerce, sales & marketing, and banking industry.
        </p>
      </div>

      <div className="riwayat" style={{ height: '375px', width: '100%', padding: '21px', marginBottom: '15px', borderRadius: '20px', backgroundColor: '#2AB9D9' }}>
        <div className="d-flex">
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>Riwayat Karier</h3>
          <button style={{ width: '182px', height: '41px', borderRadius: '20px', marginLeft: '27px', backgroundColor: '#FFFFFF', color: '#00529E', border: 'none', fontSize: '16px' }}>Tambah Jabatan</button>
        </div>
        <div className="d-flex">
          <img src="/image/image 31.svg" style={{ margin: '27px 45px 123px 40px' }} />
          <div style={{ marginTop: '31px' }}>
            <h4 style={{ color: 'white' }}>HC Goverment & Industrial Relations</h4>
            <p className="data" style={{ color: 'white' }}>PT Bank JTRUST INDONESIA Tbk</p>
            <p className="data2" style={{ color: 'white' }}>
              Mar 2022 - Okt 2023
              Jakarta, Indonesia
            </p>
            <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Keahlian</h5>
            <p style={{ color: 'white' }}>Human Resources (HR). Human Resource Development. Strategic Communications. Accounting</p>
          </div>
        </div>
      </div>

      <div className="pendidikan" style={{ height: '407px', width: '100%', padding: '21px', marginBottom: '71px', borderRadius: '20px', backgroundColor: '#2AB9D9' }}>
        <img src="/image/Group right.png" style={{ width: '258px', height: '205px', position: 'absolute', left: '79.5%', bottom: '18.2%' }} />
        <div className="d-flex">
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>Pendidikan</h3>
          <button style={{ width: '182px', height: '41px', borderRadius: '20px', marginLeft: '27px', backgroundColor: '#FFFFFF', color: '#00529E', border: 'none', fontSize: '16px' }}>Tambah Pendidikan</button>
        </div>
        <div className="d-flex">
          <img src="/image/image 32.svg" style={{ margin: '27px 45px 123px 40px' }} />
          <div style={{ marginTop: '31px' }}>
            <h4 style={{ color: 'white', fontWeight: 'bold', fontSize: '32px', marginBottom: '0px' }}>Universitas Airlangga</h4>
            <p className="gelar" style={{ color: 'white', marginBottom: '3px' }}>Sarjana Akuntansi, Fakultas Ekonomi dan Bisnis</p>
            <p className="tahun" style={{ color: 'white' }}>
              2017 - 2021
            </p>
            <div className="d-flex" style={{ color: 'white', marginTop: '38px' }}>
              <h5 style={{ fontWeight: 'bold', marginRight: '6px' }}>Kegiatan dan masyarakat :</h5> Asian Law Student's Association
            </div>
            <p style={{ color: 'white' }}>
              Beside a Law student, I was joined ALSA Local Chapter Unair as Treasury. I also held several activities such as MCC
              (Moot Court Competition), Brand Concerts, Environment Care (by re-aware car user to it'sales emotion by held Emition
              Test), represent FH Unair as MCC participant to ALSA FH UGM MCC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
