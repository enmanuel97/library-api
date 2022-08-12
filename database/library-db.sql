/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MariaDB
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : library-db

 Target Server Type    : MariaDB
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 11/08/2022 21:30:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `resume` text DEFAULT NULL,
  `publiched_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of books
-- ----------------------------
BEGIN;
INSERT INTO `books` VALUES (1, 'Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (2, 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling. The second novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (3, 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling. The third novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (4, 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling. The fourth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (5, 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling. The fifth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (6, 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J. K. Rowling. The sixth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
INSERT INTO `books` VALUES (7, 'Harry Potter and the Deathly Hallows', 'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling. The seventh novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ', '2022-08-12 01:18:49', NULL, NULL, 'J.K. Rowling');
COMMIT;

-- ----------------------------
-- Table structure for pages
-- ----------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of pages
-- ----------------------------
BEGIN;
INSERT INTO `pages` VALUES (1, 1, 'Harry Potter and the Philosopher\'s Stone page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (2, 1, 'Harry Potter and the Philosopher\'s Stone page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (3, 1, 'Harry Potter and the Philosopher\'s Stone page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (4, 1, 'Harry Potter and the Philosopher\'s Stone page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (5, 1, 'Harry Potter and the Philosopher\'s Stone page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (6, 1, 'Harry Potter and the Philosopher\'s Stone page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (7, 1, 'Harry Potter and the Philosopher\'s Stone page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (8, 1, 'Harry Potter and the Philosopher\'s Stone page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (9, 1, 'Harry Potter and the Philosopher\'s Stone page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (10, 1, 'Harry Potter and the Philosopher\'s Stone page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (11, 2, 'Harry Potter and the Chamber of Secrets page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (12, 2, 'Harry Potter and the Chamber of Secrets page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (13, 2, 'Harry Potter and the Chamber of Secrets page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (14, 2, 'Harry Potter and the Chamber of Secrets page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (15, 2, 'Harry Potter and the Chamber of Secrets page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (16, 2, 'Harry Potter and the Chamber of Secrets page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (17, 2, 'Harry Potter and the Chamber of Secrets page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (18, 2, 'Harry Potter and the Chamber of Secrets page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (19, 2, 'Harry Potter and the Chamber of Secrets page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (20, 2, 'Harry Potter and the Chamber of Secrets page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (21, 3, 'Harry Potter and the Prisoner of Azkaban page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (22, 3, 'Harry Potter and the Prisoner of Azkaban page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (23, 3, 'Harry Potter and the Prisoner of Azkaban page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (24, 3, 'Harry Potter and the Prisoner of Azkaban page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (25, 3, 'Harry Potter and the Prisoner of Azkaban page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (26, 3, 'Harry Potter and the Prisoner of Azkaban page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (27, 3, 'Harry Potter and the Prisoner of Azkaban page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (28, 3, 'Harry Potter and the Prisoner of Azkaban page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (29, 3, 'Harry Potter and the Prisoner of Azkaban page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (30, 3, 'Harry Potter and the Prisoner of Azkaban page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (31, 4, 'Harry Potter and the Goblet of Fire page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (32, 4, 'Harry Potter and the Goblet of Fire page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (33, 4, 'Harry Potter and the Goblet of Fire page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (34, 4, 'Harry Potter and the Goblet of Fire page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (35, 4, 'Harry Potter and the Goblet of Fire page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (36, 4, 'Harry Potter and the Goblet of Fire page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (37, 4, 'Harry Potter and the Goblet of Fire page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (38, 4, 'Harry Potter and the Goblet of Fire page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (39, 4, 'Harry Potter and the Goblet of Fire page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (40, 4, 'Harry Potter and the Goblet of Fire page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (41, 5, 'Harry Potter and the Order of the Phoenix page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (42, 5, 'Harry Potter and the Order of the Phoenix page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (43, 5, 'Harry Potter and the Order of the Phoenix page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (44, 5, 'Harry Potter and the Order of the Phoenix page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (45, 5, 'Harry Potter and the Order of the Phoenix page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (46, 5, 'Harry Potter and the Order of the Phoenix page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (47, 5, 'Harry Potter and the Order of the Phoenix page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (48, 5, 'Harry Potter and the Order of the Phoenix page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (49, 5, 'Harry Potter and the Order of the Phoenix page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (50, 5, 'Harry Potter and the Order of the Phoenix page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (51, 6, 'Harry Potter and the Half-Blood Prince page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (52, 6, 'Harry Potter and the Half-Blood Prince page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (53, 6, 'Harry Potter and the Half-Blood Prince page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (54, 6, 'Harry Potter and the Half-Blood Prince page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (55, 6, 'Harry Potter and the Half-Blood Prince page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (56, 6, 'Harry Potter and the Half-Blood Prince page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (57, 6, 'Harry Potter and the Half-Blood Prince page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (58, 6, 'Harry Potter and the Half-Blood Prince page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (59, 6, 'Harry Potter and the Half-Blood Prince page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (60, 6, 'Harry Potter and the Half-Blood Prince page 10.', NULL, NULL);
INSERT INTO `pages` VALUES (61, 7, 'Harry Potter and the Deathly Hallows page 1.', NULL, NULL);
INSERT INTO `pages` VALUES (62, 7, 'Harry Potter and the Deathly Hallows page 2.', NULL, NULL);
INSERT INTO `pages` VALUES (63, 7, 'Harry Potter and the Deathly Hallows page 3.', NULL, NULL);
INSERT INTO `pages` VALUES (64, 7, 'Harry Potter and the Deathly Hallows page 4.', NULL, NULL);
INSERT INTO `pages` VALUES (65, 7, 'Harry Potter and the Deathly Hallows page 5.', NULL, NULL);
INSERT INTO `pages` VALUES (66, 7, 'Harry Potter and the Deathly Hallows page 6.', NULL, NULL);
INSERT INTO `pages` VALUES (67, 7, 'Harry Potter and the Deathly Hallows page 7.', NULL, NULL);
INSERT INTO `pages` VALUES (68, 7, 'Harry Potter and the Deathly Hallows page 8.', NULL, NULL);
INSERT INTO `pages` VALUES (69, 7, 'Harry Potter and the Deathly Hallows page 9.', NULL, NULL);
INSERT INTO `pages` VALUES (70, 7, 'Harry Potter and the Deathly Hallows page 10.', NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
