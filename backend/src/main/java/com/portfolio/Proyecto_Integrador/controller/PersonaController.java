package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.entity.Persona;
import com.portfolio.Proyecto_Integrador.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class PersonaController {
    
    @Autowired IPersonaService iPersonaService;
    
    @GetMapping("/personas/traer")
    public List<Persona> traerPersona(){
        return iPersonaService.traerPersona();
    }
    
    @PostMapping("/personas/crear")
    public String crearPersona(@RequestBody Persona persona){
        iPersonaService.crearPersona(persona);
        return "La persona fue creada exitosamente!";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String borrarPersona(@PathVariable Long id){
        iPersonaService.borrarPersona(id);
        return "La persona fue eliminada exitosamente!";
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editarPersona(@PathVariable Long id,
                                 @RequestParam("nombre") String newNombre,
                                 @RequestParam("apellido") String newApellido){
        Persona persona= iPersonaService.buscarPersona(id);
        persona.setNombre(newNombre);
        persona.setApellido(newApellido);
        
        iPersonaService.crearPersona(persona);
        return persona;
    }
    
}
