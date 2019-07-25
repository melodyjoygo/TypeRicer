CREATE DATABASE  IF NOT EXISTS `typericer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `typericer`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: typericer
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `texts`
--

DROP TABLE IF EXISTS `texts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `texts` (
  `idtexts` int(11) NOT NULL,
  `texts` varchar(10000) NOT NULL,
  PRIMARY KEY (`idtexts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texts`
--

INSERT INTO `texts` VALUES (1,'When we have respect for ourselves and others, we gravitate towards connections that encourage that.'),(2,'A positive philosophy turns into a positive attitude, which turns into positive actions, which turns into positive results, which turns into a positive lifestyle. A positive life.'),(3,'I can give you a six-word formula for success: Think things through, then follow through.'),(4,'One must live the way one thinks or end up thinking the way one has lived.'),(5,'Adhere to your purpose and you will soon feel as well as you ever did. On the contrary, if you falter, and give up, you will lose the power of keeping any resolution, and will regret it all your life.'),(6,'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.'),(7,'You\'ve got to ask yourself one question: \'Do I feel lucky?\' Well, do ya, punk?'),(8,'Quit, don\'t quit? Noodles, don\'t noodles? You are too concerned about what was and what will be. There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'),(9,'Why so you can lock me up? Nah. Just bury me in the ocean with my ancestors who jumped from ships, ’cause they knew death was better than bondage.'),(10,'Listen to the pain. It’s both history teacher and fortune teller. Pain teaches us who we are, Wade. Sometimes, it’s so bad, we feel like we’re dying. But we can’t really live till we’ve died a little, can we? Wade? Wade?');

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `wpm` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-25 18:38:52
