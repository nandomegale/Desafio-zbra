import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlayerModalComponent } from './add-player-modal/add-player-modal.component';
import { EditPlayerModalComponent } from './edit-player-modal/edit-player-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddPlayerModalComponent,
    EditPlayerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
