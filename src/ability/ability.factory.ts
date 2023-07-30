import { Injectable } from "@nestjs/common";
import { User, Role } from "@prisma/client";
import { InferSubjects, AbilityClass, createMongoAbility, Ability, AbilityBuilder, MongoAbility, ExtractSubjectType, subject } from "@casl/ability"
import { Action } from "src/enums/actions.enum";

type Subjects = InferSubjects<Role | User> | 'all';
@Injectable()
export class AbilityFactory {

    defineAbility(entity: any) {

        const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
        can(Action.Create, 'user')
        can('manage', 'BlogPost');
        cannot('delete', 'BlogPost', {
            createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 }
        });

        return build()
        
    }
}
