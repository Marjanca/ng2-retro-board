import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private users: User[] = [
        new User(1, 'Petar', 'Petrovic'),
        new User(2, 'Miki', 'Mikic')
    ];

    getUser(userId: number): User {
        let user = this.users.find((tempUser) => tempUser.Id === userId);

        if (!user) {
            // TODO: No such board error
            return null;
        }

        return user;
    }
}
