export interface IAppError {
    pathName: string;
    userAgent: string;
    message: string;
    stackTrace?: any;
}