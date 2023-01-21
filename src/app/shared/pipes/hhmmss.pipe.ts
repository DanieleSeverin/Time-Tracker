import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhmmss'
})
export class HhmmssPipe implements PipeTransform {

  //value is number of seconds
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);
    const seconds = Math.floor(value % 3600 % 60);

    const Hours = hours < 10 ? `0${hours}` : hours;
    const Minutes = minutes < 10 ? `0${minutes}` : minutes;
    const Seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${Hours}:${Minutes}:${Seconds}`;
  }

}
