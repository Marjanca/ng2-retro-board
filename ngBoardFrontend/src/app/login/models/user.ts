export class User {
    private id: number;
    private username: string;
    private password: string;

    constructor (id: number, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    get Id(): number {
        return this.id;
    }

    set Id(id: number) {
        this.id = id;
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
}
