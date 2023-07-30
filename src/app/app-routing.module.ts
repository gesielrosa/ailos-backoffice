import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'members',
    pathMatch: 'full',
  },
  {
    path: 'members',
    loadChildren: () => import('./features/members/pages/members-routing.module').then((m) => m.MembersRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
