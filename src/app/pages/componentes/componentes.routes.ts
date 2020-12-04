import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { XboxComponent } from './xbox/xbox.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PcComponent } from './pc/pc.component';
import { PlayComponent } from './play/play.component';



const routes : Routes = [
    {
     /*   path: '',
        component: ComponentesComponent,
        children: [
            {
                path: 'buttons', component: BotonesComponent
            },
            {
                path: 'cards', component: TarjetasComponent
            },
            {
                path: 'busqueda', component: BusquedaComponent
            },
            {
                path: 'cancelacion', component: CancelacionComponent
            },
            {
                path: 'cerrar', component: CerrarComponent
            },
            {
                path: 'configuraciones', component: ConfiguracionesComponent
            },
            {
                path: 'perfil', component: PerfilComponent
            },
            {
                path: 'registro', component: RegistroComponent
            },
            {
                path: 'paises', component: PaisesComponent
            }
        ]
        */
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentesRouterModule { }