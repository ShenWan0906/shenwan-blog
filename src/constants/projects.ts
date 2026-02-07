// src/constants/projects.ts

export interface Project {
  title: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  image: string; // 如果有图片url，优先显示图片
  link?: string;

  // 👇 新增视觉控制字段
  style?: {
    gradient: string; // Tailwind 渐变类名
    icon: string; // Iconify 图标名称
  };
}

// 🎨 渐变色池 (Vercel/Stripe 风格)
const GRADIENTS = [
  "from-cyan-400 via-blue-500 to-indigo-600", // 科技蓝
  "from-violet-500 via-purple-500 to-fuchsia-600", // 赛博紫
  "from-emerald-400 via-teal-500 to-cyan-600", // 医疗绿
  "from-amber-400 via-orange-500 to-rose-500", // 活力橙
  "from-pink-500 via-rose-500 to-red-600", // 热情红
  "from-gray-600 via-gray-800 to-black", // 深邃黑
];

// 🧩 图标池 (通用抽象图标)
const ICONS = [
  "material-symbols:code-blocks-rounded", // 代码块
  "material-symbols:hub-rounded", // 连接/Hub
  "material-symbols:api-rounded", // API
  "material-symbols:widgets-rounded", // 组件
  "material-symbols:dashboard-rounded", // 仪表盘
  "material-symbols:memory-rounded", // 芯片/内存
];

// 辅助函数：获取随机样式 (如果不想手动指定，就用这个)
function getRandomStyle() {
  const gradient = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
  const icon = ICONS[Math.floor(Math.random() * ICONS.length)];
  return { gradient, icon };
}

// 📂 项目数据
export const projects: Project[] = [
  {
    title: "某市智慧医疗综合管理平台",
    description:
      "基于微服务架构的医院后勤一体化管理系统，实现了对全院设备的全生命周期管理。",
    role: "项目经理 & 架构师",
    year: "2024",
    tags: ["Java", "Spring Cloud", "Vue3", "PMP"],
    image: "", // 留空则显示渐变
    link: "#",
    // 👇 在这里直接控制样式 (你可以手动指定，也可以调用 getRandomStyle)
    style: {
      gradient: "from-emerald-400 via-teal-500 to-cyan-600", // 手动指定个医疗绿
      icon: "material-symbols:monitor-heart-rounded", // 手动指定个心电图
    },
  },
  {
    title: "智能楼宇IoT监控中台",
    description:
      "接入 50,000+ 传感器点位，通过 MQTT 协议实时采集能耗与环境数据，并进行可视化展示。",
    role: "技术主管",
    year: "2023",
    tags: ["IoT", "MQTT", ".NET Core", "PostgreSQL"],
    image: "",
    link: "#",
    // 👇 使用随机生成 (每次构建时可能会变，但在SSG中是固定的)
    style: getRandomStyle(),
  },
  {
    title: "企业级统一工单系统",
    description:
      "重构旧版工单流程，设计了通用的流程引擎，支持自定义表单与跨部门协作。",
    role: "核心开发",
    year: "2025",
    tags: ["React", "Node.js", "Docker"],
    image: "",
    link: "#",
    // 👇 再来一个随机，或者你可以从上面的 GRADIENTS 数组里挑一个喜欢的写死
    style: getRandomStyle(),
  },
];
