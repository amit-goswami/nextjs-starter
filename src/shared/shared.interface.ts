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
  USER_LOGGED_IN = 'User logged in successfully',
  USER_LOGGED_OUT = 'User logged out successfully'
}

export const ROUTES = {
  HOME: '/',
  USER: '/user',
  TREK_PLANNER: '/trek-planner',
  ALL_TREKS: '/all-treks'
}

export enum MOBILE_VERIFICATION_STEPS {
  ENTER_MOBILE_NUMBER = 0,
  ENTER_OTP = 1
}

export enum LOCAL_STORAGE_KEYS {
  USER_DETAILS = 'userDetails',
  CURRENT_VERIFICATION_STEP = 'currentVerificationStep',
  MOBILE_NUMBER = 'mobileNumber'
}

export enum QUERY_STATUS {
  PENDING = 'pending',
  RESOLVED = 'resolved'
}

export enum ADMIN {
  EMAIL = 'admin@gmail.com'
}

export enum USER_ROLES {
  USER = 'user',
  DRIVER = 'driver',
  GUIDE = 'guide'
}

export enum BREAD_CRUMB {
  HOME = '/'
}
