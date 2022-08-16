package com.portfolio.Proyecto_Integrador.security.repository;

import com.portfolio.Proyecto_Integrador.security.entity.Rol;
import com.portfolio.Proyecto_Integrador.security.enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
