import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAppError } from "../types/app-error.interface";
import { catchError, of } from "rxjs";
import { environment } from "../../../../environments/environment";

enum API {
    log = '/temp/api/log'
}

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    constructor(private http: HttpClient) { }

    captureException(ex: any) {
        const error = ex.originalError || ex;

        const appError: IAppError = {
            pathName: window.location.pathname,
            userAgent: window.navigator.userAgent,
            message: error.message || error.toString(),
            stackTrace: error.stack
        };

        this.sendToBackend(appError);
    }

    private sendToBackend(error: IAppError) {
        return this.http
            .post(API.log, error)
            .pipe(
                catchError((err: any) => {
                    console.error('Failed to log error:', err);
                    return of(undefined);
                })
            )
            .subscribe(() => {
                if (!environment.production) {
                    console.group('AppError');
                    this.logError(error);
                    console.warn('Application exception captured.');
                    console.groupEnd();
                }
            });
    }

    private logError(error: IAppError) {
        console.warn('pathName:', window.location.pathname);
        console.warn('userAgent:', window.navigator.userAgent);
        error.stackTrace
            ? console.warn('stackTrace:', error.stackTrace)
            : console.warn('message:', error.message);
    }
}