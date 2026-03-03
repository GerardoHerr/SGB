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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public Receta getReceta() {
        return receta;
    }

    public void setReceta(Receta receta) {
        this.receta = receta;
    }

    public Ingrediente getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(Ingrediente ingrediente) {
        this.ingrediente = ingrediente;
    }
    

}
