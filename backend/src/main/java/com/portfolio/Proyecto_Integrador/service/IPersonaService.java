package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Persona;
import java.util.List;


public interface IPersonaService {
    // Traer Personas
    public List<Persona> traerPersona();
    
    //Buscar Persona
    public Persona buscarPersona(Long id);
    
    // Crear Persona
    public void crearPersona(Persona persona);
    
    //Borrar Persona
    public void borrarPersona(Long id);
    
    
    
}
