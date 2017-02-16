import { Component } from '@angular/core';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private username: string = '';
    private password: string = '';

    constructor(private AuthService: AuthService) {
        this.AuthService = AuthService;
    }

    get Username(): string {
        return this.username;
    }

    set Username(username: string) {
        this.username = username;
    }

    get Password(): string {
        return this.password;
    }

    set Password(password: string) {
        this.password = password;
    }

    loginUser() {
        this.AuthService.login(this.username, this.password);
    }

    logoutUser() {
        this.AuthService.logout();
    }

    isLoggedIn(): boolean {
        return this.AuthService.isUserLoggedIn();
    }
}
