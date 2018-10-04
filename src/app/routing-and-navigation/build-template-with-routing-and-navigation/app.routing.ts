import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../children/home/home.component';
import { AboutUsComponent } from '../children/about-us/about-us.component';
import { NewsComponent } from '../children/news/news.component';

// can't able to fix
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', children: HomeComponent },
  { path: 'about-us', children: AboutUsComponent },
  { path: 'news', children: NewsComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
