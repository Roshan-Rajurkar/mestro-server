import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtItem, JwtStrategy } from './services/jwt.services';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      // secret: 'Roshan Rajurkar is the key',
      signOptions: {
        expiresIn: '7h',
      },
    }),
  ],
  providers: [JwtService, JwtItem, JwtStrategy],
  exports: [JwtItem],
})
export class SharedModule {}
