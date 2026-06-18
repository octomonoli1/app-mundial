import { Component, signal } from '@angular/core';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { PartidosComponent } from "../components/partidos-component/partidos-component";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, PartidosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-mundial');
}
