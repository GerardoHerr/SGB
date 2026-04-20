package com.unlLoleros.backend.controlador;
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.unlLoleros.backend.modelos.Receta;
import com.unlLoleros.backend.services.RecetaService;

@RestController 
@RequestMapping("/api/recetas")
public class RecetaControlador {
    @Autowired
    private RecetaService recetaService; 

    @PostMapping
    public Receta guardar(@RequestBody Receta receta) {
        return recetaService.guardar(receta);
    }

    @GetMapping
    public List<Receta> listar(){
        return recetaService.listar();
    }
    
}
