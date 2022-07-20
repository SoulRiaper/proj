import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Property, Reference } from "@mikro-orm/core";
import { User } from "../user/user.entity";



@Entity({ tableName: 'articles' })
export class Articles {

    
    @PrimaryKey()
    _id!: number;

    @ManyToOne(() => User)
    user: IdentifiedReference<User>;

    @Property()
    title?: string;


    @Property()
    content?: string;

    @Property({nullable: true})
    image?: string;

    constructor(user: User) {
        this.user = Reference.create(user);
      }
  

}