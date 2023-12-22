import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DaftarKelas from './Components/DaftarKelas';
import Lowongan from './Components/Lowongan';
import DaftarKelasPage from './Components/DaftarKelasPage';
import Nontifikasi from './Components/Nontifikasi';
import Pelatihan from './Components/Pelatihan';
import Profile from './Components/Profile';
import DeskripsiPelatihan from './Components/DeskripsiPelatihan';
import KelasDiikuti from './Components/KelasDiikuti';
import Beranda from './Components/Beranda';
import Login from './Components/Login';
import Signup from './Components/Signup';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
          <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          </Routes>
        <Navbar />
        <Routes>
          <Route path="/DaftarKelas" element={<DaftarKelas />} />
          <Route path="/Beranda" element={<Beranda />} />
          <Route path="/KelasDiikuti" element={<KelasDiikuti />} />
          <Route path="/Lowongan" element={<Lowongan />} />
          <Route path="/DaftarKelasPage" element={<DaftarKelasPage />} />
          <Route path="/Nontifikasi" element={<Nontifikasi />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Pelatihan" element={<Pelatihan />} />
          <Route path="/DeskripsiPelatihan" element={<DeskripsiPelatihan />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;