import { Component, ViewEncapsulation } from '@angular/core';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiteHeaderComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {}
