-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2017 at 07:03 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myfoodtracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_date`
--

DROP TABLE IF EXISTS `track_date`;
CREATE TABLE `track_date` (
  `history_date` date NOT NULL,
  `det_morning` text,
  `det_afternoon` text,
  `det_evening` text,
  `uihong_severity` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_date`
--

INSERT INTO `track_date` (`history_date`, `det_morning`, `det_afternoon`, `det_evening`, `uihong_severity`) VALUES
('2017-08-09', '[\"nasi\",\"susu\"]', '[\"asdfa\"]', '', 2),
('2017-08-17', '[\"nasi goreng\"]', '[\"sate padang\"]', '[\"tiongsim\"]', 0),
('2017-08-18', '[\"hotdog\"]', '[\"nasgor\"]', '', 1),
('2017-08-19', '[\"ayam\",\"roti\"]', '', '', 1),
('2017-08-23', '', '', '', 0),
('2017-09-22', '[\"test\"]', '', '[\"test\"]', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_date`
--
ALTER TABLE `track_date`
  ADD PRIMARY KEY (`history_date`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
