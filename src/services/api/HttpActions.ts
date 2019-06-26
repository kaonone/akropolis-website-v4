import Axios, { AxiosPromise, AxiosRequestConfig, AxiosInstance } from 'axios';
import getEnvParams from 'core/getEnvParams';

type AsyncRequest<T> = AxiosPromise<T>;
type DomainType = 'baseApi' | 'passport' | 'data' | 'subscription';

interface IHttpActionParams {
  url: string;
  options?: AxiosRequestConfig;
  data?: any;
  domainType?: DomainType;
}

class HttpActions {
  private request: AxiosInstance;
  private baseURL = getEnvParams().apiUrl;

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      withCredentials: false,
      validateStatus: status => status <= 503,
    };

    this.request = Axios.create(config);
  }

  public get<T>(params: IHttpActionParams): AsyncRequest<T> {
    const { url, options, data } = params;
    return this.request.get(url, { ...options, params: data });
  }

  public post<T>(params: IHttpActionParams): AsyncRequest<T> {
    const { url, data, options } = params;
    return this.request.post(url, data, options);
  }

  public patch<T>(params: IHttpActionParams): AsyncRequest<T> {
    const { url, data, options } = params;
    return this.request.patch(url, data, options);
  }

  public del<T>(params: IHttpActionParams): AsyncRequest<T> {
    const { url, data, options } = params;
    return this.request.delete(url, { ...options, data });
  }

  public put<T>(params: IHttpActionParams): AsyncRequest<T> {
    const { url, data, options } = params;
    return this.request.put(url, data, options);
  }
}

export default HttpActions;
