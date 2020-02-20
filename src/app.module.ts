import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserRepository } from './repositories/user-repository';
import { RoleRepository } from './repositories/role-repository';
import { ServeHtmlMiddleware } from './serve-html.middleware';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/client/build'),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([UserRepository, RoleRepository]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '3600s',
      },
    }),
  ],
  controllers: [AppController],
  providers: [JwtStrategy, AppService, AuthService, UserService, RoleService],
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ServeHtmlMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  } */
}