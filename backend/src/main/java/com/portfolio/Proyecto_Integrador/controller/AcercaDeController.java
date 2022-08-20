package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.entity.AcercaDe;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.AcercaDeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/acercade")
@CrossOrigin(origins = "http://localhost:4200")
public class AcercaDeController {
    
    @Autowired
    AcercaDeService servAcercaDe;
    
    @GetMapping("/detalle/{id}")
    public ResponseEntity<AcercaDe>getById(@PathVariable("id")int id){
        if(!servAcercaDe.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.BAD_REQUEST);
        }
        AcercaDe acercaDe = servAcercaDe.getById(id).get();
        return new ResponseEntity(acercaDe, HttpStatus.OK);
    }
    
    /*@GetMapping("/traer/")
    public AcercaDe getAcercaDe(){
        return servAcercaDe.getById((int)1).orElse(null);
    } */
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public AcercaDe editAcercaDe(@PathVariable int id, @RequestParam("descripcion") String descripcion){
        AcercaDe acercaDe= servAcercaDe.getById(id).orElse(null);
        acercaDe.setDescripcion(descripcion);
        servAcercaDe.save(acercaDe);
        return acercaDe;
    }
    
}
