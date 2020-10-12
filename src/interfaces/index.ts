export interface IUser {
  firstName: string;
  lastName: string;
  clientId: string;
}

export interface IRequest {
  data: string;
}

export interface IResponse {
  statusCode: number;
  data: IUser;
}
