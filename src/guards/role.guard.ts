import {
  BadGatewayException,
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IsDayOff implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const date = request.headers['date'];
    console.log(request.headers);
    if (date || date === '26 may') {
      throw new BadRequestException('permition denied');
    }
    return true;
  }
}
@Injectable()
export class ExistEmail implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.headers['email'];
    console.log(request.headers);
    if (!email) {
      throw new BadRequestException('permition denied');
    }
    return true;
  }
}

