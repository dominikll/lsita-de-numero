import java.util.ArrayList;
import java.util.List;

class Ubicacion {
    private String ciudad;
    private String direccion;

    public Ubicacion(String ciudad, String direccion) {
        this.ciudad = ciudad;
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public String getDireccion() {
        return direccion;
    }
}

class Contacto {
    private int id;
    private String nombres;
    private String apellidos;
    private String telefono;
    private Ubicacion ubicacion;

    public Contacto(int id, String nombres, String apellidos, String telefono, Ubicacion ubicacion) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.ubicacion = ubicacion;
    }

    public int getId() {
        return id;
    }

    public String getNombres() {
        return nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public Ubicacion getUbicacion() {
        return ubicacion;
    }
}

public class ListaDeContactos {
    private List<Contacto> listaDeContactos = new ArrayList<>();
    private int idCounter = 1;

    // Método para añadir un nuevo contacto a la lista
    public void agregarContacto(String nombres, String apellidos, String telefono, String ciudad, String direccion) {
        Ubicacion ubicacion = new Ubicacion(ciudad, direccion);
        Contacto nuevoContacto = new Contacto(idCounter++, nombres, apellidos, telefono, ubicacion);
        listaDeContactos.add(nuevoContacto);
    }

    // Método para borrar un contacto existente de la lista
    public void borrarContacto(int id) {
        for (Contacto contacto : listaDeContactos) {
            if (contacto.getId() == id) {
                listaDeContactos.remove(contacto);
                return;
            }
        }
        System.out.println("El contacto con ID " + id + " no existe en la lista.");
    }

    // Método para imprimir en consola los contactos presentes en la lista
    public void imprimirContactos() {
        if (listaDeContactos.isEmpty()) {
            System.out.println("La lista de contactos está vacía.");
        } else {
            System.out.println("Lista de contactos:");
            for (Contacto contacto : listaDeContactos) {
                System.out.println("ID: " + contacto.getId());
                System.out.println("Nombres: " + contacto.getNombres());
                System.out.println("Apellidos: " + contacto.getApellidos());
                System.out.println("Teléfono: " + contacto.getTelefono());
                System.out.println("Ubicación: " + contacto.getUbicacion().getCiudad() + ", " + contacto.getUbicacion().getDireccion());
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        ListaDeContactos lista = new ListaDeContactos();

        lista.agregarContacto("Juan", "Perez", "123-456-7890", "Ciudad A", "Dirección A");
        lista.agregarContacto("Maria", "Lopez", "987-654-3210", "Ciudad B", "Dirección B");

        System.out.println("Contactos después de agregar:");
        lista.imprimirContactos();

        lista.borrarContacto(2);

        System.out.println("Contactos después de borrar:");
        lista.imprimirContactos();
    }
}
