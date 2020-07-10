import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { AddNewMemberComponent } from './add-new-member/add-new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    AddNewMemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'members', component: MembersComponent},
      {path: 'add-new-member', component: AddNewMemberComponent},
      {path: '', redirectTo: '/members', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
