import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extracts the token from Authorization header
      ignoreExpiration: false, // Validates token expiration
      secretOrKey: 'Roshan Rajurkar', // Replace with your JWT secret
    });
  }

  async validate(payload: any) {
    // Return the extracted data as `req.user`
    console.log(payload);
    return { userId: payload.sub, email: payload.email };
  }
}

@Injectable()
export class JwtItem {
  constructor(private jwtService: JwtService) {}
  generateToken(payload: any) {
    return this.jwtService.sign(payload, {
      secret: 'Roshan Rajurkar',
    });
  }

  verify(token: string) {
    return this.jwtService.verify(token);
  }
}
