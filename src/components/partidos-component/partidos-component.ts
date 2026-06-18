import { Component, OnInit } from '@angular/core';
import { Partido } from '../../model/partido';
import { PartidoService } from '../../services/partido-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partidos-component',
  imports: [CommonModule],
  templateUrl: './partidos-component.html',
  styleUrl: './partidos-component.css',
})
export class PartidosComponent implements OnInit{

  public partidos: Partido[] = [];

  constructor(private _partidoService: PartidoService){}

  ngOnInit(): void {
    this._partidoService.findAll().subscribe(data => this.partidos = data);
  }

}
