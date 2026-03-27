package com.unlLoleros.backend.controlador;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unlLoleros.backend.modelos.Producto;
import com.unlLoleros.backend.services.productoService;


@RestController
@RequestMapping("/api/productos")
public class ProductoControlador {
    @Autowired
    private productoService productoService;
    
    @PostMapping
    public Producto guardar(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @GetMapping
    public List<Producto> listar(){
        return productoService.listar();
    } 

    
}