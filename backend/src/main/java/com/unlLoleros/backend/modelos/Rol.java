package com.unlLoleros.backend.modelos;
public class Rol {
   // @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

   // @Enumerated(EnumType.STRING)
    private TipoRol tipoRol;

    public Integer getId(){
        return this.id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public TipoRol getTiporRol(){
        return this.tipoRol;
    }

    public void setTipoRol(TipoRol tipoRol){
        this.tipoRol = tipoRol;
    }
}
