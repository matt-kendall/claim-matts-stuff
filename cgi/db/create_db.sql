DROP DATABASE `auction`;
CREATE DATABASE `auction` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `auction`;

CREATE TABLE `items` (
  `id` char(36) NOT NULL,
  `description` MEDIUMTEXT DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bids` (
  `id` char(36) NOT NULL,
  `amount` float DEFAULT NULL,
  `timestamp` datetime(6) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `item_id` char(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg1mdb2uha9v6t2ujkvlmj3tuq` (`item_id`),
  CONSTRAINT `FKg1mdb2uha9v6t2ujkvlmj3tuq` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `photos` (
  `id` char(36) NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `thumbnailFilename` varchar(255) DEFAULT NULL,
  `item_id` char(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdslnevht5audx7y4s3r87e69e` (`item_id`),
  CONSTRAINT `FKdslnevht5audx7y4s3r87e69e` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
