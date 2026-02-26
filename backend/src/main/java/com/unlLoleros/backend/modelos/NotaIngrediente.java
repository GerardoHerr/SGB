package com.unlLoleros.backend.modelos;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder.In;

@Entity
@Table(name = "NotaIngrediente")
public class NotaIngrediente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double cantidad; 
    
    @ManyToOne
    @JoinColumn(name = "receta_id")
    private Receta receta; 

    @ManyToOne
    @JoinColumn(name = "ingrediente_id")
    private Ingrediente ingrediente;

}
