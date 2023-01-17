import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatsComponent } from '../../pages/home/components/player-stats/player-stats.component';
import { ConstHeroesService } from '../../services/const-heroes.service';

@Pipe({
  name: 'heroIdToHeroImg',
})
export class HeroIdToHeroImgPipe implements PipeTransform {
  heroes: any;

  transform(id: number): string {
    return this.heroIdToHeroImg(id);
  }

  constructor(
    private playerstats: PlayerStatsComponent,
    private heroesService: ConstHeroesService
  ) {
  }

  heroIdToHeroImg(id: number): string {
    for (const hero of this.playerstats.heroesName) {
      if (hero.id === id) {
        return 'https://api.opendota.com' + hero.img;
      }
    }
    return 'hero not located';
  }

}
