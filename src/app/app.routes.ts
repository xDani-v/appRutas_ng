import { Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RutasComponent } from './components/rutas/rutas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'informacion', component: InformacionComponent },
    { path: 'rutas', component: RutasComponent }
];
