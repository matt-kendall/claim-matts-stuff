CREATE DATABASE `auction` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bids` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` float DEFAULT NULL,
  `timestamp` datetime(6) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg1mdb2uha9v6t2ujkvlmj3tuq` (`item_id`),
  CONSTRAINT `FKg1mdb2uha9v6t2ujkvlmj3tuq` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `thumbnailFilename` varchar(255) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdslnevht5audx7y4s3r87e69e` (`item_id`),
  CONSTRAINT `FKdslnevht5audx7y4s3r87e69e` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
