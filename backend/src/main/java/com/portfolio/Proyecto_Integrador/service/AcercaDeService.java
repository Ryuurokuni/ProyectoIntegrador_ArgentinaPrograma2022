package com.portfolio.Proyecto_Integrador.service;

import com.portfolio.Proyecto_Integrador.entity.AcercaDe;
import com.portfolio.Proyecto_Integrador.repository.AcercaDeRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AcercaDeService {
    @Autowired
    AcercaDeRepository repoAcercaDe;
    
    public Optional<AcercaDe> getAcercaDe(){
        return repoAcercaDe.findById(1);
    }
    
    public void save(AcercaDe acercaDe){
        repoAcercaDe.save(acercaDe);
    }
}
