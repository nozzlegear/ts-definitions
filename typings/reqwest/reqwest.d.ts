declare namespace __reqwest
{
    interface ReqwestOptions
    {
        url: string;
        method?: string;
        headers?: Object;
        data?: string | Object;
        type?: string;
        contentType?: string;
        crossOrigin?: boolean;
        success?: (response: any) => void;
        error?: (error: any) => void;
        complete?: (response: any) => void;
        jsonpCallback?: string;
    }

    interface ReqwestPromise<T>
    {
        request: XMLHttpRequest;

        then(callback: (response: T) => void): ReqwestPromise<T>;

        fail(callback: (error: XMLHttpRequest, message: string) => void): ReqwestPromise<T>;

        always(callback: (data: any) => void): void;
    }

    interface ReqwestStatic
    {
        (url: string): ReqwestPromise<any>;

        (url: string, done: (response: any) => void): ReqwestPromise<any>;

        (options: ReqwestOptions): ReqwestPromise<any>;

        <T>(url: string): ReqwestPromise<T>;

        <T>(url: string, done: (response: T) => void): ReqwestPromise<T>;

        <T>(options: ReqwestOptions): ReqwestPromise<T>;
    }
}

declare module "reqwest"
{
    var reqStatic: __reqwest.ReqwestStatic;
    
    export = reqStatic;
}