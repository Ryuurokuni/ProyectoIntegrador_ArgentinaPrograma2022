package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Skill;
import com.portfolio.Proyecto_Integrador.repository.SkillRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SkillService {
    @Autowired
    SkillRepository repoSkill;
    
    public List<Skill> list(){
        return repoSkill.findAll();
    }
    
    public Optional<Skill> getOne(int id){
        return repoSkill.findById(id);
    }
    
    public Optional<Skill> getByNmbre(String nombre){
        return repoSkill.findByNombre(nombre);
    }
    
    public void save(Skill skill){
        repoSkill.save(skill);
    }
    
    public void delete(int id){
        repoSkill.deleteById(id);
    }
    
    public boolean existsById(int id){
        return repoSkill.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return repoSkill.existsByNombre(nombre);
    }
}
