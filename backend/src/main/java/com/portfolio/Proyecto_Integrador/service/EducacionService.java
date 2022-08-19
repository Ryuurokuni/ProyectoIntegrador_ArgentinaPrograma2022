package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Educacion;
import com.portfolio.Proyecto_Integrador.repository.EducacionRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EducacionService {
    @Autowired
    EducacionRepository repoEducacion;
    
    public List<Educacion> list(){
        return repoEducacion.findAll();
    }
    
    public Optional<Educacion> getOne(int id){
        return repoEducacion.findById(id);
    }
    
    public Optional<Educacion> getByNmbreEdu(String nombreEdu){
        return repoEducacion.findByNombreEdu(nombreEdu);
    }
    
    public void save(Educacion educacion){
        repoEducacion.save(educacion);
    }
    
    public void delete(int id){
        repoEducacion.deleteById(id);
    }
    
    public boolean existsById(int id){
        return repoEducacion.existsById(id);
    }
    
    public boolean existsByNombreEdu(String nombreEdu){
        return repoEducacion.existsByNombreEdu(nombreEdu);
    }
}
