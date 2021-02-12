import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    value = value.toLocaleLowerCase();
    let nombres = value.split(' '); // Separar cadena por los espacios.

    if ( todas ) {
      nombres = nombres.map( nombre => { // Recorrer todo el arreglo.
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' '); // Unir todo a una cadena separando los elementos por espacio.
  }
}
