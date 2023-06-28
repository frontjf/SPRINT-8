import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoNavesService } from '../../info-naves.service';

@Component({
  selector: 'app-fichaNaves',
  templateUrl: './ficha-naves.component.html'
})
export class FichaNavesComponent implements OnInit {
  naveSeleccionada: any; // Ajusta el tipo de datos según la estructura de respuesta de la API

  constructor(
    private route: ActivatedRoute,
    private infoNavesService: InfoNavesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.mostrarInfoNave(id);
    }
  }

  mostrarInfoNave(id: string) {
    this.infoNavesService.getNavePorId(id).subscribe(
      (nave: any) => {
        this.naveSeleccionada = nave;
      },
      (error: any) => {
        console.log('Error al obtener la información de la nave:', error);
      }
    );
  }
}





// // En el componente fichaNaves
// import { Component } from '@angular/core';
// import { InfoNavesService } from '../../info-naves.service';

// @Component({
//   selector: 'app-fichaNaves',
//   templateUrl: './ficha-naves.component.html'
// })
// export class FichaNavesComponent {
//   naveSeleccionada: any; // Aquí puedes ajustar el tipo de datos según la estructura de la respuesta de la API

//   constructor(private infoNavesService: InfoNavesService) { }

//   mostrarInfoNave(id: string) {
//     this.infoNavesService.getNavePorId(id).subscribe(
//       (nave: any) => {
//         this.naveSeleccionada = nave;
//         // Aquí puedes activar la ventana emergente o modal para mostrar los detalles de la nave
//       },
//       (error: any) => {
//         console.log('Error al obtener la información de la nave:', error);
//       }
//     );
//   }
// }

