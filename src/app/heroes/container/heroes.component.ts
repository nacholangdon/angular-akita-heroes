import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroModel } from '../hero.model';
import { HeroesQuery } from '../heroes.query';
import { HeroesService } from '../heroes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  editItemUrl = '/heroes/edit-hero/'; // shared with item-list-component.html
  list$?: Observable<HeroModel[]>;
  newItemForm: FormGroup;
  isShowNewItemForm = false;

  constructor(
    private heroesQuery: HeroesQuery,
    private heroService: HeroesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadHeroes();
    this.formBuilderInit();
    this.list$ = this.heroesQuery.selectAll();
  }

  loadHeroes(): void {
    this.heroService.getHeroes();
  }

  onSubmit(): void {
    this.heroService.addHero(this.newItemForm.value);
    this.newItemForm.reset();
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  showNewItemForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  cancelForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  removeItem(hero: HeroModel): void {
    const isConfirmed = confirm(`Delete ${hero.firstName}`);
    if (!isConfirmed) {
      return;
    }
    this.heroService.removeHero(hero.id);
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
