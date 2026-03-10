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
    title: "个人数字化品牌与AI博客系统",
    description:
      "基于 Astro 和 Tailwind CSS 构建的 Bento 风格个人网站。集成了公众号、小程序等全网社交矩阵，并内置私有知识库 AI 助手，提供智能问答体验。",
    role: "独立开发者 | 站长",
    year: "2026",
    tags: ["Astro", "Tailwind CSS", "AI Agent", "React", "SSG"],
    // 🎨 保持蓝白风格
    image: "/images/demo-banner.png",
    details: {
      background:
        "灵感来源于 bento.me，旨在打造一个聚合个人技术沉淀与社交影响力的数字化名片。不仅是博客，更是连接微信生态（公众号/小程序）的枢纽，并通过 AI 技术解决传统博客检索难的问题。",
      tech: [
        "核心框架：Astro (静态站点生成) + React (动态交互)",
        "样式体系：Tailwind CSS + Bento Grid 布局",
        "AI 赋能：集成 LLM 与向量检索技术，实现智能问答",
        "部署运维：Vercel + CI/CD 自动化部署",
      ],
      modules: [
        "Bento 社交聚合：一站式展示公众号、小程序、微信联系方式。",
        "AI 知识库助手：基于博客内容训练的智能客服，支持自然语言检索。",
        "沉浸式阅读体验：深色模式自适应、文章目录自动生成、流畅的转场动画。",
        "打赏与互动：集成了在线支付二维码与评论系统。",
      ],
      responsibility: [
        "负责从 0 到 1 的全栈开发，包括 UI 设计、前端实现与 AI 接口对接。",
        "训练私有知识库模型，提升 AI 回答的准确性与相关性。",
        "持续优化网站性能（Lighthouse 跑分 95+）与 SEO 策略。",
        "打通微信生态，实现私域流量的有效沉淀与转化。",
      ],
    },
  },
  {
    title: "蓝焰助手 - AI Agent 调度中台",
    description:
      "一个基于 Agent 架构的智能化中台系统。通过独立构建的会话管理中心，实现了大模型（LLM）与企业私有工具（MCP/SqlBot）的深度协同，支撑全设备端（PC/H5/小程序）的智能交互。",
    role: "核心开发者 | 模块设计",
    year: "2026",
    tags: ["AI助手", "AI Agent", "Dify", "SqlBot", "Spring Cloud"],
    // 🎨 建议使用仪表盘截图作为 Banner，突出“会话管理中心”的专业感
    image: "/images/blue-flame-dashboard.png",
    details: {
      background:
        "旨在解决企业级 AI 应用在复杂业务场景下的“记忆断层”与“权限失控”问题。项目通过构建独立的会话管理层，将大模型的推理能力与底层业务系统的执行能力（Action）解耦，打造一个可审计、可感知、具备长期记忆的智能体集群。",
      tech: [
        "核心框架：基于 Spring Cloud 微服务架构，集成 Nacos 注册中心与 Redis 状态管理。",
        "Agent 能力：深度应用 Dify 工作流编排、MCP 标准协议及 SqlBot (Text-to-SQL) 技术。",
        "安全治理：实现基于 OAuth2.0 与 OIDC 的会话级鉴权，支持字段级脱敏与 RBAC/ABAC 权限裁决。",
        "链路追踪：全链路 TraceID 注入，实现从前端UI到后端微服务、再到外部工具调用的监控。",
      ],
      modules: [
        "会话生命周期管理：负责会话从初始化、活跃、闲置到异步归档的完整闭环管理。",
        "上下文工程：采用滑动窗口与摘要压缩技术，结合向量库实现用户长期偏好的精准召回。",
        "多端接入适配器：提供统一的 API 与 Iframe 嵌入方案，支持 PC 业务系统与移动端应用的快速接入 。",
        "零信任安全网关：内置双向权限握手机制，对 AI 输出结果进行后置审查与结果治理。",
      ],
      responsibility: [
        "负责会话管理中心（Session Center）核心模块的研发，打通Dify平台与业务执行层的数据流向 。",
        "实现用户全局记忆库与意图追踪逻辑，显著提升了多轮对话中 Agent 的响应准确度。",
        "参与设计 MCP Server 身份识别方案，确保“连接级凭证”与“执行级凭证”之间的安全隔离。",
        "参与DevOps流程下的组件自动化部署，并基于 Prometheus+Grafana 构建AI调用监控体系。",
      ],
    },
  },
  {
    title: "海外百万级HES物联网中台",
    description:
      "面向海外市场的全球化IoT平台，基于JetLinks二次开发。核心负责多语言动态配置中心与千万级GIS地图中台建设。",
    role: "后端开发",
    year: "2025",
    tags: ["Java", "JetLinks", "IoT", "Big Data", "GIS"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Global+IoT+HES",
    details: {
      background:
        "基于JetLinks物联网平台二次开发，服务海外项目。主要解决百万级设备接入后的数据可视化与多语言适配问题。",
      tech: [
        "核心底座：JetLinks 物联网平台",
        "开发语言：Java",
        "关键技术：动态报表引擎, GIS 地图服务, 多语言配置中心",
      ],
      modules: [
        "动态报表：支持复杂业务数据的自定义报表生成。",
        "多语言配置中心：适配海外多国语言环境的动态切换。",
        "全球地图中台：百万级设备点位的GIS可视化渲染。",
      ],
      responsibility: [
        "负责后端Java核心功能开发。",
        "设计并实现多语言动态配置中心。",
        "攻克百万级地图数据渲染性能瓶颈。",
        "开发动态报表模块，支持灵活的业务数据展示。",
      ],
    },
  },
  {
    title: "企业级数字化转型与运营",
    description:
      "统筹建设公司级数字化运营平台，集成MES与IoT数据，利用智能水表构建独居老人行为模型，实现智慧养老安全预警。",
    role: "项目经理 | 负责人",
    year: "2024",
    tags: ["Java", "Spring Boot", "IoT", "PMP", "MES"],
    // 🎨 蓝白风格：背景用 #eff6ff (Blue-50)，文字用 #3b82f6 (Blue-500)
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Digital+Operation",
    details: {
      background:
        "负责公司级数字化运营平台建设，解决内部信息孤岛与流程割裂问题。统筹协调生产、售前、售后等六大核心模块，推动业务线上化与标准化。",
      tech: [
        "架构：前后端分离 (Java + Spring Boot + MyBatis)",
        "终端：PC端 + 微信小程序 + 手持PDA (.apk)",
        "安全：Spring Security + JWT 认证授权",
        "工具：Lombok, Hutool, Swagger API文档",
      ],
      modules: [
        "智慧养老：基于智能水表数据构建用户画像，识别夜间用水异常，联动社区干预。",
        "生产管理 (MES)：工单管理、材料追溯、工序进度监控。",
        "售后服务：远程水表调试、报警事件闭环处理。",
        "统一可视化大屏：设备状态监控与GIS地图展示。",
      ],
      responsibility: [
        "负责与客户及业务部门的需求沟通与方案确认，制定实施方案。",
        "分阶段推进六大核心模块开发及集成，确保关键节点有序推进。",
        "梳理并优化内部售前-生产-售后业务流程，打通工单流转路径。",
        "设计NB-IoT水表数据采集与分析流程，建立异常告警机制。",
      ],
    },
  },
  {
    title: "区域妇幼保健与公卫SaaS平台",
    description:
      "基于微服务架构的多租户医疗SaaS系统，覆盖婚检、孕检及儿童保健全流程，支撑高并发医疗数据采集与共享。",
    role: "全栈开发 | 核心骨干",
    year: "2023",
    tags: [".NET 6", "Vue", "Microservices", "Oracle", "Docker"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Healthcare+SaaS",
    details: {
      background:
        "围绕基层公共卫生服务场景建设体检信息系统，覆盖妇幼保健全过程。系统为SaaS多租户模式，服务多地卫生部门。",
      tech: [
        "前端：Vue + Element UI",
        "后端：.NET 6 + EF Core + Dapper + RESTful API",
        "数据库：Oracle + Redis 缓存",
        "运维：GitLab + Docker + K8s + Jenkins",
      ],
      modules: [
        "妇幼保健：孕期检查、产后护理、儿童早期健康管理。",
        "家医签约：优化家庭医生服务接入。",
        "两癌筛查：助力早期筛查和干预数据管理。",
      ],
      responsibility: [
        "主导婚检、孕检、两癌筛查等核心模块的接口开发与系统集成。",
        "优化数据访问逻辑，主流程接口响应时间缩短至500ms。",
        "参与需求分析与系统设计，推动统一接口规范落地。",
        "配合测试与运维，支持系统在多个政府单位的部署上线。",
      ],
    },
  },
];
