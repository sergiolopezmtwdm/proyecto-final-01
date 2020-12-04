import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PcComponent } from './pc/pc.component';
import { XboxComponent } from './xbox/xbox.component';
import { PlayStationComponent } from './play-station/play-station.component';
import { PlayComponent } from './play/play.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [ComponentesComponent, CarouselComponent, PcComponent, XboxComponent, PlayStationComponent, PlayComponent, PerfilComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
