import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewItemFormComponent } from './components/new-item-form.component';

@NgModule({
  declarations: [ItemListComponent, NewItemFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RouterModule
  ],
  exports: [
    NewItemFormComponent,
    ItemListComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {}
