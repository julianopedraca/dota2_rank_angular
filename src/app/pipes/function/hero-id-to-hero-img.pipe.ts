import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatsComponent } from '../../components/player-stats/player-stats.component'


@Pipe({
  name: 'heroIdToHeroImg'
})
export class HeroIdToHeroImgPipe implements PipeTransform {

  transform(id:number): string {
    return this.heroIdToHeroImg(id);
  }
  constructor(private playerstats: PlayerStatsComponent){}

  heroIdToHeroImg(id: number): string {
    for (const hero of this.playerstats.heroesName) {
      if (hero.id === id) {
        return 'https://api.opendota.com'+hero.img;
      }
    }
    return 'hero not located';
  }
}
