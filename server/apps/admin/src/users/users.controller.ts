import { User } from '@libs/db/schemas/user.schemas';
import { Controller ,Inject} from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import {ReturnModelType} from '@typegoose/typegoose'
@Crud({
    model: User
})
@Controller('users')
export class UsersController {
    constructor( @Inject(User.name) private readonly model: ReturnModelType<typeof User>){ }
}
