import java.util.ArrayList;
import java.util.List;

public class ListaDeContactos {
    private List<String> listaDeContactos = new ArrayList<>();

    // Método para añadir un nuevo contacto a la lista
    public void agregarContacto(String nombreApellido) {
        listaDeContactos.add(nombreApellido);
    }

    // Método para borrar un contacto existente de la lista
    public void borrarContacto(String nombreApellido) {
        if (listaDeContactos.contains(nombreApellido)) {
            listaDeContactos.remove(nombreApellido);
        } else {
            System.out.println("El contacto no existe en la lista.");
        }
    }

    // Método para imprimir en consola los contactos presentes en la lista
    public void imprimirContactos() {
        if (listaDeContactos.isEmpty()) {
            System.out.println("La lista de contactos está vacía.");
        } else {
            System.out.println("Lista de contactos:");
            for (String contacto : listaDeContactos) {
                System.out.println(contacto);
            }
        }
    }

    public static void main(String[] args) {
        ListaDeContactos lista = new ListaDeContactos();

        lista.agregarContacto("Juan Perez");
        lista.agregarContacto("Maria Lopez");
        lista.agregarContacto("Pedro Ramirez");

        System.out.println("Contactos después de agregar:");
        lista.imprimirContactos();

        lista.borrarContacto("Maria Lopez");

        System.out.println("Contactos después de borrar:");
        lista.imprimirContactos();
    }
}