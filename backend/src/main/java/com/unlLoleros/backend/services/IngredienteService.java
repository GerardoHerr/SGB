package com.unlLoleros.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unlLoleros.backend.modelos.Ingrediente;
import com.unlLoleros.backend.repositorio.IngredienteRepository;

@Service
public class IngredienteService {

    @Autowired
    private IngredienteRepository ingredienteRepository;

    public Ingrediente guardar(Ingrediente ingrediente){
        return ingredienteRepository.save(ingrediente);
    }

    
    public void eliminar(Integer id){
        if(id == null){
            throw new IllegalArgumentException("El id del alimento no puede ser eliminado");
        }
        ingredienteRepository.deleteById(id);
    }

    public List<Ingrediente> listar(){
        return ingredienteRepository.findAll();
    }
}