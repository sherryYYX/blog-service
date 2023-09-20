import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {ConfigModule} from '@nestjs/config'
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsersModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
