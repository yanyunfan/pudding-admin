import { MockMethod } from "vite-plugin-mock";

export default [
  // 用户
  {
    url: "/users",
    method: "get",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: {
          list: [
            {
              username: "admin",
              nickname: "admin",
              remark: "管理员",
              deptId: 103,
              postIds: [1],
              mobile: "15888888888",
              sex: 0,
              id: 1,
              status: 0,
              createTime: 1605456000000,
              dept: {
                id: 103,
                name: "研发部门"
              }
            },
            {
              username: "pure",
              nickname: "pure",
              remark: "不要吓我",
              deptId: 104,
              postIds: [1],
              mobile: "15888888888",
              sex: 0,
              id: 100,
              status: 1,
              createTime: 1605456000000,
              dept: {
                id: 104,
                name: "市场部门"
              }
            },
            {
              username: "小姐姐",
              nickname: "girl",
              remark: null,
              deptId: 106,
              postIds: null,
              mobile: "15888888888",
              sex: 1,
              id: 103,
              status: 1,
              createTime: 1605456000000,
              dept: {
                id: 106,
                name: "财务部门"
              }
            },
            {
              username: "小哥哥",
              nickname: "boy",
              remark: null,
              deptId: 107,
              postIds: [],
              mobile: "15888888888",
              sex: 0,
              id: 104,
              status: 0,
              createTime: 1605456000000,
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
    url: "/roles",
    method: "get",
    response: () => {
      const list = [
        {
          createTime: 1605456000000, // 时间戳（毫秒ms）
          updateTime: 1684512000000,
          creator: "admin",
          id: 1,
          name: "超级管理员",
          code: "ADMIN",
          status: 1, // 状态 1 启用 0 停用
          remark: "超级管理员拥有最高权限"
        },
        {
          createTime: 1605456000000,
          updateTime: 1684512000000,
          creator: "admin",
          id: 2,
          name: "普通角色",
          code: "COMMON",
          status: 1,
          remark: "普通角色拥有部分权限"
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
    url: "/depts",
    method: "get",
    response: () => {
      return {
        code: "00000",
        msg: "success",
        data: [
          {
            name: "杭州总公司",
            parentId: 0,
            id: 100,
            sort: 0,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1, // 状态 1 启用 0 停用
            type: 1, // 1 公司 2 分公司 3 部门
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "郑州分公司",
            parentId: 100,
            id: 101,
            sort: 1,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 2,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "研发部门",
            parentId: 101,
            id: 103,
            sort: 1,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "市场部门",
            parentId: 102,
            id: 108,
            sort: 1,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "深圳分公司",
            parentId: 100,
            id: 102,
            sort: 2,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 2,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "市场部门",
            parentId: 101,
            id: 104,
            sort: 2,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "财务部门",
            parentId: 102,
            id: 109,
            sort: 2,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "测试部门",
            parentId: 101,
            id: 105,
            sort: 3,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 0,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "财务部门",
            parentId: 101,
            id: 106,
            sort: 4,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 1,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          },
          {
            name: "运维部门",
            parentId: 101,
            id: 107,
            sort: 5,
            phone: "15888888888",
            principal: "@cname()",
            email: "@email",
            status: 0,
            type: 3,
            createTime: 1605456000000,
            remark: "@cparagraph(1, 3)"
          }
        ]
      };
    }
  }
] as MockMethod[];
