export class UserFindDto{

    
    email?: string;

    uaerName?: string;


    constructor(email?, userName?){
        this.email = email;
        this.uaerName = userName;
    }
}