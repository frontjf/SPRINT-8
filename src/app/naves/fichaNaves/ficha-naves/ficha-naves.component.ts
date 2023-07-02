import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-fichaNaves',
  templateUrl: './ficha-naves.component.html'
})
export class FichaNavesComponent {
  @Input() nave: any;

  getNaveImageUrl(): string {
    const id = this.extractIdFromUrl(this.nave.url);
    const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    // Crear un nuevo objeto Image para verificar la carga de la imagen
    const img = new Image();
    img.src = imageUrl;

    // Si la carga de la imagen falla, se actualiza la propiedad image del objeto nave
    img.onerror = () => {
      this.nave.image = 'assets/error-nave.jpg';
    };

    return imageUrl;
  }

  private extractIdFromUrl(url: string): string {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '';
  }
}























  //   getNaveImageUrl(): string {
//     const id = this.extractIdFromUrl(this.nave.url);
//     const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;


//     // Verificar si la imagen se carga correctamente
//     const img = new Image();
//     img.src = imageUrl;

//     if (img.complete) {
//       // La imagen se cargó correctamente
//       return imageUrl;
//     } else {
//       // La imagen no se cargó correctamente, devolver la URL de la imagen de error
//       return 'assets/error-nave.JPG';
//     }
//   }


//   private extractIdFromUrl(url: string): string {
//     const matches = url.match(/\/(\d+)\/$/);
//     return matches ? matches[1] : '';
//   }

// }







