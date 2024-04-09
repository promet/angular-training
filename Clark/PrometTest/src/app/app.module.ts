import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { InputFieldsComponent } from "./input-fields/input-fields.component";
import { SelectionsDropdownComponent } from "./selections-dropdown/selections-dropdown.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule ({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputFieldsComponent,
    SelectionsDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule{};
