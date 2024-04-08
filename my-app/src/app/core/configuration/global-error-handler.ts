import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { LoggingService } from "../logging/service/logging.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {}

    handleError(error: any): void {
        const loggingService = this.injector.get(LoggingService);
        loggingService.captureException(error);
        throw error;
    }
}