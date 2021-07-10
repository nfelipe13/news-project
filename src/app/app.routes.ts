import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { ResultsComponent } from './pages/results/results.component';

const app_routes : Routes = [
    {path: 'news', component: NewsComponent },
    {path: 'results', component: ResultsComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'results' }

];

export const app_routing = RouterModule.forRoot(app_routes);