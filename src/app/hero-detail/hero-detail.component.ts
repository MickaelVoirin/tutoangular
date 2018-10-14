import { Component, OnInit, Input } from '@angular/core';


import { MessageService } from '../message.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  message : string;
  
  @Input() shero: Hero;

  constructor(
    public ServiceMessage: MessageService, 
    private route: ActivatedRoute,
    private serviceHero: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceHero.getHero(id).subscribe(hero => this.shero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
