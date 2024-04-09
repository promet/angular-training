import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  @Output() loginEvent = new EventEmitter<{ username: string, password: string }>();
  username!: string;
  password!: string;

  emitLoginData() {
    this.loginEvent.emit({ username: this.username, password: this.password });
  }

}
