import { MockMethod } from "vite-plugin-mock";

export default [
  // 用户
  {
    url: "/api/system/users",
    method: "get",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: {
          list: [
            {
              id: 10000,
              username: "admin",
              nickname: "管理员",
              sex: 1,
              avatar: null,
              mobile: "15888888888",
              email: null,
              status: 0,
              dept: {
                id: 103,
                name: "研发部门"
              }
            },
            {
              id: 10001,
              username: "pure",
              nickname: "pure",
              sex: 0,
              avatar: null,
              mobile: "15888888888",
              email: null,
              status: 0,
              dept: {
                id: 104,
                name: "市场部门"
              }
            },
            {
              id: 10002,
              username: "小姐姐",
              nickname: "girl",
              sex: 0,
              avatar: null,
              mobile: "15888888888",
              email: null,
              status: 0,
              dept: {
                id: 106,
                name: "财务部门"
              }
            },
            {
              id: 10002,
              username: "小哥哥",
              nickname: "boy",
              sex: 0,
              avatar: null,
              mobile: "15888888888",
              email: null,
              status: 0,
              dept: {
                id: 107,
                name: "运维部门"
              }
            }
          ],
          total: 4
        }
      };
    }
  },
  // 角色
  {
    url: "/api/system/roles",
    method: "get",
    response: () => {
      const list = [
        {
          id: 1,
          name: "超级管理员",
          code: "root",
          sort: 1,
          status: 1, // 状态 1 启用 0 停用
          createTime: 1605456000000,
          updateTime: 1684512000000
        },
        {
          id: 1,
          name: "系统管理员",
          code: "admin",
          sort: 2,
          status: 1, // 状态 1 启用 0 停用
          createTime: 1605456000000,
          updateTime: 1684512000000
        },
        {
          id: 2,
          name: "普通角色",
          code: "common",
          sort: 3,
          status: 1,
          createTime: 1605456000000,
          updateTime: 1684512000000
        }
      ];
      return {
        code: "00000",
        msg: "success",
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  },
  // 部门
  {
    url: "/api/system/depts",
    method: "get",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: [
          {
            id: 100,
            name: "杭州总公司",
            parentId: 0,
            treePath: "0",
            sort: 1,
            status: 1, // 状态 1 启用 0 停用
            createTime: 1605456000000
          },
          {
            id: 101,
            name: "郑州分公司",
            parentId: 100,
            treePath: "0,1",
            sort: 1,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 103,
            name: "研发部门",
            parentId: 101,
            treePath: "0,1",
            sort: 1,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 108,
            name: "市场部门",
            parentId: 102,
            sort: 1,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 102,
            name: "深圳分公司",
            parentId: 100,
            sort: 2,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 104,
            name: "市场部门",
            parentId: 101,
            sort: 2,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 109,
            name: "财务部门",
            parentId: 102,
            sort: 2,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 105,
            name: "测试部门",
            parentId: 101,
            sort: 3,
            status: 0,
            createTime: 1605456000000
          },
          {
            id: 106,
            name: "财务部门",
            parentId: 101,
            sort: 4,
            status: 1,
            createTime: 1605456000000
          },
          {
            id: 107,
            name: "运维部门",
            parentId: 101,
            sort: 5,
            status: 0,
            createTime: 1605456000000
          }
        ]
      };
    }
  }
] as MockMethod[];
