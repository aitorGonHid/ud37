import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = null;

  url_listado: string = "https://rickandmortyapi.com/api/character/"; //primera parte de la url

  constructor(private http: HttpClient) { }

  //Metodo que genera una url que devuelve con 20 personajes aleatorios
  generateRandomsUrl(): string {
    let ids: string = ''; //cadena de numeros aleatorios que corresponderan con un ID de personaje

    for (let i=0; i< 20; i++) {
      let n:number = Math.trunc(Math.random() * 671) + 1;
      ids+= n;
      ids+=',';
    }
    return (this.url_listado.concat(ids));
  }

  ngOnInit(): void {
    this.http.get(this.generateRandomsUrl())
      .subscribe(
        result => {
          this.personajes = result;
        },
        error => {
          console.log('Error');
        }
      );
  }
}
