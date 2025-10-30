export default class User {
    username: string = "";
    password: string = "";

    /**
     * Create an user with ValidateUsername And ValidatePassword 
     */
    constructor(validateUsername: string, validatePassword: string) {
        this.username = validatePassword;
        this.password = validatePassword;
    }
}