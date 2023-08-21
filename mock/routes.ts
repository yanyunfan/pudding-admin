// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const systemRouter = {
  path: "/system",
  meta: {
    icon: "setting",
    title: "系统管理",
    rank: 12
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: "用户管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: "角色管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: "部门管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/menu/index",
      name: "Menu",
      meta: {
        icon: "menu",
        title: "菜单管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dict/index",
      name: "Dict",
      meta: {
        icon: "collection",
        title: "字典管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/online/index",
      name: "Online",
      meta: {
        icon: "monitor",
        title: "在线用户",
        roles: ["admin"]
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
        code: "00000",
        msg: "success",
        data: [systemRouter]
      };
    }
  }
] as MockMethod[];
