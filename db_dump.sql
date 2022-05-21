CREATE DATABASE IF NOT EXISTS `DASHBOARD-CHALLENGE`;
USE `DASHBOARD-CHALLENGE`;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;

CREATE TABLE `vendedores` (
  `id` PRIMARY KEY AUTO_INCREMENT,
  `nome_completo` VARCHAR(60) NOT NULL,
  `loja_id` INT NOT NULL,
  CONSTRAINT `loja_id_fk` FOREIGN KEY (`loja_id`) REFERENCES `lojas` (`id`)
) ENGINE=InnoDB;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos_servicos`;

CREATE TABLE `produtos_servicos` (
  `id` PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `preco` INT NOT NULL,
) ENGINE=InnoDB;

--
-- Table structure for table `lojas`
--

DROP TABLE IF EXISTS `lojas`;

CREATE TABLE `lojas` (
  `id` PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
) ENGINE=InnoDB;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id` PRIMARY KEY AUTO_INCREMENT,
  `nome_completo` VARCHAR(50) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
) ENGINE=InnoDB;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;

CREATE TABLE `vendas` (
  `id` PRIMARY KEY AUTO_INCREMENT,
  `vendedor_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `cliente_id` INT NOT NULL,
  `loja_id` INT NOT NULL,
  `qntd_vendida` INT NOT NULL,
  `data_venda` DATETIME NOT NULL,
  CONSTRAINT `venddor_id_fk` FOREIGN KEY (`venddor_id`) REFERENCES `vendedores`(`id`)
  CONSTRAINT `produto_id_fk` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`id`)
  CONSTRAINT `cliente_id_fk` FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`)
  CONSTRAINT `loja_id_fk` FOREIGN KEY (`loja_id`) REFERENCES `lojas`(`id`)
) ENGINE=InnoDB;
