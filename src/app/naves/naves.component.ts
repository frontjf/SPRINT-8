import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InfoNavesService } from '../naves/info-naves.service';
import { FichaNavesComponent } from './fichaNaves/ficha-naves/ficha-naves.component';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  naves: any[] = [];
  navesPagina1: any[] = [];
  navesPagina2: any[] = [];
  navesPagina3: any[] = [];
  navesPagina4: any[] = [];

  constructor(
    private infoNavesService: InfoNavesService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerNavesPorPagina(1);
    this.obtenerNavesPorPagina(2);
    this.obtenerNavesPorPagina(3);
    this.obtenerNavesPorPagina(4);
  }

  obtenerNavesPorPagina(page: number) {
    this.infoNavesService.getNavesPorPagina(page).subscribe(
      (data) => {
        const naves = data.results;
        if (page === 1) {
          this.navesPagina1 = this.obtenerNavesBloque(naves, 0, 10);
        } else if (page === 2) {
          this.navesPagina2 = this.obtenerNavesBloque(naves, 0, 10);
        } else if (page === 3) {
          this.navesPagina3 = this.obtenerNavesBloque(naves, 0, 10);
        } else if (page === 4) {
          this.navesPagina4 = this.obtenerNavesBloque(naves, 0, 6);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerNavesBloque(naves: any[], inicio: number, cantidad: number): any[] {
    return naves.slice(inicio, inicio + cantidad);
  }

  mostrarFichaNave(nave: any) {
    if (nave.id) {
      const modalRef = this.modalService.open(FichaNavesComponent);
      modalRef.componentInstance.naveSeleccionada = nave;
      this.router.navigate(['/ficha-naves', nave.id]);
      
    } else {
      console.error('La nave seleccionada no tiene un ID válido.');
      debugger;
    }
  }
  
}



// import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { InfoNavesService } from '../naves/info-naves.service';
// import { FichaNavesComponent } from './fichaNaves/ficha-naves/ficha-naves.component';

// @Component({
//   selector: 'app-naves',
//   templateUrl: './naves.component.html',
//   styleUrls: ['./naves.component.css']
// })
// export class NavesComponent implements OnInit {
//   naves: any[] = [];

//   navesPagina1: any[] = [];
//   navesPagina2: any[] = [];
//   navesPagina3: any[] = [];
//   navesPagina4: any[] = [];

//   constructor(
//     private infoNavesService: InfoNavesService,
//     private modalService: NgbModal
    
//     ) { }

 
//   ngOnInit() {
//     this.obtenerNavesPorPagina(1);
//     this.obtenerNavesPorPagina(2);
//     this.obtenerNavesPorPagina(3);
//     this.obtenerNavesPorPagina(4);
//   }

//   obtenerNavesPorPagina(page: number) {
//     this.infoNavesService.getNavesPorPagina(page).subscribe(
//       (data) => {
//         const naves = data.results;
//         if (page === 1) {
//           this.navesPagina1 = this.obtenerNavesBloque(naves, 0, 10);
//         } else if (page === 2) {
//           this.navesPagina2 = this.obtenerNavesBloque(naves, 0, 10);
//         } else if (page === 3) {
//           this.navesPagina3 = this.obtenerNavesBloque(naves, 0, 10);
//         } else if (page === 4) {
//           this.navesPagina4 = this.obtenerNavesBloque(naves, 0, 6);
//         }
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   obtenerNavesBloque(naves: any[], inicio: number, cantidad: number): any[] {
//     return naves.slice(inicio, inicio + cantidad);
//   } 

//   mostrarFichaNave(nave: any) {
//     const modalRef = this.modalService.open(FichaNavesComponent);
//     modalRef.componentInstance.naveSeleccionada = nave;
//   }
// }




















  // obtenerNaves() {
  //   this.infoNavesService.getNaves().subscribe(
  //     (data) => {
  //       this.naves = data.results;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }







  // mostrarDetallesNave(naveUrl: string) {
  //   this.infoNavesService.getNaveDetalle(naveUrl).subscribe(
  //     (nave) => {
  //       this.naveSeleccionada = nave;
  //       // Aquí puedes mostrar el modal de Bootstrap con los detalles de la nave seleccionada
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

