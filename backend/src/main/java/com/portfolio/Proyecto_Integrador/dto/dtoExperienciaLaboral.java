package com.portfolio.Proyecto_Integrador.dto;

import java.time.LocalDate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DTOExperienciaLaboral {

    @NotBlank
    private String nombreExp;
    @NotBlank
    private String descripcionExp;
    @NotNull
    private LocalDate fechaDesde;
    @NotNull
    private LocalDate fechaHasta;

    public DTOExperienciaLaboral() {
    }

    public DTOExperienciaLaboral(String nombreExp, String descripcionExp, LocalDate fechaDesde, LocalDate fechaHasta) {
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
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

    public LocalDate getFechaDesde() {
        return fechaDesde;
    }

    public void setFechaDesde(LocalDate fechaDesde) {
        this.fechaDesde = fechaDesde;
    }

    public LocalDate getFechaHasta() {
        return fechaHasta;
    }

    public void setFechaHasta(LocalDate fechaHasta) {
        this.fechaHasta = fechaHasta;
    }

}
