import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss'
})
export class PageFooterComponent {
  currentDate: Date = new Date();

  angularVersion: string = VERSION.full;

  constructor() { }

  ngOnInit(): void {
  }

}
