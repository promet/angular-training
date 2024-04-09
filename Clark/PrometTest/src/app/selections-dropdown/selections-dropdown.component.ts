import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-selections-dropdown',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,],
  templateUrl: './selections-dropdown.component.html',
  styleUrl: './selections-dropdown.component.scss'
})
export class SelectionsDropdownComponent {

  optionLabel = "Programming Languages: "

  languages: string[] = ['C#', 'C', 'C++', 'PHP', 'JAVA', 'TYPESCRIPT', 'RUBY', 'PYTHON'];
  selectedLanguage: string = '';

  @Output() languageChange = new EventEmitter<string>();

  onLanguageChange(event: any) {
    this.selectedLanguage = event.target.value;
    this.languageChange.emit(this.selectedLanguage);
  }

}
