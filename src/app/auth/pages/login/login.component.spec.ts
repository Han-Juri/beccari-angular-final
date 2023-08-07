import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from '../../auth.service';

describe('LoginComponent', () => {

    let component: LoginComponent

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [MatFormFieldModule, MatInputModule, HttpClientTestingModule]
        })

        component = TestBed.createComponent(LoginComponent).componentInstance    
    })

    it('El formulario debe ser invalido si los formularios del mismo quedan en blanco', () => {
        
        component.emailControl.setValue('')
        component.passwordControl.setValue('')
        expect(component.loginForm.invalid).toBeTrue()
    })

    it('Al llamar login() y el formulario es invalido, se debe llamar al metodo markAllAsTouched de la propiedad loginForm', () => {
        
        const spyOfMarkAllAuTouched = spyOn(component.loginForm, 'markAllAsTouched')
        component.emailControl.setValue('')
        component.passwordControl.setValue('')
        component.login()

        expect(spyOfMarkAllAuTouched).toHaveBeenCalled()
    })

    it('Al llamar login() y el formulario ES VALIDO, debe haberse llamado al metodo login del AuthService', () => {

        const authService = TestBed.inject(AuthService)
        component.emailControl.setValue('fake@fake.com')
        component.passwordControl.setValue('9875')

        expect(component.loginForm.valid).toBeTrue()

        const spyOfAuthServiceLogin = spyOn(authService, 'login')

        component.login()

        expect(spyOfAuthServiceLogin).toHaveBeenCalled()
    })
})