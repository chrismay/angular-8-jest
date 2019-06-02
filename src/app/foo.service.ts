import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor(private seed: number) { }

  public addStuff(addTo: number): number {
    return addTo + this.seed;
  }
}
