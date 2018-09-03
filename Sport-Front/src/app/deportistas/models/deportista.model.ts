export class Deportista {

  private nombre: string;
  private fechaCumpleanios: string;

  constructor(nombre: string, fechaCumpleanios: string) {
    this.nombre = nombre;
    this.fechaCumpleanios = fechaCumpleanios;
  }

  getNombre(){
    return this.nombre;
  }

  getFechaCumpleanios(){
    return this.fechaCumpleanios;
  }

}
