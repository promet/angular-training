import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, FormsModule,
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Input() isLoggedIn: boolean = false;
  @Input() username: string = '';
  @Input() selectedLanguage: string = '';
  dialog: any;

  openUserProfileModal() {
    this.dialog.open(UserProfileModalComponent, {
      width: '400px', // Adjust width as needed
      // You can pass data to the modal if required
      data: { username: this.username }
    });
  }
}
