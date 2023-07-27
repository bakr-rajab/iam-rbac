import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import {InferSubjects,AbilityClass,createMongoAbility, AbilityBuilder, MongoAbility} from "@casl/ability"
import { Action } from "src/enums/actions.enum";



// export type AppAbility =createMongoAbility<[Action,Subject]>
// type Action = 'create' | 'read' | 'update' | 'delete';
type Subject = User | 'Article' | 'User' | 'Comment';

type Abilities = [Action, Subject];

export type AppAbility = MongoAbility<Abilities>;

// ability.can()
// https://blog.identityautomation.com/rbac-vs-abac-access-control-models-iam-explained
@Injectable()
export class AbilityFactory {
    
    
    defineAbility(user: User) {
        const {can,cannot,build} = createMongoAbility<[Action, Subject]>();
        can(Action.Create,user)

        return build
    }




}
