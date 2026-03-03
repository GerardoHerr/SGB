package com.unlLoleros.backend.repositorio;

import org.springframework.data.jpa.repository.*;

import com.unlLoleros.backend.modelos.Receta;

public interface RecetaRepository extends JpaRepository<Receta, Integer> {
    
}