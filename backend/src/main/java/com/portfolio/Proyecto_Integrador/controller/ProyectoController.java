package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOProyecto;
import com.portfolio.Proyecto_Integrador.entity.Proyecto;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.ProyectoService;
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
@RequestMapping("/proyecto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProyectoController {
    @Autowired
    ProyectoService servProyecto;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Proyecto>> list(){
        List<Proyecto> list = servProyecto.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detalle/{id}")
    public ResponseEntity<Proyecto> getById(@PathVariable("id")int id){
        if(!servProyecto.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);
        }
        
        Proyecto proyecto = servProyecto.getOne(id).get();
        return new ResponseEntity(proyecto, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!servProyecto.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        servProyecto.delete(id);
        return new ResponseEntity(new Mensaje("Entrada de proyecto eliminada exitosamente!"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody @Valid DTOProyecto dtoproyecto){
        if(StringUtils.isBlank(dtoproyecto.getNombre())){
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }
        if(servProyecto.existsByNombre(dtoproyecto.getNombre())){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        
        Proyecto proyecto = new Proyecto(
                dtoproyecto.getNombre(),
                dtoproyecto.getDescripcion(),
                dtoproyecto.getFecha(),
                dtoproyecto.getLink()
                
            );
        servProyecto.save(proyecto);
        return new ResponseEntity(new Mensaje("Proyecto creado exitosamente!"), HttpStatus.OK);
                
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody @Valid DTOProyecto dtoproyecto){
        if(!servProyecto.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        if(servProyecto.existsByNombre(dtoproyecto.getNombre()) && servProyecto.getByNombre(dtoproyecto.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoproyecto.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio..."), HttpStatus.BAD_REQUEST);
        }
        
        Proyecto proyecto = servProyecto.getOne(id).get();
        
        proyecto.setNombre(dtoproyecto.getNombre());
        proyecto.setDescripcion(dtoproyecto.getDescripcion());
        proyecto.setFecha(dtoproyecto.getFecha());
        proyecto.setLink(dtoproyecto.getLink());
        
        servProyecto.save(proyecto);
        
        return new ResponseEntity(new Mensaje("Proyecto editado exitosamente!"), HttpStatus.OK);
    }
}
