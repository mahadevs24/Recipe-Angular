import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.Component.html',
  styleUrl: './header.Component.css',
})
export class HeaderComponent {
  @Output() onSelectEmitter = new EventEmitter<string>();
  onSelect(feature: string) {
    this.onSelectEmitter.emit(feature);
  }
}
