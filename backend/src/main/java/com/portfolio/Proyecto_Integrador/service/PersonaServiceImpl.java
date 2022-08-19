package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.Proyecto_Integrador.repository.PersonaRepository;

@Service
public class PersonaServiceImpl implements PersonaService{
    
    @Autowired PersonaRepository iPersonaRepository;

    @Override
    public List<Persona> traerPersona() {
        List<Persona> persona = iPersonaRepository.findAll();
        return persona;
    }

    @Override
    public Persona buscarPersona(Long id) {
        Persona persona = iPersonaRepository.findById(id).orElse(null);
        return persona;
    }

    @Override
    public void crearPersona(Persona persona) {
        iPersonaRepository.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        iPersonaRepository.deleteById(id);
    }
    
}
