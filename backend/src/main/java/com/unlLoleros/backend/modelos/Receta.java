package com.unlLoleros.backend.modelos;
import java.util.List;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;  

@Entity
@Table(name = "Receta")
public class Receta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;

    @Nullable
    private double valorTotal; 

    @OneToMany(mappedBy = "receta", cascade = CascadeType.ALL)
    private List<NotaIngrediente> listaNotaIngredientes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public String getNombre() {
        return nombre;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public List<NotaIngrediente> getListaNotaIngredientes() {
        return listaNotaIngredientes;
    }

    public void setListaNotaIngredientes(List<NotaIngrediente> listaNotaIngredientes) {
        this.listaNotaIngredientes = listaNotaIngredientes;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    

}
