import React from 'react';
import './KelasDiikuti.css';
import { Link } from 'react-router-dom';

const KelasDiikuti = () => {

      return (
        <div>
        <button className="btn-kelas d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width={26} height={16} viewBox="0 0 26 16" fill="none" style={{marginRight: '19px'}}>
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="white" />
          </svg>
          <Link to={'/DaftarKelas'} style={{color:'White', textDecoration:'none'}}>Kelas Sosial Media Marketing</Link></button>
        <div className="main d-flex">
          <div className="left">
            <div className="d-flex">
              <h4 style={{marginTop: '22px', marginLeft: '31px', fontWeight: 'bold'}}>Daftar Modul</h4>
              <div className="notif d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{height: '16px', width: '16px', marginTop: '12px', marginLeft: '10px'}}>
                  <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#154752" />
                </svg>
              </div>
            </div>
            <div className="done">
              <svg xmlns="http://www.w3.org/2000/svg" width={256} height={6} viewBox="0 0 256 6" fill="none" style={{marginLeft: '10px'}}>
                <path d="M3 3H253" stroke="#00529E" strokeWidth={6} strokeLinecap="round" />
              </svg>
              <p style={{marginLeft: '17px'}}>80% Selesai</p>
            </div>
            <p><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{marginLeft: '19px', marginRight: '56px'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white" />
              </svg>Kelas 1
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" style={{marginLeft: '55px'}}>
                <mask id="mask0_594_584" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={19} y={19} width={26} height={26}>
                  <rect x={19} y={19} width={26} height={26} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_594_584)">
                  <path d="M30.3167 36.8167L37.9542 29.1792L36.4375 27.6625L30.3167 33.7833L27.2292 30.6958L25.7125 32.2125L30.3167 36.8167ZM31.8333 42.6667C30.3347 42.6667 28.9264 42.3823 27.6083 41.8135C26.2903 41.2448 25.1437 40.4729 24.1687 39.4979C23.1937 38.5229 22.4219 37.3764 21.8531 36.0583C21.2844 34.7403 21 33.3319 21 31.8333C21 30.3347 21.2844 28.9264 21.8531 27.6083C22.4219 26.2903 23.1937 25.1437 24.1687 24.1687C25.1437 23.1937 26.2903 22.4219 27.6083 21.8531C28.9264 21.2844 30.3347 21 31.8333 21C33.3319 21 34.7403 21.2844 36.0583 21.8531C37.3764 22.4219 38.5229 23.1937 39.4979 24.1687C40.4729 25.1437 41.2448 26.2903 41.8135 27.6083C42.3823 28.9264 42.6667 30.3347 42.6667 31.8333C42.6667 33.3319 42.3823 34.7403 41.8135 36.0583C41.2448 37.3764 40.4729 38.5229 39.4979 39.4979C38.5229 40.4729 37.3764 41.2448 36.0583 41.8135C34.7403 42.3823 33.3319 42.6667 31.8333 42.6667ZM31.8333 40.5C34.2528 40.5 36.3021 39.6604 37.9812 37.9812C39.6604 36.3021 40.5 34.2528 40.5 31.8333C40.5 29.4139 39.6604 27.3646 37.9812 25.6854C36.3021 24.0062 34.2528 23.1667 31.8333 23.1667C29.4139 23.1667 27.3646 24.0062 25.6854 25.6854C24.0062 27.3646 23.1667 29.4139 23.1667 31.8333C23.1667 34.2528 24.0062 36.3021 25.6854 37.9812C27.3646 39.6604 29.4139 40.5 31.8333 40.5Z" fill="#00529E" />
                </g>
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{marginLeft: '19px', marginRight: '56px'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white" />
              </svg>Kelas 2
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" style={{marginLeft: '55px'}}>
                <mask id="mask0_594_584" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={19} y={19} width={26} height={26}>
                  <rect x={19} y={19} width={26} height={26} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_594_584)">
                  <path d="M30.3167 36.8167L37.9542 29.1792L36.4375 27.6625L30.3167 33.7833L27.2292 30.6958L25.7125 32.2125L30.3167 36.8167ZM31.8333 42.6667C30.3347 42.6667 28.9264 42.3823 27.6083 41.8135C26.2903 41.2448 25.1437 40.4729 24.1687 39.4979C23.1937 38.5229 22.4219 37.3764 21.8531 36.0583C21.2844 34.7403 21 33.3319 21 31.8333C21 30.3347 21.2844 28.9264 21.8531 27.6083C22.4219 26.2903 23.1937 25.1437 24.1687 24.1687C25.1437 23.1937 26.2903 22.4219 27.6083 21.8531C28.9264 21.2844 30.3347 21 31.8333 21C33.3319 21 34.7403 21.2844 36.0583 21.8531C37.3764 22.4219 38.5229 23.1937 39.4979 24.1687C40.4729 25.1437 41.2448 26.2903 41.8135 27.6083C42.3823 28.9264 42.6667 30.3347 42.6667 31.8333C42.6667 33.3319 42.3823 34.7403 41.8135 36.0583C41.2448 37.3764 40.4729 38.5229 39.4979 39.4979C38.5229 40.4729 37.3764 41.2448 36.0583 41.8135C34.7403 42.3823 33.3319 42.6667 31.8333 42.6667ZM31.8333 40.5C34.2528 40.5 36.3021 39.6604 37.9812 37.9812C39.6604 36.3021 40.5 34.2528 40.5 31.8333C40.5 29.4139 39.6604 27.3646 37.9812 25.6854C36.3021 24.0062 34.2528 23.1667 31.8333 23.1667C29.4139 23.1667 27.3646 24.0062 25.6854 25.6854C24.0062 27.3646 23.1667 29.4139 23.1667 31.8333C23.1667 34.2528 24.0062 36.3021 25.6854 37.9812C27.3646 39.6604 29.4139 40.5 31.8333 40.5Z" fill="#00529E" />
                </g>
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{marginLeft: '19px', marginRight: '56px'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white" />
              </svg>Kelas 3
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" style={{marginLeft: '55px'}}>
                <mask id="mask0_594_584" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={19} y={19} width={26} height={26}>
                  <rect x={19} y={19} width={26} height={26} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_594_584)">
                  <path d="M30.3167 36.8167L37.9542 29.1792L36.4375 27.6625L30.3167 33.7833L27.2292 30.6958L25.7125 32.2125L30.3167 36.8167ZM31.8333 42.6667C30.3347 42.6667 28.9264 42.3823 27.6083 41.8135C26.2903 41.2448 25.1437 40.4729 24.1687 39.4979C23.1937 38.5229 22.4219 37.3764 21.8531 36.0583C21.2844 34.7403 21 33.3319 21 31.8333C21 30.3347 21.2844 28.9264 21.8531 27.6083C22.4219 26.2903 23.1937 25.1437 24.1687 24.1687C25.1437 23.1937 26.2903 22.4219 27.6083 21.8531C28.9264 21.2844 30.3347 21 31.8333 21C33.3319 21 34.7403 21.2844 36.0583 21.8531C37.3764 22.4219 38.5229 23.1937 39.4979 24.1687C40.4729 25.1437 41.2448 26.2903 41.8135 27.6083C42.3823 28.9264 42.6667 30.3347 42.6667 31.8333C42.6667 33.3319 42.3823 34.7403 41.8135 36.0583C41.2448 37.3764 40.4729 38.5229 39.4979 39.4979C38.5229 40.4729 37.3764 41.2448 36.0583 41.8135C34.7403 42.3823 33.3319 42.6667 31.8333 42.6667ZM31.8333 40.5C34.2528 40.5 36.3021 39.6604 37.9812 37.9812C39.6604 36.3021 40.5 34.2528 40.5 31.8333C40.5 29.4139 39.6604 27.3646 37.9812 25.6854C36.3021 24.0062 34.2528 23.1667 31.8333 23.1667C29.4139 23.1667 27.3646 24.0062 25.6854 25.6854C24.0062 27.3646 23.1667 29.4139 23.1667 31.8333C23.1667 34.2528 24.0062 36.3021 25.6854 37.9812C27.3646 39.6604 29.4139 40.5 31.8333 40.5Z" fill="#00529E" />
                </g>
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{marginLeft: '19px', marginRight: '56px'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white" />
              </svg>Kelas 4
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" style={{marginLeft: '55px'}}>
                <mask id="mask0_594_584" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={19} y={19} width={26} height={26}>
                  <rect x={19} y={19} width={26} height={26} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_594_584)">
                  <path d="M30.3167 36.8167L37.9542 29.1792L36.4375 27.6625L30.3167 33.7833L27.2292 30.6958L25.7125 32.2125L30.3167 36.8167ZM31.8333 42.6667C30.3347 42.6667 28.9264 42.3823 27.6083 41.8135C26.2903 41.2448 25.1437 40.4729 24.1687 39.4979C23.1937 38.5229 22.4219 37.3764 21.8531 36.0583C21.2844 34.7403 21 33.3319 21 31.8333C21 30.3347 21.2844 28.9264 21.8531 27.6083C22.4219 26.2903 23.1937 25.1437 24.1687 24.1687C25.1437 23.1937 26.2903 22.4219 27.6083 21.8531C28.9264 21.2844 30.3347 21 31.8333 21C33.3319 21 34.7403 21.2844 36.0583 21.8531C37.3764 22.4219 38.5229 23.1937 39.4979 24.1687C40.4729 25.1437 41.2448 26.2903 41.8135 27.6083C42.3823 28.9264 42.6667 30.3347 42.6667 31.8333C42.6667 33.3319 42.3823 34.7403 41.8135 36.0583C41.2448 37.3764 40.4729 38.5229 39.4979 39.4979C38.5229 40.4729 37.3764 41.2448 36.0583 41.8135C34.7403 42.3823 33.3319 42.6667 31.8333 42.6667ZM31.8333 40.5C34.2528 40.5 36.3021 39.6604 37.9812 37.9812C39.6604 36.3021 40.5 34.2528 40.5 31.8333C40.5 29.4139 39.6604 27.3646 37.9812 25.6854C36.3021 24.0062 34.2528 23.1667 31.8333 23.1667C29.4139 23.1667 27.3646 24.0062 25.6854 25.6854C24.0062 27.3646 23.1667 29.4139 23.1667 31.8333C23.1667 34.2528 24.0062 36.3021 25.6854 37.9812C27.3646 39.6604 29.4139 40.5 31.8333 40.5Z" fill="#00529E" />
                </g>
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" style={{marginLeft: '19px', marginRight: '56px'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white" />
              </svg>Kelas 5
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" style={{marginLeft: '55px'}}>
                <mask id="mask0_594_584" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={19} y={19} width={26} height={26}>
                  <rect x={19} y={19} width={26} height={26} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_594_584)">
                  <path d="M30.3167 36.8167L37.9542 29.1792L36.4375 27.6625L30.3167 33.7833L27.2292 30.6958L25.7125 32.2125L30.3167 36.8167ZM31.8333 42.6667C30.3347 42.6667 28.9264 42.3823 27.6083 41.8135C26.2903 41.2448 25.1437 40.4729 24.1687 39.4979C23.1937 38.5229 22.4219 37.3764 21.8531 36.0583C21.2844 34.7403 21 33.3319 21 31.8333C21 30.3347 21.2844 28.9264 21.8531 27.6083C22.4219 26.2903 23.1937 25.1437 24.1687 24.1687C25.1437 23.1937 26.2903 22.4219 27.6083 21.8531C28.9264 21.2844 30.3347 21 31.8333 21C33.3319 21 34.7403 21.2844 36.0583 21.8531C37.3764 22.4219 38.5229 23.1937 39.4979 24.1687C40.4729 25.1437 41.2448 26.2903 41.8135 27.6083C42.3823 28.9264 42.6667 30.3347 42.6667 31.8333C42.6667 33.3319 42.3823 34.7403 41.8135 36.0583C41.2448 37.3764 40.4729 38.5229 39.4979 39.4979C38.5229 40.4729 37.3764 41.2448 36.0583 41.8135C34.7403 42.3823 33.3319 42.6667 31.8333 42.6667ZM31.8333 40.5C34.2528 40.5 36.3021 39.6604 37.9812 37.9812C39.6604 36.3021 40.5 34.2528 40.5 31.8333C40.5 29.4139 39.6604 27.3646 37.9812 25.6854C36.3021 24.0062 34.2528 23.1667 31.8333 23.1667C29.4139 23.1667 27.3646 24.0062 25.6854 25.6854C24.0062 27.3646 23.1667 29.4139 23.1667 31.8333C23.1667 34.2528 24.0062 36.3021 25.6854 37.9812C27.3646 39.6604 29.4139 40.5 31.8333 40.5Z" fill="#00529E" />
                </g>
              </svg>
            </p>
          </div>
          <div className="deskripsi">
            <h4 style={{fontWeight: 'bold', color: '#00529E', fontSize: '34px', marginBottom: '25px'}}>Pengenalan Sosial Media Marketing</h4>
            <p style={{fontSize: '18px', marginBottom: '20px'}}>Sosial Media Marketing adalah strategi pemasaran yang menggunakan platform
              sosial media untuk
              mempromosikan
              produk, layanan, atau merek. Tujuannya adalah untuk terhubung dengan audiens target, membangun kesadaran
              merek, meningkatkan keterlibatan pengguna, dan akhirnya mengonversi pengikut menjadi pelanggan. Ini
              melibatkan berbagai aktivitas, seperti membuat konten menarik, berbagi posting, mengelola iklan
              berbayar,
              berinteraksi dengan pengguna, serta menganalisis data untuk memahami perilaku audiens dan meningkatkan
              strategi pemasaran.</p>
            <p style={{fontSize: '18px',marginRight:'70px'}}>Tidak hanya itu, sosial media marketing juga memungkinkan interaksi langsung
              antara merek dan konsumen.
              Ini
              memberikan kesempatan bagi perusahaan untuk merespons umpan balik secara real-time, menjawab pertanyaan,
              dan
              mengatasi masalah pelanggan dengan cepat. Dengan membangun hubungan yang lebih pribadi dan autentik
              dengan
              audiens, perusahaan dapat membangun kepercayaan, loyalitas, dan mendapatkan wawasan berharga tentang
              preferensi dan kebutuhan konsumen untuk memperbaiki produk atau layanan mereka. Dengan analisis data
              yang
              terus-menerus dari aktivitas sosial media, perusahaan juga dapat mengukur kinerja kampanye mereka dan
              menyesuaikan strategi untuk meningkatkan hasil pemasaran mereka di masa depan.</p>
          </div>
        </div>
        <div className="button d-flex">
          <button className="btn-detail d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={16} viewBox="0 0 26 16" fill="none" style={{marginRight: '19px'}}>&gt;
              <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="white" />
            </svg>
            Detail Kelas</button>
          <button className="btn-mengapa d-flex">
            Mengapa SMM itu Penting?
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={16} viewBox="0 0 26 16" fill="none" style={{marginLeft: '19px'}}>
              <path d="M25.7071 7.29289C26.0976 7.68342 26.0976 8.31658 25.7071 8.70711L19.3431 15.0711C18.9526 15.4616 18.3195 15.4616 17.9289 15.0711C17.5384 14.6805 17.5384 14.0474 17.9289 13.6569L23.5858 8L17.9289 2.34315C17.5384 1.95262 17.5384 1.31946 17.9289 0.928932C18.3195 0.538408 18.9526 0.538408 19.3431 0.928932L25.7071 7.29289ZM0 7L25 7V9L0 9L0 7Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      );
    }

export default KelasDiikuti;
