import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VillainsComponent } from './container/villains.component';
import { EditVillainComponent } from './edit-villain/edit-villain.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VillainsComponent
  },
  {
    path: 'edit-villain/:id',
    component: EditVillainComponent
  }
];

@NgModule({
  declarations: [VillainsComponent, EditVillainComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: []
})
export class VillainsModule {}
