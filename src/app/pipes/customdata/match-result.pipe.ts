import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchResult'
})
export class MatchResultPipe implements PipeTransform {

  transform(result:number): string {
    return (result === 1 ? 'win' : 'lose');
  }

}
