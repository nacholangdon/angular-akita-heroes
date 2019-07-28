import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VillainsQuery } from '../villains.query';
import { VillainsService } from '../villains.service';
import { Observable } from 'rxjs';
import { VillainModel } from '../villain.model';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  editItemUrl = '/villains/edit-villain/'; // shared with item-list-component.html
  list$?: Observable<VillainModel[]>;
  newItemForm: FormGroup;
  isShowNewItemForm = false;

  constructor(
    private villainsQuery: VillainsQuery,
    private villainService: VillainsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadVillains();
    this.formBuilderInit();
    this.list$ = this.villainsQuery.selectAll();
  }

  loadVillains(): void {
    this.villainService.getVillains();
  }

  onSubmit(): void {
    this.villainService.addVillain(this.newItemForm.value);
    this.newItemForm.reset();
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  showNewItemForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  cancelForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  removeItem(villain: VillainModel): void {
    const isConfirmed = confirm(`Delete ${villain.firstName}`);
    if (!isConfirmed) {
      return;
    }
    this.villainService.removeVillain(villain.id);
  }

  private formBuilderInit(): void {
    this.newItemForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      house: [''],
      knownAs: ['']
    });
  }
}
