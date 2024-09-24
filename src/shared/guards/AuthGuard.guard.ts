// import {
//   CanActivate,
//   ExecutionContext,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';

// export class AuthGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest();

//     if (!req.token) throw new UnauthorizedException('User not authorized');
//     return req.token;
//   }
// }
