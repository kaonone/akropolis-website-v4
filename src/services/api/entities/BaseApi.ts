import { AxiosResponse } from 'axios';

import { isErrorStatus, ApiError } from 'shared/helpers/errors';

import HttpActions from '../HttpActions';

export type Converter<R, T> = (resp: R) => T;

class BaseApi {
  protected actions: HttpActions;

  constructor(actions: HttpActions) {
    this.actions = actions;
  }

  protected handleResponse<ResponseData, Result, ErrorPayload>(
    response: AxiosResponse,
    converter?: Converter<ResponseData, Result> | null,
    errorConverter?: (x: ErrorPayload) => any,
  ): Result;
  protected handleResponse<ResponseData, Result, ErrorPayload>(
    response: AxiosResponse,
    converter?: Converter<ResponseData, Result> | null,
    errorConverter?: (x: ErrorPayload) => any,
  ): Result | void {
    if (isErrorStatus(response.status)) {
      const request = response.request;
      const apiError = new ApiError({
        data: response.data,
        status: response.statusText,
        code: response.status,
        headers: response.headers,
        request,
        response: request.response,
        payload: errorConverter && response.data.error && errorConverter(response.data.error),
      });
      throw apiError;
    }
    if (converter) {
      return converter(response.data as ResponseData);
    }
  }

}

export default BaseApi;