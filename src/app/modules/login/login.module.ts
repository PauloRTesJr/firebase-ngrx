import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './containers/login-screen/login-screen.component';
import { LoginRoutingModule } from './login-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './data/login/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './data/login/login.effects';

@NgModule({
  declarations: [LoginComponent, LoginScreenComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class LoginModule {}
