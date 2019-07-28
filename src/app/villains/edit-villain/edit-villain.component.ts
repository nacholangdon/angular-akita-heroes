import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VillainModel } from '../villain.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VillainsQuery } from '../villains.query';
import { VillainsService } from '../villains.service';

@Component({
  selector: 'app-edit-villain',
  templateUrl: './edit-villain.component.html',
  styleUrls: ['./edit-villain.component.scss']
})
export class EditVillainComponent implements OnInit {
  villain: VillainModel;
  villainForm: FormGroup;
  id: string;
  isSuccess: boolean;

  constructor(
    private villainsQuery: VillainsQuery,
    private villainService: VillainsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getVillain();
    this.formBuilderInit();
    this.villain = this.villainsQuery.getEntity(this.id);
    this.patchForm();
  }

  onSubmit() {
    this.villainForm.value.id = this.id;
    this.putVillain();
    this.isSuccess = true;
  }

  back() {
    this.location.back();
  }

  private getVillain(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.villainService.getVillain(this.id);
  }

  private patchForm(): void {
    this.villainForm.patchValue(this.villain);
  }

  private putVillain(): void {
    this.villainService.updateVillain(this.villainForm.value);
  }

  private formBuilderInit(): void {
    this.villainForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      house: [''],
      knownAs: ['']
    });
  }
}
