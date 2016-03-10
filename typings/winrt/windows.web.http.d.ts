declare namespace Windows.Web.Http
{
    export interface IHttpContent
    {
        headers: HttpHeaderCollection;
    }

    export interface HttpProgress {
        bytesReceived: number;
        bytesSent: number;
        retries: number;
        stage: any;
        totalBytesToReceive: Windows.Foundation.IReference<number>;
        totalBytesToSend: Windows.Foundation.IReference<number>;
    }

    export interface HttpHeaderCollection
    {
        /**
        Returns true if the collection contains a header with the given key.
        */
        hasKey(key: string): boolean;

        /**
        Adds or replaces a header with the given key. Returns true if the header was replaced, false if it was added.
        */
        insert(key: string, value: string): boolean;

        /**
        Finds an item in the collection and returns it if it exists. 
        */
        lookup(key: string): string;

        /**
        Removes an item in the collection with the given key.
        */
        remove(key: string): void;
    }

    export enum HttpMethod
    {
        delete,
        get,
        head,
        method,
        options,
        patch,
        post,
        put
    }

    export enum HttpResponseMessageSource
    {
        none,
        cache,
        network
    }

    export interface HttpMessage
    {
        close(): void;

        content: IHttpContent;
        headers: HttpHeaderCollection;
        properties: Windows.Foundation.Collections.IMap<string, Object>;
        requestUri: Windows.Foundation.Uri;
    }

    export class HttpRequestMessage implements HttpMessage
    {
        constructor();
        constructor(method: HttpMethod, uri: Windows.Foundation.Uri);

        close(): void;

        content: IHttpContent;

        /**
        The request's headers. NOTE: Do not attempt to change these headers, instead use this request.content.headers.
        */
        headers: HttpHeaderCollection;
        method: HttpMethod;
        properties: Windows.Foundation.Collections.IMap<string, Object>;
        requestUri: Windows.Foundation.Uri;
    }

    export class HttpResponseMessage implements HttpMessage
    {
        constructor(statusCode: number);

        close(): void;

        /**
        Throws an exception if the response status code did not indicate success.
        */
        ensureSuccessStatusCode(): void;

        content: any;

        /**
        The response's headers.
        */
        headers: HttpHeaderCollection;

        properties: Windows.Foundation.Collections.IMap<string, Object>;
        isSuccessStatusCode: boolean;
        reasonPhrase: string;
        requestUri: Windows.Foundation.Uri;
        requestMessage: HttpRequestMessage;
        source: HttpResponseMessageSource;
        statusCode: number;
    }

    export class HttpStringContent implements IHttpContent
    {
        constructor(data: string);
        constructor(data: string, encoding: Windows.Storage.Streams.UnicodeEncoding);
        constructor(data: string, encoding: Windows.Storage.Streams.UnicodeEncoding, mediaType: string);

        headers: HttpHeaderCollection;
    }

    export class HttpClient
    {
        sendRequestAsync<T>(message: HttpRequestMessage): Windows.Foundation.IAsyncOperationWithProgress<HttpResponseMessage, HttpProgress>;
        postAsync<T>(uri: Windows.Foundation.Uri, content: IHttpContent): WinJS.Promise<T>;
    }
}