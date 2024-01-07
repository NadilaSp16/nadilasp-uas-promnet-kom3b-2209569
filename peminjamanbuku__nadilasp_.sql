-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2024 at 07:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_[2209569]_[nadilasucip]_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_[nadilasp]`
--

CREATE TABLE `peminjamanbuku_[nadilasp]` (
  `id` int(11) NOT NULL,
  `judul_buku` text NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` text NOT NULL,
  `alamat_peminjam` text NOT NULL,
  `noHp_peminjam` text NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku_[nadilasp]`
--

INSERT INTO `peminjamanbuku_[nadilasp]` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'Algoritma Pemrograman', 2, 'Nadila Suci Permatasari', 'Jl. Gegerkalong Girang No.75', '081222732585', '2024-01-01', '2024-01-03', '2'),
(2, 'Luka Cita', 1, 'Jidan Ainul', 'Jl. GegerKalong Tengah No.10', '081333876876', '2023-12-20', '2024-01-01', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_[nadilasp]`
--
ALTER TABLE `peminjamanbuku_[nadilasp]`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_[nadilasp]`
--
ALTER TABLE `peminjamanbuku_[nadilasp]`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
