import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentFeature: string = 'recipe';
  onFeaturehandler(feature: string) {
    this.currentFeature = feature;
  }
}
