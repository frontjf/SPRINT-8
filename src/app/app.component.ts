import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user?: User | null;
  showWarningMessage: boolean = false;
 

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }

  authenticatedOk(): boolean {
    return !!this.user;
  }

  showAlert() {
    // this.showWarningMessage = true;
    alert('Esta página solo está disponible para usuarios registrados. Por favor, inicia sesión.');
  }

  verifUser() {
    if (this.user) {
      // Usuario conectado, permitir el acceso a la página de "naves"
      this.router.navigate(['/naves']);
    } else {
      // Usuario no conectado, mostrar alerta
      //alert('Esta página solo está disponible para usuarios registrados. Por favor, inicia sesión.');
      this.showAlert();
    }
  }


}









// import { Component } from '@angular/core';

// import { AccountService } from './_services';
// import { User } from './_models';

// @Component({ selector: 'app-root', templateUrl: 'app.component.html' })
// export class AppComponent {
//     user?: User | null;

//     constructor(private accountService: AccountService) {
//         this.accountService.user.subscribe(x => this.user = x);
//     }

//     logout() {
//         this.accountService.logout();
//     }
// }