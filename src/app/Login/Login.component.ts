import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {login} from '../interfaces/usuario.interface'
import { AuthService } from '../services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './Login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {

  private fb = inject(FormBuilder);

  private router: Router = inject(Router)

  authService = inject(AuthService)

  public loginForm: FormGroup = this.fb.group({
    email:     ['', [Validators.required, Validators.email]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor() {}

  public Submit(){
    const usuario = computed(() => this.loginForm.controls["email"].value)
    const password = computed(() =>this.loginForm.controls["password"].value)
    let usuarioValido = this.authService.validaUsuario(usuario, password);

    if (usuarioValido){this.router.navigate(['/Dashboard'])}

  }
}
