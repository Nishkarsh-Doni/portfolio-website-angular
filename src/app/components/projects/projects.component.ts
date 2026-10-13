import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PortfolioService, Project, ProjectType } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `<section id="work" class="section-wrap projects-section"><div class="projects-heading"><div><p class="section-kicker"><span>03</span> — selected work</p><h2>Things I've<br><em>built & learned from.</em></h2></div><div class="filter-bar">@for (filter of filters; track filter) {<button [class.active]="activeFilter === filter" (click)="setFilter(filter)">{{ filter }}</button>}</div></div><div class="project-grid">@for (project of filteredProjects; track project.title; let i = $index) {<a class="project-card" [href]="project.url" target="_blank" rel="noopener"><span class="project-number">0{{ i + 1 }} <span>↗</span></span><span class="project-icon">↗</span><p class="project-state">{{ project.visibility }} · {{ project.type }}</p><h3>{{ project.title }}</h3><p>{{ project.description }}</p><div class="tag-row">@for (tech of project.tech; track tech) {<span>{{ tech }}</span>}</div></a>}</div><a class="all-projects" href="https://github.com/Nishkarsh-Doni?tab=repositories" target="_blank" rel="noopener">view all repositories <span>↗</span></a></section>`,
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  private readonly portfolio = inject(PortfolioService);
  readonly filters = ['All', 'Angular', 'Java', 'Learning'] as const;
  activeFilter: typeof this.filters[number] = 'All';
  get filteredProjects(): Project[] {
    return this.activeFilter === 'All' ? this.portfolio.projects : this.portfolio.projects.filter(project => project.type === this.activeFilter);
  }
  setFilter(filter: typeof this.filters[number]): void { this.activeFilter = filter; }
}
