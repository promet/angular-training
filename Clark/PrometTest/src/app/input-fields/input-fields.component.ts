import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-fields.component.html',
  styleUrl: './input-fields.component.scss'
})
export class InputFieldsComponent implements OnInit {

  title = 'PrometTest';
  isLoggedIn: boolean = false;
  userLabel = "Username";
  passLabel = "Password"


  @Input() password: string = '';
  @Input() username: string = '';

  @Output() usernameChange = new EventEmitter<string>();
  usernamae!: string;
  @Output() passwordChange = new EventEmitter<string>();

  constructor(public authService: AuthService, private dialog: MatDialog) {
  }
  modalHeader!: string;
  modalContent!: string;
  isError!: boolean;
  dialogRef: any;

  @Output() loginEvent = new EventEmitter<{ username: string, password: string }>();

  onUsernameChange(event: any) {
    this.username = event.target.value;
    this.usernameChange.emit(this.username);
  }

  onPasswordChange(event: any) {
    this.password = event.target.value;
    this.passwordChange.emit(this.password);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: 'Angular' }
    });

  }

  onLogin(): void {
    this.loginEvent.emit({ username: this.username, password: this.password });
  }

  ngOnInit(): void {

  }

}
