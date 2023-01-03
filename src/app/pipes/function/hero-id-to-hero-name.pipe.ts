import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatsComponent } from '../../components/player-stats/player-stats.component'

@Pipe({
  name: 'heroIdToHeroName'
})
export class HeroIdToHeroNamePipe implements PipeTransform {

  transform(id: number): string {
    return this.heroIdToHeroName(id);
  }

  constructor (private playerstats: PlayerStatsComponent){
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
