import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';
  nombre2 = 'uN NomBRe RarO';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 12345;
  fecha = new Date();
  activar = true;
  idioma = 'es';
  isCapitalizado = true;
  videoUrl = 'https://www.youtube.com/embed/5qap5aO4i9A';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 30,
    direccion: {
      calle: 'Av. Calle',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego el dato.');
    }, 4000);
  });

}
