package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.ExperienciaLaboral;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.Proyecto_Integrador.repository.ExperienciaLaboralRepository;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ExperienciaLaboralService {
    @Autowired
    ExperienciaLaboralRepository repoExp;
     
     public List<ExperienciaLaboral> list(){
         return repoExp.findAll();
     }
     
     public Optional<ExperienciaLaboral> getOne(int id){
         return repoExp.findById(id);
     }
     
     public Optional<ExperienciaLaboral> getByNombreExp(String nombreExp){
         return repoExp.findByNombreExp(nombreExp);
     }
     
     public void save(ExperienciaLaboral exp){
         repoExp.save(exp);
     }
     
     public void delete(int id){
         repoExp.deleteById(id);
     }
     
     public boolean existsById(int id){
         return repoExp.existsById(id);
     }
     
     public boolean existsByNombreExp(String nombreExp){
         return repoExp.existsByNombreExp(nombreExp);
     }
}
