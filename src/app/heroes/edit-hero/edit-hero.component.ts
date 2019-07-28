import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroModel } from '../hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroesQuery } from '../heroes.query';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  hero: HeroModel;
  heroForm: FormGroup;
  id: string;
  isSuccess: boolean;

  constructor(
    private heroesQuery: HeroesQuery,
    private heroService: HeroesService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
    this.formBuilderInit();
    this.hero = this.heroesQuery.getEntity(this.id);
    this.patchForm();
  }

  onSubmit() {
    this.heroForm.value.id = this.id;
    this.putHero();
    this.isSuccess = true;
  }

  back() {
    this.location.back();
  }

  private getHero(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(this.id);
  }

  private patchForm(): void {
    this.heroForm.patchValue(this.hero);
  }

  private putHero(): void {
    this.heroService.updateHero(this.heroForm.value);
  }

  private formBuilderInit(): void {
    this.heroForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      house: [''],
      knownAs: ['']
    });
  }
}
