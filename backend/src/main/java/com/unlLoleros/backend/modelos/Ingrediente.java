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
    
    
}
