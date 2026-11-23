import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Bodega } from './models/bodega';
import { BodegaService } from './services/BodegaService';
import { BodegaFormComponent } from './components/bodega-form/bodega-form';
import { ProductosTableComponent } from './components/productos-table/productos-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodegaFormComponent, ProductosTableComponent],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  bodegas: Bodega[] = [];
  mensajeError: string = '';

  
  constructor(private service: BodegaService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { 
    this.cargar(); 
  }

    cargar(): void {
    this.service.listar().subscribe(data => {
      this.bodegas = data;
      this.cdr.detectChanges(); 
    });
  }
}