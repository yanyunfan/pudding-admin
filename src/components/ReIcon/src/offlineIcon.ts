import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 * https://icon-sets.iconify.design/
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import HomeFilled from "@iconify-icons/ep/home-filled";
import InformationLine from "@iconify-icons/ri/information-line";
import Setting from "@iconify-icons/ri/settings-3-line";
import FlUser from "@iconify-icons/ri/admin-line";
import Role from "@iconify-icons/ri/admin-fill";
import Menu from "@iconify-icons/ep/menu";
import Dept from "@iconify-icons/ri/git-branch-line";
import Monitor from "@iconify-icons/ep/monitor";
import Collection from "@iconify-icons/ep/collection";
import Edit from "@iconify-icons/ep/edit";
addIcon("homeFilled", HomeFilled);
addIcon("informationLine", InformationLine);
addIcon("setting", Setting);
addIcon("flUser", FlUser);
addIcon("role", Role);
addIcon("menu", Menu);
addIcon("dept", Dept);
addIcon("monitor", Monitor);
addIcon("collection", Collection);
addIcon("edit", Edit);
