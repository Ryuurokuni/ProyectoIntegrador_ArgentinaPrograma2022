package com.portfolio.Proyecto_Integrador.controller;

import com.portfolio.Proyecto_Integrador.entity.Image;
import com.portfolio.Proyecto_Integrador.security.controller.Mensaje;
import com.portfolio.Proyecto_Integrador.service.ImageService;
import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin
public class ImagenesController {

    @Autowired
    private ImageService service;

    @GetMapping(path = "/banner", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getBanner() {
        Optional<Image> imageOptional = service.getImage("banner");

        if (imageOptional.isEmpty()) {
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(new ByteArrayResource(imageOptional.get().getImage()));
    }

    @GetMapping(path = "/profile", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getProfile() {
        Optional<Image> imageOptional = service.getImage("profile");

        if (imageOptional.isEmpty()) {
            return new ResponseEntity(new Mensaje("No existe el id solicitado..."), HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(new ByteArrayResource(imageOptional.get().getImage()));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void saveImagenes(
            @RequestParam(name = "profile", required = false) MultipartFile profile,
            @RequestParam(name = "banner", required = false) MultipartFile banner
    ) {

        if (profile != null) {
            try {
                service.saveFile("profile", profile.getBytes());
            } catch (IOException ex) {
                System.out.println("Error al guardar profile");
            }
        }

        if (banner != null) {
            try {
                service.saveFile("banner", banner.getBytes());
            } catch (IOException ex) {
                System.out.println("Error al guardar profile");
            }
        }
    }

}
