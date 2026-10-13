import { Injectable } from '@angular/core';

export type ProjectType = 'Angular' | 'Java' | 'Learning';

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  tech: string[];
  url: string;
  visibility: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly projects: Project[] = [
    { title: 'JavaCornerNG', type: 'Angular', description: 'Angular front end for a Java-focused learning and collaboration platform.', tech: ['Angular', 'TypeScript', 'SCSS'], url: 'https://github.com/Nishkarsh-Doni/javacornerng', visibility: 'Private repo' },
    { title: 'AngularConcepts', type: 'Angular', description: 'A practical collection of Angular concepts, patterns, and implementation examples.', tech: ['Angular', 'TypeScript'], url: 'https://github.com/Nishkarsh-Doni/AngularConcepts', visibility: 'Private repo' },
    { title: 'Java8-Java-Techie', type: 'Java', description: 'Java 8 examples covering modern language features and backend fundamentals.', tech: ['Java', 'Java 8'], url: 'https://github.com/Nishkarsh-Doni/Java8-Java-Techie', visibility: 'Private repo' },
    { title: 'LLD & System Design', type: 'Learning', description: 'Low-level design practice focused on clean abstractions, patterns, and maintainable Java services.', tech: ['Java', 'OOP', 'Design Patterns'], url: 'https://github.com/Nishkarsh-Doni?tab=repositories', visibility: 'Learning in public' }
  ];
}
