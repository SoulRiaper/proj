export class JwtPatternDto {
    id?: number;
    iat?: number;
    exp?: number;

    constructor(id?, iat?, exp?){
        this.id = id;
        this.iat = iat;
        this.exp = exp
        
    }
}