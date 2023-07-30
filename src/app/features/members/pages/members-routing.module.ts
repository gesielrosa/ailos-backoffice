import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full',
      },
      {
        path: 'new',
        loadComponent: () => import('./new-member/new-member.component').then((c) => c.NewMemberComponent),
      },
    ]),
  ],
})
export class MembersRoutingModule {}
