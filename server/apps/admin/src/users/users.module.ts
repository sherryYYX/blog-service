import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DbModule } from '@libs/db';
import { User } from '@libs/db/schemas/user.schemas';
import { UsersService } from './users.service';

@Module({
  imports:[
    DbModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers:[UsersService]
})
export class UsersModule {}
