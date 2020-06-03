import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { QcmComponent } from './modules/qcm/qcm.component';
import { NewBooksComponent } from './modules/new-books/new-books.component';
import { BooksComponent } from './modules/books/books.component';
import { AcceuilComponent } from './modules/acceuil/acceuil.component';
import { NotesComponent } from './modules/notes/notes.component';

import { LoginComponent } from './Authentification/login/login.component';
import { SignUpComponent } from './Authentification/sign-up/sign-up.component';
import { ParametreComponent } from './modules/parametre/parametre.component';
import { ContactsComponent } from './modules/contacts/contacts.component';

const routes: Routes = [
  {path:'',component:DefaultComponent, children:[{path:'Acceuil', component:AcceuilComponent},
  {path:'Books',component:BooksComponent},{path:'NewBooks',component:NewBooksComponent},
  {path:'Notes',component:NotesComponent},{path:'Qcm',component:QcmComponent},
  {path:'Parametre',component:ParametreComponent},{path:'Contacts',component:ContactsComponent}
  ]},

  {path:'Login',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
