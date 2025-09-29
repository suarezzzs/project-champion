import { HttpResponse } from "../models/http-response-model";

export const ok = (data:any): HttpResponse => ({
    statusCode: 200,
    body: data,
});

export const noContent = (data:any): HttpResponse => {
    return {
        statusCode: 204,
        body: data,
    }
};

export const badRequest = (data: any): HttpResponse => {
    return {
        statusCode: 400,
        body: data,
    };
};

export const notFound = (data: any): HttpResponse => {
    return {
        statusCode: 404,
        body: data,
    };
};

export const created = (data: any): HttpResponse => ({
    statusCode: 201,
    body: data,
});
