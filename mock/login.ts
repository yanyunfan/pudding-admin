// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: {
          username: "admin",
          // 一个用户可能有多个角色
          roles: ["ADMIN"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
          expires: "2023/10/30 00:00:00"
        }
      };
    }
  }
] as MockMethod[];
