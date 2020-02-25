import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth/auth.service';
//import {AuthService } from './auth/auth.service';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { UserRepository } from './repositories/user-repository';
import { RoleRepository } from './repositories/role-repository';
import { ServeHtmlMiddleware } from './serve-html.middleware';
import { UserControllerController } from './controllers/user-controller/user-controller.controller';
import { AuthModule } from './auth/auth.module';
import { AuthRepository } from './auth/auth.repository';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/client/build'),
    }),
    //TypeOrmModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'emergencia_medica_db',
        entities: ['dist/models/*{.ts,.js}'],
      }),
    }),
    TypeOrmModule.forFeature([UserRepository, RoleRepository, AuthRepository]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 604800,
      },
    }),
     AuthModule,
  ],
  controllers: [AppController, UserControllerController],
  providers: [JwtStrategy, AppService, AuthService, UserService, RoleService],
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ServeHtmlMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  } */
}