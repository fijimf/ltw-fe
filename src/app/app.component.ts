import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LtwFormComponent } from './components/ltw-form/ltw-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LtwFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ltw-fe';
}
