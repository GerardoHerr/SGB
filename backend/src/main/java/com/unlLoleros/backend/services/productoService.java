package com.unlLoleros.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unlLoleros.backend.modelos.Producto;
import com.unlLoleros.backend.repositorio.ProductoRepository;


@Service
public class productoService {
    @Autowired
    private ProductoRepository productoRepository; 

    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public List<Producto> listar() {
        return productoRepository.findAll();
    }
}