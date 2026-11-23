import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bodega } from '../../models/bodega';

@Component({
  selector: 'app-productos-table',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './productos-table.html'
})
export class ProductosTableComponent {
  @Input() bodegas: Bodega[] = [];
}