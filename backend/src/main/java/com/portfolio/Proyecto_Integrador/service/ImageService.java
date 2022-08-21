package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.Image;
import com.portfolio.Proyecto_Integrador.repository.ImageRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ImageService {
    
    @Autowired
    private ImageRepository repository;
    
    public Optional<Image> getImage(String id) {
        
        return repository.findById(id);
    }
    
    public Image saveFile(String id, byte[] content) {
        
        Image image = repository.findById(id).orElseGet(() -> new Image(id));
        image.setImage(content);
        
        return repository.save(image);
    }
}
