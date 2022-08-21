/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.Proyecto_Integrador.repository;

import com.portfolio.Proyecto_Integrador.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Pablo
 */
public interface ImageRepository extends JpaRepository<Image, String> {
    
}
