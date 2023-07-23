import { http } from "@/utils/http";

type Result = {
  code: string;
  msg: string;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

type ResultDept = {
  code: string;
  msg: string;
  data?: Array<any>;
};

/** 获取用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<Result>("get", "/api/system/users", { data });
};

/** 获取角色管理列表 */
export const getRoleList = (data?: object) => {
  return http.request<Result>("get", "/api/system/roles", { data });
};

/** 获取部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<ResultDept>("get", "/api/system/depts", { data });
};

/** 获取菜单列表 */
export const getMenuList = (data?: object) => {
  return http.request<ResultDept>("get", "/api/system/menus", { data });
};

/** 获取字典列表 */
export const getDictList = (data?: object) => {
  return http.request<ResultDept>("get", "/api/system/dicts/types", { data });
};

/** 获取在线用户列表 */
export const getOnlineUserList = (data?: object) => {
  return http.request<ResultDept>("get", "/api/system/users/online", { data });
};
