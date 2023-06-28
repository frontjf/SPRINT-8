import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { NavesComponent } from './naves/naves.component';
import { LoginComponent, RegisterComponent } from './account';
import { FichaNavesComponent } from './naves/fichaNaves/ficha-naves/ficha-naves.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: 'ficha-naves/:id', component: FichaNavesComponent },
    { path: 'naves', component: NavesComponent },   // , canActivate: [AuthGuard]

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }