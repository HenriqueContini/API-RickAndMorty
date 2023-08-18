import InfoResponse from "./infoResponse";

type ApiResponse<DataType> = {
  error: boolean;
  errorMessage?: string;
  data?: DataType;
  info?: InfoResponse;
};

export default ApiResponse;
