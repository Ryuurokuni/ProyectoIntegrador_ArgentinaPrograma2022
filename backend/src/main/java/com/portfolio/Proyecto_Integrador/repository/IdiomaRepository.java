package com.portfolio.Proyecto_Integrador.repository;

import com.portfolio.Proyecto_Integrador.entity.Idioma;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IdiomaRepository extends JpaRepository<Idioma, Integer>{
    public Optional<Idioma> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
