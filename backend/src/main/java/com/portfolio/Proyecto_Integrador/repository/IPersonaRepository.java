package com.portfolio.Proyecto_Integrador.repository;

import com.portfolio.Proyecto_Integrador.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{

}
