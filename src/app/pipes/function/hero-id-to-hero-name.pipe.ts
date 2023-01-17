import { ConstHeroesService } from './../../services/const-heroes.service';
import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatsComponent } from '../../pages/home/components/player-stats/player-stats.component'
import { ConstHeroes } from 'src/app/model/const-hero';

@Pipe({
  name: 'heroIdToHeroName'
})
export class HeroIdToHeroNamePipe implements PipeTransform {

  heroes: ConstHeroes =[]

  transform(id: number): string {

    return this.heroIdToHeroName(id);
  }

  constructor (private playerstats: PlayerStatsComponent, private constHeroesService: ConstHeroesService){
    console.log(this.teste())

  }

  teste():any{
    this.constHeroesService.getConstHero().subscribe((hero) => {
      this.heroes= hero

    })
    return (this.heroes[1])
  }

  heroIdToHeroName(id: number): string {
    for (const hero of this.playerstats.heroesName) {
      if (hero.id === id) {
        return hero.localized_name;
      }
    }
    return 'hero not located';
  }
}
