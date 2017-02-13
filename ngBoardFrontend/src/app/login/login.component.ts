import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private username: string;
    private password: string;

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
}