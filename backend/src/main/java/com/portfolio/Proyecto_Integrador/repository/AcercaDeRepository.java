package com.portfolio.Proyecto_Integrador.repository;

import com.portfolio.Proyecto_Integrador.entity.AcercaDe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcercaDeRepository extends JpaRepository<AcercaDe, Integer>{
    
}
