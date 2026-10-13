import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `<header class="topbar"><a class="wordmark" href="#top"><span class="mark">ND</span> Nishkarsh Doni<span class="muted">.dev</span></a><nav class="desktop-nav" aria-label="Primary navigation"><a href="#about">about</a><a href="#experience">experience</a><a href="#work">work</a><a href="#contact">contact</a></nav><a class="github-link" href="https://github.com/Nishkarsh-Doni" target="_blank" rel="noopener"><span class="github-dot"></span>github <span class="arrow">↗</span></a></header>`,
  styleUrls: ['./site-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent {}
