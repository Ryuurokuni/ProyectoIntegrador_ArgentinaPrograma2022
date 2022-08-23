package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Proyecto;
import com.portfolio.Proyecto_Integrador.repository.ProyectoRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProyectoService {
    @Autowired
    ProyectoRepository repoProyecto;
    
    public List<Proyecto> list(){
        return repoProyecto.findAll();
    }
    
    public Optional<Proyecto> getOne(int id){
        return repoProyecto.findById(id);
    }
    
    public Optional<Proyecto> getByNombre(String nombre){
        return repoProyecto.findByNombre(nombre);
    }
    
    public void save(Proyecto proyecto){
        repoProyecto.save(proyecto);
    }
    
    public void delete(int id){
        repoProyecto.deleteById(id);
    }
    
    public boolean existsById(int id){
        return repoProyecto.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return repoProyecto.existsByNombre(nombre);
    }
}
