package com.unlLoleros.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unlLoleros.backend.modelos.Receta;
import com.unlLoleros.backend.repositorio.RecetaRepository;

@Service
public class RecetaService {
    @Autowired
    private RecetaRepository recetaRepository;

    public Receta guardar(Receta receta) {
        return recetaRepository.save(receta);
    }

    public List<Receta> listar() {
        return recetaRepository.findAll();
    }
}
