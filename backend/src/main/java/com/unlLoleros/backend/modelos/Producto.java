package com.unlLoleros.backend.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "Producto")

public class Producto {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private double precioProducto;
    @Enumerated(EnumType.STRING)
    private Unidad unidad; 
    @OneToOne 
    @JoinColumn(name = "receta_id")
    private Receta receta;
}
