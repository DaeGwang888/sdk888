-- --------------------------------------------------------
-- 호스트:                          3.39.30.117
-- 서버 버전:                        5.7.28 - MySQL Community Server (GPL)
-- 서버 OS:                        Linux
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- TODO 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `TODO` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `TODO`;

-- 테이블 TODO.TBL_TODO_CARD 구조 내보내기
CREATE TABLE IF NOT EXISTS `TBL_TODO_CARD` (
  `CL_SEQ` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CL_TODO_SEQ` int(11) DEFAULT NULL,
  `CL_TITLE` varchar(200) DEFAULT NULL,
  `CL_DEL_YN` char(1) DEFAULT 'N',
  PRIMARY KEY (`CL_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 TODO.TBL_TODO_CARD:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `TBL_TODO_CARD` DISABLE KEYS */;
INSERT INTO `TBL_TODO_CARD` (`CL_SEQ`, `CL_TODO_SEQ`, `CL_TITLE`, `CL_DEL_YN`) VALUES
	(1, 68, '1', 'Y'),
	(2, 68, '2', 'Y'),
	(3, 68, '3', 'Y'),
	(4, 68, '4', 'Y'),
	(5, 68, '5', 'Y'),
	(6, 68, '6', 'Y'),
	(7, 68, '12345', 'Y'),
	(8, NULL, '1', 'N'),
	(9, 68, '12345', 'Y'),
	(10, 68, '123456', 'Y'),
	(11, 68, '1234567', 'Y'),
	(12, 68, '12345678', 'Y'),
	(13, 68, '12345678', 'Y'),
	(14, 68, '123456789', 'Y'),
	(15, 68, '12345678910', 'Y'),
	(16, 68, '12345678911', 'Y'),
	(17, 68, '13579', 'N'),
	(18, 68, '123456789112', 'N'),
	(19, 68, '1234567891123', 'N'),
	(20, 68, '12345678911234', 'N');
/*!40000 ALTER TABLE `TBL_TODO_CARD` ENABLE KEYS */;

-- 테이블 TODO.TBL_TODO_LIST 구조 내보내기
CREATE TABLE IF NOT EXISTS `TBL_TODO_LIST` (
  `TL_SEQ` int(11) NOT NULL AUTO_INCREMENT,
  `TL_TITLE` char(50) NOT NULL,
  `TL_DEL_YN` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`TL_SEQ`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 TODO.TBL_TODO_LIST:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `TBL_TODO_LIST` DISABLE KEYS */;
INSERT INTO `TBL_TODO_LIST` (`TL_SEQ`, `TL_TITLE`, `TL_DEL_YN`) VALUES
	(41, 'Doing', 'Y'),
	(42, 'Doing2', 'Y'),
	(43, 'Doing3', 'Y'),
	(44, 'Doing4', 'Y'),
	(63, '1', 'Y'),
	(64, '3번 목록 추가', 'Y'),
	(65, '12345', 'Y'),
	(66, '새로운 카드 목록 추가', 'Y'),
	(67, '새로운 카드 목록 추가 2', 'Y'),
	(68, '새로운 목록 추가 1', 'Y');
/*!40000 ALTER TABLE `TBL_TODO_LIST` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
