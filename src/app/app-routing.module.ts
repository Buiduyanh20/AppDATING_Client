import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
          { path: 'members', component: MemberListComponent },
          { path: 'members/:username', component: MemberDetailComponent },
          {
            path: 'member/edit',
            component: MemberEditComponent,
            canDeactivate: [PreventUnsavedChangesGuard],
          },
          { path: 'lists', component: ListsComponent },
          { path: 'messages', component: MessagesComponent },
        ],
      },
      { path: 'register', component: RegisterComponent },
      { path: 'errors', component: TestErrorComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'server-error', component: ServerErrorComponent },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ]),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}