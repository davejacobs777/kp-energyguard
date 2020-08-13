import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'kf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavOpen: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  openSidenav(): void {
    this.sidenavOpen.emit();
  }

}
