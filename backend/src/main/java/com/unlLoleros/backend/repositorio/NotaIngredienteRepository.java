package com.unlLoleros.backend.repositorio;

import org.springframework.data.jpa.repository.*;

import com.unlLoleros.backend.modelos.NotaIngrediente;

public interface NotaIngredienteRepository extends JpaRepository<NotaIngrediente, Integer> {
    
}
