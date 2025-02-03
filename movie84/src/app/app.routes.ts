import { Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DetalhesfilmeComponent } from './componentes/detalhesfilme/detalhesfilme.component';
import { CardfilmesComponent } from './componentes/cardfilmes/cardfilmes.component';
import { CelebridadesComponent } from './componentes/celebridades/celebridades.component';
import { SeriesComponent } from './componentes/series/series.component';


export const routes: Routes = [
    {
        path: '',
        component: AppComponent

    },
    {
        path: 'filmes/:nmlista',
        component: CardfilmesComponent

    },
    {
        path: 'detalhes/:id',
        component: DetalhesfilmeComponent
    },
    {
        path: '',
        redirectTo: '/filmes/now_playing',
        pathMatch: 'full'
    },
    {
        path: 'celebridades',
        component: CelebridadesComponent
    },
    {
        path: 'series',
        component: SeriesComponent
    }



];

