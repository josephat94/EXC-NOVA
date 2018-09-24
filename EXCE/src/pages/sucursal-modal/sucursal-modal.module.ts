import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SucursalModalPage } from './sucursal-modal';

@NgModule({
  declarations: [
    SucursalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SucursalModalPage),
  ],
})
export class SucursalModalPageModule {}
