package com.unlLoleros.backend.repositorio;

import org.springframework.data.jpa.repository.*;

import com.unlLoleros.backend.modelos.Ingrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Integer> {
    
}