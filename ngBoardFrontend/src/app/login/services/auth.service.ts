import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class AuthService {
    private users: User[] = [
        new User(1, 'Petar', 'Petrovic'),
        new User(2, 'Miki', 'Mikic')
    ];

    private loggedInUser: string = null;

    constructor() {
        this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    }

    login(username: string, password: string) {
        let user = this.users.find((tempUser) => tempUser.Username === username);

        if (user && user.Password === password) {
            this.loggedInUser = user.Username;
            localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
        }
    }

    logout() {
        this.loggedInUser = null;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    }

    isUserLoggedIn(): boolean {
        return this.loggedInUser !== null;
    }
}
