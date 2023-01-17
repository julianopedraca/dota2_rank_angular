import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {MatchDetailComponent} from './pages/match/match-detail/match-detail.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
 {path: 'match',
 component: MatchDetailComponent,
 children:[
  { path: 'id', component: MatchDetailComponent}
 ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
