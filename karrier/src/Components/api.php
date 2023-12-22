<?php
@include 'config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

session_start();

// Fungsi untuk mendapatkan data yang diperlukan
function getData() {
   // Lakukan logika untuk mendapatkan data
   $data = array('key' => 'value');
   echo json_encode($data);
}

// Cek apakah pengguna sudah login
if (!isset($_SESSION['user_name'])) {
   header('HTTP/1.0 401 Unauthorized');
   exit;
}

// Tangkap permintaan AJAX dari aplikasi React
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action'])) {
   if ($_GET['action'] === 'getData') {
      getData();
   }
}
?>
