import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  dialogRef: any;

  @Input() header: string ='Error';
  @Input() content: string = 'Please Try Again';
  @Input() isError: boolean = true;

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
