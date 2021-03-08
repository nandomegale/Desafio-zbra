import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlayerModalComponent } from './add-player-modal/add-player-modal.component';
import { EditPlayerModalComponent } from './edit-player-modal/edit-player-modal.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddPlayerModalComponent,
    EditPlayerModalComponent,
    TournamentBracketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
