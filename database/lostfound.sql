CREATE DATABASE lostfound;

USE lostfound;

CREATE TABLE items (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
description TEXT NOT NULL,
category ENUM('Lost','Found') NOT NULL,
location VARCHAR(100) NOT NULL,
date DATE NOT NULL,
contact VARCHAR(100) NOT NULL,
status ENUM('Active','Claimed','Resolved') DEFAULT 'Active'
);