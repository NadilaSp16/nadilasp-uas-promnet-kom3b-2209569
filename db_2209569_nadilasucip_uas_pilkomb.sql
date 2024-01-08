-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jan 2024 pada 01.54
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2209569_nadilasucip_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjamanbuku_nadilasp`
--

CREATE TABLE `peminjamanbuku_nadilasp` (
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
-- Dumping data untuk tabel `peminjamanbuku_nadilasp`
--

INSERT INTO `peminjamanbuku_nadilasp` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(21, 'Luka Cita', 1, 'Nadila Suci Permatasari', 'Jl. GegerKalong No.75', '081222732585', '2024-01-04', '2024-01-05', '1 hari'),
(22, 'Resep Masakan Padang', 1, 'Dina Rohmatika', 'Jl. Limbangan No. 12', '081256786543', '2024-01-01', '2024-01-07', '6 hari'),
(23, 'Hujan', 2, 'Puri Aghnia Putri', 'Jl. GegerKalong No.55', '082345789101', '2024-01-05', '2024-01-07', '2 hari'),
(25, 'Bumi Manusia', 1, 'Fajar Shandi', 'Jl. Mawar No. 110', '08123456891012', '2024-01-03', '2024-01-07', '4 hari'),
(26, 'Bidadari yang Mengembara', 1, 'Chintya Intan Putri', 'Jl. Soekarno Hatta No.45', '082324678912', '2024-01-01', '2024-01-07', '6 hari'),
(27, 'Laskar Pelangi', 1, 'Chintya Intan Putri', 'Jl. Soekarno Hatta No.45', '082324678912', '2024-01-03', '2024-01-07', '4 hari'),
(28, 'Algoritma & Pemrograman', 2, 'Rika Aulia Putri', 'Jl. Kebangsaan No. 19', '082336789651', '2024-01-03', '2024-01-04', '1 hari'),
(29, 'Bumi', 1, 'Agung Lesmana Putra', 'Jl. Limbangan barat No. 13', '081276890987', '2024-01-04', '2024-01-07', '3 hari'),
(30, 'Rindu', 1, 'Agung Lesmana Putra', 'Jl. Limbangan barat No. 13', '081276890987', '2024-01-06', '2024-01-07', '1 hari'),
(31, 'Manusia Setengah Salmon', 1, 'Radit Alfariza', 'Jl. Selvia V No. 5', '0812348765109', '2024-01-05', '2024-01-07', '2 hari'),
(32, 'Ubur-ubur Lembur', 1, 'Radit Alfariza', 'Jl. Selvia V No.5', '0812348765109', '2024-01-05', '2024-01-07', '2 hari'),
(33, 'Pengantar Teknologi Informasi', 2, 'Adjie Kusuma', 'Jl. Priangan Barat No.5', '0812227535109', '2024-01-01', '2024-01-07', '6 hari'),
(34, 'Metode Penelitian', 1, 'Adjie Kusuma', 'Jl. Priangan Barat No. 5', '0812227535109', '2024-01-01', '2024-01-07', '6 hari'),
(35, 'Sistem Komputer', 1, 'Adjie Kusuma', 'Jl. Priangan barat No.5', '0812227535109', '2024-01-04', '2024-01-07', '3 hari'),
(37, 'Kalkulus', 1, 'Putri Rika', 'Jl. Pahlawan No. 15', '08234567890102', '2024-01-06', '2024-01-08', '2 hari');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `peminjamanbuku_nadilasp`
--
ALTER TABLE `peminjamanbuku_nadilasp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `peminjamanbuku_nadilasp`
--
ALTER TABLE `peminjamanbuku_nadilasp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
