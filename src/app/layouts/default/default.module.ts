import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { QcmComponent } from 'src/app/modules/qcm/qcm.component';
import { NewBooksComponent } from 'src/app/modules/new-books/new-books.component';
import { BooksComponent } from 'src/app/modules/books/books.component';
import { AcceuilComponent } from 'src/app/modules/acceuil/acceuil.component';
import { NotesComponent } from 'src/app/modules/notes/notes.component';
import { ParametreComponent } from 'src/app/modules/parametre/parametre.component';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    DefaultComponent,
    QcmComponent,
    NewBooksComponent,
    BooksComponent,
    AcceuilComponent,
    NotesComponent,
    ContactsComponent,
    ParametreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule ,
  ]
})
export class DefaultModule { }
