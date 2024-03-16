export enum HTTP_STATUS_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  OK = 200,
  CREATED = 201,
  UPDATED = 200,
  CONFLICT = 409
}

export enum AUTH_MESSAGE {
  USER_ALREADY_EXISTS = 'User already exists',
  USER_LOGGED_IN = 'User logged in',
  USER_LOGGED_OUT = 'Logged out successfully'
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login'
}

export interface IUser {
  name: string | null
}

export enum LOCAL_STORAGE_KEYS {
  TOKEN = 'token'
}
