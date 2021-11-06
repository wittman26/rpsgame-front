import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsgameviewComponent } from './pages/rpsgameview/rpsgameview.component';
import { RpsgameresultsComponent } from './pages/rpsgameresults/rpsgameresults.component';
import { RpsgameenteridComponent } from './pages/rpsgameenterid/rpsgameenterid.component';
import { HttpClientModule } from  '@angular/common/http';
import { PlayerGuardGuard } from './guards/player-guard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RpsgameviewComponent ,  canActivate: [PlayerGuardGuard]},
  { path: 'results', component: RpsgameresultsComponent,  canActivate: [PlayerGuardGuard] },
  { path: 'enterid', component: RpsgameenteridComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    RpsgameviewComponent,
    RpsgameresultsComponent,
    RpsgameenteridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
