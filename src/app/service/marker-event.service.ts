import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkerEventService {

  constructor() { }

  // play animation
  play(marker: any) {
    marker.play();
  }

  // pause animation
  pause(marker: any) {
    marker.pause();
  }

  // reset animation
  reset(marker: any) {
    marker.reset();
  }

  // jump to next location
  next(marker: any) {
    marker.next();
  }

  // jump to previous location
  prev(marker: any) {
    marker.prev();
  }

  // fast forward
  fast(marker: any, speedMultiplier: number) {

    marker.setSpeedMultiplier(speedMultiplier);
  }

  // slow motion
  slow(marker: any, speedMultiplier: number) {

    marker.setSpeedMultiplier(speedMultiplier)
  }


}
