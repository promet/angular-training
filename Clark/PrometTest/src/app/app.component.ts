import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectionsDropdownComponent } from './selections-dropdown/selections-dropdown.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from './loader/loader.component';

declarations: [
  SelectionsDropdownComponent
]

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    SelectionsDropdownComponent,
    InputFieldsComponent,
    PageFooterComponent,
    PageHeaderComponent,
    ButtonsComponent,
    ModalComponent,
    LoaderComponent
  ],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  isLoading: boolean = false;
  selectedLanguage: string = '';

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: 'Angular' }
    });

  }

  handleUsernameChange(username: string) {
    this.username = username;
  }

  handlePasswordChange(password: string) {
    this.password = password;
  }

  handleLanguageChange(language: string) {
    this.selectedLanguage = language;
  }

  handleLogin() {
    this.isLoading = true;
    setTimeout(() => {
      if (this.username === 'Testing' && this.password === 'Testing') {
        this.isLoggedIn = true;
        this.isLoading = false;
        this.password = '';
      } else {
        this.isLoading = false;
        this.openDialog();
      }
    }, 2000)
  }


}
