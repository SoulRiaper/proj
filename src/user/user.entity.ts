import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Articles } from "../articles/article.entity";


@Entity({tableName: 'user'})
export class User {
    @PrimaryKey({ autoincrement: true, unique: true,  })
    id!: number;
    
    @Property({unique: true})
    email: string;

    @Property()
    pass: string;

    @Property({ fieldName: 'uaer_name', unique: true })
    uaerName: string;

    @OneToMany(() => Articles, article => article.user)
    articlesCollection: Collection<Articles>;
    

    
   
}