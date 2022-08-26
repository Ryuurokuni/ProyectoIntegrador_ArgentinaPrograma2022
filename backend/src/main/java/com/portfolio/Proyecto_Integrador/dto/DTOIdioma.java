package com.portfolio.Proyecto_Integrador.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DTOIdioma {
    @NotBlank
    private String nombre;
    @NotBlank
    private String nombreReal;
    @NotNull
    private int porcentaje;

    public DTOIdioma() {
    }

    public DTOIdioma(String nombre, String nombreReal, int porcentaje) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.porcentaje = porcentaje;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombreReal() {
        return nombreReal;
    }

    public void setNombreReal(String nombreReal) {
        this.nombreReal = nombreReal;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
    

   
}
