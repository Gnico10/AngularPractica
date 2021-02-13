import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofuscar'
})
export class OfuscarPipe implements PipeTransform {
  transform(value: string, activa: boolean = true): string {
    // const palabra = value.split('');

    // if ( activa ) {
    //   for (let i = 0; i < palabra.length; i++) {
    //       palabra[i] = '*';
    //   }
    // }

    // return palabra.join('');

    return ( activa ) ? '*'.repeat( value.length ) : value;

  }

}
