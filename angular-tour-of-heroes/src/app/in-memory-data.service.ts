import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Pasi', superpower: 'Viikon Työt Tunnissa' },
      { id: 2, name: 'Janne', superpower: 'Loputon Kahvin Sieto Kyky' },
      { id: 3, name: 'Marko', superpower: 'Ajatusten Lukeminen' },
      { id: 4, name: 'Antti', superpower: 'Kuolemattomuus' },
      { id: 5, name: 'Janne', superpower: 'Nukkuminen Silmät Auki' },
      { id: 6, name: 'Mika', superpower: 'Sipsin Kosketus' },
      { id: 7, name: 'Juho', superpower: 'Näkymättömyys' },
      { id: 8, name: 'Tupaq', superpower: 'Supervahvuus' },
      { id: 9, name: 'Panu', superpower: 'Tiedon Etsiminen' },
      { id: 10, name: 'Timo', superpower: 'Lentäminen' },
      { id: 11, name: 'Lassi', superpower: 'Todenäköisyys manipulaatio' }
    ];
    return { heroes };

  }

  genId(heores: Hero[]): number {
    return heores.length > 0 ? Math.max(...heores.map(hero => hero.id)) + 1 : 11;

  }
}