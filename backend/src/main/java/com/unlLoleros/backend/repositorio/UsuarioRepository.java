package com.unlLoleros.backend.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unlLoleros.backend.modelos.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{
    Optional<Usuario> findByEmail(String correo);
    

    boolean existsByEmail(String correo);

    
}
