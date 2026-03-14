package com.unlLoleros.backend.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unlLoleros.backend.modelos.Ingrediente;
import com.unlLoleros.backend.services.IngredienteService;

@RestController
@RequestMapping("/api/ingredientes")
public class IngredienteControlador {

    @Autowired
    private IngredienteService ingredienteService;

    @PostMapping
    public Ingrediente guardar(@RequestBody Ingrediente ingrediente){
        return ingredienteService.guardar(ingrediente);
    }

    @GetMapping
    public List<Ingrediente> listar(){
        return ingredienteService.listar();
    }
}