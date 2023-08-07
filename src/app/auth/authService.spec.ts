import { User } from 'src/app/dashboard/pages/users/models';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { MockProvider } from 'ng-mocks'
import { Router } from '@angular/router';


describe('AuthService', () => {

    let service: AuthService
    let httpController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [MockProvider(Router)],
        })

        service = TestBed.inject(AuthService)
        httpController = TestBed.inject(HttpTestingController)
    })

    it('Si el login() es valido, el observable authUser$ debe emitir un valor', () => {

        const mockUser: User = {
            id: 78,
            email: 'fake@testmail.com',
            password: '9875',
            name: 'Fake',
            surname: 'Spuerfake',
            token: 'khjgirltopldnsbcgdhe'
        }
        const mockResponse: User[] = [mockUser]

        service.login({
            email: mockUser.email,
            password: mockUser.password
        })

        httpController.expectOne({
            method: 'GET',
            url: `http://localhost:3000/users?email=${mockUser.email}&password=${mockUser.password}`
        }).flush(mockResponse)

        service.authUser$.subscribe({
            next: (authUser) => {
                expect(authUser).toBeTruthy()
                expect(authUser).toEqual(mockUser)
            }
        })
    })
})