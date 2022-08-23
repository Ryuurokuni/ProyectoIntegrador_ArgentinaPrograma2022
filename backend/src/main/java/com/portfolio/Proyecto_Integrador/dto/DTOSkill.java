package com.portfolio.Proyecto_Integrador.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DTOSkill {
    @NotBlank
    private String nombre;
    @NotNull
    private int porcentaje;

    public DTOSkill() {
    }
 
    public DTOSkill(String nombre, int porcentaje) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
    
}
