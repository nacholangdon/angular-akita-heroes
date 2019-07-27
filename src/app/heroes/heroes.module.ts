import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './container/heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'edit-hero/:id',
    component: EditHeroComponent
  }
];

@NgModule({
  declarations: [HeroesComponent, EditHeroComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: []
})
export class HeroesModule {}
