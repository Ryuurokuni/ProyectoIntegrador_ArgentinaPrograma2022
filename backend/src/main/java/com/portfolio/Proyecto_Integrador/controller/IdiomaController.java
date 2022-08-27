package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOIdioma;
import com.portfolio.Proyecto_Integrador.entity.Idioma;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.IdiomaService;
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
@RequestMapping("/idioma")
@CrossOrigin(origins = "http://localhost:4200")
public class IdiomaController {
    @Autowired
    IdiomaService servIdioma;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Idioma>> list(){
        List<Idioma> list = servIdioma.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detalle/{id}")
    public ResponseEntity<Idioma> getById(@PathVariable("id")int id){
        if(!servIdioma.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe la entrada solicitada..."), HttpStatus.NOT_FOUND);
        }
        
        Idioma idioma = servIdioma.getOne(id).get();
        
        return new ResponseEntity(idioma, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!servIdioma.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        
        servIdioma.delete(id);
        
        return new ResponseEntity(new Mensaje("Entrada de idioma eliminada exitosamente!"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody @Valid DTOIdioma dtoidioma){
        if(StringUtils.isBlank(dtoidioma.getNombre())){
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }
        if(servIdioma.existsByNombre(dtoidioma.getNombre())){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        
        Idioma idioma = new Idioma(
                dtoidioma.getNombre(),
                dtoidioma.getNombreReal(),
                dtoidioma.getPorcentaje()
                
            );
        
        servIdioma.save(idioma);
        
        return new ResponseEntity(new Mensaje("Idioma creado exitosamente!"), HttpStatus.OK);
                
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody @Valid DTOIdioma dtoidioma){
        if(!servIdioma.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }
        if(servIdioma.existsByNombre(dtoidioma.getNombre()) && servIdioma.getByNmbre(dtoidioma.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("El nombre ingresado ya existe..."), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoidioma.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio..."), HttpStatus.BAD_REQUEST);
        }
        
        Idioma idioma = servIdioma.getOne(id).get();
        
        idioma.setNombre(dtoidioma.getNombre());
        idioma.setNombre(dtoidioma.getNombreReal());
        idioma.setPorcentaje(dtoidioma.getPorcentaje());
        
        servIdioma.save(idioma);
        
        return new ResponseEntity(new Mensaje("Idioma editado exitosamente!"), HttpStatus.OK);
    }
}
