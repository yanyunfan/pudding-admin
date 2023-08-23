// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

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

const frameRouter = {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "外部页面",
    rank: 10
  },
  children: [
    {
      path: "/external1",
      name: "https://yiming_chang.gitee.io/pure-admin-doc",
      meta: {
        title: "pure-admin-doc",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/external2",
      name: "https://element-plus.org/zh-CN/",
      meta: {
        title: "Element Plus",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/external3",
      name: "https://cn.vuejs.org/",
      meta: {
        title: "Vue3",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/pure",
      name: "FramePure",
      meta: {
        title: "pure-admin-doc（内嵌）",
        frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/ep",
      name: "FrameEp",
      meta: {
        title: "Element Plus（内嵌）",
        frameSrc: "https://element-plus.org/zh-CN/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue3",
      name: "FrameVue",
      meta: {
        title: "Vue3（内嵌）",
        frameSrc: "https://cn.vuejs.org/",
        roles: ["admin", "common"]
      }
    }
  ]
};

export default [
  {
    url: "/mock/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: [systemRouter, frameRouter]
      };
    }
  }
] as MockMethod[];
