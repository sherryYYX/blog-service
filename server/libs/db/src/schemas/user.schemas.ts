import {modelOptions, prop} from '@typegoose/typegoose'
import { ApiPropertyOptional} from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})

export class User{
    @prop()
    @ApiPropertyOptional({description: '用户名', example: 'admin'})
    @IsNotEmpty({message:'请填写用户名'})
    username: string

    @prop()
    @ApiPropertyOptional({ description: '密码', example: 'pass'})
    @IsNotEmpty({message:'请填写密码'})
    password: string
}