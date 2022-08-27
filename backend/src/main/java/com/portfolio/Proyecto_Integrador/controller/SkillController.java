package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOSkill;
import com.portfolio.Proyecto_Integrador.entity.Skill;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.SkillService;
import java.util.List;
import javax.validation.Valid;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillController {
    @Autowired
    SkillService servSkill;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Skill>> list(){
        List<Skill> list = servSkill.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detalle/{id}")
    public ResponseEntity<Skill> getById(@PathVariable("id")int id){
        if(!servSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);
        }
        
        Skill skill = servSkill.getOne(id).get();
        
        return new ResponseEntity(skill, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!servSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        
        servSkill.delete(id);
        
        return new ResponseEntity(new Mensaje("Entrada de skill eliminada exitosamente!"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody @Valid DTOSkill dtoskill){
        if(StringUtils.isBlank(dtoskill.getNombre())){
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }
        if(servSkill.existsByNombre(dtoskill.getNombre())){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        
        Skill skill = new Skill(
                dtoskill.getNombre(),
                dtoskill.getPorcentaje()
            );
        
        servSkill.save(skill);
        
        return new ResponseEntity(new Mensaje("Skill creada exitosamente!"), HttpStatus.OK);
                
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody @Valid DTOSkill dtoskill){
        if(!servSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        if(servSkill.existsByNombre(dtoskill.getNombre()) && servSkill.getByNmbre(dtoskill.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoskill.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio..."), HttpStatus.BAD_REQUEST);
        }
        
        Skill skill = servSkill.getOne(id).get();
        
        skill.setNombre(dtoskill.getNombre());
        skill.setPorcentaje(dtoskill.getPorcentaje());
        
        servSkill.save(skill);
        
        return new ResponseEntity(new Mensaje("Skill editada exitosamente!"), HttpStatus.OK);
    }
}
