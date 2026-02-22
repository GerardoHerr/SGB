package com.unlLoleros.backend.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "Ingredientes")
public class Ingrediente {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre; 
    private String descripcion; 
    private double costo; 
    @Enumerated(EnumType.STRING)
    private Unidad unidad; 
    
    
}
