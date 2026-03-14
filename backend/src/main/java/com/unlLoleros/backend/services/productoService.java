@Service 

public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository; 

    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public List<Producto> listar() {
        return productoRepository.findAll();
    }
}