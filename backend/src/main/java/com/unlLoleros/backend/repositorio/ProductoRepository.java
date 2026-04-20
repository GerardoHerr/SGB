package com.unlLoleros.backend.repositorio;

import org.springframework.data.jpa.repository.*;

import com.unlLoleros.backend.modelos.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    
}