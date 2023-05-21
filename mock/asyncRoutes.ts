// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";
import { system } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "ADMIN"、"COMMON"
 * ADMIN：管理员角色
 * COMMON：普通角色
 */
const systemRouter = {
  path: "/system",
  meta: {
    icon: "setting",
    title: "系统管理",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: "用户管理",
        roles: ["ADMIN"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: "角色管理",
        roles: ["ADMIN"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: "部门管理",
        roles: ["ADMIN"]
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["ADMIN", "COMMON"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        roles: ["ADMIN", "COMMON"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [systemRouter, permissionRouter]
      };
    }
  }
] as MockMethod[];
