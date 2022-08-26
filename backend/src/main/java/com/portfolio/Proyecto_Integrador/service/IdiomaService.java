package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Idioma;
import com.portfolio.Proyecto_Integrador.repository.IdiomaRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class IdiomaService {

    @Autowired
    IdiomaRepository repoIdioma;
    
    public List<Idioma> list(){
        return repoIdioma.findAll();
    }
    
    public Optional<Idioma> getOne(int id){
        return repoIdioma.findById(id);
    }
    
    public Optional<Idioma> getByNmbre(String nombre){
        return repoIdioma.findByNombre(nombre);
    }
    
    public void save(Idioma idioma){
        repoIdioma.save(idioma);
    }
    
    public void delete(int id){
        repoIdioma.deleteById(id);
    }
    
    public boolean existsById(int id){
        return repoIdioma.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return repoIdioma.existsByNombre(nombre);
    }
}
