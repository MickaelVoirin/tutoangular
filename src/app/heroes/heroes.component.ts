import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
//import { HEROES } from '../list-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[];
  // selectedHero: {};
  
  constructor(private myServiceHeroes: HeroService, private ServiceMessage: MessageService) { 
    
  }

  getMyHeroes(): void {
    this.myServiceHeroes.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

   /* onSelect(hero): void {
    this.selectedHero = hero;
    // this.ServiceMessage.clear();
    this.ServiceMessage.add(`${hero.name} est dans la place!!!`);
    this.ServiceMessage.updateTwo(`${hero.name} est dans la place!!!`);
  }
  */

  ngOnInit() {
    this.getMyHeroes();
    // this.selectedHero = this.heroes[0];
  }
  
  /* 
  Ancien hero de base, ne sert plus à l'appli
  hero: Hero = {
    id: 0,
    name: 'Nobody',
    old: 0
  };
  */
/**
 * 
 * 
on select version Version tuto / pk affecter Hero à la propriété selectedHero et en valeur par defaut de l'argument?  
 selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
 */

}
