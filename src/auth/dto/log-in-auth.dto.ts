export class AuthDto {
    userName?: string;
    pass?: string;
    constructor(userName?, pass?){
        this.userName = userName;
        this.pass = pass;
    }
}