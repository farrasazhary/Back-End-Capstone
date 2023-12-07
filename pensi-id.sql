-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2023 at 05:06 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pensi-id`
--

-- --------------------------------------------------------

--
-- Table structure for table `galery`
--

CREATE TABLE `galery` (
  `id` int NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `pencipta` varchar(100) NOT NULL,
  `tanggal_cipta` date NOT NULL,
  `gambar_galery` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `galery`
--

INSERT INTO `galery` (`id`, `judul`, `deskripsi`, `pencipta`, `tanggal_cipta`, `gambar_galery`) VALUES
(1, 'MANCING mania mantap', 'cek 123 haduhhhh lol', 'sujewo tejo', '2010-11-11', '1701968574340-Screenshot 2023-12-07 143555.png'),
(2, 'MANCING mania', 'cek 123 haduhhhh', 'sujewo sss', '2010-11-11', '1701968299282-Screenshot 2023-12-07 143555.png');

-- --------------------------------------------------------

--
-- Table structure for table `kegiatan`
--

CREATE TABLE `kegiatan` (
  `id` int NOT NULL,
  `judul_kegiatan` varchar(225) NOT NULL,
  `tanggal_kegiatan` date NOT NULL,
  `alamat_kegiatan` varchar(225) NOT NULL,
  `deskripsi_kegiatan` text NOT NULL,
  `waktu_kegiatan` time NOT NULL,
  `gambar_kegiatan` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `kegiatan`
--

INSERT INTO `kegiatan` (`id`, `judul_kegiatan`, `tanggal_kegiatan`, `alamat_kegiatan`, `deskripsi_kegiatan`, `waktu_kegiatan`, `gambar_kegiatan`) VALUES
(1, 'Buang Jung', '2099-11-11', 'Bangka Selatan', 'Upacara Buang Jung merupakan upacara adat yang mana hasil bumi akan dilarungkan ke laut. Tradisi ini dilakukan sebagai bentuk rasa syukur para masyarakat di sana. Kamu dapat menyaksikan tradisi ini di daerah seperti Desa Kumbung, Kecamatan Lempar Pongok di Kabupaten Bangka Selatan. Hasil bumi yang akan dilarungkan akan ditaruh di atas perahu kecil. Masyarakat setempat dilarang untuk melakukan kegiatan di laut selama 7 hari setelah tradisi ini berlangsung. Bagi masyarakat setempat, tradisi ini merupakan daya tarik tersendiri bagi wisatawan lokal.', '11:11:11', '1701922399254-buang-jung-1482db3896a3c753d07b684574786050.jpg'),
(2, 'Perang Ketupat', '2099-11-11', 'Bangka Barat', 'Salah satu tradisi dari Kepulauan Bangka Belitung yang tak kalah menarik ialah perang ketupat atau ruah tempilang. Tradisi ini diselenggarakan setiap masuk Tahun Baru Islam atau 1 Muharram. Para penduduk setempat akan berbondong-bondong menuju ke pantai. Saat meriam dinyalakan, para penduduk dapat saling melempar ketupat ke setiap orang yang mereka temui. Kamu dapat melihat tradisi ini di desa-desa sekitar Pantai Tempilang, Bangka Barat. Tak sedikit banyak perantau yang pulang dan wisatawan yang berdatangan untuk menonton tradisi ini.', '11:11:11', '1701922675737-perang-ketupat-696x522-838a98587069c057b922f10ef8e10ead.jpg'),
(3, 'MANCING mania mantap', '2024-11-11', 'tangerang asddd', 'aaaaaaaaaaaaaaaaaaa aaaaaaaaaaa weeeeeeeeeeeeee dfsffsad ', '11:11:11', '1701968499264-Screenshot 2023-12-07 093135.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `handphone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `handphone`, `email`, `password`) VALUES
(1, 'host', '082288228822', 'host@gmail.com', 'host'),
(3, 'admin', '082288228822', 'admin@gmail.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `galery`
--
ALTER TABLE `galery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kegiatan`
--
ALTER TABLE `kegiatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `galery`
--
ALTER TABLE `galery`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kegiatan`
--
ALTER TABLE `kegiatan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
