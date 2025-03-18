import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  /** Atributos */
  formData!: FormGroup;
  roles: String[] = ['registered', 'moderator', 'admin' ];
  userId!: string;

  constructor(
    private route: ActivatedRoute
  ) {
    // Agrupacion de campos del formulario
    this.formData = new FormGroup({
      name: new FormControl( '' , [ Validators.required ] ),
      username: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.minLength( 6 ), Validators.maxLength( 12 ) ] ),
      role: new FormControl( '', [ Validators.required ] ),
      state: new FormControl( true, [ Validators.required ] )
    });
  }

  ngOnInit() {
    this.getRouteId();
  }

  private getRouteId () {
    this.route.paramMap.subscribe( ( params: Params ) => {
      this.userId = params[ 'get' ]( 'id' ) ?? '';
      console.log('ID del usuario:', this.userId );
    });
  }

  onSubmit() {
    // Obtiene los valores de los campos campos del formulario
    const inputData = this.formData.value;

    // Verifica el estado de validacion del formulario
    if( this.formData.valid ) {
      console.log( inputData );   // Enviar los datos al BackEnd
    }

    this.formData.reset();    // Limpia los campos del formulario
  }
}
