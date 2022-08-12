package com.portfolio.Proyecto_Integrador.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //Me permite tener una mayor cantidad de valores a futuro
    
    @Size(min = 1, max = 50, message = "Ingresar al menos un caracter")
    @NotNull
    private String nombre;
    
    @Size(min = 1, max = 50, message = "Ingresar al menos un caracter")
    @NotNull
    private String apellido;
    
}
