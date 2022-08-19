package com.portfolio.Proyecto_Integrador.dto;

import javax.validation.constraints.NotBlank;

public class dtoExperienciaLaboral {
    @NotBlank
    private String nombreExp;
    @NotBlank
    private String descripcionExp;

    public dtoExperienciaLaboral() {
    }

    public dtoExperienciaLaboral(String nombreExp, String descripcionExp) {
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
    }

    public String getNombreExp() {
        return nombreExp;
    }

    public void setNombreExp(String nombreExp) {
        this.nombreExp = nombreExp;
    }

    public String getDescripcionExp() {
        return descripcionExp;
    }

    public void setDescripcionExp(String descripcionExp) {
        this.descripcionExp = descripcionExp;
    }
    
    
   
}
