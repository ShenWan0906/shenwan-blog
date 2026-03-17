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
    // 👇 新增的 UI 适配字段（全部设为可选 ? ，防止旧数据报错）
    results?: string[];
    stats?: { label: string; value: string }[];
    metrics?: { name: string; width: string; val: string }[];
  };
}

export const projects: Project[] = [
  {
    title: "ShenWan Studio｜AI驱动的个人数字化品牌系统",
    description:
      "一个从0到1构建的“内容产品化”系统，不只是博客，而是集内容沉淀、AI知识复用与SEO增长于一体的个人品牌中枢。通过架构重构与交互优化，实现了极致性能与长期内容价值沉淀。",
    role: "独立负责人｜架构设计｜产品设计｜全栈开发",
    year: "2026",
    tags: [
      "Astro (SSG)",
      "内容产品化",
      "AI知识库",
      "SEO优化",
      "View Transitions",
    ],
    image: "/images/demo-banner.png",

    details: {
      background:
        "传统博客存在内容沉淀但无法复用、SEO弱、用户停留时间低等问题。本项目的目标不是做一个展示型网站，而是构建一个具备“持续增长能力”的个人IP系统，让内容能够被结构化、被检索、被复用。",

      tech: [
        "核心架构：Astro 动态路由（SSG）+ Island Architecture",
        "交互体验：View Transitions + 轻量级无刷切换",
        "AI能力：基于向量检索的私有知识库问答",
        "部署体系：Vercel Edge + 自动化 CI/CD",
      ],

      modules: [
        "内容中枢：结构化博客 + 标签体系 + 阅读路径设计",
        "AI知识助手：基于历史内容的语义问答与知识复用",
        "社交分发系统：公众号/小程序/外链矩阵打通",
        "SEO增长引擎：静态页面自动生成与搜索优化",
      ],

      responsibility: [
        "从0到1完成产品设计、架构选型与全栈开发",
        "主导架构重构：从传统SPA迁移至SSG，解决SEO与性能瓶颈",
        "设计内容结构体系，使博客具备“产品化”能力而非单篇输出",
        "构建AI知识中枢，实现内容的长期复用与自动问答能力",
      ],

      stats: [
        { label: "Lighthouse评分", value: "98+" },
        { label: "服务器成本", value: "$0" },
        { label: "首屏响应", value: "<1s" },
        { label: "SEO流量提升", value: "2x" },
      ],

      metrics: [
        { name: "页面加载性能提升", width: "90%", val: "+90%" },
        { name: "SEO收录效率提升", width: "100%", val: "2x" },
        { name: "前端资源体积缩减", width: "75%", val: "-75%" },
      ],

      results: [
        "将博客从“内容展示工具”升级为“可持续增长的内容产品系统”",
        "通过SSG架构彻底解决SEO问题，实现自然流量显著提升",
        "AI知识库使历史内容具备复用价值，而非一次性消费",
        "实现零服务器成本下的高性能与高可用部署体系",
      ],
    },
  },
  {
    title: "AI Agent 智能客服｜企业级会话中枢系统",
    description:
      "基于Agent架构构建的企业级智能中台，通过引入独立会话层（Session Center），实现大模型推理与业务执行解耦，解决复杂场景下的上下文断裂与权限失控问题。",
    role: "核心开发者｜会话架构设计",
    year: "2026",
    tags: ["AI Agent", "会话架构", "Dify", "Spring Cloud", "零信任安全"],
    image: "/images/blue-flame-dashboard.png",

    details: {
      background:
        "在企业AI应用落地过程中，大模型常面临上下文丢失、多轮对话不连贯以及权限控制缺失的问题。本项目通过引入会话中枢层，构建一个可控、可扩展的Agent执行体系。",

      tech: [
        "核心架构：Spring Cloud + Nacos + Redis",
        "Agent编排：Dify 工作流 + MCP 协议 + SqlBot",
        "安全体系：OAuth2.0 / OIDC + RBAC 权限裁决",
        "可观测性：Prometheus + Grafana 链路监控",
      ],

      modules: [
        "Session Center：统一管理会话生命周期与上下文状态",
        "上下文工程：滑动窗口 + 向量检索实现语义记忆",
        "Agent执行引擎：任务编排与工具调用协调",
        "零信任安全网关：AI结果审查与权限控制",
      ],

      responsibility: [
        "设计并实现会话中枢（Session Center），解耦模型推理与业务执行",
        "构建用户全局记忆与意图追踪机制，提升多轮对话连贯性",
        "设计MCP Server身份隔离机制，确保多工具调用安全",
        "参与整体AI Agent架构设计与落地",
      ],

      stats: [
        { label: "意图命中率", value: "92%" },
        { label: "权限拦截", value: "100%" },
        { label: "并发承载", value: "10k+" },
        { label: "多端支持", value: "3端" },
      ],

      metrics: [
        { name: "多轮对话连贯性提升", width: "85%", val: "+85%" },
        { name: "Agent响应延迟降低", width: "65%", val: "-65%" },
        { name: "敏感数据拦截率", width: "100%", val: "100%" },
      ],

      results: [
        "通过引入会话中枢层，成功解决AI应用中的上下文断裂问题",
        "实现模型推理与业务执行解耦，系统具备高扩展性",
        "构建零信任安全机制，确保AI输出与数据调用的合规性",
        "稳定支撑万级并发对话场景",
      ],
    },
  },
  {
    title: "海外IoT物联网中台｜百万级设备与GIS可视化系统",
    description:
      "面向海外市场构建的全球化IoT平台，基于JetLinks二次开发，重点解决百万级设备接入后的数据可视化与多语言适配问题。",
    role: "核心开发者｜后端设计",
    year: "2025",
    tags: ["IoT", "JetLinks", "GIS", "大数据", "国际化"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Global+IoT+HES",

    details: {
      background:
        "随着设备规模增长至百万级，系统面临地图渲染性能瓶颈以及多语言环境下的配置复杂度问题，需要构建高性能与全球化适配能力。",

      tech: [
        "核心平台：JetLinks 物联网平台",
        "开发语言：Java",
        "关键能力：GIS渲染优化 + 动态报表引擎 + 国际化架构",
      ],

      modules: [
        "全球地图中台：百万级设备点位可视化",
        "多语言配置中心：支持多国家语言动态切换",
        "动态报表系统：复杂业务数据可视化分析",
      ],

      responsibility: [
        "设计并实现多语言动态配置中心，支持海外多区域部署",
        "优化GIS地图渲染性能，解决海量点位加载瓶颈",
        "开发动态报表模块，提升业务数据分析能力",
      ],

      stats: [
        { label: "接入设备", value: "100W+" },
        { label: "地图加载", value: "<2s" },
        { label: "国际化支持", value: "多国" },
        { label: "数据处理", value: "实时" },
      ],

      metrics: [
        { name: "GIS渲染性能提升", width: "80%", val: "5x" },
        { name: "语言切换响应速度", width: "95%", val: "秒级" },
        { name: "系统吞吐能力提升", width: "70%", val: "+70%" },
      ],

      results: [
        "将地图加载时间从10s+优化至2s以内，解决海量点位渲染瓶颈",
        "构建多语言动态配置体系，支撑多个国家业务落地",
        "实现百万级设备稳定接入与高并发数据处理能力",
      ],
    },
  },
  {
    title: "企业数字化运营平台｜跨部门业务闭环系统",
    description:
      "主导公司级数字化转型项目，从0到1构建统一运营平台，打通售前、生产、售后全流程，实现业务线上化与标准化。",
    role: "项目经理｜系统负责人",
    year: "2024",
    tags: ["数字化转型", "MES", "IoT", "业务流程", "PMP"],
    image:
      "https://placehold.co/800x450/3b82f6/ffffff?text=Digital+Transformation",

    details: {
      background:
        "传统业务流程高度依赖人工与线下沟通，存在信息孤岛与协同效率低的问题，需要构建统一平台实现业务闭环。",

      tech: [
        "后端架构：Spring Boot + MyBatis",
        "多端体系：PC + 小程序 + PDA",
        "认证体系：Spring Security + JWT",
        "IoT接入：NB-IoT设备数据流",
      ],

      modules: [
        "生产管理（MES）：工单与质检全流程管理",
        "售后系统：工单闭环与远程设备调试",
        "IoT数据中枢：设备数据采集与异常告警",
      ],

      responsibility: [
        "主导项目整体规划与跨部门需求协调",
        "重构业务流程，打通售前-生产-售后链路",
        "设计IoT数据流与告警机制",
        "推进多端系统落地与交付",
      ],

      stats: [
        { label: "协同部门", value: "5+" },
        { label: "流程闭环", value: "100%" },
        { label: "无纸化率", value: "95%" },
        { label: "终端支持", value: "3端" },
      ],

      metrics: [
        { name: "工单流转周期缩短", width: "60%", val: "-60%" },
        { name: "沟通成本降低", width: "50%", val: "-50%" },
        { name: "异常响应效率提升", width: "80%", val: "+80%" },
      ],

      results: [
        "打破多部门信息孤岛，实现全流程线上化闭环",
        "整体工单流转效率提升60%，显著降低沟通成本",
        "构建IoT数据中枢，为业务提供实时决策支撑",
      ],
    },
  },
  {
    title: "医疗公卫SaaS平台｜多租户高并发系统",
    description:
      "面向基层医疗机构构建的多租户SaaS系统，覆盖妇幼保健与公共卫生全流程，重点解决高并发与数据隔离问题。",
    role: "全栈开发｜核心骨干",
    year: "2023",
    tags: [".NET", "Vue", "SaaS", "Oracle", "高并发"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Healthcare+SaaS",

    details: {
      background:
        "医疗系统需满足高并发数据处理与严格的数据隔离要求，同时支持多地区部署与复杂业务流程。",

      tech: [
        "前端：Vue + Element UI",
        "后端：.NET 6 + Dapper + EF Core",
        "数据库：Oracle + Redis",
        "部署：Docker + K8s + Jenkins",
      ],

      modules: [
        "妇幼保健系统：孕期与产后全流程管理",
        "两癌筛查：数据采集与分析",
        "SaaS租户系统：多机构数据隔离",
      ],

      responsibility: [
        "负责核心业务模块开发与系统集成",
        "优化数据库访问逻辑，解决慢查询问题",
        "参与系统部署与多地区上线支持",
      ],

      stats: [
        { label: "系统可用性", value: "99.9%" },
        { label: "接口响应", value: "<500ms" },
        { label: "租户支持", value: "多地" },
        { label: "数据安全", value: "100%" },
      ],

      metrics: [
        { name: "接口性能提升", width: "70%", val: "+70%" },
        { name: "慢查询优化", width: "80%", val: "-80%" },
        { name: "部署效率提升", width: "60%", val: "+60%" },
      ],

      results: [
        "核心接口响应稳定在500ms以内，支撑高并发业务场景",
        "实现多租户数据隔离，满足医疗合规要求",
        "系统在多个地区稳定运行，无重大故障",
      ],
    },
  },
];
