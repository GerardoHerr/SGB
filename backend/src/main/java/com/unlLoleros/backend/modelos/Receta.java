package com.unlLoleros.backend.modelos;
import java.util.List;
import jakarta.persistence.*;  

@Entity
@Table(name = "Receta")
public class Receta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double valorTotal; 
    @OneToMany(mappedBy = "receta", cascade = CascadeType.ALL)
    private List<NotaIngrediente> listaNotaIngredientes;

}
