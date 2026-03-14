import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RestMapping("/api/productos")
public class productoControlador {
    @Autowired
    private ProductoService productoService;
    
    @PostMapping
    public Producto guardar(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @getMapping
    public List<Producto> listar(){
        return productoService.listar();
    } 

    
}