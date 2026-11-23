import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BodegaService } from '../../services/BodegaService';

@Component({
  selector: 'app-bodega-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-form.html'
})
export class BodegaFormComponent {
  @Output() creada = new EventEmitter<void>();
  error = '';
  mensajeExito = ''; 

  form;

  constructor(private fb: FormBuilder, private service: BodegaService) {
    this.form = this.fb.nonNullable.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.form.invalid) return;
    this.service.registrar(this.form.getRawValue()).subscribe({
      next: () => {
        this.form.reset();
        this.error = '';
        this.mensajeExito = '¡Bodega registrada exitosamente! (No tiene productos aún)'; 
        this.creada.emit();
      },
      error: () => (this.error = 'No se pudo registrar la bodega')
    });
  }
}