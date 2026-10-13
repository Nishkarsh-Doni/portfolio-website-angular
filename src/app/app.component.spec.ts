import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfolio-website'; // <-- Add this property back

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  @HostListener('window:mousemove', ['$event'])
  updateSpaceParallax(event: MouseEvent): void {
    const x = (event.clientX / window.innerWidth - 0.5) * 64;
    const y = (event.clientY / window.innerHeight - 0.5) * 64;
    this.host.nativeElement.style.setProperty('--space-x', `${x}px`);
    this.host.nativeElement.style.setProperty('--space-y', `${y}px`);
    this.host.nativeElement.style.setProperty('--cursor-x', `${event.clientX}px`);
    this.host.nativeElement.style.setProperty('--cursor-y', `${event.clientY}px`);
  }
}
