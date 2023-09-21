import { Module ,DynamicModule,Provider} from '@nestjs/common';
import { getModelForClass,mongoose } from '@typegoose/typegoose';
import { ConfigService } from '@nestjs/config';

type ClassType = {new (...args:any[]):any}

@Module({})
export class DbModule {
  static forRoot(envKey: string,options={}): DynamicModule{
    const providers: Provider[] = [
      {
        provide:'DB_CONNECTION',
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>{
          // const uri = configService.get<string>( envKey, 'MONGO_URI')
          const uri = process.env.MONGO_URI || "mongodb://localhost:27017/admin";
          return mongoose.connect(uri,options)
        }
      }
    ]
    return {
      module: DbModule,
      providers,
      exports: providers,
      global: true
    }
  }
  static forFeature(models:ClassType[]):DynamicModule{
    const providers = models.map(model => {
      return {
        provide: model.name,
        useFactory:()=> getModelForClass(model),
      }  as Provider
    })
    return{
      module:DbModule,
      providers,
      exports: providers,
      global: true
    }

  }
}

