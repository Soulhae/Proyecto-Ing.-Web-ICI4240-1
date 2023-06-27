-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 03:56:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nimabe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `imagen` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `id_proyecto`, `imagen`) VALUES
(6, 1, 'https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.jpg?t=1682652141'),
(7, 1, 'https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.jpg?t=1682652141'),
(8, 1, 'https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.jpg?t=1682652141'),
(9, 2, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1671485009'),
(10, 2, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.jpg?t=1671485009'),
(11, 2, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.jpg?t=1671485009'),
(12, 2, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.jpg?t=1671485009'),
(13, 2, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.jpg?t=1671485009'),
(14, 3, 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.jpg?t=1680026109'),
(15, 4, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1671485009'),
(16, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_3e2c3c34a0407eb599ccfc0072ee030ee45a6cfc.jpg?t=1682117049'),
(17, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_cb923eeea4afb2865227625d0512c1a2d956cd43.jpg?t=1682117049'),
(18, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_b11ed2d9359cfce8e9c693c85c95b5e5ea12bcec.jpg?t=1682117049'),
(19, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_0b862667df14a47392a8602a643b45fe836274e0.jpg?t=1682117049'),
(20, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_a69d3435ce31da724e24d30af98b0196ff7e55fd.jpg?t=1682117049'),
(21, 6, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/ss_a7952f00209d661a0f05899b6567a4ddc4c43deb.jpg?t=1682117049'),
(22, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.jpg?t=1683618443'),
(23, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e87a3e84890ab19f8995566e62762d5f8ed39315.jpg?t=1683618443'),
(24, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_75f25974c20b8704fe5ee246f74896b550088d3e.jpg?t=1683618443'),
(25, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3e556415d1bda00d749b2166ced264bec76f06ee.jpg?t=1683618443'),
(26, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_abd681cde3402155a35edb82919b7602cc7ec338.jpg?t=1683618443'),
(27, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_1e3dfe515c04f4071207f01d62b85a1d6b560ced.jpg?t=1683618443'),
(28, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b87601dee58f4dbc36e40a8d803dc6a53ceefe07.jpg?t=1683618443'),
(29, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_41e2e8f3b0ad631e929e0c2ec3d1f21de883e98c.jpg?t=1683618443'),
(30, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b70e156adf9e40aed24c10fb352b7813586e7290.jpg?t=1683618443'),
(31, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_8b58d96262fb0d62a482621b86c6ff85f4f57997.jpg?t=1683618443'),
(32, 7, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_7523a8fc7775ae65cabd94d092ebecbd963258b6.jpg?t=1683618443'),
(34, 8, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/37559b8fa80cf0708c8dcef23ef4fea9af26d997a7c6f981565bc50eeaa3cc0f'),
(35, 8, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/b478fce889ed0237b252978f046884121f6be959f5b4b62e4fc03970bd617647'),
(36, 8, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/68f832d604ad2a85fa3dda00ae5345232fe271e01df40a48bb1fb2ed291f92f4'),
(37, 8, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/0375d13a121f32ff06ef96aac1919b138f3ebe13e40cc0b2de7d39237b87fb86'),
(38, 8, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/16304df4fdabb5674cc31edcc80ff1260ffe0f98156c300f31ecb490f18b632c');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patrocinio`
--

CREATE TABLE `patrocinio` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `monto` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `portada` varchar(250) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `subcategoria` varchar(100) NOT NULL,
  `fecha_lanzamiento` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `objetivo` int(11) NOT NULL,
  `monto` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `id_usuario`, `portada`, `titulo`, `categoria`, `subcategoria`, `fecha_lanzamiento`, `descripcion`, `objetivo`, `monto`) VALUES
(1, 12, 'https://i.blogs.es/591b5a/280518-darksouls-review/1366_2000.jpg', 'DARK SOULS™: REMASTERED', 'Juegos', 'Acción', 'Enero 2024', 'Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps. ', 10000000, 0),
(2, 13, 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009', 'Red Dead Redemption 2', 'Juegos', 'Aventura', 'Junio 2025', 'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online. ', 25000000, 0),
(3, 14, 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109', 'Cyberpunk 2077', 'Juegos', 'Rol', 'Junio 2025', 'Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.', 10000000, 0),
(4, 13, 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1678296348', 'Grand Theft Auto V', 'Juegos', 'Acción', 'Abril 2025', 'Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.', 1000000, 0),
(6, 15, 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1682117049', 'FIFA 23', 'Juegos', 'Deportes', 'Noviembre 2023', 'FIFA 23 nos acerca a The World\'s Game con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina disponibles durante la temporada, clubes femeninos, función de juego cruzado* y mucho más. ', 100000, 0),
(7, 12, 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443', 'ELDEN RING', 'Juegos', 'Acción', 'Febrero 2022', 'EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. ', 99999999, 0),
(8, 16, 'https://assets.nintendo.com/image/upload/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58', 'The Legend of Zelda™: Breath of the Wild', 'Juegos', 'Aventura', 'Enero 2024', 'Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.', 99999999, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `descripcion`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `username`, `password`, `telefono`, `id_rol`) VALUES
(6, 'mati@gmail.com', 'matineke', '31635623d67680133f416eb892379d3dd6e7b4cce66d54cec6f61b1e300074c0495cc926d73c21c125a821bd445e942564b9', '', 1),
(7, 'benja@gmail.com', 'Soul', 'b98cbe3b5bde05258b30cf566c3029cece8814d2c5e4367140c55827270e086a46afa316ab778631fd254fb31b7160068e74', '', 1),
(8, 'price@gmail.com', 'kchika', '076c07bb4757ceaf3705fb0f18e707962b02b6b23d13b516267ed6892112944c9a7d0ff377132897e58176783c4f77447a9e', '', 2),
(9, 'nico@gmail.com', 'nikobinho', '31635623d67680133f416eb892379d3dd6e7b4cce66d54cec6f61b1e300074c0495cc926d73c21c125a821bd445e942564b9', '', 1),
(10, 'admin@gmail.com', 'admin', '03df282d377263297a87ff559bc428c72d073e6a7a0495cd230f3b035a892ceee06db0ba099a1aa6aad42cac5f7b21ef2a8e', '', 1),
(11, 'user@gmail.com', 'user', '03df282d377263297a87ff559bc428c72d073e6a7a0495cd230f3b035a892ceee06db0ba099a1aa6aad42cac5f7b21ef2a8e', '', 2),
(12, 'fromsoft@gmail.com', 'FromSoftware', '39daf3a1c46f1ac4e69a689589cde669bf90f9f2f62e4f13596394f75890855fd65ee725eaee277a44eb3f63c985b2dd52e3', '', 2),
(13, 'rockstar@gmail.com', 'Rockstar Games', '61739f0b67c046d36a2c317a176b19a4ab6d934824941034b9ca841dd1c24e033eb465b1d2c50b755a8b97e09046562eda77', '', 2),
(14, 'cdprojeckt@gmail.com', 'CD PROJEKT RED', '03df282d377263297a87ff559bc428c72d073e6a7a0495cd230f3b035a892ceee06db0ba099a1aa6aad42cac5f7b21ef2a8e', '', 2),
(15, 'ea@gmail.com', 'Electronic Arts', '03df282d377263297a87ff559bc428c72d073e6a7a0495cd230f3b035a892ceee06db0ba099a1aa6aad42cac5f7b21ef2a8e', '', 2),
(16, 'nintendo@gmail.com', 'Nintendo', 'd87c41df090f7ed7b71c6b5d9a13b2b1e1038f7d7fbaa917d433ca69e24938e056a6a9980ec6648ef81ebdf9e2a4fa9ab96c', '', 2),
(19, 'test@test', 'test', '29bdd7d8bcc95ced03fe3334383faaec872e6425a1dcdd5a85ddd078473ccf6c9bf36048c7c7aeacbf55892cbe6392fe43ea', '234234324', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `patrocinio`
--
ALTER TABLE `patrocinio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario` (`id_usuario`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `patrocinio`
--
ALTER TABLE `patrocinio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `patrocinio`
--
ALTER TABLE `patrocinio`
  ADD CONSTRAINT `patrocinio_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patrocinio_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
