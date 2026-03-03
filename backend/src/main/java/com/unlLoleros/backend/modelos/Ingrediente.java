package com.unlLoleros.backend.modelos;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "Ingrediente")
public class Ingrediente {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre; 
    private String descripcion; 
    private double costo; 
    @Enumerated(EnumType.STRING)
    private Unidad unidad; 
    @OneToMany(mappedBy = "ingrediente", cascade = CascadeType.ALL)
    private List<NotaIngrediente> listaNotaIngredientes;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getCosto() {
        return costo;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public Unidad getUnidad() {
        return unidad;
    }

    public void setUnidad(Unidad unidad) {
        this.unidad = unidad;
    }
}
