// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/auth/login",
    method: "post",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: {
          username: "admin",
          // 一个用户可能有多个角色
          roles: ["admin"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
          expires: "2023/10/30 00:00:00"
        }
      };
    }
  },
  {
    url: "/refreshToken",
    method: "post",
    response: ({ body }) => {
      if (body.refreshToken) {
        return {
          code: "00000",
          msg: "success",
          data: {
            accessToken: "eyJhbGciOiJIUzUxMiJ9.newAdmin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.newAdminRefresh",
            // `expires`选择这种日期格式是为了方便调试，后端直接设置时间戳或许更方便（每次都应该递增）。如果后端返回的是时间戳格式，前端开发请来到这个目录`src/utils/auth.ts`，把第`38`行的代码换成expires = data.expires即可。
            expires: "2023/10/30 23:59:59"
          }
        };
      } else {
        return {
          code: "B0001",
          msg: "failed",
          data: {}
        };
      }
    }
  }
] as MockMethod[];
