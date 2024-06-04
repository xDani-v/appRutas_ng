import { Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'informacion', pathMatch: 'full' },
    { path: 'informacion', component: InformacionComponent },
    { path: 'rutas', component: RutasComponent },
    { path: 'login', component: LoginComponent }
];
