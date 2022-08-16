package com.portfolio.Proyecto_Integrador.security.dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LogInUsuario {
    @NotBlank
    private String nombreUsuario;
    @NotBlank
    private String password;
    
    
}
