package com.portfolio.Proyecto_Integrador.dto;

import javax.validation.constraints.NotBlank;


public class dtoAcercaDe {
    @NotBlank
    private String descripcion;

    public dtoAcercaDe() {
    }

    public dtoAcercaDe(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
}
