package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOEducacion;
import com.portfolio.Proyecto_Integrador.entity.Educacion;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.EducacionService;
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
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionController {
    @Autowired
    EducacionService servEdu;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Educacion>> list(){
        List<Educacion> list = servEdu.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detalle/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id")int id){
        if(!servEdu.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);
        }
        
        Educacion educacion = servEdu.getOne(id).get();
        
        return new ResponseEntity(educacion, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!servEdu.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        
        servEdu.delete(id);
        
        return new ResponseEntity(new Mensaje("Entrada de educación eliminada exitosamente!"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody @Valid DTOEducacion dtoeducacion){
        if(StringUtils.isBlank(dtoeducacion.getNombreEdu())){
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }
        if(servEdu.existsByNombreEdu(dtoeducacion.getNombreEdu())){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        
        Educacion educacion = new Educacion(
                dtoeducacion.getNombreEdu(),
                dtoeducacion.getDescripcionEdu(),
                dtoeducacion.getFechaDesde(),
                dtoeducacion.getFechaHasta()
            );
        
        servEdu.save(educacion);
        
        return new ResponseEntity(new Mensaje("Educacion creada exitosamente!"), HttpStatus.OK);
                
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody @Valid DTOEducacion dtoeducacion){
        if(!servEdu.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        if(servEdu.existsByNombreEdu(dtoeducacion.getNombreEdu()) && servEdu.getByNmbreEdu(dtoeducacion.getNombreEdu()).get().getId() != id){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoeducacion.getNombreEdu())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio..."), HttpStatus.BAD_REQUEST);
        }
        
        Educacion educacion = servEdu.getOne(id).get();
        
        educacion.setNombreEdu(dtoeducacion.getNombreEdu());
        educacion.setDescripcionEdu(dtoeducacion.getDescripcionEdu());
        educacion.setFechaDesde(dtoeducacion.getFechaDesde());
        educacion.setFechaHasta(dtoeducacion.getFechaHasta());
        
        servEdu.save(educacion);
        
        return new ResponseEntity(new Mensaje("Educacion editada exitosamente!"), HttpStatus.OK);
    }
}
