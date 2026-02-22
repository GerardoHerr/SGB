package com.unlLoleros.backend.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;



@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "perfil_id") 
    private Perfil perfil;

    
    @Column(unique = true)
    private String correo;
    
    private String clave;


    public Integer getId(){
        return this.id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getCorreo(){
        return this.correo;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public String getClave(){
        return this.clave;
    }

    public void setClave(String clave){
        this.clave = clave;
    }

    
    public Perfil getPerfil(){
        return this.perfil;
    }

    public void setPerfil(Perfil perfil){
        this.perfil = perfil;
    }


}