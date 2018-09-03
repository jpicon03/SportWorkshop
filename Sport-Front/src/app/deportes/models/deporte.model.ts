export class Deporte {

  private nombre: string;
  private imagen: string;

  constructor(nombre: string, imagen: string) {
    this.nombre = nombre;
    this.imagen = imagen;
  }

  getNombre(){
    return this.nombre;
  }

  getImagen(){
    return this.imagen;
  }

}
