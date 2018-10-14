import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './list-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private ServiceMessage: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.ServiceMessage.add('Hero-Service: liste des héros parcourue (succès)');
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero> {
    this.ServiceMessage.add(`Service de mon héro : hero avec id=${id}`);
    this.ServiceMessage.updateTwo(`Service de mon héro dans la place!!! : hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
