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
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './controllers/auth-controller/jwt.strategy';
import { UserRepository } from './repositories/user-repository';
import { RoleRepository } from './repositories/role-repository';
import { ServeHtmlMiddleware } from './serve-html.middleware';
import { UserControllerController } from './controllers/user-controller/user-controller.controller';
import { AuthRepository } from './repositories/auth.repository';
import { AuthController } from './controllers/auth-controller/auth-controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/client/build'),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([UserRepository, RoleRepository, AuthRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    // JwtModule.registerAsync({
    //   useFactory: async () => ({
    //     signOptions: {
    //        expiresIn: 3600,
    //     },
    //     secretOrPrivateKey: 'secretKey',
    //   }),
    //   inject: [JwtService], 
    // }),
  ],
  controllers: [AppController, UserControllerController, AuthController],
  providers: [AppService, JwtStrategy, JwtService, AuthService, UserService, RoleService],
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ServeHtmlMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  } */
}