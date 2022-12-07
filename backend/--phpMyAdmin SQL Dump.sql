-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2022 at 04:31 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `carName` varchar(50) NOT NULL,
  `mileage` float NOT NULL,
  `location` varchar(50) NOT NULL,
  `engine` varchar(50) NOT NULL,
  `transmission` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `carImage` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`carName`, `mileage`, `location`, `engine`, `transmission`, `price`, `carImage`) VALUES
('Ford Explorer (2018)', 49, 'Dnipro', '3.5 diesel', 'Machine', 17900, 'https://www.cnet.com/a/img/resize/9016452438af3ac407b8ff0dd04ebc375d517e5b/hub/2017/04/10/618c303b-51d3-417e-8258-f33dc9724cfb/2018-ford-explorer-8.jpg?auto=webp&fit=crop&height=675&width=1200'),
('Honda CR-V (2019)', 0, 'Dnipro', '2.0 benzine', 'Machine', 23500, 'https://di-uploads-pod18.dealerinspire.com/executivehonda/uploads/2019/05/2019-CR-V.jpg'),
('Audi TT (2014)', 49, 'Dnipro', '2.4 benzine', 'Machine', 79300, 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20140304033346_2015-Audi-TT-Coupe-2.jpg&w=736&h=488&q=75&c=1'),
('Ford Ranger (2021)', 9, 'Dnipro', '4.0 diesel', 'Machine', 44900, 'https://cdn.motor1.com/images/mgl/zxgpn7/s1/2022-ford-ranger-wildtrak-static.jpg'),
('Mustang GT (2016)', 22, 'Dnipro', '6.0 benzine', 'Machine', 16200, 'https://i.pinimg.com/736x/c8/2d/b2/c82db288a42bc05e43ff70ac400702f3.jpg'),
('BMW X7 (2019)', 49, 'Dnipro', '3.5 diesel', 'Machine', 69900, 'https://imgd-ct.aeplcdn.com/664x415/cw/ec/28286/BMW-X7-Left-Front-Three-Quarter-145764.jpg?wm=0&q=75');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
