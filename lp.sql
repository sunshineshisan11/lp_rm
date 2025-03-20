-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2025-03-20 08:30:13
-- 服务器版本： 10.4.32-MariaDB
-- PHP 版本： 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `lp`
--

-- --------------------------------------------------------

--
-- 表的结构 `convension`
--

CREATE TABLE `convension` (
  `account` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `height` varchar(10) NOT NULL,
  `weight` varchar(10) NOT NULL,
  `xw` varchar(10) NOT NULL,
  `job` varchar(20) NOT NULL,
  `video` varchar(50) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `jj` varchar(300) NOT NULL,
  `id` int(11) NOT NULL,
  `city` varchar(20) NOT NULL,
  `gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `convension`
--

INSERT INTO `convension` (`account`, `name`, `height`, `weight`, `xw`, `job`, `video`, `avatar`, `jj`, `id`, `city`, `gender`) VALUES
('01', 'すずき なな', '165', '51', 'D', 'ひしょかん', 'IMG_0358.MP4', 'photo_2025-03-06_01-00-23 (2).jpg', '', 1, '東京', '0'),
('02', 'さくらい みさき', '165', '45', 'C', 'おんがく きょうし', 'IMG_6659.MP4', 'photo_2025-03-04_06-23-48.jpg', '', 2, '東京', '0'),
('03', 'ほしの ちなつ', '163', '45', 'C', 'しょくいん', 'IMG_3936.MP4', 'Snipaste_2025-02-28_22-13-tx58.jpg', '', 4, 'なごや', '0'),
('04', '김태희', '168', '45', 'C', '메이크업 아티스트', 'video_2025-03-04_03-11-32.mp4', 'Snipaste_2025-03-08_14-35-03.jpg', '韓國', 5, '한국 서울', '0'),
('05', 'Nguyễn Thị Phương', '162', '47', 'B', 'y tá nữ', '1video_2025-03-08_15-23-30.mp4', '1photo_2024-12-14_03-08-36.jpg', '', 6, 'Nha Trang, Việt Nam', '0'),
('06', '이민호', '170', '51', 'C', '모델러', 'video_2025-03-06_01-49-40.mp4', 'photo_2025-03-06_01-20-48.jpg', '', 7, '서울', '0'),
('07', 'Lam Shi Yun', '170', '50', 'B', 'Guru Yoga', '3video_2025-03-08_15-24-16.mp4', '3photo_2024-12-28_13-04-40.jpg', '', 8, 'Kuala Lumpur', '0'),
('08', 'やまぐち ももえ', '165', '50', 'B', 'おんがく きょうし', '5video_2025-03-08_15-24-58.mp4', '5photo_2025-02-11_02-22-01.jpg', '', 9, '福岡県', '0'),
('09', 'いしはら さとみ', '168', '49', 'B', 'ひしょかん', '6video_2025-03-08_15-25-13.mp4', '6photo_2025-02-26_03-34-08.jpg', '', 10, '東京', '0'),
('10', 'ほしの みゆき', '160', '45', 'C', '社員', '日本21.mp4', '日本21.png', '', 11, '横浜', '0'),
('11', 'さき ゆうな', '162', '45', 'B', 'がくせい', '日本20.mp4', '日本20.jpg', '', 12, '青森県', '0'),
('12', '김서영', '165', '48', 'B', '요가 코치', '地区  韩国13.mp4', '地区  韩国13.png', '', 13, '서울', '0'),
('13', '이하늘', '165', '47', 'C', '비서 ', '地区  韩国14.mp4', '地区  韩国14.png', '', 14, '서울”', '0'),
('14', 'Amira Harris', '165', '49', 'B', 'jurulatih renang', '地区  上海15.mp4', 'photo_2025-03-04_20-26-19.jpg', '', 15, 'Kuala Lumpur', '0'),
('15', 'みやざき りな', '163', '52', 'C', 'けいえいたんとうしゃ', '地区  韩国18.mp4', '地区  韩国18.png', '', 16, '広島県', '0'),
('16', 'Olivia White', '165', '52', 'B', 'stylist model', '地区 荷兰11.mp4', '地区 荷兰11.png', '', 17, 'London', '0'),
('17', 'さくらい あやか', '163', '51', 'B', 'そつぎょうせい', '13.19.mp4', 'photo_2025-02-12_14-30-36.jpg', '', 18, '鹿児島県', '0'),
('18', 'Ava Johnson', '165', '52', 'B', 'manikin', '地区 乌克兰3.mp4', '地区 乌克兰3.png', '', 19, 'Kharkiv', '0'),
('19', 'Emma', '170', '55', 'B', 'chorine', '地区  韩国17.mp4', 'photo_2025-03-10_17-59-01.jpg', '', 20, 'New York', '0'),
('20', 'やまもと たくや', '175', '68', '1', 'カヌーコーチ', '地区  台湾.mp4', '地区  台湾.png', '', 21, '宮崎県', '1'),
('21', 'わたなべ たくや ', '175', '73', '1', 'いりょうぎょうかい', '地区 新加坡2.mp4', 'photo_2025-03-08_19-01-13.jpg', '', 22, 'きょうとふ', '1'),
('22', 'わたなべ たくや ', '175', '75', '1', '金融セクター', '地区 越南.mp4', 'photo_2025-03-08_19-01-24.jpg', '', 23, 'いばらきけん', '1'),
('23', 'William', '180', '80', '1', 'boxing', '地区  阿联酋.mp4', 'photo_2025-03-08_19-01-39.jpg', '', 24, 'London', '1'),
('24', 'Oliver', '180', '95', '1', 'fitness coach', '地区  美国.mp4', 'photo_2025-03-08_19-01-44.jpg', '', 25, 'Edinburgh', '1'),
('25', 'ろばね ゆうき', '178', '79', '1', 'ソフトウェア開発エンジニア', '地区 新加坡.mp4', 'photo_2025-03-08_19-03-06.jpg', '', 26, 'きょうとふ', '1'),
('26', 'みやざき はやと', '178', '75', '1', '室内デザイナー', '地区 泰国3.mp4', 'photo_2025-03-08_19-03-03.jpg', '', 27, 'あきたけん', '1'),
('27', 'さいとう かずや', '178', '79', '', 'データ解析師', '日本21.mp4', 'photo_2025-03-08_19-02-53.jpg', '', 28, '奈良県', '1'),
('28', 'たかはし ゆうた', '178', '72', '1', '資産管理顧問', '地区 马来西亚.mp4', 'photo_2025-03-08_19-02-48.jpg', '', 29, '茨城県', '1'),
('29', 'いとう たくしん', '178', '78', '1', '監理エンジニア', '地区  中国.mp4', 'photo_2025-03-08_19-02-41.jpg', '', 30, '愛知県', '1'),
('30', '박지훈', '179', '80', '1', '건축사', '地区  泰国1.mp4', 'photo_2025-03-08_22-00-45.jpg', '', 31, '부산”', '1'),
('31', 'Leo', '179', '85', '1', 'spécialiste juridiqu', '地区  意大利.mp4', 'photo_2025-03-08_22-04-26.jpg', '', 32, 'Paris', '1'),
('32', 'Lucas', '180', '80', '1', 'médeci', '地区  伊拉克.mp4', 'photo_2025-03-08_19-01-54.jpg', '', 33, 'Marseille', '1');

-- --------------------------------------------------------

--
-- 表的结构 `dating`
--

CREATE TABLE `dating` (
  `account` varchar(20) NOT NULL,
  `vipGrade` varchar(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `money` varchar(20) NOT NULL,
  `type` varchar(10) NOT NULL,
  `country` varchar(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `dating`
--

INSERT INTO `dating` (`account`, `vipGrade`, `name`, `money`, `type`, `country`, `id`) VALUES
('513203', '1', '한준석', '1200000원', '1', '韩国', 1),
('5132031', '1', '정유나', '1560000원', '1', '韩国', 2),
('5132033', '0', 'たかはし しょうた', '150000円', '0', '日本', 3),
('5132034', '1', 'たなか あおい', '330000円', '2', '日本', 4),
('5132035', '0', '박서연', '550000원', '2', '韩国', 5),
('5132036', '2', 'いとう しおり', '650000円', '1', '日本', 6),
('5132037', '3', 'さき かずや', '1200000円', '0', '日本', 7),
('5132037', '3', 'さき かずや', '100000円', '0', '日本', 8),
('65165106520', '1', 'ほしの えり', '600000円', '1', '日本', 9),
('65165106521', '2', 'さとう さくら', '150000円', '1', '日本', 10),
('65165106523', '2', 'たかはし しょうた', '150000円', '1', '日本', 11),
('65165106524', '3', 'William Thompson', '3000USTD', '1', '英国', 12),
('65165106525', '1', 'わたなべ みほ', '120000円', '0', '日本', 13),
('65165106526', '1', 'やまもと ゆうき', '36000円', '1', '日本', 14),
('65165106527', '1', 'くろばね れいな', '100000円', '0', '日本', 15),
('65169419615', '2', 'くすのき しおり', '50000円', '0', '日本', 16),
('5132038', '3', 'Emma Müller', '6000US', '2', '美国', 17),
('5132038', '3', 'Emma Müller', '5000US', '1', '美国', 18),
('15612', '0', 'さとう けん', '15000円', '1', '日本', 19);

-- --------------------------------------------------------

--
-- 表的结构 `gift`
--

CREATE TABLE `gift` (
  `id` int(11) NOT NULL,
  `giftDate` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 表的结构 `letter`
--

CREATE TABLE `letter` (
  `id` int(11) NOT NULL,
  `account` varchar(20) NOT NULL,
  `content` varchar(500) NOT NULL,
  `img` varchar(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `letter`
--

INSERT INTO `letter` (`id`, `account`, `content`, `img`, `date`, `name`) VALUES
(1, 'asdsdd', '心いっぱいの感謝の気持ちを込めて、この手紙を書かせていただきます。少し前まで、私は貴プラットフォームを通じて、今の彼女と出会うことができました。彼女の現れは私の生活を明るく照らしました。プラットフォームの正確なマッチングと思いやりのあるサービスのおかげで、私たちは広い人ごみの中を越えて、一緒になることができました。\r\n\r\n最初のオンライン交流から、オフラインでのデートのときのドキドキする瞬間まで、どの一歩もプラットフォームの力なしには成り立ちませんでした。今、私たちの関係は安定しており、未来に向かって大いに期待しています。心から貴プラットフォームが提供してくれた素敵な交友環境に感謝いたします。これにより、愛の花がきれいに咲きました。プラットフォームがますます素敵なものになり、もっと多くの人が幸せを手に入れられるように、心から願っています 。', '', '2025-02-23', 'くすのき しおり'),
(2, 'asdasd', '貴プラットフォームに加入する前は、私はずっと広い人ごみの中で、生涯一緒にいる相手を見つけることを期待していました。思いも寄らなかったことに、プラットフォームが巧みに私と私の夫をつないでくれました。初めてプラットフォームで彼の情報を見たとき、妙な感じが自然に湧いてきました。チャットを始めてから、私たちは驚いたことに、たくさんの共感を見つけました。', '', '2021-05-25', 'たなか あおい'),
(3, '65165106525', 'オンラインでのやり取りの盛んな交流から、オフラインで会ったときの彼の暖かい笑顔や思いやりのある行動まで、どの瞬間もプラットフォームの存在によって可能になりました。付き合いが深まるにつれて、私たちの愛情はますます厚くなりました。今、私たちは未来の生活に満ち溢れた期待を抱いており、たくさんの素敵な未来の計画を立てています。', '', '2019-6-19', 'たかはし しょうた'),
(4, 'asdasddd', 'こんにちは！心からの感謝の気持ちを皆さんにお伝えしたいと思います。貴プラットフォームを通じて、イギリスに住んでいる彼氏と出会うことができました。彼の登場により、私の世界はこれまで以上に輝き始めました。\r\n\r\n元々は遠く離れていた私たちが、プラットフォームの正確なマッチングと心のこもったサービスを通じて、素敵な縁をつなぐことができました。オンラインで時差を越えた盛り上がったチャットから、オフラインで国境を越えて会ったときのドキドキする瞬間まで、どの一歩もプラットフォームのおかげです。今、私たちの関係は安定しており、未来に対して大いに期待を抱いています。', '', '2021-05-25', '樱井 葵'),
(5, '65165106525', 'When I first saw her profile on the platform, it was as if I had been enchanted, and my heart rate unconsciously accelerated. During our online communication, we were like two people who had opened a chatterbox and just couldn\'t stop. From those strange and niche hobbies to our wild fantasies about the future, every conversation was like exploring a whole new world, full of constant surprises.\r\n\r\nFinally, the day of our offline date arrived. I was so nervous that I didn\'t know what to do with my', '', '2022-09-24', 'William'),
(6, 'asdasdddd', '제 마음 가득 감사의 마음이 넘쳐서, 빨리 이야기하고 싶습니다. 귀하의 플랫폼에 가입하기 전에 제가 사랑을 찾는 길은 아주 길었고, 자주 실망했습니다. 하지만 가입한 후에는 모든 게 달라졌습니다.\r\n\r\n플랫폼의 정확한 필터 기능이 너무 강력합니다. 제가 취미, 성격 취향 등 조건을 설정하자 곧 그녀의 프로필을 볼 수 있었습니다. 첫 번째 온라인 소통할 때 제가 문제를 만났는데, 플랫폼 고객센터가 신속하게 대응하고, 인내심 있게 안내해줘서 소통이 원활하게 이어질 수 있었습니다. 오프라인 데이트 때는 플랫폼에서 추천한 장소가 너무 낭만적이고 적절해서 우리 만남이 특히나 아름답게 됐습니다.', '', '2024-05-15', '박지원'),
(7, '65165106525', 'With a heart full of gratitude, I am earnestly writing this letter. \"May I find a heart - to - heart person and stay with him until the end of our days.\" The once - beautiful expectation for love has now become a reality on your platform. Not long ago, with the help of the platform\'s precise matching and meticulous and considerate services, I met my current girlfriend. She is like a warm sun, instantly lighting up my life.', '', '2023-07-18', 'Sophia'),
(8, 'asdasddddd', 'From the instant sense of familiarity in our first online conversation to the heart - pounding moment during our offline date, along the way, the platform has played an extremely important role. Now, our relationship is firm, and we are full of anticipation for the future. I sincerely thank your platform for creating a high - quality dating environment, allowing the flower of love to bloom brightly. May the platform thrive and help more people encounter good fortune and harvest happiness.', '', '2024-07-13', 'Rossi'),
(9, '65165106525', '감사합니다! 귀하의 플랫폼을 통해 제 여자친구와 만났습니다. 온라인으로 열심히 소통하고, 오프라인 데이트에서 설레는 감정을 느끼는데, 모두 플랫폼의 도움 덕분입니다. 지금 우리 사이의 감정은 안정적이고, 미래에 대한 기대감이 넘쳐납니다. 플랫폼이 제공하는 우수한 환경에 감사드립니다. 이로 인해 사랑이 피어나게 된 것입니다. 플랫폼이 더욱 더 발전해 더 많은 사람들이 행복을 가질 수 있도록 기원합니다. ', '', '2023-03-28', '김지윤');

-- --------------------------------------------------------

--
-- 表的结构 `manage`
--

CREATE TABLE `manage` (
  `account` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `loginFlag` varchar(10) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='			weight: '''', 			xw: '''', 			job';

--
-- 转存表中的数据 `manage`
--

INSERT INTO `manage` (`account`, `password`, `loginFlag`, `id`) VALUES
('xiaohu', 'xiaohu123', '1', 1);

-- --------------------------------------------------------

--
-- 表的结构 `orderlist`
--

CREATE TABLE `orderlist` (
  `id` int(11) NOT NULL,
  `account` varchar(20) NOT NULL,
  `makeMoney` varchar(20) NOT NULL,
  `type` varchar(10) NOT NULL,
  `date` varchar(30) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT '0' COMMENT '0待审核 1已通过 2已拒绝'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `orderlist`
--

INSERT INTO `orderlist` (`id`, `account`, `makeMoney`, `type`, `date`, `status`) VALUES
(1, '1234', '80000', '0', '2025-02-28 18:03:12', '1'),
(2, '12345', '112000', '0', '2025-02-28 18:15:25', '1'),
(3, '12345', '3000', '0', '2025-03-02 23:03:10', '1'),
(4, '12345', '1000000', '1', '2025-\r\n03-02 23:17:11', '1'),
(5, '12345', '1000000', '0', '2025-\r\n03-02 23:18:35', '1'),
(6, '12345', '10000', '0', '2025-03\r\n-02 23:19:45', '1'),
(7, '12345', '10000', '0', '2025-03\r\n-02 23:19:45', '1'),
(8, '12345', '1000', '0', '2025-03-02 23:46:13', '1'),
(9, '12345', '10000', '1', '2025-03-02 23:47:21', '1'),
(10, '12345', '550000', '1', '2025-03-02 23:50:13', '1'),
(11, '12345', '10000', '0', '2025-03-02 23:50:47', '1'),
(12, '12345', '786', '1', '2025-03-03 00:09:47', '1'),
(13, '12345', '15200', '1', '2025-03-03 00:34:22', '0'),
(14, '1234', '1000', '0', '2025-03-08 11:42:26', '1'),
(15, '15666', '1000', '1', '2025-03-11 16:07:16', '0'),
(16, 'TETU0523', '6000', '1', '2025-03-14 17:06:20', '1'),
(17, '123', '1000', '0', '2025-03-14 17:27:59', '0'),
(18, '1234', '1000', '0', '2025-03-14 17:33:12', '0'),
(19, 'ニシダサネヒト', '6000', '0', '2025-03-17 11:58:29', '1'),
(20, 'ニシダサネヒト', '24000', '0', '2025-03-17 14:06:29', '1'),
(21, 'エルヴィン　スミス', '6000', '1', '2025-03-17 17:29:05', '1'),
(22, '08018458895', '6000', '1', '2025-03-17 17:54:13', '1'),
(23, 'エルヴィン　スミス', '20000', '0', '2025-03-18 12:16:44', '1'),
(24, 'エルヴィン　スミス', '25000', '1', '2025-03-18 18:19:51', '1'),
(25, '08018458895', '24000', '0', '2025-03-18 18:41:35', '1'),
(26, 'Aung san lin', '7000', '1', '2025-03-19 10:36:22', '1'),
(27, '08018458895', '24000', '1', '2025-03-19 11:21:21', '0'),
(28, 'izumis18', '6000', '1', '2025-03-20 10:21:43', '1');

-- --------------------------------------------------------

--
-- 表的结构 `square`
--

CREATE TABLE `square` (
  `id` int(11) NOT NULL,
  `account` varchar(20) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` varchar(255) NOT NULL,
  `source` varchar(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `vipGrade` varchar(20) NOT NULL,
  `likes` varchar(10) NOT NULL,
  `comment` varchar(10) NOT NULL,
  `share` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `square`
--

INSERT INTO `square` (`id`, `account`, `avatar`, `title`, `content`, `source`, `date`, `name`, `vipGrade`, `likes`, `comment`, `share`) VALUES
(1, '123', '24.jpg', 'Sweating profusely o', 'Fitness is not a momentary impulse but a day - by - day perseverance. In this space full of strength, we water the most beautiful flower of figure with our sweat. ', 'Snipaste_2025-02-26_14-52-30.png', '2024-01-23 14:07:05', 'Marry', '3', '65654', '3256', '1325'),
(2, '1234', '23.jpg', 'ヨガは私の変身を見届けた ', '私は初めてのときは下手でしたが、今では上手になりました。心も落ち着き、ヨガは私の成長を見てきました。今日もヨガルームでたくさんのことを学びました。', 'Snipaste_2025-02-26_14-51-47.png', '2024-01-23 18:12:23', '樱井 葵', '2', '24515', '35210', '1564'),
(3, '12345', 'Snipaste_2025-02-28_21-59-韩国风景14.jpg', '산꼭대기', '주말에 산에 올라가 친구들과 산속에서 놀며 웃었어요. 행복이 이렇게 간단하죠. ', 'Snipaste_2025-02-28_22-00-韩国02.jpg', '2024-02-20 17:16:28', '박지원', '3', '15218', '896', '156'),
(4, '123451', 'Snipaste_2025-02-28_22-21-44.jpg', 'I\'m driving to see y', 'Driving with my dog to embrace love, the wind and the dog\'s fur are both sweet.', 'Snipaste_2025-02-28_21-51-美国人44.jpg', '2024-02-21 20:07:00', 'David', '3', '5000+', '999+', '512'),
(5, '123452', 'Snipaste_2025-02-28_22-22-44.jpg', 'LOVE PARTY に感謝いたします', 'このプラットフォームで今の妻と出会いました。皆さん、きれいでしょう？', 'Snipaste_2025-02-28_21-35-45.jpg', '2024-02-21 16:06:09', 'さとう けんた', '2', '999+', '258', '12'),
(6, '123453', 'Snipaste_2025-02-28_22-11-24.jpg', 'Be at home alone', 'Staying at home taking selfies, I\'m like a mischievous elf. With so many funny expressions and full of joy, each photo is my masterpiece of fun!', 'Snipaste_2025-02-28_21-32-41.jpg', '2024-03-06 12:26:40', 'Emily', '3', '10512', '25112', '3251'),
(7, '123454', 'Snipaste_2025-02-28_22-15-头像11.jpg', 'このプラットフォームでイギリス人の彼氏と', 'イギリスに来て、ボーイフレンドと顔合わせ成功！', 'Snipaste_2025-02-28_21-34-56.jpg', '2024-03-13 14:16:17', 'ふじわら しずか', '3', '16521', '7854', '152'),
(9, '8', 'Snipaste_2025-03-08_22-15-15.jpg', '인생 조언: 영원히 좋은 일이 곧 일', '어느 날, 제이미는 실업 상태에서 지친 마음으로 집을 나섰다. 그는 수많은 면접을 보았지만, 모두 실패했었다. 그가 길을 걷다가 길가에 있는 작은 고양이를 발견했다. 고양이는 다리가 다치고 울고 있었다. 제이미는 마음이 따뜻해져 고양이를 데리고 동물 병원에 갔다. 병원에서 고양이를 치료하는 동안, 그는 동물 보호 단체의 직원과 친해졌다. 그 직원은 제이미의 마음씨를 인정하고, 단체에서 일할 기회를 제안했다. 이렇게 제이미는 실망의 연속에서 벗어나 새로운', 'Snipaste_2025-03-08_22-15-56.jpg', '2024-03-18 17:20:43', '달빛소녀', '1', '1548', '1951', '152'),
(10, '9', 'Snipaste_2025-03-08_22-21-27.jpg', '東京の市街地の美しい景色', '東京タワーはパリのエッフェル塔をモデルにして建設され、高さは 332.6 メートルで、角錐形の鉄塔で、四本の脚で支えられています。全体的なデザインはシンプルで力強さを感じさせ、ラインが流暢で、あらゆる角度から見ても非常に美しさがあります。\n', 'Snipaste_2025-03-08_22-20-59.jpg', '2024-03-18 18:07:18', 'ねこの夢', '2', '2548', '3521', '148'),
(11, '7', 'Snipaste_2025-03-08_22-28-19.jpg', '花火の呗', '朝のゴルフ場は、芝生が一面に広がり、草の葉に露がきらきらと光っています。私は草の香りを含んだ空気を深く吸い込み、今日の最初の打ちを準備します。大自然と心地よい対話をすることを楽しみにしています。', 'Snipaste_2025-03-08_22-28-00.jpg', '2024-03-19 15:02:02', 'さくらい みさき', '2', '11502', '53652', '1529'),
(12, '10', 'Snipaste_2025-03-09_00-12-17.jpg', '首にチェック柄のマフラーを巻いています', '両手を広げて、まるで雪景色に浸り、喜びに酔っているかのようです。背景は両側に建物が立ち並ぶ通りで、地面や建物には雪が積もっています。通りには黒い車が停まっており、通行人も歩いています。空は青々としており、全体的な雰囲気はすがすがしく明るく、冬の趣をたっぷりと感じさせます 。', 'Snipaste_2025-03-09_00-11-40.jpg', '2024-03-21 14:20:27', 'ほしの あやか ', '1', '5121', '124512', '1211'),
(13, '11', 'Snipaste_2025-03-09_00-12-35.jpg', 'に富士山の', '遠くには雄大な富士山が見え、山頂は雪で覆われており、青空の引き立てで格別に壮観です。全体的な画面は濃厚な日本の街並みの風情に満ちており、同時に富士山の美しさも披露しています 。', 'Snipaste_2025-03-09_00-13-15.jpg', '2024-03-24 09:37:31', 'いとう ゆうま ', '2', '1241', '2332', '125'),
(14, '12', 'Snipaste_2025-03-09_00-13-42.jpg', 'これは現代的な雰囲気溢れる建物の内部廊下', '独特な幾何学的な造形の柱と穿孔金属の壁面が、シンプルでデザイン性の高い空間を作り出しています 。\n', 'Snipaste_2025-03-09_00-12-52.jpg', '2024-04-10 11:17:06', '（よしおか り', '2', '1241', '12941', '2541'),
(15, '13', 'Snipaste_2025-03-09_00-14-08.jpg', '素敵な雰囲気に浸る', '湖は濃い青みを帯び、きらきらと光っています。このシーンはおそらく日本の富士五湖エリアでしょう。そこは富士山の美しい景色を楽しむ絶好の場所の一つです 。', 'Snipaste_2025-03-09_00-14-26.jpg', '2024-03-29 17:17:16', 'ささき ゆう', '0', '1521', '5674', '291'),
(16, '13', 'Snipaste_2025-03-09_00-14-56.jpg', 'あなたとお話がしたいです', 'このプラットフォームで本当の愛を見つけることができます。ここでは、たくさんの素敵な人たちと出会えるチャンスがあります。人とのつながりを大切にし、真摯な気持ちで交流すれば、運命の人と出会うかもしれません。本当の愛は時に突然やってきます。このプラットフォームを通じて、あなたの人生に光をもたらす特別な人を見つけましょう。', 'Snipaste_2025-03-09_00-15-57.jpg', '2024-05-15 14:17:18', '佐々木 優奈', '2', '65412', '125421', '12549');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `account` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `inviteCode` varchar(20) DEFAULT NULL,
  `dataError` varchar(20) DEFAULT '0',
  `age` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `bankCard` varchar(255) DEFAULT NULL,
  `money` varchar(20) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `vipCode` varchar(20) DEFAULT NULL,
  `createDate` varchar(20) NOT NULL,
  `vipGrade` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `vipStatus` varchar(20) NOT NULL COMMENT '0制作中  1未激活 2激活中 3已激活',
  `likeSquare` varchar(255) NOT NULL,
  `city` varchar(30) NOT NULL,
  `remake` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `account`, `password`, `inviteCode`, `dataError`, `age`, `gender`, `bankCard`, `money`, `avatar`, `vipCode`, `createDate`, `vipGrade`, `name`, `vipStatus`, `likeSquare`, `city`, `remake`) VALUES
(2, '12345', '12345', '1208', NULL, '26', '女', NULL, '1686986', 'Snipaste_2025-02-28_22-13-头像38.jpg', '566814', '2025-02-26 17:29:35', '3', '박지원', '3', '21', '', ''),
(3, '1234', '123456', '1234', '0', '25', '女', NULL, '89000', '人设 (1).jpg', '566814', '2025-02-26 17:30:40', '3', '美奈子', '3', '23751161513', '', ''),
(13, '12345', '12345', '1234', NULL, NULL, NULL, NULL, NULL, 'Snipaste_2025-02-28_22-13-头像38.jpg', NULL, '2025-02-26 17:57:59', '1', '박지원', '', '21', '', ''),
(20, '123', '123', '1108', NULL, '22', '女', NULL, '88000', 'Snipaste_2025-02-26_14-21-25.png', '566814', '2025-02-25 16:37:10', '3', '千本', '3', '', '', ''),
(29, '158168688', '123321', '1208', '1', NULL, '男', NULL, '280000', 'IMG_0061.png', '558623', '2025-03-09 16:56:05', '1', '長澤まさみ', '3', '', '', ''),
(30, '88998899', '123456789', '1208', NULL, NULL, '男', NULL, NULL, NULL, NULL, '2025-03-09 17:09:23', '', '', '', '', '', ''),
(31, '6535333', 'aa123456', '1208', NULL, NULL, '女', NULL, NULL, NULL, NULL, '2025-03-09 17:11:57', '', '', '', '', '', ''),
(32, 'yj773707', '773707', '1208', NULL, NULL, '男', NULL, NULL, NULL, NULL, '2025-03-09 17:12:29', '', '', '', '', '', ''),
(33, '1314520', '12345678', '1208', NULL, NULL, '男', NULL, NULL, NULL, NULL, '2025-03-09 21:53:45', '', '', '', '', '', ''),
(34, '258963', '258963', '1208', NULL, NULL, '男', NULL, '653000', 'image_1 (14).png', '957763', '2025-03-10 11:12:47', '3', '佐藤優奈', '3', '14', '', ''),
(35, '15666', '123321', '158688', '', '', '女', '', '280000', 'IMG_0061.png', '857852', '2025-03-10 14:16:37', '3', '長澤まさみ', '3', '', '', ''),
(36, '1212123', '123456', '1208', NULL, NULL, '男', NULL, '160000', 'IMG_0119.jpeg', '257354', '2025-03-10 15:43:37', '3', '花泽美穗', '3', '', '', ''),
(37, 'Qwe7575775', 'qwe8686886', '1208', NULL, NULL, '女', NULL, '520000', 'IMG_0055.jpeg', '357143', '2025-03-11 16:52:29', '3', '美奈子', '3', '', '', ''),
(38, 'kaede', 'Aa123456..', '168168', '', '', '女', '', '980000', 'IMG_0057.jpeg', '657892', '2025-03-12 20:45:24', '3', '矢野枫', '3', '', '', ''),
(39, '16888', '123456', '1208', NULL, NULL, '男', NULL, '450000', 'IMG_0001.jpeg', '558212', '2025-03-13 10:21:59', '3', '早川奈子', '3', '', '', ''),
(40, '16889', '123456', '1208', NULL, NULL, '女', NULL, '660000', 'IMG_0001.jpeg', '685551', '2025-03-13 10:25:29', '3', '早川奈子', '3', '', '', ''),
(41, '16885', '123456', '1208', NULL, NULL, '女', NULL, '773000', 'IMG_0005.jpeg', '664599', '2025-03-13 10:35:51', '3', '春島優井', '3', '', '', ''),
(42, '16808', '123456', '1208', NULL, NULL, '女', NULL, '650000', 'IMG_0006.jpeg', '336258', '2025-03-13 10:37:57', '3', '田中千島', '3', '', '', ''),
(43, 'scxn521', 'AA123456aa', '1208', NULL, NULL, '女', NULL, '662000', 'IMG_0002.jpeg', '112536', '2025-03-13 10:38:21', '3', 'モリカワ サチノ', '3', '', '', ''),
(44, '16887', '123456', '268710', '', '', '女', '', '522000', 'IMG_0007.jpeg', '668893', '2025-03-13 10:40:43', '3', '中村優里', '3', '', '', ''),
(45, 'rxqz9912', 'AA123456aa', '775603', '', '', '女', '', '880000', 'IMG_0004.png', '556587', '2025-03-13 11:37:38', '3', '日向晴子', '3', '', '', ''),
(46, 'mkjy5186', 'AA123456aa', '1208', NULL, NULL, '女', NULL, '583000', 'image_0 (2).png', '896558', '2025-03-13 11:41:27', '3', 'ミソラ ユイ', '3', '', '', ''),
(47, 'scyz818', 'AA123456aa', '1208', NULL, NULL, '女', NULL, '890000', '1742196744986.jpg', '662532', '2025-03-13 11:43:17', '3', 'イシハラ サクラコ', '3', '', '', ''),
(48, 'rina', 'AA123456..', '1208', NULL, NULL, '女', NULL, '520000', 'IMG_0058.jpeg', '852006', '2025-03-13 14:11:49', '3', '吉冈梨奈', '3', '', '', ''),
(49, 'yukino', 'Aa123456..', '1208', 'undefined', 'undefined', '女', '', '660000', 'IMG_0059.jpeg', '225689', '2025-03-13 14:14:14', '3', '森川雪乃', '3', '', '', ''),
(50, '158910355', '158910355', '1208', '0', '', '女', '', '600000', 'Snipaste_2025-02-17_19-32-25.png', '803237', '2025-03-14 16:08:14', '3', 'ヤマナカ ナオミ', '3', '', '', ''),
(51, 'love', '102431', '1208', '0', NULL, '女', NULL, NULL, NULL, NULL, '2025-03-14 16:10:41', '', '', '', '', '', ''),
(52, '893538736', '893538736', '980895', '0', '', '女', '', '600000', 'Snipaste_2025-02-18_21-19-51.png', '857537', '2025-03-14 16:33:07', '3', 'ヤマモト ミコ', '3', '', '', ''),
(53, 'zz3222378911', 'zz3222378911', '1208', '0', '', '女', '', '600000', 'Snipaste_2025-02-19_16-50-05.png', '827947', '2025-03-14 16:43:22', '3', 'ヤマモト アヤコ', '3', '', '', ''),
(54, '6389547048', '6389547048', '1208', '0', '', '女', '', '660000', 'Snipaste_2025-03-14_16-49-14.png', '9028', '2025-03-14 16:45:03', '3', 'ヤマナカ ミコ', '3', '', '', ''),
(55, 'TETU0523', 'Tetu2451', '1208', '0', '', '男', '', '0', 'IMG_1028.jpeg', '585866', '2025-03-14 16:50:32', '1', 'T2', '0', '', '', ''),
(56, '2589633', '2589633', '545935', '0', '', '女', '', '600000', 'image_0 (26).png', '177054', '2025-03-15 15:17:16', '3', 'ヨシカワ ケイコ', '3', '', '', ''),
(57, '112233', '123456', '126889', '0', '', '女', '', '880000', 'IMG_0138.jpeg', '644654', '2025-03-16 19:32:14', '3', '铃木美穗', '3', '', '', ''),
(58, 'Qwe8686886 ', 'qwe8686886', '842369', '0', '', '女', '', '980000', 'IMG_0066.jpeg', '942769', '2025-03-17 09:41:42', '3', '青柳沙織', '3', '', '', ''),
(59, 'ニシダサネヒト', 'tatsugou', '1208', '0', '', '男', '', '30000', 'IMG_0068.jpeg', '141432', '2025-03-17 10:50:08', '1', '西田真仁', '0', '', '', ''),
(60, 'エルヴィン　スミス', 'Haruki1318', '1208', '0', '', '男', '', '0', 'IMG_2128.jpeg', '958435', '2025-03-17 16:46:00', '1', 'エルヴィン　スミス', '0', '', '', ''),
(61, '08018458895', 'kenji1016', '1208', '0', '', '男', '', '24000', 'IMG_3634.jpeg', '238319', '2025-03-17 17:12:59', '1', '鈴木　健二', '0', '', '', ''),
(62, 'Aung san lin', 'myothulin298', '1208', '0', '', '男', '', '0', 'IMG_0170.jpeg', '', '2025-03-18 18:46:40', '1', 'Aung san lin', '0', '', '', ''),
(63, 'izumis18', 'izumi8020', '1208', '0', '', '男', '【銀行名】:  三菱UFJ銀行\n【支店名】:  深川支店\n【支店番号】:  086\n【口座番号】:  4620844\n【口座名義】:  杉浦伊豆美', '0', 'IMG_20230521_140107.jpg', '', '2025-03-19 14:07:04', '1', '杉浦伊豆美', '0', '', '', '阿虎客户  充5000已提现6000  第一步未办理'),
(64, 'izumi1116s@Gm', 'izumi8020', '1208', '0', NULL, '男', NULL, NULL, 'IMG_20250319_144231.jpg', NULL, '2025-03-19 14:36:25', '1', '杉浦伊豆美', '0', '', '', ''),
(65, 'loveparty1', '102431', '950505', '0', '', '男', '', '600000', '', '', '2025-03-20 11:49:33', '', '', '3', '', '', '');

--
-- 转储表的索引
--

--
-- 表的索引 `convension`
--
ALTER TABLE `convension`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `dating`
--
ALTER TABLE `dating`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `gift`
--
ALTER TABLE `gift`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `letter`
--
ALTER TABLE `letter`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `manage`
--
ALTER TABLE `manage`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `square`
--
ALTER TABLE `square`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account` (`account`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `convension`
--
ALTER TABLE `convension`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用表AUTO_INCREMENT `dating`
--
ALTER TABLE `dating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用表AUTO_INCREMENT `gift`
--
ALTER TABLE `gift`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `letter`
--
ALTER TABLE `letter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `manage`
--
ALTER TABLE `manage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用表AUTO_INCREMENT `square`
--
ALTER TABLE `square`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
