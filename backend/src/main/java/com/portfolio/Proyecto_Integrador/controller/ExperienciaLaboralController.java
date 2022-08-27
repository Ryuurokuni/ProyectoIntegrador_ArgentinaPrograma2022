package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOExperienciaLaboral;
import com.portfolio.Proyecto_Integrador.entity.ExperienciaLaboral;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.ExperienciaLaboralService;
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
@RequestMapping("/experiencialaboral")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaLaboralController {
    @Autowired
    ExperienciaLaboralService servExp;
    
    @GetMapping("/lista")
    public ResponseEntity<List<ExperienciaLaboral>> list(){
        List<ExperienciaLaboral> list = servExp.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detalle/{id}")
    public ResponseEntity<ExperienciaLaboral> getById(@PathVariable("id") int id){
        if(!servExp.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);}
        ExperienciaLaboral experiencia = servExp.getOne(id).get();
        return new ResponseEntity(experiencia, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!servExp.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);
        }
        
        servExp.delete(id);
        
        return new ResponseEntity(new Mensaje("Entrada eliminada exitosamente!"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody @Valid DTOExperienciaLaboral dtoexp){      
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        if(servExp.existsByNombreExp(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("Ya existe una entrada con ese nombre."), HttpStatus.BAD_REQUEST);
        
        ExperienciaLaboral experiencia = new ExperienciaLaboral(
                dtoexp.getNombreExp(),
                dtoexp.getDescripcionExp(),
                dtoexp.getFechaDesde(),
                dtoexp.getFechaHasta()
        );
        
        servExp.save(experiencia);
        
        return new ResponseEntity(new Mensaje("Entrada creada exitosamente!"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody @Valid DTOExperienciaLaboral dtoexp){
        //Validamos si existe el ID
        if(!servExp.existsById(id))
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.BAD_REQUEST);
        //Compara nombre de experiencias
        if(servExp.existsByNombreExp(dtoexp.getNombreExp()) && servExp.getByNombreExp(dtoexp.getNombreExp()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ya existe una entrada con ese nombre."), HttpStatus.BAD_REQUEST);
        //No puede estar vacio
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        
        ExperienciaLaboral experiencia = servExp.getOne(id).get();
        
        experiencia.setNombreExp(dtoexp.getNombreExp());
        experiencia.setDescripcionExp(dtoexp.getDescripcionExp());
        experiencia.setFechaDesde(dtoexp.getFechaDesde());
        experiencia.setFechaHasta(dtoexp.getFechaHasta());
        
        servExp.save(experiencia);
        
        return new ResponseEntity(new Mensaje("Entrada editada exitosamente!"), HttpStatus.OK);
             
    }
}
