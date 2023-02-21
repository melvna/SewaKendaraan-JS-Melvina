-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2023 at 10:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sewa_kendaraan`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_admin`
--

CREATE TABLE `data_admin` (
  `id_admin` int(11) NOT NULL,
  `nama_admin` varchar(255) NOT NULL,
  `status_admin` enum('aktif','tidak aktif') NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_admin`
--

INSERT INTO `data_admin` (`id_admin`, `nama_admin`, `status_admin`, `username`, `password`) VALUES
(2, 'valen', 'aktif', 'valen', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Table structure for table `data_kendaraan`
--

CREATE TABLE `data_kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `nopol` varchar(255) NOT NULL,
  `warna` varchar(255) NOT NULL,
  `kondisi_kendaraan` enum('baik','rusak') NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_kendaraan`
--

INSERT INTO `data_kendaraan` (`id_kendaraan`, `nopol`, `warna`, `kondisi_kendaraan`, `image`) VALUES
(6, 'N 115 LN', 'biru', 'rusak', 'image-1676527466274.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `data_penyewa`
--

CREATE TABLE `data_penyewa` (
  `id_penyewa` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `nik` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_penyewa`
--

INSERT INTO `data_penyewa` (`id_penyewa`, `nama`, `alamat`, `nik`, `username`, `password`) VALUES
(2, 'melvna', 'kepanjen', 1998, '', ''),
(3, 'ratih', 'kepanjen', 1998, '', ''),
(5, 'melvna', 'kepanjen', 1889, 'melvna', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Table structure for table `detail_sewa_kendaraan`
--

CREATE TABLE `detail_sewa_kendaraan` (
  `id_detail_sewa_kendaraan` int(11) NOT NULL,
  `id_sewa_kendaraan` int(11) NOT NULL,
  `id_kendaraan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sewa_kendaraan`
--

CREATE TABLE `sewa_kendaraan` (
  `waktu` date NOT NULL,
  `id_admin` int(11) NOT NULL,
  `id_penyewa` int(11) NOT NULL,
  `id_sewa_kendaraan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sewa_kendaraan`
--

INSERT INTO `sewa_kendaraan` (`waktu`, `id_admin`, `id_penyewa`, `id_sewa_kendaraan`) VALUES
('2023-02-15', 2, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_admin`
--
ALTER TABLE `data_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `data_kendaraan`
--
ALTER TABLE `data_kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`);

--
-- Indexes for table `data_penyewa`
--
ALTER TABLE `data_penyewa`
  ADD PRIMARY KEY (`id_penyewa`);

--
-- Indexes for table `detail_sewa_kendaraan`
--
ALTER TABLE `detail_sewa_kendaraan`
  ADD PRIMARY KEY (`id_detail_sewa_kendaraan`),
  ADD KEY `id_penyewa` (`id_detail_sewa_kendaraan`),
  ADD KEY `id_sewa_kendaraan` (`id_sewa_kendaraan`),
  ADD KEY `id_kendaraan` (`id_kendaraan`);

--
-- Indexes for table `sewa_kendaraan`
--
ALTER TABLE `sewa_kendaraan`
  ADD PRIMARY KEY (`id_sewa_kendaraan`),
  ADD KEY `id_admin` (`id_admin`,`id_penyewa`),
  ADD KEY `id_penyewa` (`id_penyewa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_admin`
--
ALTER TABLE `data_admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_kendaraan`
--
ALTER TABLE `data_kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `data_penyewa`
--
ALTER TABLE `data_penyewa`
  MODIFY `id_penyewa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `detail_sewa_kendaraan`
--
ALTER TABLE `detail_sewa_kendaraan`
  MODIFY `id_detail_sewa_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sewa_kendaraan`
--
ALTER TABLE `sewa_kendaraan`
  MODIFY `id_sewa_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
