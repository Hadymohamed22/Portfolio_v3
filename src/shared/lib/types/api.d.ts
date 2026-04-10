type SuccessResponse<T> = {
  data: T;
  error?: never;
};

type ErrorResponse = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
  };
};

type APIResponse<T> = SuccessResponse<T> | ErrorResponse;
