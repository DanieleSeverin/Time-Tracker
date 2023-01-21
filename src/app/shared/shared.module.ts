import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { HhmmssPipe } from './pipes/hhmmss.pipe';

const components = [
  NavbarComponent,
  LayoutComponent,
  HhmmssPipe,
];

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
];

const material_modules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
    ...material_modules
  ],
  exports: [
    ...components,
    ...modules,
    ...material_modules
  ],
})
export class SharedModule { }
