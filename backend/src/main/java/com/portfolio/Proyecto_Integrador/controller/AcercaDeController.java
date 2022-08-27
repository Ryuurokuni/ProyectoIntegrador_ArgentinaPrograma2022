package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.dto.DTOAcercaDe;
import com.portfolio.Proyecto_Integrador.entity.AcercaDe;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.AcercaDeService;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/acercade")
@CrossOrigin(origins = "http://localhost:4200")
public class AcercaDeController {
    
    @Autowired
    AcercaDeService servAcercaDe;
    // Acerca De no acepta carga de datos o eliminación, solo edición porque hay un solo id válido en el que se edita.
    @GetMapping()
    public ResponseEntity<AcercaDe>getAcercaDe(){

        Optional<AcercaDe> acercaDe = servAcercaDe.getAcercaDe();
        
        if (acercaDe.isEmpty()) {
             return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.BAD_REQUEST);
        }
        
        return new ResponseEntity(acercaDe.get(), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping()
    public ResponseEntity<AcercaDe> editAcercaDe(@RequestBody @Valid DTOAcercaDe dto){
        
        Optional<AcercaDe> acercaDeOptional = servAcercaDe.getAcercaDe();
        
        if (acercaDeOptional.isEmpty()) {
             return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.BAD_REQUEST);
        }
        
        AcercaDe acercaDe = acercaDeOptional.get();
        
        acercaDe.setNombre(dto.getNombre());
        acercaDe.setApellido(dto.getApellido());
        acercaDe.setTitulo(dto.getTitulo());
        acercaDe.setDescripcion(dto.getDescripcion());
        servAcercaDe.save(acercaDe);
        
        return ResponseEntity.ok(acercaDe);
    }
    
}
