package com.portfolio.Proyecto_Integrador.repository;

import com.portfolio.Proyecto_Integrador.entity.Proyecto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository  extends  JpaRepository<Proyecto, Integer>{
    public Optional<Proyecto> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
