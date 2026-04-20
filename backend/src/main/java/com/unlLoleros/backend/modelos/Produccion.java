package com.unlLoleros.backend.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Produccion")

public class Produccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double cantidadProducto;
    private double inversion;
    private double ganancia;
    @OneToOne
    @JoinColumn(name="producto_id")
    private Producto producto;

    public Integer getId(){
        return this.id;
    }

    public void setId(Integer id){
        this.id = id;
    }
    

    public double getCantidadProducto(){
        return this.cantidadProducto;
    }

    public void setCantidadProducto(double cantidadProducto){
        this.cantidadProducto = cantidadProducto;
    }

    public double getInversion(){
        return this.inversion;
    }

    public void setInversion(double inversion){
        this.inversion = inversion;
    }

    public double getGanancia(){
        return this.ganancia;
    }

    public void setGanancia(double ganancia){
        this.ganancia = ganancia;
    }

    public Producto getProducto(){
        return this.producto;
    }

    public void setProducto(Producto producto){
        this.producto = producto;
    }


}
