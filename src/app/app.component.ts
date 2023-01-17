import { Component, OnInit } from '@angular/core';
import { ConstHeroesService } from './services/const-heroes.service';
import { DataService } from './services/data-service.service';
import { HeroesConst } from '../common/heroes.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  heroes: any = this.heroesConst.teste

  constructor(
    private heroesConst: HeroesConst,
    private heroesService: ConstHeroesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.heroesService.getConstHero().subscribe((heroes) => {
      this.heroes = Object.values(heroes);
      this.dataService.sendHeroesConst(this.heroes);
    });

    console.log(this.heroes)
  }

  title = 'dota2_rank';
}
