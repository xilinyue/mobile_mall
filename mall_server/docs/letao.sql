/*
 Navicat Premium Data Transfer

 Source Server         : my_mysql
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : letao

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 26/03/2020 20:19:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `addressDetail` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(4) NULL DEFAULT NULL,
  `recipients` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `postCode` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mobile` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, 1, '山西省太原市小店区', '解放东路传智播客科技集团14层1402室', 1, '周双大', '111112', NULL);

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '轮播图地址',
  `img_href` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '去往地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (1, '/mobile/images/banner1.png', NULL);
INSERT INTO `banner` VALUES (2, '/mobile/images/banner2.png', NULL);
INSERT INTO `banner` VALUES (3, '/mobile/images/banner3.png', NULL);
INSERT INTO `banner` VALUES (4, '/mobile/images/banner4.png', NULL);
INSERT INTO `banner` VALUES (5, '/mobile/images/banner5.png', NULL);
INSERT INTO `banner` VALUES (6, '/mobile/images/banner6.png', NULL);
INSERT INTO `banner` VALUES (7, '/mobile/images/banner7.png', NULL);
INSERT INTO `banner` VALUES (8, '/mobile/images/banner8.jpg', NULL);
INSERT INTO `banner` VALUES (9, '/mobile/images/banner9.png', NULL);

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `categoryId` int(11) NULL DEFAULT NULL,
  `brandLogo` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(4) NULL DEFAULT NULL,
  `hot` int(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES (1, '耐克', 1, '/mobile/images/brand1.png', 1, 1);
INSERT INTO `brand` VALUES (2, '阿迪', 1, '/mobile/images/brand2.png', 1, 1);
INSERT INTO `brand` VALUES (3, '新百伦', 1, '/mobile/images/brand3.png', 1, 1);
INSERT INTO `brand` VALUES (4, '哥伦比亚', 1, '/mobile/images/brand4.png', 1, 0);
INSERT INTO `brand` VALUES (5, '匡威', 1, '/mobile/images/brand5.png', 1, 1);
INSERT INTO `brand` VALUES (6, '阿萨德1', 2, '/mobile/images/brand5.png', 1, 1);
INSERT INTO `brand` VALUES (7, '阿萨德2', 2, '/mobile/images/brand5.png', 1, 1);

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `productId` int(11) NULL DEFAULT NULL,
  `num` int(20) NULL DEFAULT NULL,
  `size` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (1, 1, 1, 1, '50', 1);
INSERT INTO `cart` VALUES (2, 1, 2, 2, '45', 1);
INSERT INTO `cart` VALUES (3, 1, 3, 4, '40', 1);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '运动馆', 1);
INSERT INTO `category` VALUES (2, '女士馆', 1);
INSERT INTO `category` VALUES (3, '男士馆', 1);
INSERT INTO `category` VALUES (4, '帆布馆', 1);
INSERT INTO `category` VALUES (5, '户外管', 1);
INSERT INTO `category` VALUES (6, '女神', 1);

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mobile` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `authority` int(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, 'root', '4QrcOUm6Wau+VuBX8g+IPg==', '13902060052', 1);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `oldPrice` float NULL DEFAULT NULL COMMENT '商品价格',
  `price` float NULL DEFAULT NULL COMMENT '商品折扣价',
  `proDesc` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品描述',
  `size` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品尺寸',
  `statu` int(4) NULL DEFAULT NULL COMMENT '是否下架',
  `updateTime` datetime(0) NULL DEFAULT NULL COMMENT '上下架时间',
  `num` int(20) NULL DEFAULT NULL COMMENT '商品库存',
  `brandId` int(11) NULL DEFAULT NULL COMMENT '归属品牌',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮', 888.1, 499.1, '描述', '40-50', 1, '2017-01-05 00:28:29', 20, 1);
INSERT INTO `product` VALUES (2, '李宁闪击篮球鞋驭帅10镭射队尚4男韦德之道空袭中高帮队尚3.5球鞋', 888.1, 499.1, '描述', '35-45', 1, '2017-01-05 00:28:29', 20, 1);
INSERT INTO `product` VALUES (3, 'Sport飓风 Nike Kwazi 休闲运动鞋男 844839-002-001-100-400', 888.1, 499.1, '描述', '30-50', 1, '2017-01-05 00:28:29', 20, 1);
INSERT INTO `product` VALUES (4, '指南针运动 NIKE HYPERSHIFT篮球鞋 844392-010-607-164-017现货', 888.1, 499.1, '描述', '40-55', 1, '2017-01-05 00:28:29', 20, 1);
INSERT INTO `product` VALUES (5, '【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋', 8868.1, 4969.1, '描述123123', '40-50', 1, '2017-01-05 00:48:05', 22, 2);
INSERT INTO `product` VALUES (6, '【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋', 342, 112, '描述123123', '35-56', 1, '2017-01-05 00:48:05', 44, 2);

-- ----------------------------
-- Table structure for product_picture
-- ----------------------------
DROP TABLE IF EXISTS `product_picture`;
CREATE TABLE `product_picture`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picName` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `productId` int(11) NULL DEFAULT NULL,
  `picAddr` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_picture
-- ----------------------------
INSERT INTO `product_picture` VALUES (1, 'product.jpg', 1, '/mobile/images/product.jpg');
INSERT INTO `product_picture` VALUES (2, 'detail.jpg', 2, '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES (3, 'detail.jpg', 3, '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES (4, '/mobile/images/detail.jpg', 4, '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES (5, '/mobile/images/detail.jpg', 5, '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES (6, '/mobile/images/detail.jpg', 6, '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES (7, '/mobile/images/detail.jpg', 1, '/mobile/images/detail.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mobile` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'itcast', 'lueSGJZetyySpUndWjMBEg==', '15102324243', 1);

SET FOREIGN_KEY_CHECKS = 1;
