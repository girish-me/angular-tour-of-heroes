import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
        //simulate delay of 2 secs
        //return new Promise(resolve => {
        //    setTimeout(()=>resolve(HEROES),2000)
        //})
    }
}