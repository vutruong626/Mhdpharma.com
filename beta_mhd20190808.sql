-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: beta_mhd
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,NULL,2,'Bồi bổ sức khỏe - Tăng cường sức đề kháng','boi-bo-suc-khoe-tang-cuong-suc-de-khang','2019-07-22 02:16:18','2019-08-05 02:28:50'),(2,NULL,7,'Tiêu hóa - Gan mật','tieu-hoa-gan-mat','2019-07-22 02:16:18','2019-08-05 03:25:37'),(3,NULL,2,'Bổ - Cải thiện triệu chứng','bo-cai-thien-trieu-chung','2019-08-01 00:41:43','2019-08-05 03:27:51'),(4,2,1,'Osluma','osluma','2019-08-01 00:42:40','2019-08-05 03:34:16'),(5,13,1,'Acetium','acetium','2019-08-01 00:43:15','2019-08-05 03:32:30'),(6,1,2,'Gia Đình Cordy-X','gia-dinh-cordy-x','2019-08-01 00:43:45','2019-08-05 03:32:06'),(7,3,1,'Kid Grow Care','kid-grow-care','2019-08-01 00:44:34','2019-08-05 03:33:23'),(8,3,1,'Blood Tonic Care','blood-tonic-care','2019-08-02 02:46:43','2019-08-05 03:33:12'),(9,2,1,'Digesty Care','digesty-care','2019-08-02 02:47:44','2019-08-02 02:47:44'),(10,2,1,'Nano Heal','nano-heal','2019-08-02 02:48:01','2019-08-02 02:48:01'),(12,13,1,'Broncho Fresh','broncho-fresh','2019-08-02 02:48:41','2019-08-05 03:32:44'),(13,NULL,2,'Hô hấp','ho-hap','2019-08-05 03:27:15','2019-08-05 03:27:34'),(14,NULL,1,'Nhi','nhi','2019-08-05 03:28:12','2019-08-05 03:28:12'),(15,2,2,'Enzymax','enzymax','2019-08-05 03:34:50','2019-08-05 03:34:50'),(16,2,1,'BTIKG','btikg','2019-08-05 03:35:37','2019-08-05 03:35:37'),(17,14,1,'Viburgel','viburgel','2019-08-05 03:35:55','2019-08-05 03:35:55');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fanpage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'9B8-C9, Đường Số 10, KDC Dương Hồng Garden House, Xã Bình Hưng, Huyện Bình Chánh, TP.HCM.','(028) 6680 8366','info@mhdpharma.com','https://www.facebook.com/GreenLivingSongXanh/?ref=br_tf&epa=SEARCH_BOX','https://www.youtube.com/channel/UCRUPmvS6bOyWTvrKgkRnaZw','2019-07-29 20:41:45','2019-07-29 20:41:45');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_rows`
--

DROP TABLE IF EXISTS `data_rows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_rows` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data_type_id` int(10) unsigned NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `browse` tinyint(1) NOT NULL DEFAULT '1',
  `read` tinyint(1) NOT NULL DEFAULT '1',
  `edit` tinyint(1) NOT NULL DEFAULT '1',
  `add` tinyint(1) NOT NULL DEFAULT '1',
  `delete` tinyint(1) NOT NULL DEFAULT '1',
  `details` text COLLATE utf8mb4_unicode_ci,
  `order` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `data_rows_data_type_id_foreign` (`data_type_id`),
  CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_rows`
--

LOCK TABLES `data_rows` WRITE;
/*!40000 ALTER TABLE `data_rows` DISABLE KEYS */;
INSERT INTO `data_rows` VALUES (1,1,'id','number','ID',1,0,0,0,0,0,NULL,1),(2,1,'name','text','Name',1,1,1,1,1,1,NULL,2),(3,1,'email','text','Email',1,1,1,1,1,1,NULL,3),(4,1,'password','password','Password',1,0,0,1,1,0,NULL,4),(5,1,'remember_token','text','Remember Token',0,0,0,0,0,0,NULL,5),(6,1,'created_at','timestamp','Created At',0,1,1,0,0,0,NULL,6),(7,1,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,7),(8,1,'avatar','image','Avatar',0,1,1,1,1,1,NULL,8),(9,1,'user_belongsto_role_relationship','relationship','Role',0,1,1,1,1,0,'{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsTo\",\"column\":\"role_id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"roles\",\"pivot\":0}',10),(10,1,'user_belongstomany_role_relationship','relationship','Roles',0,1,1,1,1,0,'{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsToMany\",\"column\":\"id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"user_roles\",\"pivot\":\"1\",\"taggable\":\"0\"}',11),(11,1,'settings','hidden','Settings',0,0,0,0,0,0,NULL,12),(12,2,'id','number','ID',1,0,0,0,0,0,NULL,1),(13,2,'name','text','Name',1,1,1,1,1,1,NULL,2),(14,2,'created_at','timestamp','Created At',0,0,0,0,0,0,NULL,3),(15,2,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,4),(16,3,'id','number','ID',1,0,0,0,0,0,NULL,1),(17,3,'name','text','Name',1,1,1,1,1,1,NULL,2),(18,3,'created_at','timestamp','Created At',0,0,0,0,0,0,NULL,3),(19,3,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,4),(20,3,'display_name','text','Display Name',1,1,1,1,1,1,NULL,5),(21,1,'role_id','text','Role',1,1,1,1,1,1,NULL,9),(22,4,'id','number','ID',1,0,0,0,0,0,'{}',1),(23,4,'parent_id','select_dropdown','Parent',0,0,1,1,1,1,'{\"default\":\"\",\"null\":\"\",\"options\":{\"_empty_\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}',2),(24,4,'order','text','Order',1,1,1,1,1,1,'{\"default\":1}',3),(25,4,'name','text','Name',1,1,1,1,1,1,'{}',4),(26,4,'slug','text','Slug',1,1,1,1,1,1,'{\"slugify\":{\"origin\":\"name\"}}',5),(27,4,'created_at','timestamp','Created At',0,0,1,0,0,0,'{}',6),(28,4,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',7),(29,5,'id','number','ID',1,0,0,0,0,0,'{}',1),(30,5,'author_id','text','Author',1,0,1,1,0,1,'{}',2),(31,5,'category_id','text','Loại sản phẩm',0,0,1,1,1,0,'{}',3),(32,5,'title','text','Tiêu đề',1,1,1,1,1,1,'{}',4),(33,5,'excerpt','rich_text_box','Mô tả ngắn',0,0,1,1,1,1,'{}',5),(34,5,'body','rich_text_box','Nọi dung bài viết',1,0,1,1,1,1,'{}',6),(35,5,'image','image','Hình ảnh',0,1,1,1,1,1,'{\"resize\":{\"width\":\"1000\",\"height\":\"null\"},\"quality\":\"70%\",\"upsize\":true,\"thumbnails\":[{\"name\":\"medium\",\"scale\":\"50%\"},{\"name\":\"small\",\"scale\":\"25%\"},{\"name\":\"cropped\",\"crop\":{\"width\":\"300\",\"height\":\"250\"}}]}',7),(36,5,'slug','text','Slug',1,0,1,1,1,1,'{\"slugify\":{\"origin\":\"title\",\"forceUpdate\":true},\"validation\":{\"rule\":\"unique:posts,slug\"}}',8),(37,5,'meta_description','text_area','Meta Description',0,0,1,1,1,1,'{}',9),(38,5,'meta_keywords','text_area','Meta Keywords',0,0,1,1,1,1,'{}',10),(39,5,'status','select_dropdown','Trạng thái',1,1,1,1,1,1,'{\"default\":\"DRAFT\",\"options\":{\"PUBLISHED\":\"published\",\"DRAFT\":\"draft\",\"PENDING\":\"pending\"}}',11),(40,5,'created_at','timestamp','Ngày tạo',0,1,1,0,0,0,'{}',12),(41,5,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',13),(42,5,'seo_title','text','SEO Title',0,1,1,1,1,1,'{}',14),(43,5,'featured','checkbox','Featured',1,1,1,1,1,1,'{}',15),(44,6,'id','number','ID',1,0,0,0,0,0,'{}',1),(45,6,'author_id','text','Author',1,0,0,0,0,0,'{}',2),(46,6,'title','text','Tiêu đề',1,1,1,1,1,1,'{}',3),(47,6,'excerpt','text_area','Mô tả ngắn',0,0,1,1,1,1,'{}',4),(48,6,'body','rich_text_box','Nọi dung bài viết',0,0,1,1,1,1,'{}',5),(49,6,'slug','text','Slug',1,0,1,1,1,1,'{\"slugify\":{\"origin\":\"title\"},\"validation\":{\"rule\":\"unique:pages,slug\"}}',6),(50,6,'meta_description','text','Meta Description',0,0,1,1,1,1,'{}',7),(51,6,'meta_keywords','text','Meta Keywords',0,0,1,1,1,1,'{}',8),(52,6,'status','select_dropdown','Status',1,1,1,1,1,1,'{\"default\":\"INACTIVE\",\"options\":{\"INACTIVE\":\"INACTIVE\",\"ACTIVE\":\"ACTIVE\"}}',9),(53,6,'created_at','timestamp','Created At',0,1,1,0,0,0,'{}',10),(54,6,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',11),(55,6,'image','image','Hình ảnh',0,1,1,1,1,1,'{}',12),(56,7,'id','text','Id',1,0,0,0,0,0,'{}',1),(57,7,'address','text','Địa chỉ',1,1,1,1,1,1,'{}',2),(58,7,'phone','text','Số điện thoại',1,1,1,1,1,1,'{}',3),(59,7,'email','text','Email',1,1,1,1,1,1,'{}',4),(60,7,'fanpage','text','Fanpage',1,1,1,1,1,1,'{}',5),(61,7,'youtube','text','Youtube',1,1,1,1,1,1,'{}',6),(62,7,'created_at','timestamp','Created At',0,1,1,1,0,1,'{}',7),(63,7,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',8);
/*!40000 ALTER TABLE `data_rows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_types`
--

DROP TABLE IF EXISTS `data_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_singular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_plural` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT '0',
  `server_side` tinyint(4) NOT NULL DEFAULT '0',
  `details` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `data_types_name_unique` (`name`),
  UNIQUE KEY `data_types_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_types`
--

LOCK TABLES `data_types` WRITE;
/*!40000 ALTER TABLE `data_types` DISABLE KEYS */;
INSERT INTO `data_types` VALUES (1,'users','users','User','Users','voyager-person','TCG\\Voyager\\Models\\User','TCG\\Voyager\\Policies\\UserPolicy','TCG\\Voyager\\Http\\Controllers\\VoyagerUserController','',1,0,NULL,'2019-07-22 02:16:09','2019-07-22 02:16:09'),(2,'menus','menus','Menu','Menus','voyager-list','TCG\\Voyager\\Models\\Menu',NULL,'','',1,0,NULL,'2019-07-22 02:16:09','2019-07-22 02:16:09'),(3,'roles','roles','Role','Roles','voyager-lock','TCG\\Voyager\\Models\\Role',NULL,'','',1,0,NULL,'2019-07-22 02:16:10','2019-07-22 02:16:10'),(4,'categories','categories','Category','Categories','voyager-categories','App\\Models\\Category',NULL,NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"desc\",\"default_search_key\":null,\"scope\":null}','2019-07-22 02:16:17','2019-08-01 00:29:50'),(5,'posts','posts','Sản Phảm','Sản Phảm','voyager-basket','App\\Models\\Post','TCG\\Voyager\\Policies\\PostPolicy',NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"desc\",\"default_search_key\":null,\"scope\":null}','2019-07-22 02:16:18','2019-08-05 06:43:39'),(6,'pages','pages','Page','Pages','voyager-file-text','App\\Models\\Page',NULL,NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"desc\",\"default_search_key\":null,\"scope\":null}','2019-07-22 02:16:19','2019-07-25 23:56:40'),(7,'contacts','contacts','Liên hệ','Liên hệ','voyager-company','App\\Models\\Contact',NULL,NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}','2019-07-29 02:54:20','2019-07-29 02:54:20');
/*!40000 ALTER TABLE `data_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_items`
--

DROP TABLE IF EXISTS `menu_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `menu_id` int(10) unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `menu_items_menu_id_foreign` (`menu_id`),
  CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_items`
--

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` VALUES (1,1,'Dashboard','','_self','voyager-boat',NULL,NULL,1,'2019-07-22 02:16:10','2019-07-22 02:16:10','voyager.dashboard',NULL),(2,1,'Media','','_self','voyager-images',NULL,15,3,'2019-07-22 02:16:10','2019-07-25 23:49:12','voyager.media.index',NULL),(3,1,'Users','','_self','voyager-person',NULL,15,2,'2019-07-22 02:16:10','2019-07-25 23:49:10','voyager.users.index',NULL),(4,1,'Roles','','_self','voyager-lock',NULL,15,1,'2019-07-22 02:16:10','2019-07-25 23:49:08','voyager.roles.index',NULL),(5,1,'Tools','','_self','voyager-tools',NULL,NULL,6,'2019-07-22 02:16:10','2019-07-29 02:54:31',NULL,NULL),(6,1,'Menu Builder','','_self','voyager-list',NULL,5,1,'2019-07-22 02:16:10','2019-07-25 23:49:06','voyager.menus.index',NULL),(7,1,'Database','','_self','voyager-data',NULL,5,2,'2019-07-22 02:16:10','2019-07-25 23:49:06','voyager.database.index',NULL),(8,1,'Compass','','_self','voyager-compass',NULL,5,3,'2019-07-22 02:16:10','2019-07-25 23:49:06','voyager.compass.index',NULL),(9,1,'BREAD','','_self','voyager-bread',NULL,5,4,'2019-07-22 02:16:10','2019-07-25 23:49:06','voyager.bread.index',NULL),(10,1,'Settings','','_self','voyager-settings',NULL,NULL,7,'2019-07-22 02:16:11','2019-07-29 02:54:31','voyager.settings.index',NULL),(11,1,'Categories','','_self','voyager-categories',NULL,15,4,'2019-07-22 02:16:18','2019-07-25 23:49:20','voyager.categories.index',NULL),(12,1,'Sản phẩm','','_self','voyager-basket','#000000',NULL,2,'2019-07-22 02:16:19','2019-07-26 00:00:08','voyager.posts.index','null'),(13,1,'Tin tức','','_self','voyager-news','#000000',NULL,3,'2019-07-22 02:16:20','2019-07-26 00:00:22','voyager.pages.index','null'),(14,1,'Hooks','','_self','voyager-hook',NULL,5,5,'2019-07-22 02:16:22','2019-07-25 23:49:06','voyager.hooks',NULL),(15,1,'User management','','_self','voyager-edit','#000000',NULL,5,'2019-07-25 23:48:44','2019-07-29 02:54:31',NULL,''),(16,1,'Liên hệ','','_self','voyager-company',NULL,NULL,4,'2019-07-29 02:54:20','2019-07-29 02:54:31','voyager.contacts.index',NULL);
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `menus_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'admin','2019-07-22 02:16:10','2019-07-22 02:16:10');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_01_01_000000_add_voyager_user_fields',1),(4,'2016_01_01_000000_create_data_types_table',1),(5,'2016_05_19_173453_create_menu_table',1),(6,'2016_10_21_190000_create_roles_table',1),(7,'2016_10_21_190000_create_settings_table',1),(8,'2016_11_30_135954_create_permission_table',1),(9,'2016_11_30_141208_create_permission_role_table',1),(10,'2016_12_26_201236_data_types__add__server_side',1),(11,'2017_01_13_000000_add_route_to_menu_items_table',1),(12,'2017_01_14_005015_create_translations_table',1),(13,'2017_01_15_000000_make_table_name_nullable_in_permissions_table',1),(14,'2017_03_06_000000_add_controller_to_data_types_table',1),(15,'2017_04_21_000000_add_order_to_data_rows_table',1),(16,'2017_07_05_210000_add_policyname_to_data_types_table',1),(17,'2017_08_05_000000_add_group_to_settings_table',1),(18,'2017_11_26_013050_add_user_role_relationship',1),(19,'2017_11_26_015000_create_user_roles_table',1),(20,'2018_03_11_000000_add_user_settings',1),(21,'2018_03_14_000000_add_details_to_data_types_table',1),(22,'2018_03_16_000000_make_settings_value_nullable',1),(23,'2016_01_01_000000_create_pages_table',2),(24,'2016_01_01_000000_create_posts_table',2),(25,'2016_02_15_204651_create_categories_table',2),(26,'2017_04_11_000000_alter_post_nullable_fields_table',2),(27,'2019_07_29_092255_create_contacts_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `status` enum('ACTIVE','INACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INACTIVE',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (2,1,'Công việc hằng ngày có lấy đi cuộc sống vốn dĩ màu xanh của bạn?','Có bao giờ chúng ta dừng lại và giật mình nhận ra, có phải bận rộn với bộn bề cuộc sống đã và đang dần làm mất đi cuộc sống màu xanh vốn có của chính mình hay không?','<p>Phụ nữ ng&agrave;y nay kh&ocirc;ng c&ograve;n chỉ quanh quẩn v&agrave;o những c&ocirc;ng việc nội trợ h&agrave;ng ng&agrave;y m&agrave; đang ng&agrave;y c&agrave;ng chứng tỏ bản th&acirc;n ở rất nhiều lĩnh vực v&agrave; ng&agrave;nh nghề kh&aacute;c nhau. Tuy nhi&ecirc;n, c&oacute; bao giờ giữa bộn về cuộc sống, ch&uacute;ng ta dừng lại v&agrave; giật m&igrave;nh nhận ra <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/song-can-bang-xanh-suc-khoe\">cuộc sống m&agrave;u xanh</a> vốn c&oacute; của ch&iacute;nh m&igrave;nh đang dần mất đi hay kh&ocirc;ng?</p>\r\n<h3 style=\"margin-top: 2px;\">Quỹ thời gian chăm s&oacute;c bản th&acirc;n của một c&ocirc; n&agrave;ng bận rộn</h3>\r\n<p>H&atilde;y thử ngồi lại v&agrave; suy nghĩ cụ thể một ng&agrave;y l&agrave;m việc của ch&uacute;ng ta bắt đầu từ những c&ocirc;ng việc g&igrave; v&agrave; ho&agrave;n to&agrave;n kết th&uacute;c v&agrave;o l&uacute;c mấy giờ, chắc chắn kh&ocirc;ng &iacute;t phụ nữ sẽ tho&aacute;ng cảm phục v&agrave; ngạc nhi&ecirc;n về bản th&acirc;n sao lại c&oacute; thể l&agrave;m nhiều việc như thế trong một ng&agrave;y v&agrave; lại chẳng c&oacute; mấy thời gian quan t&acirc;m đến bản th&acirc;n.</p>\r\n<p>Nếu bạn l&agrave; một người phụ nữ c&ograve;n độc th&acirc;n, bạn sẽ kh&ocirc;ng phải lo lắng về vấn đề con c&aacute;i nhưng hiển nhi&ecirc;n bạn sẽ lại d&agrave;nh hết thời gian để v&ugrave;i m&igrave;nh v&agrave;o c&ocirc;ng việc v&agrave; chạy cho kịp c&aacute;c deadline được giao. Ngược lại, nếu l&agrave; người đ&atilde; lập gia đ&igrave;nh v&agrave; c&oacute; con, ch&uacute;ng ta lại c&agrave;ng trở n&ecirc;n bận rộn hơn, thức sớm hơn chỉ để lo kịp bữa s&aacute;ng cho con đến trường rồi lại vội v&agrave;ng chuẩn bị đến nơi l&agrave;m việc. Thử hỏi những việc l&agrave;m đơn giản để chăm s&oacute;c cho bản th&acirc;n h&agrave;ng ng&agrave;y như: Thức dậy sẽ uống một ly nước thật ấm, uống đủ 2-3 l&iacute;t nước mỗi ng&agrave;y hay giữa giờ l&agrave;m việc dừng lại để xịt kho&aacute;ng cho giải tỏa cho l&agrave;n da,&hellip; liệu ch&uacute;ng ta c&oacute; nhớ để thực hiện?</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"cuộc sống xanh\" src=\"http://greenliving.vip/storage/products/May2019/Cuoc-song-xanh.png\" alt=\"cuộc sống xanh\" width=\"750\" /></p>\r\n<p style=\"text-align: center;\">Phụ nữ ng&agrave;y nay đang dần mất đi cuộc sống xanh vốn c&oacute;.</p>\r\n<h3 style=\"margin-top: 2px;\">L&agrave;m thế n&agrave;o gi&uacute;p lấy lại cuộc sống xanh vốn c&oacute;?</h3>\r\n<p>Đừng để quỹ thời gian tuổi xu&acirc;n của ch&uacute;ng ta chỉ m&atilde;i ch&ocirc;n v&ugrave;i v&agrave;o sự bận rộn của c&ocirc;ng việc v&agrave; cuộc sống, thay v&agrave;o đ&oacute; chỉ với một v&agrave;i b&iacute; quyết dưới đ&acirc;y, chị em phụ nữ c&oacute; thể gi&uacute;p lấy lại cuộc sống xanh vốn dĩ thuộc về m&igrave;nh:</p>\r\n<p><strong>Quan t&acirc;m đến chế độ ăn uống h&agrave;ng ng&agrave;y</strong></p>\r\n<p>Dinh dưỡng l&agrave; một trong những yếu tố quan trọng gi&uacute;p ch&uacute;ng ta duy tr&igrave; v&agrave; giữ vững nguồn năng lượng cho bản th&acirc;n. Đừng v&igrave; qu&aacute; vội v&agrave;ng h&atilde;y bận rộn m&agrave; quyết định lựa chọn c&aacute;c m&oacute;n ăn vặt hay thức ăn nhanh nh&eacute;, việc chuẩn bị cho bản th&acirc;n những bữa ăn nhiều chất xơ v&agrave; c&aacute;c dưỡng chất dinh dưỡng thật sự kh&ocirc;ng chiếm qu&aacute; nhiều thời gian mỗi ng&agrave;y của ch&uacute;ng ta đ&acirc;u.</p>\r\n<p><strong>Lu&ocirc;n ghi ch&uacute; những việc l&agrave;m chăm s&oacute;c bản th&acirc;n mỗi ng&agrave;y</strong></p>\r\n<p>Nếu bạn cảm thấy m&igrave;nh l&agrave; người hay qu&ecirc;n trước qu&ecirc;n sau th&igrave; nhất định phải mang theo b&ecirc;n m&igrave;nh một cuốn sổ hoặc đặt c&aacute;c ghi ch&uacute; c&oacute; chu&ocirc;ng b&aacute;o tr&ecirc;n điện thoại để kh&ocirc;ng qu&ecirc;n c&aacute;c việc l&agrave;m cần thiết để chăm s&oacute;c bản th&acirc;n h&agrave;ng ng&agrave;y, đặc biệt l&agrave; việc đảm bảo uống đủ nước.</p>\r\n<p><strong>D&agrave;nh &iacute;t nhất 20 ph&uacute;t mỗi ng&agrave;y để thư gi&atilde;n v&agrave; tập thể dục</strong></p>\r\n<p>Chạy bộ hay <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/t-ng-c-ong-suc-khoe-voi-yoga-cho-benh-nhan-co-cholesterol\">c&aacute;c b&agrave;i tập yoga</a> kh&ocirc;ng những gi&uacute;p cơ thể ch&uacute;ng ta cảm thấy khỏe khoắn hơn m&agrave; c&ograve;n khiến đầu &oacute;c trở n&ecirc;n thư gi&atilde;n, thoải m&aacute;i, từ đ&oacute; gi&uacute;p tinh thần trở n&ecirc;n t&iacute;ch cực v&agrave; lạc quan hơn.</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"Đ&ocirc;ng tr&ugrave;ng hạ thảo MHD\" src=\"http://greenliving.vip/storage/products/July2019/Dong-trung-ha-thao-cordy-x.jpg\" alt=\"Đ&ocirc;ng tr&ugrave;ng hạ thảo MHD\" width=\"750\" /></p>\r\n<p style=\"text-align: center;\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X &ndash; sản phẩm của C&ocirc;ng ty&nbsp;cổ phần&nbsp;MHD Pharma.</p>\r\n<p>Ngo&agrave;i những b&iacute; quyết kể tr&ecirc;n, chị em nhớ đừng qu&ecirc;n bổ sung th&ecirc;m thực phẩm bảo vệ sức khỏe <a href=\"https://www.greenliving.vip/chi-tiet-san-pham/cao-nam-trung-thao-cordy-x\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X</a>; l&agrave; sự kết hợp giữa tinh chất Đ&ocirc;ng Tr&ugrave;ng Hạ Thảo v&agrave; tinh chất Nấm Linh Chi với nhiều c&ocirc;ng dụng tuyệt vời gi&uacute;p trực tiếp t&aacute;c động đến c&aacute;c ho&oacute;c m&ocirc;n quan trọng b&ecirc;n trong cơ thể - một trong những t&aacute;c nh&acirc;n g&acirc;y rối loạn nội tiết tố dẫn đến t&igrave;nh trạng mất c&acirc;n bằng cuộc sống ở nữ giới. Đồng thời, sản phẩm c&ograve;n c&oacute; t&aacute;c dụng cải thiện giấc ngủ sinh l&yacute; gi&uacute;p hạn chế những căng thẳng, mệt mỏi hiệu quả.</p>\r\n<p>Với những t&aacute;c dụng tuyệt vời cộng th&ecirc;m c&aacute;ch d&ugrave;ng v&ocirc; c&ugrave;ng đơn giản, <a href=\"https://www.greenliving.vip/\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X</a> chắc chắn sẽ l&agrave; một trợ thủ đắc lực v&agrave; l&agrave; b&iacute; quyết kh&ocirc;ng thể bỏ qua của chị em phụ nữ.</p>\r\n<p style=\"text-align: right;\"><em><strong>Lee</strong></em></p>','pages/July2019/y8auzjr8XeSHknFPSp0I.jpg','cong-viec-hang-ngay-co-lay-di-cuoc-song-von-d-mau-xanh-cua-ban','Có bao giờ chúng ta dừng lại và giật mình nhận ra, có phải bận rộn với bộn bề cuộc sống đã và đang dần làm mất đi cuộc sống màu xanh vốn có của chính mình hay không?','cuộc sống, sống xanh','ACTIVE','2019-07-26 00:08:42','2019-07-26 00:08:42'),(3,1,'Mất ngủ, stress, trầm cảm những triệu chứng bệnh phổ biến ở mọi lứa tuổi','Dạo một vòng tin tức buổi sáng, MHD Pharma khá lo lắng khi các triệu chứng “Mất ngủ, Stress và Trầm cảm” ngày càng gia tăng.','<p>Dạo một v&ograve;ng tin tức buổi s&aacute;ng, <a href=\"https://www.greenliving.vip/\">MHD Pharma</a> kh&aacute; lo lắng khi c&aacute;c triệu chứng &ldquo;Mất ngủ, Stress v&agrave; Trầm cảm&rdquo; ng&agrave;y c&agrave;ng gia tăng.&nbsp;Thậm ch&iacute;, n&oacute; kh&ocirc;ng chỉ&nbsp;xuất hiện ở những người lớn tuổi m&agrave; c&ograve;n t&aacute;c động đến cả lứa tuổi thanh thiếu ni&ecirc;n.</p>\r\n<h3 style=\"margin-top: 2px;\">&ldquo;Mất ngủ, stress v&agrave; trầm cảm&rdquo; bệnh l&yacute; thường gặp của cuộc sống hiện nay</h3>\r\n<p>Ng&agrave;y nay, khi cuộc sống ng&agrave;y c&agrave;ng được n&acirc;ng cao th&igrave; k&egrave;m theo đ&oacute; những bệnh l&yacute; về &ldquo;<strong>Mất ngủ, Stress v&agrave; Trầm cảm</strong>&rdquo; cũng xuất hiện thường xuy&ecirc;n hơn. Ba triệu chứng tr&ecirc;n ch&uacute;ng c&oacute; li&ecirc;n hệ mật thiết với nhau v&igrave; khi bệnh nh&acirc;n bị bệnh l&yacute; mất ngủ th&igrave; khả năng dẫn đến c&aacute;c triệu chứng lo &acirc;u v&agrave; trầm cảm l&ecirc;n đến 40% v&agrave; ngươc lại.</p>\r\n<p>Trong một cuộc khảo s&aacute;t v&agrave;o th&aacute;ng 2 năm 2017 tr&ecirc;n c&aacute;c bệnh nh&acirc;n đang điều trị tại Viện sức khỏe T&acirc;m thần trung ương (BV Bạch Mai) th&igrave; nh&oacute;m tuổi 25 &ndash; 44 tuổi chiếm tỉ lệ 29,4% bệnh nh&acirc;n; lứa tuổi 45 &ndash; 59 chiếm hơn 33%; lứa tuổi tr&ecirc;n 60 chiếm gần 20%; lứa tuổi 16 &ndash; 24 chiếm 15,7%; dưới 15 tuổi chiếm 2% v&agrave; tỉ lệ n&agrave;y lại được gia tăng th&ecirc;m qua từng năm.</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"mất ngủ, stress v&agrave; trầm cảm\" src=\"http://greenliving.vip/storage/products/July2019/mat-ngu-stress-va-tram-cam.jpg\" alt=\"mất ngủ, stress v&agrave; trầm cảm\" width=\"750\" /></p>\r\n<p style=\"text-align: center;\">\"Mất ngủ, stress v&agrave; trầm cảm\" bệnh l&yacute; phổ biến nhất hiện nay. (Ảnh: baomoi)</p>\r\n<h3 style=\"margin-top: 2px;\">Nguy&ecirc;n nh&acirc;n xuất hiện c&aacute;c bệnh l&yacute; &ldquo;Mất ngủ, stress v&agrave; trầm cảm&rdquo;</h3>\r\n<p><strong>Mất Ngủ</strong> l&agrave; vấn đề nổi bật dẫn đến <strong>Stress</strong>&nbsp;v&agrave; <strong>Trầm Cảm</strong>. Vậy nguy&ecirc;n nh&acirc;n dẫn đến mất ngủ l&agrave; do đ&acirc;u? C&oacute; 3 nguy&ecirc;n nh&acirc;n ch&iacute;nh dẫn đến bệnh Mất Ngủ đ&oacute; l&agrave;:</p>\r\n<ol>\r\n<li>Do c&aacute;c bệnh về nội, ngoại khoa như đau dạ d&agrave;y, sau phẫu thuật, cao huyết &aacute;p, bệnh tiểu đường, bệnh đường h&ocirc; hấp... Đ&acirc;y l&agrave; mất ngủ nhất thời, chỉ cần uống thuốc an thần tại thời điểm đ&oacute;, khi bệnh được điều trị khỏi th&igrave; giấc ngủ sẽ trở lại b&igrave;nh thường. Ở những <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/nhung-benh-ly-th-ong-gap-cua-ng-oi-lon-tuoi-va-cach-phong-tranh\">người lớn tuổi</a>, nguy&ecirc;n nh&acirc;n nổi bật g&acirc;y ảnh hưởng đến giấc ngủ phổ biến nhất l&agrave; c&aacute;c bệnh cơ xương khớp như tho&aacute;i h&oacute;a khớp, lo&atilde;ng xương... c&oacute; đặc điểm l&agrave; đau tăng l&ecirc;n về nửa đ&ecirc;m gần s&aacute;ng, l&agrave;m cho bệnh nh&acirc;n bị tỉnh giấc v&agrave; sau đ&oacute; rất kh&oacute; ngủ tiếp. C&aacute;c bệnh l&yacute; kh&aacute;c bao gồm bệnh thiếu m&aacute;u cơ tim g&acirc;y đau ngực, hiện tượng hay tiểu đ&ecirc;m (như u xơ tuyến tiền liệt), hoặc kh&oacute; thở (<a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/boi-bo-suc-khoe-cho-benh-nhan-tim-mach-voi-cao-nam-trung-thao-cordy-x\">do suy tim</a>, vi&ecirc;m phế quản, hen phế quản).</li>\r\n<li>Mất ngủ do t&acirc;m sinh l&yacute; rối loạn. Dạng mất ngủ n&agrave;y thường xảy ra do cảm x&uacute;c buồn, ch&aacute;n, thất vọng, thất bại trong c&ocirc;ng việc, căng thẳng, lo &acirc;u, xung đột trong gia đ&igrave;nh, x&atilde; hội... Nhiều bệnh nh&acirc;n mất ngủ do t&acirc;m sinh l&yacute;, d&ugrave;ng thuốc ngủ l&uacute;c đầu c&oacute; hiệu quả, nhưng sau đ&oacute; gặp rắc rối v&igrave; nghiện thuốc v&agrave; tương t&aacute;c với rượu. Khi bệnh trở th&agrave;nh mạn t&iacute;nh, d&ugrave; d&ugrave;ng thuốc họ cũng &iacute;t khi ngủ được v&agrave; trạng th&aacute;i bệnh l&yacute; sẽ trầm trọng th&ecirc;m.</li>\r\n<li>Mất ngủ do d&ugrave;ng một số thuốc để chữa bệnh như: lạm dụng thuốc ngủ, thuốc an thần n&ecirc;n hệ thần kinh trung ương suy yếu, g&acirc;y hội chứng mất ngủ. Loại thuốc thường g&acirc;y ra t&igrave;nh trạng n&agrave;y l&agrave; barbituric, benzodiazepin (Seduxen). Ngo&agrave;i ra một số thuốc kh&aacute;c cũng g&acirc;y mất ngủ như corticoid, <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/cao-nam-trung-thao-cordy-x-giup-can-bang-noi-tiet-to-hieu-qua\">nội tiết tố</a> tuyến gi&aacute;p, thuốc điều trị tăng huyết &aacute;p, bệnh thần kinh v&agrave; ngay cả một số thuốc d&ugrave;ng để điều trị bệnh trầm cảm. Một số chất tuy kh&ocirc;ng hẳn l&agrave; thuốc nhưng mọi người lại hay d&ugrave;ng v&agrave; rất dễ g&acirc;y mất ngủ như rượu, caffeine (c&oacute; trong ch&egrave;, c&agrave; ph&ecirc;), nicotine (c&oacute; trong thuốc l&aacute;). Uống rượu nhiều v&agrave; k&eacute;o d&agrave;i sẽ g&acirc;y rối loạn giấc ngủ nặng. Thời gian ngủ r&uacute;t ngắn, đ&ecirc;m thường thức giấc. Giai đoạn vỗ giấc ngủ kh&oacute; v&agrave; l&acirc;u. Khi đ&atilde; ngủ, thường xuất hiện c&aacute;c đợt giật m&igrave;nh, cảm gi&aacute;c hoảng sợ, tim hồi hộp. V&agrave;o tuổi m&atilde;n kinh, <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/lua-chon-cua-phu-nu-hien-dai\">phụ nữ</a> bị bệnh mất ngủ tăng gấp 5 lần (triệu chứng l&agrave; n&oacute;ng nhiệt, kh&oacute; chịu v&agrave; khi ngủ thở kh&oacute; khăn). Sinh hoạt thường ng&agrave;y kh&ocirc;ng chừng mực, l&agrave;m nhiều việc, kh&ocirc;ng hoạt động thể dục, c&oacute; thể l&agrave;m chứng bệnh mất ngủ nặng hơn.</li>\r\n</ol>\r\n<p>Đừng chủ quan khi t&igrave;nh trạng Mất ngủ lại k&eacute;o d&agrave;i, c&aacute;c t&igrave;nh trạng n&agrave;y thật sự rất đ&aacute;ng sợ, đ&ocirc;i khi c&ograve;n dẫn đến việc tự hủy hoại bản th&acirc;n. Hy Vọng rằng, với b&agrave;i viết n&agrave;y, MHD Pharma đ&atilde; một phần gi&uacute;p bạn hiểu th&ecirc;m về t&aacute;c hại của ch&uacute;ng. V&agrave; đừng qu&ecirc;n tận hưởng cuộc sống với sản phẩm <a href=\"https://www.greenliving.vip/chi-tiet-san-pham/cao-nam-trung-thao-cordy-x\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X</a> của nh&agrave; MHD Pharma.</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"mất ngủ, stress v&agrave; trầm cảm\" src=\"https://www.greenliving.vip/storage/products/April2019/zBLagABqkwywj4FHM7vE.png\" alt=\"mất ngủ, stress v&agrave; trầm cảm\" width=\"750\" height=\"500\" /></p>\r\n<p style=\"text-align: center;\">Tận hưởng cuộc sống với Cao Nấm Tr&ugrave;ng Thảo Cordy-X.</p>\r\n<p style=\"text-align: right;\"><em><strong>Lee</strong></em></p>','pages/July2019/QXGZWH0Rkquez2iV4jBm.jpg','mat-ngu-stress-tram-cam-nhung-trieu-chung-benh-pho-bien-o-moi-lua-tuoi','Dạo một vòng tin tức buổi sáng, MHD Pharma khá lo lắng khi các triệu chứng “Mất ngủ, Stress và Trầm cảm” ngày càng gia tăng.','mất ngủ, stress, trầm cảm','ACTIVE','2019-07-26 00:10:54','2019-07-26 00:10:54'),(4,1,'Lời khuyên từ cao nấm trùng thảo cordy-x khi phụ nữ bị rối loạn nội tiết tố','Sẽ thế nào nếu cơ thể phụ nữ bị rối loạn hay mất cân bằng nội tiết tố? Hãy cùng Cao Nấm Trùng Thảo Cordy-X điểm qua một số ảnh hưởng mà hoóc môn này có thể gây ra','<p>L&agrave; ho&oacute;c m&ocirc;n quan trọng nhất cơ thể, được tiết ra từ trong buồng trứng gồm 3 hợp chất: Estron, Estraiol v&agrave; Estriol. Nội tiết tố nữ hay c&ograve;n gọi l&agrave; Estrogen đ&oacute;ng một vai tr&ograve; rất quan trọng gi&uacute;p th&uacute;c đẩy sự ph&aacute;t triển của c&aacute;c cơ quan sinh dục nữ, đồng thời cũng t&aacute;c động một phần rất lớn đến sự hoạt động của n&atilde;o, xương gan, tim cũng như nhiều cơ quan kh&aacute;c trong cơ thể. Vậy sẽ thế n&agrave;o nếu cơ thể phụ nữ bị rối loạn hay mất c&acirc;n bằng nội tiết tố? H&atilde;y c&ugrave;ng <a href=\"https://www.greenliving.vip/\">MHD Pharma</a> điểm qua một số ảnh hưởng m&agrave; ho&oacute;c m&ocirc;n n&agrave;y c&oacute; thể g&acirc;y ra v&agrave; bổ sung đ&uacute;ng c&aacute;ch qua b&agrave;i viết dưới đ&acirc;y.</p>\r\n<h3 style=\"margin-top: 2px;\">Ảnh hưởng của việc mất c&acirc;n bằng nội tiết tố</h3>\r\n<p><strong>G&acirc;y thừa c&acirc;n</strong></p>\r\n<p>Đ&acirc;y l&agrave; một trong những dấu hiệu đầu ti&ecirc;n v&agrave; dễ d&agrave;ng nhận thấy nhất của rối loạn nội tiết tố ở phụ nữ v&igrave; khi nồng độ Cortisol v&agrave; ho&oacute;c m&ocirc;n tăng cao g&acirc;y n&ecirc;n sự căng thẳng, từ đ&oacute; dẫn đến t&igrave;nh trạng lượng đường trong m&aacute;u kh&ocirc;ng ổn định, l&agrave;m ảnh hưởng đến chức năng tuyến gi&aacute;c, v&agrave; hệ quả l&agrave; việc tăng c&acirc;n kh&ocirc;ng kiểm so&aacute;t.</p>\r\n<p><strong>G&acirc;y rối loạn giấc ngủ</strong></p>\r\n<p>Việc thiếu sự ổn định của nồng độ Cortisol (cao hoặc thấp) c&ograve;n ảnh hưởng kh&ocirc;ng nhỏ đến giấc ngủ. Đặc biệt, trong thời kỳ hậu m&atilde;n kinh, một số phụ nữ c&ograve;n bị chứng đổ mồ h&ocirc;i đ&ecirc;m khiến giấc ngủ kh&ocirc;ng được ngon giấc, đ&acirc;y cũng được xem l&agrave; một dấu hiệu của việc rối&nbsp;loạn&nbsp;nội tiết tố.</p>\r\n<p><strong>G&acirc;y rối loạn t&acirc;m trạng, ph&aacute;t sinh cảm gi&aacute;c buồn ch&aacute;n</strong></p>\r\n<p>Cảm gi&aacute;c mệt mỏi, buồn ch&aacute;n, lo lắng, trầm cảm hay cảm thấy kh&oacute; khăn trong việc đối ph&oacute; với c&aacute;c t&igrave;nh huống li&ecirc;n quan đến tinh thần l&agrave; một số dấu hiệu của sự rối loạn nội tiết tố m&agrave; phụ nữ thường gặp.</p>\r\n<p><strong>G&acirc;y lo&atilde;ng xương</strong></p>\r\n<p>Testosterone v&agrave; Estrogen l&agrave; hai ho&oacute;c m&ocirc;n rất quan trọng trong qu&aacute; tr&igrave;nh tạo xương v&agrave; theo c&aacute;c b&aacute;c sĩ - chuy&ecirc;n gia cho biết, phụ nữ sau giai đoạn m&atilde;n kinh rất dễ thiếu hụt nội tiết tố Estrogen khiến chức năng hấp thụ canxi v&agrave;o xương cũng suy giảm.</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"nội tiết tố nu\" src=\"http://greenliving.vip/storage/products/July2019/hoa-qua.jpg\" alt=\"nội tiết tố nu\" width=\"750\" /></p>\r\n<p style=\"text-align: center;\">Uống nhiều nước hoa quả rất c&oacute; lợi cho việc tăng nội tiết tố ở phụ nữ.</p>\r\n<h3 style=\"margin-top: 2px;\">Lời khuy&ecirc;n khi mất c&acirc;n bằng nội tiết tố ở phụ nữ?</h3>\r\n<p>Chế độ ăn uống v&agrave; tập luyện l&agrave; một trong những biện ph&aacute;p gi&uacute;p phụ nữ <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/nguyen-nhan-dan-den-mat-can-bang-noi-tiet-to-o-phu-nu\">c&acirc;n bằng nội tiết tố</a> của m&igrave;nh một c&aacute;ch tự nhi&ecirc;n v&agrave; hiệu quả nhất.</p>\r\n<ul>\r\n<li>Uống đủ nước mỗi ng&agrave;y (&iacute;t nhất l&agrave; 2 l&iacute;t nước), đồng thời bổ sung th&ecirc;m c&aacute;c loại nước &eacute;p rau củ tươi hay tr&agrave; thảo mộc cũng rất tốt cho cơ thể. Ngo&agrave;i ra, phụ nữ n&ecirc;n lưu &yacute; ăn nhiều những loại thực phẩm gi&uacute;p l&agrave;m tăng nội tiết tố như: Đậu n&agrave;nh v&agrave; c&aacute;c sản phẩm chế biện từ đầu n&agrave;nh, khoai t&acirc;y, tỏi, rau b&oacute; x&ocirc;i, c&agrave; rốt, x&uacute;p lơ xanh, b&iacute; đỏ, m&egrave; đen, đặc biệt n&ecirc;n ăn nhiều loại c&aacute; c&oacute; chất b&eacute;o.</li>\r\n<li>Thường xuy&ecirc;n tập luyện, &iacute;t nhất 20 ph&uacute;t mỗi ng&agrave;y những b&agrave;i tập thể dục tay kh&ocirc;ng, yoga hay chạy bộ kết hợp h&iacute;t thở đều. Lu&ocirc;n giữ t&acirc;m trạng ở trạng thai thoải m&aacute;i, lạc quan v&agrave; tr&aacute;nh c&aacute;c suy nghĩ ti&ecirc;u cực.</li>\r\n</ul>\r\n<p>B&ecirc;n cạnh đ&oacute;, phụ nữ cũng cần bổ sung th&ecirc;m <a href=\"https://www.greenliving.vip/chi-tiet-san-pham/cao-nam-trung-thao-cordy-x\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X</a>&nbsp;&ndash; Một sản phẩm v&ocirc; c&ugrave;ng hữu &iacute;ch gi&uacute;p tăng c&aacute;c h&oacute;oc m&ocirc;n quan trọng để c&acirc;n bằng nội tiết tố.</p>\r\n<p>Được tinh chế từ những tinh chất bổ dưỡng của đ&ocirc;ng tr&ugrave;ng hạ thảo v&agrave; nấm linh chi, Cordy-X chứa nhiều dược chất thiết yếu gi&uacute;p k&iacute;ch th&iacute;ch trực tiếp v&agrave;o trục tuyến dưới đồi &ndash; tuyến y&ecirc;n &ndash; tuyến thượng thận nhằm đảm bảo c&aacute;c ho&oacute;c m&ocirc;n đều được tiết ra một c&aacute;ch b&igrave;nh thường. Hơn thế nữa, phụ nữ khi sử dụng Cao Nấm Tr&ugrave;ng Thảo Cordy-X c&ograve;n gi&uacute;p cải thiện giấc ngủ sinh l&yacute;, giảm căng thẳng mệt mỏi, từ đ&oacute; lu&ocirc;n giữ được trạng th&aacute;i c&acirc;n bằng c&aacute;c nội tiết tố b&ecirc;n trong cơ thể hiệu quả.</p>\r\n<p>Hi&nbsp;vọng th&ocirc;ng qua b&agrave;i viết n&agrave;y, chị em phụ nữ đ&atilde; hiểu hơn về tầm quan trọng của nội tiết tố trong cơ thể v&agrave; c&oacute; c&aacute;ch bổ sung ph&ugrave; hợp!</p>\r\n<p style=\"text-align: right;\"><em><strong>Lee</strong></em></p>','pages/July2019/UnzunLhLTLUPBWQjSEy9.png','loi-khuyen-tu-cao-nam-trung-thao-cordy-x-khi-phu-nu-bi-roi-loan-noi-tiet-to','Sẽ thế nào nếu cơ thể phụ nữ bị rối loạn hay mất cân bằng nội tiết tố? Hãy cùng Cao Nấm Trùng Thảo Cordy-X điểm qua một số ảnh hưởng mà hoóc môn này có thể gây ra','cao nấm trùng thảo, cao nấm trùng thảo cordy-x','ACTIVE','2019-07-26 00:12:06','2019-07-26 00:12:06'),(5,1,'Nguyên nhân dẫn đến mất cân bằng nội tiết tố ở phụ nữ','Rối loạn nội tiết tố nữ là một bệnh rất phổ biến ngày nay. Có rất nhiều nguyên nhân gây ra nhưng các bạn lại khá coi nhẹ và chủ quan trước những ảnh hưởng của nó.','<p>Ng&agrave;y nay, rối loạn nội tiết tố nữ l&agrave; một bệnh rất phổ biến m&agrave; nhiều phụ nữ gặp phải. C&oacute; rất nhiều nguy&ecirc;n nh&acirc;n g&acirc;y ra rối loạn nội tiết nhưng c&aacute;c bạn lại kh&aacute; coi nhẹ v&agrave; chủ quan trước những ảnh hưởng của n&oacute;.</p>\r\n<h3 style=\"margin-top: 2px;\">Nguy&ecirc;n nh&acirc;n g&acirc;y mất c&acirc;n bằng nội tiết tố</h3>\r\n<p>Nguy&ecirc;n nh&acirc;n g&acirc;y <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/noi-tiet-to-nu-la-gi-dau-hieu-nhan-biet-khi-c-the-mat-can-bang\">rối loạn nội tiết tố nữ</a>&nbsp;về cơ bản l&agrave; sự mất c&acirc;n bằng của 2 loại hormone l&agrave; Progesterone v&agrave; Estrogen, chỉ cần c&oacute; sự thay đổi nhỏ của 2 loại hormone n&agrave;y trong cơ thể sẽ dẫn đến c&aacute;c dấu hiệu v&agrave; triệu chứng rối loạn&nbsp;nội tiết tố nữ. Khi cơ thể phụ nữ xảy ra qu&aacute; tr&igrave;nh rụng trứng, c&oacute; nghĩa l&agrave; l&uacute;c n&agrave;y buồng trứng sẽ kh&ocirc;ng sản xuất ra Progesterone l&agrave;m cho mật độ Progesterone c&oacute; dấu hiệu suy giảm v&agrave; nồng độ Estrogen bắt đầu tăng. Đ&acirc;y l&agrave; một trong những nguy&ecirc;n nh&acirc;n ch&iacute;nh g&acirc;y ra sự mất c&acirc;n bằng hormone.</p>\r\n<p><strong>Ngo&agrave;i ra, rối loạn nội tiết tố nữ c&ograve;n c&oacute; nguy&ecirc;n nh&acirc;n bởi c&aacute;c yếu tố sau:</strong></p>\r\n<p><strong>Sử dụng thuốc tr&aacute;nh thai:</strong> trong th&agrave;nh phần của thuốc tr&aacute;nh thai c&oacute; chứa Estrogen tổng hợp, v&igrave; vậy khi uống loại thuốc n&agrave;y mật độ Estrogen tăng cao v&agrave; giảm Progesterone l&agrave;m rối loạn v&agrave; g&acirc;y mất c&acirc;n bằng 2 loại hormone n&agrave;y.</p>\r\n<p><strong>Stress:</strong> căng thẳng k&eacute;o d&agrave;i cũng l&agrave;m mất c&acirc;n bằng hormone trong cơ thể trong đ&oacute; c&oacute; Estrogen. Hậu quả, những phụ nữ thường gặp t&igrave;nh trạng căng thẳng k&eacute;o d&agrave;i sẽ g&acirc;y ra tăng c&acirc;n, ch&oacute;ng mặt, kh&ocirc; &acirc;m đạo, giảm ham muốn t&igrave;nh dục&hellip;</p>\r\n<p><strong>Ngủ kh&ocirc;ng đủ giấc:</strong> khoa học đ&atilde; chứng minh khi phụ nữ ngủ kh&ocirc;ng đủ giấc sẽ ảnh hưởng đến 10 loại hormone, trong đ&oacute; c&oacute; 2 loại hormone quan trọng l&agrave; Estrogen v&agrave; Testosterone, ảnh hưởng đến sức khỏe tinh thần, sức khỏe tim mạch v&agrave; khả năng sinh sản.</p>\r\n<p><strong>Tiếp x&uacute;c với m&ocirc;i trường độc hại:</strong> khi phụ nữ tiếp x&uacute;c với c&aacute;c chất độc hại cụ thể l&agrave; thuốc trừ s&acirc;u, h&oacute;a chất độc hại sẽ c&oacute; chu kỳ kinh d&agrave;i hơn b&igrave;nh thường.</p>\r\n<p><strong>Ăn ki&ecirc;ng khem qu&aacute; mức:</strong> để lấy lại được v&oacute;c d&aacute;ng thon gọn của m&igrave;nh, nhiều chị em phụ nữ đ&atilde; ăn ki&ecirc;ng để giữ d&aacute;ng, hầu như trong tất cả c&aacute;c khẩu phần ăn ki&ecirc;ng của chị em đều c&oacute; một lưu &yacute; l&agrave; cần loại bỏ chất b&eacute;o ra khỏi khẩu phần ăn của m&igrave;nh. Điều n&agrave;y l&agrave; v&ocirc; c&ugrave;ng nghi&ecirc;m trọng đối với việc sản xuất ra Estrogen bởi v&igrave;. Khi chất b&eacute;o của cơ thể dưới 22% th&igrave; sẽ k&iacute;ch hoạt v&ugrave;ng dưới đồi v&agrave; tuyến y&ecirc;n gửi t&iacute;n hiệu đến buồng trứng, y&ecirc;u cầu ngừng sản xuất Estrogen.</p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"cao nấm tr&ugrave;ng thảo cordy-X\" src=\"http://greenliving.vip/storage/products/July2019/CNTT-cordyx.jpg\" alt=\"cao nấm tr&ugrave;ng thảo cordy-X\" width=\"750\" /></p>\r\n<p style=\"text-align: center;\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X gi&uacute;p c&acirc;n bằng nội tiết tố nữ.</p>\r\n<h3 style=\"margin-top: 2px;\">Giải ph&aacute;p gi&uacute;p c&acirc;n bằng nội tiết tố nữ hiệu quả</h3>\r\n<p><em><strong>Thay đổi chế độ ăn uống, tập luyện gi&uacute;p điều trị rối loạn nội tiết tố nữ</strong></em></p>\r\n<p>Bạn cần đảm bảo cung cấp đầy đủ, đa dạng c&aacute;c loại vitamin, kho&aacute;ng chất, bổ sung th&ecirc;m c&aacute;c loại thực phẩm c&oacute; t&aacute;c dụng <a href=\"https://www.greenliving.vip/thong-tin-can-quan-tam/noi-tiet-to-nu-la-gi-dau-hieu-nhan-biet-khi-c-the-mat-can-bang\">l&agrave;m tăng nội tiết tố nữ</a> như: đậu n&agrave;nh v&agrave; c&aacute;c sản phẩm được chế biến từ đậu n&agrave;nh (đậu phụ, sữa đậu n&agrave;nh), c&agrave; rốt, tỏi, rau bina, rau diếp, b&ocirc;ng cải xanh, bắp cải, b&iacute; ng&ocirc;, m&egrave; đen, nấm, đậu đen v..v</p>\r\n<p>Tr&aacute;nh xa c&aacute;c loại thức ăn nhanh như: x&uacute;c x&iacute;ch, thịt nguội, b&aacute;nh m&igrave; kẹp, g&agrave; r&aacute;n, m&igrave; ăn liền, trong những loại thức ăn nhanh n&agrave;y c&oacute; chưa rất nhiều chất b&eacute;o no sẽ k&iacute;ch th&iacute;ch c&aacute;c hormon b&agrave;i tiết qu&aacute; độ g&acirc;y rối loạn&nbsp;nội tiết tố&nbsp;nữ.</p>\r\n<p><em><strong>Tăng cường tập luyện thể thao gi&uacute;p điều trị rối loạn nội tiết tố</strong></em></p>\r\n<p>Tập thể dục v&agrave; vận động thường xuy&ecirc;n gi&uacute;p cơ thể dẻo dai, chống lại với c&aacute;c bệnh tật, n&acirc;ng cao sức đề kh&aacute;ng của cơ thể. Tập thể dục thường xuy&ecirc;n kh&ocirc;ng chỉ gi&uacute;p bạn điều trị bệnh rối loạn nội tiết tố nữ m&agrave; c&ograve;n l&agrave; biệt ph&aacute;p gi&uacute;p ph&ograve;ng ngừa c&aacute;c bệnh tật. Bạn h&atilde;y sắp xếp c&ocirc;ng việc h&agrave;ng ng&agrave;y v&agrave; lựa chọn cho m&igrave;nh một b&agrave;i tập thể dục ph&ugrave; hợp v&agrave; tập luyện đều đặn &iacute;t nhất mỗi ng&agrave;y 20 ph&uacute;t, c&aacute;c b&agrave;i tập nhẹ nh&agrave;ng hay yoga v&agrave; tập thở s&acirc;u cũng c&oacute; hiệu quả rất tốt gi&uacute;p tinh thần v&agrave; cơ thể bạn được thoải m&aacute;i thư th&aacute;i hơn.</p>\r\n<p><em><strong>C&acirc;n bằng nội tiết tố nữ bằng thực phẩm chức năng ph&ugrave; hợp</strong></em></p>\r\n<p>Hiện nay, c&oacute; rất nhiều c&aacute;c loại thực phẩm kh&aacute;c nhau c&oacute; t&aacute;c dụng gi&uacute;p c&acirc;n bằng nội tiết tố nữ một c&aacute;ch ph&ugrave; hợp nhất, hiệu quả nhất. Điển h&igrave;nh, c&aacute;c sản phẩm c&oacute; chứa c&aacute;c th&agrave;nh phần gi&uacute;p bổ sung nội tiết tố nữ an to&agrave;n. Kh&ocirc;ng qu&ecirc;n rằng, <a href=\"https://www.greenliving.vip/chi-tiet-san-pham/cao-nam-trung-thao-cordy-x\">Cao Nấm Tr&ugrave;ng Thảo Cordy-X</a> cũng l&agrave; sản phẩm hỗ trợ rất tốt cho qu&aacute; tr&igrave;nh cải thiện rối loạn nội tiết tố nữ nh&eacute;.</p>\r\n<p>Đ&acirc;y l&agrave; một số nguy&ecirc;n nh&acirc;n g&acirc;y ra rối loạn nội tiết tố nữ m&agrave; chị em cần biết v&agrave; những giải ph&aacute;p gi&uacute;p chị em tăng nội tiết tố nữ an to&agrave;n hiệu quả ngay tại nh&agrave;. Hy vọng <a href=\"https://www.greenliving.vip/\">MHD Pharma</a> đ&atilde; chia sẽ những th&ocirc;ng tin bổ &iacute;ch gi&uacute;p bạn c&oacute; th&ecirc;m nhiều kiến thức để giữ g&igrave;n sức khỏe v&agrave; cải thiện nội tiết tố nữ.</p>\r\n<p style=\"text-align: right;\"><em><strong>Lee</strong></em></p>','pages/July2019/ITIesBUd5DcBh8ypVZQD.jpg','nguyen-nhan-dan-den-mat-can-bang-noi-tiet-to-o-phu-nu','Rối loạn nội tiết tố nữ là một bệnh rất phổ biến ngày nay. Có rất nhiều nguyên nhân gây ra nhưng các bạn lại khá coi nhẹ và chủ quan trước những ảnh hưởng của nó.','nội tiết tố, rối loạn nội tiết tố, greenliving','ACTIVE','2019-07-26 00:13:10','2019-07-26 00:13:10');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission_role` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_permission_id_index` (`permission_id`),
  KEY `permission_role_role_id_index` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(42,1),(43,1),(44,1),(45,1),(46,1);
/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permissions_key_index` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'browse_admin',NULL,'2019-07-22 02:16:11','2019-07-22 02:16:11'),(2,'browse_bread',NULL,'2019-07-22 02:16:11','2019-07-22 02:16:11'),(3,'browse_database',NULL,'2019-07-22 02:16:11','2019-07-22 02:16:11'),(4,'browse_media',NULL,'2019-07-22 02:16:11','2019-07-22 02:16:11'),(5,'browse_compass',NULL,'2019-07-22 02:16:11','2019-07-22 02:16:11'),(6,'browse_menus','menus','2019-07-22 02:16:11','2019-07-22 02:16:11'),(7,'read_menus','menus','2019-07-22 02:16:11','2019-07-22 02:16:11'),(8,'edit_menus','menus','2019-07-22 02:16:11','2019-07-22 02:16:11'),(9,'add_menus','menus','2019-07-22 02:16:11','2019-07-22 02:16:11'),(10,'delete_menus','menus','2019-07-22 02:16:11','2019-07-22 02:16:11'),(11,'browse_roles','roles','2019-07-22 02:16:11','2019-07-22 02:16:11'),(12,'read_roles','roles','2019-07-22 02:16:11','2019-07-22 02:16:11'),(13,'edit_roles','roles','2019-07-22 02:16:11','2019-07-22 02:16:11'),(14,'add_roles','roles','2019-07-22 02:16:11','2019-07-22 02:16:11'),(15,'delete_roles','roles','2019-07-22 02:16:11','2019-07-22 02:16:11'),(16,'browse_users','users','2019-07-22 02:16:11','2019-07-22 02:16:11'),(17,'read_users','users','2019-07-22 02:16:11','2019-07-22 02:16:11'),(18,'edit_users','users','2019-07-22 02:16:11','2019-07-22 02:16:11'),(19,'add_users','users','2019-07-22 02:16:11','2019-07-22 02:16:11'),(20,'delete_users','users','2019-07-22 02:16:11','2019-07-22 02:16:11'),(21,'browse_settings','settings','2019-07-22 02:16:11','2019-07-22 02:16:11'),(22,'read_settings','settings','2019-07-22 02:16:11','2019-07-22 02:16:11'),(23,'edit_settings','settings','2019-07-22 02:16:11','2019-07-22 02:16:11'),(24,'add_settings','settings','2019-07-22 02:16:11','2019-07-22 02:16:11'),(25,'delete_settings','settings','2019-07-22 02:16:11','2019-07-22 02:16:11'),(26,'browse_categories','categories','2019-07-22 02:16:18','2019-07-22 02:16:18'),(27,'read_categories','categories','2019-07-22 02:16:18','2019-07-22 02:16:18'),(28,'edit_categories','categories','2019-07-22 02:16:18','2019-07-22 02:16:18'),(29,'add_categories','categories','2019-07-22 02:16:18','2019-07-22 02:16:18'),(30,'delete_categories','categories','2019-07-22 02:16:18','2019-07-22 02:16:18'),(31,'browse_posts','posts','2019-07-22 02:16:19','2019-07-22 02:16:19'),(32,'read_posts','posts','2019-07-22 02:16:19','2019-07-22 02:16:19'),(33,'edit_posts','posts','2019-07-22 02:16:19','2019-07-22 02:16:19'),(34,'add_posts','posts','2019-07-22 02:16:19','2019-07-22 02:16:19'),(35,'delete_posts','posts','2019-07-22 02:16:19','2019-07-22 02:16:19'),(36,'browse_pages','pages','2019-07-22 02:16:20','2019-07-22 02:16:20'),(37,'read_pages','pages','2019-07-22 02:16:20','2019-07-22 02:16:20'),(38,'edit_pages','pages','2019-07-22 02:16:20','2019-07-22 02:16:20'),(39,'add_pages','pages','2019-07-22 02:16:20','2019-07-22 02:16:20'),(40,'delete_pages','pages','2019-07-22 02:16:20','2019-07-22 02:16:20'),(41,'browse_hooks',NULL,'2019-07-22 02:16:22','2019-07-22 02:16:22'),(42,'browse_contacts','contacts','2019-07-29 02:54:20','2019-07-29 02:54:20'),(43,'read_contacts','contacts','2019-07-29 02:54:20','2019-07-29 02:54:20'),(44,'edit_contacts','contacts','2019-07-29 02:54:20','2019-07-29 02:54:20'),(45,'add_contacts','contacts','2019-07-29 02:54:20','2019-07-29 02:54:20'),(46,'delete_contacts','contacts','2019-07-29 02:54:20','2019-07-29 02:54:20');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `featured` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (10,1,12,'Broncho Fresh','Broncho Fresh','Broncho Fresh','<p><strong>BRONCHO FRESH</strong></p>\r\n<p><strong>Th&agrave;nh phần:</strong> trong 10 ml chứa 2,6 ml dịch chiết hỗn hợp thảo mộc th&ocirc; tương đương:</p>\r\n<p>&bull;&nbsp; C&aacute;t c&aacute;nh:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 1,80 g</p>\r\n<p>&bull;&nbsp; Viễn ch&iacute;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.. 0,40 g</p>\r\n<p>&bull;&nbsp; Khoản đ&ocirc;ng hoa:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 0,20 g</p>\r\n<p>&bull;&nbsp; Cam thảo:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 0,20 g</p>\r\n<p>&bull;&nbsp; Phụ liệu: Mật ong, Đường trắng, Chất bảo quản (E202), Chất ổn định (E415), Nước tinh khiết vừa đủ 10 ml.</p>\r\n<p><strong>C&ocirc;ng dụng:</strong> Bổ phế, hỗ trợ giảm c&aacute;c triệu chứng của vi&ecirc;m họng, vi&ecirc;m phế quản: ho, nhiều đờm, kh&oacute; thở.</p>\r\n<p><strong>Đối tượng sử dụng:</strong> D&ugrave;ng trong c&aacute;c trường hợp vi&ecirc;m họng, vi&ecirc;m phế quản.</p>\r\n<p><strong>C&aacute;ch d&ugrave;ng:</strong></p>\r\n<p>&bull; Người lớn: uống ng&agrave;y 3 lần, mỗi lần 10 ml.</p>\r\n<p>&bull; Trẻ em 8 - 14 tuổi: uống ng&agrave;y 2 lần, mỗi lần 10 ml.</p>\r\n<p>&bull;&nbsp; Trẻ em 4 - 7 tuổi: uống ng&agrave;y 1 lần, mỗi lần 10 ml.</p>\r\n<p><strong>Bảo quản:</strong> Ở nhiệt độ kh&ocirc;ng qu&aacute; 30oC, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp.</p>\r\n<p><strong>Số ĐKSP: 4285/2019/ĐKSP</strong></p>\r\n<p><strong>Thời hạn sử dụng:</strong>&nbsp;36 th&aacute;ng kể từ ng&agrave;y sản xuất. Ng&agrave;y sản xuất v&agrave; hạn sử dụng in tr&ecirc;n bao b&igrave;.</p>\r\n<p><strong>Ch&uacute; &yacute;:&nbsp;</strong>Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh. Kh&ocirc;ng d&ugrave;ng cho người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của sản phẩm.Trẻ dưới 3 tuổi: d&ugrave;ng theo hướng dẫn của chuy&ecirc;n gia y tế.</p>\r\n<p><strong>TR&Aacute;NH XA TẦM TAY TRẺ EM.</strong></p>\r\n<p><strong>ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</strong></p>\r\n<p>&nbsp;</p>','posts/August2019/LQuVP2EZUohFw99igN7Z.jpg','broncho-fresh','Broncho Fresh','Broncho Fresh','PUBLISHED',0,'2019-08-02 03:59:46','2019-08-02 04:01:40'),(11,1,10,'Nano Heal','Nano Heal','Nano Heal','<p><strong>NANO HEAL<br /></strong>Nano Curcumin &amp; Đ&ocirc;ng Tr&ugrave;ng Hạ Thảo</p>\r\n<p><strong>Th&agrave;nh phần:</strong> mỗi g&oacute;i 5 ml chứa:</p>\r\n<p>&bull; Nano curcumin&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;1,060 g</p>\r\n<p>&bull; Dịch chiết đ&ocirc;ng tr&ugrave;ng hạ thảo&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 0,025 g</p>\r\n<p>&bull; Th&agrave;nh phần kh&aacute;c: Axit citric (330), Nước cất vừa đủ.</p>\r\n<p><strong>C&ocirc;ng dụng:</strong> Hạn chế qu&aacute; tr&igrave;nh oxy h&oacute;a, bảo vệ ni&ecirc;m mạc dạ d&agrave;y, hỗ trợ giảm c&aacute;c triệu chứng vi&ecirc;m lo&eacute;t dạ d&agrave;y, t&aacute; tr&agrave;ng.</p>\r\n<p><strong>Đối tượng sử dụng:</strong> Người bị vi&ecirc;m lo&eacute;t dạ d&agrave;y, t&aacute; tr&agrave;ng , phụ nữ sau sinh, người muốn hạn chế qu&aacute; tr&igrave;nh oxy h&oacute;a.</p>\r\n<p><strong>C&aacute;ch d&ugrave;ng:</strong> Uống trước bữa ăn 30 ph&uacute;t hay sau bữa ăn 01 giờ.</p>\r\n<p>&bull; Người bị vi&ecirc;m lo&eacute;t dạ d&agrave;y, t&aacute; tr&agrave;ng:</p>\r\n<p>&bull; Người lớn &amp; trẻ em tr&ecirc;n 12 tuổi: 01 g&oacute;i/ lần x 03 lần/ ng&agrave;y.</p>\r\n<p>&bull; Trẻ em từ 2 đến 12 tuổi: 01 g&oacute;i/ lần x 02 lần/ ng&agrave;y.</p>\r\n<p>&bull; Trẻ em dưới 2 tuổi hỏi &yacute; kiến b&aacute;c sỹ trước khi d&ugrave;ng.</p>\r\n<p>&bull; Phụ nữ v&agrave; phụ nữ sau sinh: 01 g&oacute;i/ lần x 03 lần/ ng&agrave;y.</p>\r\n<p><strong>Bảo quản:</strong> Ở nơi kh&ocirc; r&aacute;o, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp.</p>\r\n<p><strong>Số ĐKSP: 1594/2019/ĐKSP</strong></p>\r\n<p><strong>Ch&uacute; &yacute;:</strong> Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh.</p>\r\n<p><strong>Cảnh b&aacute;o về sức khỏe:</strong> Kh&ocirc;ng d&ugrave;ng cho phụ nữ c&oacute; thai, người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của sản phẩm.</p>\r\n<p><strong>Thời hạn sử dụng:</strong> 36 th&aacute;ng kể từ ng&agrave;y sản xuất. Ng&agrave;y sản xuất v&agrave; hạn sử dụng in tr&ecirc;n bao b&igrave;.</p>\r\n<p>TR&Aacute;NH XA TẦM TAY TRẺ EM.</p>\r\n<p>ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</p>','posts/August2019/T9Oy2AY3zpG1tkIBmgsv.jpg','nano-heal','Nano Heal','Nano Heal','PUBLISHED',0,'2019-08-02 04:05:29','2019-08-02 04:18:02'),(12,1,9,'Digesty Care','Digesty Care','Digesty Care','<p><strong>DIGESTY CARE</strong></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: .05pt; text-align: justify;\"><strong><span style=\"color: #1d1d1b;\">Th&agrave;nh phần:&nbsp;</span></strong><span style=\"color: #1d1d1b;\">trong 10 ml chứa 4,25 ml dịch chiết hỗn hợp thảo mộc th&ocirc; tương đương:</span></p>\r\n<p class=\"MsoListParagraph\" style=\"text-indent: 0in; mso-list: l0 level1 lfo1; tab-stops: 11.9pt;\"><span style=\"font-size: 10.0pt; color: #1d1d1b;\"><span>&bull;<span style=\"font: 7.0pt \'Times New Roman\';\">&nbsp;&nbsp;</span></span></span><span style=\"font-size: 10.0pt; mso-bidi-font-size: 11.0pt; color: #1d1d1b;\">Th&aacute;i tử s&acirc;m:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 1,37 g</span></p>\r\n<p class=\"MsoListParagraph\" style=\"text-indent: 0in; mso-list: l0 level1 lfo1; tab-stops: 11.9pt;\"><span style=\"font-size: 10pt; color: #1d1d1b;\">&bull;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: \'Times New Roman\';\">&nbsp;&nbsp;</span></span><span style=\"font-size: 10pt; color: #1d1d1b;\">Ho&agrave;i sơn:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 1,03 g</span></p>\r\n<p class=\"MsoListParagraph\" style=\"text-indent: 0in; mso-list: l0 level1 lfo1; tab-stops: 11.9pt;\"><span style=\"font-size: 10pt; color: #1d1d1b;\">&bull;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: \'Times New Roman\';\">&nbsp;&nbsp;</span></span><span style=\"font-size: 10pt; color: #1d1d1b;\">Mạch nha:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 1,03 g</span></p>\r\n<p class=\"MsoListParagraph\" style=\"text-indent: 0in; mso-list: l0 level1 lfo1; tab-stops: 11.9pt;\"><span style=\"font-size: 10pt; color: #1d1d1b;\">&bull;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: \'Times New Roman\';\">&nbsp;&nbsp;</span></span><span style=\"font-size: 10pt; color: #1d1d1b;\">Sơn tra:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.... 0,68 g</span></p>\r\n<p class=\"MsoListParagraph\" style=\"text-indent: 0in; mso-list: l0 level1 lfo1; tab-stops: 11.9pt;\"><span style=\"font-size: 10.0pt; color: #1d1d1b;\"><span>&bull;<span style=\"font: 7.0pt \'Times New Roman\';\">&nbsp;&nbsp;</span></span></span><span style=\"font-size: 10.0pt; mso-bidi-font-size: 11.0pt; color: #1d1d1b;\">Trần b&igrave;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.... 0,14 g</span></p>\r\n<p class=\"MsoListParagraph\" style=\"margin-right: 6.95pt; text-align: left; text-indent: 0in; line-height: 101%; mso-list: l0 level1 lfo1; tab-stops: 11.85pt;\" align=\"left\"><span style=\"font-size: 10.0pt; line-height: 101%; color: #1d1d1b;\"><span>&bull;<span style=\"font: 7.0pt \'Times New Roman\';\">&nbsp;&nbsp;</span></span></span><span style=\"font-size: 10.0pt; mso-bidi-font-size: 11.0pt; line-height: 101%; color: #1d1d1b;\">Phụ liệu: Đường trắng, Chất bảo quản (E202), Chất ổn định (E415), Nước tinh khiết vừa đủ 10 ml.</span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.0pt; text-align: justify;\"><strong><span style=\"color: #1d1d1b;\">C&ocirc;ng dụng:&nbsp;</span></strong><span style=\"color: #1d1d1b;\">Bổ tỳ, hỗ trợ ti&ecirc;u h&oacute;a, tăng cường sức khỏe.</span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.0pt; text-align: justify;\"><strong><span style=\"font-size: 10.0pt; mso-bidi-font-size: 11.0pt; color: #1d1d1b;\">Đối&nbsp;<span style=\"letter-spacing: -.15pt;\">tượng&nbsp;</span>sử&nbsp;<span style=\"letter-spacing: -.15pt;\">dụng:&nbsp;</span></span></strong><span style=\"font-size: 10pt; color: #1d1d1b; letter-spacing: -0.15pt;\">D&ugrave;ng&nbsp;</span><span style=\"font-size: 10pt; color: #1d1d1b;\">cho c&aacute;c&nbsp;<span style=\"letter-spacing: -.15pt;\">trường&nbsp;</span>hợp&nbsp;<span style=\"letter-spacing: -.15pt;\">ch&aacute;n&nbsp;</span>ăn,&nbsp;<span style=\"letter-spacing: -.15pt;\">ti&ecirc;u&nbsp;</span>h&oacute;a&nbsp;<span style=\"letter-spacing: -.15pt;\">k&eacute;m,&nbsp;</span>đầy&nbsp;<span style=\"letter-spacing: -.15pt;\">bụng, ph&acirc;n sống.</span></span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.25pt; text-align: justify;\"><strong><span style=\"color: #1d1d1b;\">C&aacute;ch d&ugrave;ng:</span></strong></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.25pt; text-align: justify;\"><span style=\"color: #1d1d1b;\">&bull; Người lớn: uống 10 - 20 ml/ lần x 3 lần/ ng&agrave;y.</span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.25pt; text-align: justify;\"><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b;\">&bull;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: \'Times New Roman\';\">&nbsp;&nbsp;</span></span><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b; letter-spacing: -0.15pt;\">Trẻ&nbsp;</span><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b;\">em 9 - 14 tuổi: uống 10 ml/ lần x 3 lần/&nbsp;<span style=\"letter-spacing: -.15pt;\">ng&agrave;y.</span></span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.25pt; text-align: justify;\"><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b;\">&bull;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: \'Times New Roman\';\">&nbsp;&nbsp;</span></span><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b; letter-spacing: -0.15pt;\">Trẻ&nbsp;</span><span style=\"text-align: left; text-indent: -5.8pt; font-size: 10pt; color: #1d1d1b;\">em 4 - 8 tuổi: uống 10 ml/ lần x 2 lần/&nbsp;<span style=\"letter-spacing: -.15pt;\">ng&agrave;y.</span></span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.2pt; line-height: 101%;\"><strong><span style=\"color: #1d1d1b;\">Bảo quản:&nbsp;</span></strong><span style=\"color: #1d1d1b;\">Ở nhiệt độ kh&ocirc;ng qu&aacute; 30<sup>o</sup>C, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp. G&oacute;i đ&atilde; mở n&ecirc;n bảo quản trong ngăn m&aacute;t tủ lạnh v&agrave; d&ugrave;ng trong ng&agrave;y.</span></p>\r\n<p class=\"MsoBodyText\" style=\"margin-top: 6.2pt; line-height: 101%;\"><strong>Số ĐKSP: 3621/2019/ĐKSP</strong></p>\r\n<p><strong>Thời hạn sử dụng:</strong>&nbsp;36 th&aacute;ng kể từ ng&agrave;y sản xuất. Ng&agrave;y sản xuất v&agrave; hạn sử dụng in tr&ecirc;n bao b&igrave;.</p>\r\n<p><strong>Ch&uacute; &yacute;:&nbsp;</strong>Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh. Kh&ocirc;ng d&ugrave;ng cho người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của sản phẩm.Trẻ dưới 3 tuổi: d&ugrave;ng theo hướng dẫn của chuy&ecirc;n gia y tế.</p>\r\n<p>TR&Aacute;NH XA TẦM TAY TRẺ EM.</p>\r\n<p>ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</p>\r\n<p>&nbsp;</p>','posts/August2019/pSTl0PSwq0j0cF45dyOx.jpg','digesty-care','Digesty Care','Digesty Care','PUBLISHED',0,'2019-08-02 04:16:39','2019-08-02 04:16:39'),(13,1,8,'Blood Tonic Care','Blood Tonic Care','Blood Tonic Care','<p><strong>BLOOD TONIC CARE</strong></p>\r\n<p><strong>Th&agrave;nh phần:&nbsp;</strong>trong 10 ml chứa 4,62 ml dịch chiết hỗn hợp thảo mộc th&ocirc; tương đương:</p>\r\n<ul>\r\n<li>Ho&agrave;ng kỳ:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;...&nbsp; 3,30g</li>\r\n<li>Đương quy:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 1,32g</li>\r\n<li>Phụliệu: Đường trắng, Chất bảo quản (E202), Chất ổn định (E415), Nước tinh khiết vừa đủ 10 ml.</li>\r\n</ul>\r\n<p><strong>C&ocirc;ng dụng:&nbsp;</strong>Bổ huyết, hỗ trợ ti&ecirc;u h&oacute;a, tăng cường sức khỏe.</p>\r\n<p><strong>Đối tượng sử dụng:&nbsp;</strong>Người bị suy nhược cơ thể, sắc mặt nhợt nhạt, mệt mỏi, ch&aacute;n ăn, ch&oacute;ng mặt hoa mắt.</p>\r\n<p><strong>C&aacute;ch d&ugrave;ng:</strong></p>\r\n<ul>\r\n<li>Người lớn: uống ng&agrave;y 3 lần, mỗi lần 10 ml.</li>\r\n<li>Trẻ em 8 - 14 tuổi: uống ng&agrave;y 2 lần, mỗi lần 10ml.</li>\r\n<li>Trẻem 4 - 7 tuổi: uống ng&agrave;y 1 lần, mỗi lần 10ml.</li>\r\n</ul>\r\n<p><strong>Bảo quản:&nbsp;</strong>Ở nhiệt độ kh&ocirc;ng qu&aacute; 30<sup>o</sup>C, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp.</p>\r\n<p><strong>Số ĐKSP: 5615/2019/ĐKSP</strong></p>\r\n<p><strong>Thời hạn sử dụng:</strong>&nbsp;36 th&aacute;ng kể từ ng&agrave;y sản xuất. Ng&agrave;y sản xuất v&agrave; hạn sử dụng in tr&ecirc;n bao b&igrave;.</p>\r\n<p><strong>Ch&uacute; &yacute;:&nbsp;</strong>Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh. Kh&ocirc;ng d&ugrave;ng cho người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của&nbsp; sản phẩm. Trẻ dưới 3 tuổi: d&ugrave;ng theo hướng dẫn của chuy&ecirc;n gia y tế.</p>\r\n<p>TR&Aacute;NH XA TẦM TAY TRẺ EM.</p>\r\n<p>ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</p>','posts/August2019/FtYKGaX9rVtC3rpqpi3m.jpg','blood-tonic-care','Blood Tonic Care','Blood Tonic Care','PUBLISHED',0,'2019-08-02 04:19:09','2019-08-02 04:19:09'),(14,1,7,'Kid Grow Care','Kid Grow Care','Kid Grow Care','<p><strong>KID GROW CARE</strong></p>\r\n<p><strong>Th&agrave;nh phần:</strong>trong 10 ml chứa 3,04 ml dịch chiết hỗn hợp thảo mộc th&ocirc; tương đương:</p>\r\n<p>&nbsp; &nbsp; &bull; Ho&agrave;ng kỳ:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 0,67g</p>\r\n<p>&nbsp; &nbsp; &bull; Mạch m&ocirc;n:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.. 0,67g</p>\r\n<p>&nbsp; &nbsp; &bull; Bạch truật:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;... 0,34g</p>\r\n<p>&nbsp; &nbsp; &bull; Trần b&igrave;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 0,34g</p>\r\n<p>&nbsp; &nbsp; &bull; Ho&agrave;ng cầm:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 0,34g</p>\r\n<p>&nbsp; &nbsp; &bull; Sơn tra:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; 0,34g</p>\r\n<p>&nbsp; &nbsp; &bull; Lai phục tử:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. 0,34g</p>\r\n<p>&nbsp; &nbsp; &bull; Phụliệu: Mậtong, Chất bảo quản (E202), Chất ổn định (E415), Nước tinh khiết vừa đủ 10ml.</p>\r\n<p><strong>C&ocirc;ng dụng:</strong>&nbsp;Bổ tỳ, hỗ trợ ti&ecirc;u h&oacute;a tốt, tăng cường sức khỏe.</p>\r\n<p><strong>Đối tượng sử dụng:&nbsp;</strong>D&ugrave;ng cho trẻ em biếng ăn, chậm ph&aacute;t triển, suy dinh dưỡng, ti&ecirc;u h&oacute;a k&eacute;m, chướng bụng.</p>\r\n<p><strong>C&aacute;ch d&ugrave;ng:&nbsp;</strong>Trẻ từ 3 tuổi trở l&ecirc;n: uống 10 - 20 ml/lần x 2 - 3 lần/ng&agrave;y.</p>\r\n<p><strong>Bảo quản:&nbsp;</strong>Ở nhiệt độ kh&ocirc;ng qu&aacute; 30<sup>o</sup>C, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp. G&oacute;i đ&atilde; mở n&ecirc;n bảo quản trong ngăn m&aacute;t tủ lạnh v&agrave; d&ugrave;ng trong ng&agrave;y.</p>\r\n<p><strong>Số ĐKSP: 4285/2019/ĐKSP</strong></p>\r\n<p><strong>Thời hạn sử dụng:</strong>&nbsp;36 th&aacute;ng kể từ ng&agrave;y sản xuất. Ng&agrave;y sản xuất v&agrave; hạn sử dụng in tr&ecirc;n bao b&igrave;.</p>\r\n<p><strong>Ch&uacute; &yacute;:&nbsp;</strong>Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh. Kh&ocirc;ng d&ugrave;ng cho người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của sản phẩm.Trẻ dưới 3 tuổi: d&ugrave;ng theo hướng dẫn của chuy&ecirc;n gia y tế.</p>\r\n<p>TR&Aacute;NH XA TẦM TAY TRẺ EM.</p>\r\n<p>ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</p>','posts/August2019/PkEpp3wQVmBwHKveh8yr.jpg','kid-grow-care','Kid Grow Care','Kid Grow Care','PUBLISHED',0,'2019-08-02 04:20:36','2019-08-02 04:20:36'),(15,1,6,'Cao Nấm Trùng Thảo Cordy-X','Cao Nấm Trùng Thảo Cordy-X','<p><span style=\"color: #f6b822;\"><strong><em>Hỗ trợ gi&uacute;p bồi bổ sức khoẻ, tăng cường sức đề kh&aacute;ng cho cơ thể.</em></strong></span></p>\r\n<p><strong>Nh&agrave; sản xuất:</strong> C&ocirc;ng ty Cổ phần Ph&aacute;t triển C&ocirc;ng Nghệ Viotek</p>\r\n<p><strong>C&ocirc;ng ty ph&acirc;n phối:</strong> C&ocirc;ng ty&nbsp;Cổ phần&nbsp;MHD Innocare</p>\r\n<p><strong>Số đăng k&yacute;:</strong> 3792/2018/ĐKSP&nbsp;</p>\r\n<p><strong>Dạng b&agrave;o chế:</strong> Cao đặc</p>\r\n<p><strong>Quy c&aacute;ch đ&oacute;ng g&oacute;i:</strong> Lọ thuỷ tinh 50g</p>','<div class=\"row\">\r\n<div class=\"col-xs-12\">\r\n<h3 class=\" content_body\"><strong>CAO NẤM TR&Ugrave;NG THẢO CORDY-X</strong></h3>\r\n<div class=\" content_body\">&nbsp;</div>\r\n<div class=\" content_body\">\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>C&Ocirc;NG DỤNG</strong></blockquote>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Hỗ trợ phục hồi bồi bổ sức khoẻ v&agrave; tăng cường sức đề kh&aacute;ng.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; C&acirc;n bằng cơ thể, cải thiện giấc ngủ v&agrave; suy nhược cơ thể.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Thanh lọc cơ thể, gi&uacute;p trẻ ho&aacute; từ b&ecirc;n trong.&nbsp;<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>TH&Agrave;NH PHẦN</strong></blockquote>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Mỗi lọ 50g chứa tinh chất chiết xuất.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Nấm linh chi Ganoderma lucidum: 12.50g.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Nấm tr&ugrave;ng thảo Cordyceps militaris: 1.25g.<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>C&Aacute;CH D&Ugrave;NG</strong></blockquote>\r\n<p>Pha 1 th&igrave;a nhỏ (tương đương 2,5 g) với 1 cốc nước ấm 50ml, khuấy nhẹ đều. D&ugrave;ng 1-2 lần/ ng&agrave;y.<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>ĐỐI TƯỢNG SỬ DỤNG</strong></blockquote>\r\n<p>Người c&oacute; nhu cầu phục hồi sức khoẻ v&agrave; người c&oacute; nhu cầu tăng cường sức đề kh&aacute;ng.<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>THẬN TRỌNG</strong></blockquote>\r\n<p>Kh&ocirc;ng d&ugrave;ng Nấm Tr&ugrave;ng Thảo trong trường hợp bệnh nh&acirc;n c&oacute; vết thương hở đang chảy m&aacute;u hoặc dị ứng với bất kỳ th&agrave;nh phần n&agrave;o của sản phẩm.<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>BẢO QUẢN</strong></blockquote>\r\n<p>Bảo quản nơi kh&ocirc; r&aacute;o, tr&aacute;nh &aacute;nh s&aacute;ng trực tiếp.<br /><br /></p>\r\n<blockquote style=\"padding: 5px 20px; margin: 0 0 20px; font-size: 15px; border-left: 5px solid #f6b822;\"><strong>QUY C&Aacute;CH Đ&Oacute;NG G&Oacute;I</strong></blockquote>\r\n<p>Hộp 1 lọ cao đặc.</p>\r\n<p>&nbsp;</p>\r\n<p><span style=\"caret-color: #ff0000; color: #ff0000;\">*Sản phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc v&agrave; kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh.</span></p>\r\n</div>\r\n</div>\r\n</div>','posts/August2019/ZnA2bdwvWiY4jIjfsjQK.jpg','cao-nam-trung-thao-cordy-x','Cao Nấm Trùng Thảo Cordy-X','Cao nấm trùng thảo, đông trùng hạ thảo, cordy x','PUBLISHED',0,'2019-08-02 04:22:03','2019-08-07 04:10:30'),(16,1,4,'Osluma','Osluma','Osluma','<p><strong>OSLUMA</strong></p>\r\n<p><strong>C&ocirc;ng thức:</strong> cho 1 g&oacute;i</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Bạch cập (Rhizoma Bletillae striatae): 1.200 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Bối mẫu (Bulbus Fritillariae): 600 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Cam thảo (Radix Glycyrrhizae): 2.000 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Di&ecirc;n hồ s&aacute;ch (Tuber Corydalis): 600 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Đại ho&agrave;ng (Rhizoma Rhei): 600 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Mai mực (Os Sepiae): 1.200 mg.</p>\r\n<p>&nbsp; &nbsp; &nbsp;T&aacute; dược:</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Lactose: vừa đủ 8 g.</p>\r\n<p><strong>T&aacute;c dụng:</strong> Hoạt huyết, khử ứ, giảm acid dạ d&agrave;y, giảm đau.</p>\r\n<p><strong>Chỉ định:</strong> D&ugrave;ng cho c&aacute;c trường hợp bị vi&ecirc;m lo&eacute;t dạ d&agrave;y &ndash; t&aacute;&nbsp; tr&agrave;ng biểu hiện qua c&aacute;c triệu chứng: đau v&ugrave;ng thượng vị, tr&agrave;o ngược acid, c&oacute; cảm gi&aacute;c kh&oacute; chịu ở dạ d&agrave;y.</p>\r\n<p><strong>C&aacute;ch d&ugrave;ng:</strong> H&ograve;a thuốc trong g&oacute;i v&agrave;o khoảng 50 ml nước ấm, khuấy đều, uống trước bữa ăn 1 giờ.</p>\r\n<p><strong>Liều d&ugrave;ng:</strong> Ng&agrave;y 2 &ndash; 4 g&oacute;i hoặc theo sự chỉ định của thầy thuốc.</p>\r\n<p><strong>Chống chỉ định:</strong></p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Phụ nữ c&oacute; thai hoặc cho con b&uacute;.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Người lo&eacute;t dạ d&agrave;y do Helicobacter pylori.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Người đang bị ti&ecirc;u chảy.</p>\r\n<p>&nbsp; &nbsp; &nbsp;-&nbsp; Người mẫn cảm với bất kỳ th&agrave;nh phần n&agrave;o của thuốc.</p>\r\n<p><strong>Thận trọng:</strong> Người bị sỏi thận, tiết niệu.</p>\r\n<p><strong>Ti&ecirc;u chuẩn &aacute;p dụng:</strong> TCCS.</p>\r\n<p><strong>Số đăng k&yacute;: VD-23579-15.</strong></p>\r\n<p><strong>Bảo quản:</strong> Ở nhiệt độ kh&ocirc;ng qu&aacute; 30oC, tr&aacute;nh nắng.</p>\r\n<p>ĐỂ XA TẦM TAY TRẺ EM &ndash; ĐỌC KỸ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI D&Ugrave;NG.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>','posts/August2019/AGD27dND4CipZC3h1ZzO.jpg','osluma','Osluma','Osluma','PUBLISHED',0,'2019-08-02 04:24:55','2019-08-05 06:44:29');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','Administrator','2019-07-22 02:16:11','2019-07-22 02:16:11'),(2,'user','Normal User','2019-07-22 02:16:11','2019-07-22 02:16:11');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `details` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_key_unique` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'site.title','Site Title','Site Title','','text',1,'Site'),(2,'site.description','Site Description','Site Description','','text',2,'Site'),(3,'site.logo','Site Logo','','','image',3,'Site'),(4,'site.google_analytics_tracking_id','Google Analytics Tracking ID','','','text',4,'Site'),(5,'admin.bg_image','Admin Background Image','','','image',5,'Admin'),(6,'admin.title','Admin Title','Voyager','','text',1,'Admin'),(7,'admin.description','Admin Description','Welcome to Voyager. The Missing Admin for Laravel','','text',2,'Admin'),(8,'admin.loader','Admin Loader','','','image',3,'Admin'),(9,'admin.icon_image','Admin Icon Image','','','image',4,'Admin'),(10,'admin.google_analytics_client_id','Google Analytics Client ID (used for admin dashboard)','','','text',1,'Admin');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `translations`
--

DROP TABLE IF EXISTS `translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `translations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int(10) unsigned NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `translations`
--

LOCK TABLES `translations` WRITE;
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;
INSERT INTO `translations` VALUES (1,'data_types','display_name_singular',5,'pt','Post','2019-07-22 02:16:20','2019-07-22 02:16:20'),(2,'data_types','display_name_singular',6,'pt','Página','2019-07-22 02:16:20','2019-07-22 02:16:20'),(3,'data_types','display_name_singular',1,'pt','Utilizador','2019-07-22 02:16:20','2019-07-22 02:16:20'),(4,'data_types','display_name_singular',4,'pt','Categoria','2019-07-22 02:16:20','2019-07-22 02:16:20'),(5,'data_types','display_name_singular',2,'pt','Menu','2019-07-22 02:16:20','2019-07-22 02:16:20'),(6,'data_types','display_name_singular',3,'pt','Função','2019-07-22 02:16:20','2019-07-22 02:16:20'),(7,'data_types','display_name_plural',5,'pt','Posts','2019-07-22 02:16:20','2019-07-22 02:16:20'),(8,'data_types','display_name_plural',6,'pt','Páginas','2019-07-22 02:16:20','2019-07-22 02:16:20'),(9,'data_types','display_name_plural',1,'pt','Utilizadores','2019-07-22 02:16:20','2019-07-22 02:16:20'),(10,'data_types','display_name_plural',4,'pt','Categorias','2019-07-22 02:16:21','2019-07-22 02:16:21'),(11,'data_types','display_name_plural',2,'pt','Menus','2019-07-22 02:16:21','2019-07-22 02:16:21'),(12,'data_types','display_name_plural',3,'pt','Funções','2019-07-22 02:16:21','2019-07-22 02:16:21'),(13,'categories','slug',1,'pt','categoria-1','2019-07-22 02:16:21','2019-07-22 02:16:21'),(14,'categories','name',1,'pt','Categoria 1','2019-07-22 02:16:21','2019-07-22 02:16:21'),(15,'categories','slug',2,'pt','categoria-2','2019-07-22 02:16:21','2019-07-22 02:16:21'),(16,'categories','name',2,'pt','Categoria 2','2019-07-22 02:16:21','2019-07-22 02:16:21'),(17,'pages','title',1,'pt','Olá Mundo','2019-07-22 02:16:21','2019-07-22 02:16:21'),(18,'pages','slug',1,'pt','ola-mundo','2019-07-22 02:16:21','2019-07-22 02:16:21'),(19,'pages','body',1,'pt','<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>','2019-07-22 02:16:21','2019-07-22 02:16:21'),(20,'menu_items','title',1,'pt','Painel de Controle','2019-07-22 02:16:21','2019-07-22 02:16:21'),(21,'menu_items','title',2,'pt','Media','2019-07-22 02:16:21','2019-07-22 02:16:21'),(22,'menu_items','title',12,'pt','Publicações','2019-07-22 02:16:21','2019-07-22 02:16:21'),(23,'menu_items','title',3,'pt','Utilizadores','2019-07-22 02:16:21','2019-07-22 02:16:21'),(24,'menu_items','title',11,'pt','Categorias','2019-07-22 02:16:21','2019-07-22 02:16:21'),(25,'menu_items','title',13,'pt','Páginas','2019-07-22 02:16:21','2019-07-22 02:16:21'),(26,'menu_items','title',4,'pt','Funções','2019-07-22 02:16:21','2019-07-22 02:16:21'),(27,'menu_items','title',5,'pt','Ferramentas','2019-07-22 02:16:21','2019-07-22 02:16:21'),(28,'menu_items','title',6,'pt','Menus','2019-07-22 02:16:21','2019-07-22 02:16:21'),(29,'menu_items','title',7,'pt','Base de dados','2019-07-22 02:16:21','2019-07-22 02:16:21'),(30,'menu_items','title',10,'pt','Configurações','2019-07-22 02:16:21','2019-07-22 02:16:21');
/*!40000 ALTER TABLE `translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `user_id` int(10) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `user_roles_user_id_index` (`user_id`),
  KEY `user_roles_role_id_index` (`role_id`),
  CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'users/default.png',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Admin','hmdpharma@gmail.com','users/default.png','$2y$10$14YAkaHyAjT/zFjnQ1GciOhxsWYTpcEUpTHYe.XtjiP3k4OGtrzS6','dGKrCS7V4ZVPeaHSDki0wMORMDbPlsWl6KEufggjxDK6dr8qBrrqzAqCNBMw','{\"locale\":\"en\"}','2019-07-22 02:16:18','2019-07-29 20:43:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-08  4:22:56
