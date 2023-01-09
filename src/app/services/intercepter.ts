import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const x_client_key =
      'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFMmFBZTZ3WjBWL3hZZ0dHS2t5ZGYrUkRnSkJ0bApNSkFZQzJ2cERRSHlsQ2hiWTNhd0o2d1BUMUt0S01VdWxKWlN3U0RjMmdoQTNYV2Z1RFFnY3ZNTUxBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==';
    return next.handle(
      httpRequest.clone({
        setHeaders: {
          'x-client-key': x_client_key,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'x-user-id': `${localStorage.getItem('id')}`,
        },
      })
    );
  }
}
