import { http } from "@/utils/http";

type Result = {
  code: string;
  msg: string;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/mock/getAsyncRoutes");
};
