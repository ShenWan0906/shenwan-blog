// src/constants/projects.ts

export interface Project {
  title: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  image: string;
  details?: {
    background: string;
    tech: string[];
    modules: string[];
    responsibility: string[];
  };
}

export const projects: Project[] = [
  {
    title: "企业级数字化运营与智慧养老平台",
    description: "统筹建设公司级数字化运营平台，集成MES与IoT数据，利用智能水表构建独居老人行为模型，实现智慧养老安全预警。",
    role: "项目经理 | 负责人",
    year: "2024",
    tags: ["Java", "Spring Boot", "IoT", "PMP", "MES"],
    // 🎨 蓝白风格：背景用 #eff6ff (Blue-50)，文字用 #3b82f6 (Blue-500)
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Digital+Operation",
    details: {
      background: "负责公司级数字化运营平台建设，解决内部信息孤岛与流程割裂问题。统筹协调生产、售前、售后等六大核心模块，推动业务线上化与标准化。",
      tech: [
        "架构：前后端分离 (Java + Spring Boot + MyBatis)",
        "终端：PC端 + 微信小程序 + 手持PDA (.apk)",
        "安全：Spring Security + JWT 认证授权",
        "工具：Lombok, Hutool, Swagger API文档"
      ],
      modules: [
        "智慧养老：基于智能水表数据构建用户画像，识别夜间用水异常，联动社区干预。",
        "生产管理 (MES)：工单管理、材料追溯、工序进度监控。",
        "售后服务：远程水表调试、报警事件闭环处理。",
        "统一可视化大屏：设备状态监控与GIS地图展示。"
      ],
      responsibility: [
        "负责与客户及业务部门的需求沟通与方案确认，制定实施方案。",
        "分阶段推进六大核心模块开发及集成，确保关键节点有序推进。",
        "梳理并优化内部售前-生产-售后业务流程，打通工单流转路径。",
        "设计NB-IoT水表数据采集与分析流程，建立异常告警机制。"
      ]
    }
  },
  {
    title: "区域妇幼保健与公卫SaaS平台",
    description: "基于微服务架构的多租户医疗SaaS系统，覆盖婚检、孕检及儿童保健全流程，支撑高并发医疗数据采集与共享。",
    role: "全栈开发 | 核心骨干",
    year: "2023",
    tags: [".NET 6", "Vue", "Microservices", "Oracle", "Docker"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Healthcare+SaaS",
    details: {
      background: "围绕基层公共卫生服务场景建设体检信息系统，覆盖妇幼保健全过程。系统为SaaS多租户模式，服务多地卫生部门。",
      tech: [
        "前端：Vue + Element UI",
        "后端：.NET 6 + EF Core + Dapper + RESTful API",
        "数据库：Oracle + Redis 缓存",
        "运维：GitLab + Docker + K8s + Jenkins"
      ],
      modules: [
        "妇幼保健：孕期检查、产后护理、儿童早期健康管理。",
        "家医签约：优化家庭医生服务接入。",
        "两癌筛查：助力早期筛查和干预数据管理。"
      ],
      responsibility: [
        "主导婚检、孕检、两癌筛查等核心模块的接口开发与系统集成。",
        "优化数据访问逻辑，主流程接口响应时间缩短至500ms。",
        "参与需求分析与系统设计，推动统一接口规范落地。",
        "配合测试与运维，支持系统在多个政府单位的部署上线。"
      ]
    }
  },
  {
    title: "海外千万级HES物联网中台",
    description: "面向海外市场的全球化IoT平台，基于JetLinks二次开发。核心负责多语言动态配置中心与千万级GIS地图中台建设。",
    role: "后端开发",
    year: "2025",
    tags: ["Java", "JetLinks", "IoT", "Big Data", "GIS"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Global+IoT+HES",
    details: {
      background: "基于JetLinks物联网平台二次开发，服务海外项目。主要解决千万级设备接入后的数据可视化与多语言适配问题。",
      tech: [
        "核心底座：JetLinks 物联网平台",
        "开发语言：Java",
        "关键技术：动态报表引擎, GIS 地图服务, 多语言配置中心"
      ],
      modules: [
        "动态报表：支持复杂业务数据的自定义报表生成。",
        "多语言配置中心：适配海外多国语言环境的动态切换。",
        "全球地图中台：千万级设备点位的GIS可视化渲染。"
      ],
      responsibility: [
        "负责后端Java核心功能开发。",
        "设计并实现多语言动态配置中心。",
        "攻克千万级地图数据渲染性能瓶颈。",
        "开发动态报表模块，支持灵活的业务数据展示。"
      ]
    }
  },
];