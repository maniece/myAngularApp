import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

export class InterceptorService implements HttpInterceptor {
  intercept(req:HttpRequest<unknown>, next: HttpHandler ) {
    let modifiedRequest = req.clone({
      headers: req.headers.append('auth','abc')
    });
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("Err:" + JSON.stringify(error));
        let err;
        if(error instanceof HttpErrorResponse) {
          // if(error.error instanceof ErrorEvent) {
            err = error.statusText;
          // } 
        } else {
          err = "An Error Occured";
        }
        return throwError(err)
      })
    ); 
  }
}
