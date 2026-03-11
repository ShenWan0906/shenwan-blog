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
    title: "个人数字化品牌与AI博客系统",
    description: "基于 Astro 和 Tailwind CSS 构建的 Bento 风格个人网站。集成了公众号、小程序等全网社交矩阵，并内置私有知识库 AI 助手，提供智能问答体验。",
    role: "独立开发者 | 站长",
    year: "2026",
    tags: ["Astro", "Tailwind CSS", "AI Agent", "React", "SSG"],
    image: "/images/demo-banner.png",
    details: {
      background: "灵感来源于 bento.me，旨在打造一个聚合个人技术沉淀与社交影响力的数字化名片。不仅是博客，更是连接微信生态的枢纽，并通过 AI 解决传统博客检索难的问题。",
      tech: [
        "核心框架：Astro (SSG) + React",
        "样式体系：Tailwind CSS + Bento Grid 布局",
        "AI 赋能：集成 LLM 与向量检索技术",
        "部署运维：Vercel + CI/CD"
      ],
      modules: [
        "Bento 社交聚合：一站式展示全网联系方式。",
        "AI 知识库助手：基于博客内容训练的智能客服。",
        "沉浸式阅读体验：深色模式自适应与极致转场。"
      ],
      responsibility: [
        "负责从 0 到 1 的全栈开发与 UI 设计。",
        "训练私有知识库模型，提升 AI 回答相关性。",
        "打通微信生态，实现私域流量沉淀。"
      ],
      // ✨ 站长视角的量化成果
      stats: [
        { label: "Lighthouse评分", value: "98+" },
        { label: "服务器成本", value: "$0" },
        { label: "响应时间", value: "<1s" },
        { label: "AI准确率", value: "95%" }
      ],
      metrics: [
        { name: "首屏加载速度优化", width: "90%", val: "+90%" },
        { name: "静态资源体积缩减", width: "75%", val: "-75%" },
        { name: "SEO 流量自然增长", width: "100%", val: "2x" }
      ],
      results: [
        "实现了完全零服务器成本的高可用自动化部署。",
        "Lighthouse 性能跑分近乎满分，带来极致的秒开体验。",
        "AI 助手能够精准基于过往百篇博文进行知识提取与问答交互。"
      ]
    }
  },
  {
    title: "蓝焰助手 - AI Agent 调度中台",
    description: "一个基于 Agent 架构的智能化中台系统。通过独立构建的会话管理中心，实现了大模型与企业私有工具的深度协同。",
    role: "核心开发者 | 模块设计",
    year: "2026",
    tags: ["AI助手", "AI Agent", "Dify", "SqlBot", "Spring Cloud"],
    image: "/images/blue-flame-dashboard.png",
    details: {
      background: "解决企业级 AI 应用在复杂业务场景下的“记忆断层”与“权限失控”问题。构建独立会话层，将大模型推理与底层执行解耦。",
      tech: [
        "核心框架：Spring Cloud + Nacos + Redis",
        "Agent 能力：Dify 工作流 + MCP 协议 + SqlBot",
        "安全治理：OAuth2.0/OIDC + RBAC 权限裁决",
        "链路追踪：Prometheus + Grafana"
      ],
      modules: [
        "会话生命周期管理：闭环管理会话状态。",
        "上下文工程：滑动窗口与向量库结合的偏好召回。",
        "零信任安全网关：AI 结果后置审查与治理。"
      ],
      responsibility: [
        "负责 Session Center 核心研发，打通数据流向。",
        "实现用户全局记忆库与意图追踪逻辑。",
        "设计 MCP Server 身份识别与凭证安全隔离方案。"
      ],
      // ✨ AI 架构视角的量化成果
      stats: [
        { label: "意图命中率", value: "92%" },
        { label: "拦截越权", value: "100%" },
        { label: "多端支持", value: "3 端" },
        { label: "并发承载", value: "10k+" }
      ],
      metrics: [
        { name: "Agent 响应延迟降低", width: "65%", val: "-65%" },
        { name: "多轮对话连贯性提升", width: "85%", val: "+85%" },
        { name: "敏感数据脱敏率", width: "100%", val: "100%" }
      ],
      results: [
        "成功解耦大模型推理与底层业务执行，系统架构具备极高扩展性。",
        "Session Center 稳定支撑了日均万级的多端智能对话流转。",
        "构建了严密的零信任安全网关，数据越权与敏感词拦截率达 100%。"
      ]
    }
  },
  {
    title: "海外百万级HES物联网中台",
    description: "面向海外市场的全球化IoT平台，基于JetLinks二次开发。核心负责多语言动态配置中心与千万级GIS地图中台建设。",
    role: "后端开发",
    year: "2025",
    tags: ["Java", "JetLinks", "IoT", "Big Data", "GIS"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Global+IoT+HES",
    details: {
      background: "基于 JetLinks 物联网平台二次开发，服务海外项目。主要解决百万级设备接入后的数据可视化与多语言适配痛点。",
      tech: [
        "核心底座：JetLinks 物联网平台",
        "开发语言：Java",
        "关键技术：动态报表引擎, GIS 渲染, 国际化架构"
      ],
      modules: [
        "动态报表：复杂业务数据的自定义报表生成。",
        "配置中心：适配海外多国语言环境的动态切换。",
        "全球地图中台：百万级设备点位的 GIS 可视化。"
      ],
      responsibility: [
        "设计并实现多语言动态配置中心。",
        "攻克百万级地图数据渲染性能瓶颈。",
        "开发动态报表模块，支撑灵活的业务看板。"
      ],
      // ✨ 大数据与出海视角的量化成果
      stats: [
        { label: "接入设备", value: "100W+" },
        { label: "国际化支持", value: "多国" },
        { label: "渲染延迟", value: "<2s" },
        { label: "报表生成", value: "实时" }
      ],
      metrics: [
        { name: "GIS 渲染性能提升", width: "80%", val: "5x" },
        { name: "语言包热更生效速度", width: "95%", val: "秒级" },
        { name: "高并发吞吐量优化", width: "70%", val: "+70%" }
      ],
      results: [
        "成功攻克海量点位在 GIS 地图上的渲染瓶颈，加载时间从 10s+ 优化至 2s 内。",
        "多语言动态配置中心保障了系统在多个海外业务所在国的平滑无缝落地。",
        "支撑了百万级终端设备的稳定接入与海量运行数据的高效解析处理。"
      ]
    }
  },
  {
    title: "智能数字化运营平台",
    description: "主导公司级数字化转型战略落地，打破内部信息孤岛，全面拉通售前、生产(MES)、售后流程，实现传统业务的线上化与标准化。",
    role: "项目经理 | 负责人",
    year: "2024",
    tags: ["数字化转型", "MES", "IoT", "业务闭环", "PMP"],
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Digital+Transformation",
    details: {
      background: "聚焦传统企业向数字化的全面转型，主导从0到1构建运营平台。旨在打破部门壁垒，统筹生产制造、售前支持与售后运维，提升跨部门协作效率。",
      tech: [
        "架构驱动：前后端分离，建立 RESTful API 与 Swagger 标准。",
        "多端协同：PC 端、微信小程序与 PDA (.apk)。",
        "核心技术：Java + Spring Boot + MyBatis + 通用 Mapper。",
        "安全与鉴权：Spring Security + JWT 跨端认证。"
      ],
      modules: [
        "生产管理 (MES)：工单下发、材料追溯与全流程质检。",
        "售后与客服：工单闭环与远程智能水表调试。",
        "IoT 数据中枢：对接 NB-IoT 智能终端，异常告警分析。"
      ],
      responsibility: [
        "统筹项目全局：跨部门业务调研、实施方案制定及交付评审。",
        "重塑业务流程：深度梳理并优化『售前-生产-售后』全链路工单流转。",
        "深耕 IoT 数据：设计底层水务数据采集流，建立高可用告警机制。"
      ],
      // ✨ PM与架构设计视角的量化成果
      stats: [
        { label: "跨部门协同", value: "5+" },
        { label: "流程闭环", value: "100%" },
        { label: "终端覆盖", value: "3 端" },
        { label: "无纸化率", value: "95%" }
      ],
      metrics: [
        { name: "工单平均流转周期缩短", width: "60%", val: "-60%" },
        { name: "跨部门沟通成本降低", width: "50%", val: "-50%" },
        { name: "异常响应与排障速度", width: "80%", val: "+80%" }
      ],
      results: [
        "成功打破 5 个核心业务部门的数据孤岛，实现了 100% 的线上业务闭环管控。",
        "全面替代了传统的纸质化办公流程，整体生产调度与售后工单流转周期缩短 60%。",
        "构建的 IoT 数据流确保了 NB-IoT 设备的稳定接入，为管理层提供了高度可视化的决策支撑。"
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
      background: "围绕基层公共卫生服务场景建设体检信息系统。SaaS 多租户模式，需确保高并发下的系统稳定性与医疗数据的严格隔离。",
      tech: [
        "前端：Vue + Element UI",
        "后端：.NET 6 + EF Core + Dapper + RESTful",
        "数据库：Oracle + Redis 缓存",
        "运维部署：Docker + K8s + Jenkins"
      ],
      modules: [
        "妇幼保健：孕期检查、产后护理全周期追踪。",
        "两癌筛查：早期筛查、干预与数据上报。",
        "SaaS 租户管理：数据逻辑隔离与配置下发。"
      ],
      responsibility: [
        "主导婚检、孕检核心模块的接口开发与系统集成。",
        "优化底层数据访问逻辑，解决慢查询问题。",
        "支持系统在多个市级政府卫生单位的部署上线。"
      ],
      // ✨ 高并发与稳定性视角的量化成果
      stats: [
        { label: "覆盖租户", value: "多地" },
        { label: "接口响应", value: "<500ms" },
        { label: "数据安全", value: "100%" },
        { label: "高可用", value: "99.9%" }
      ],
      metrics: [
        { name: "主流程接口响应提升", width: "70%", val: "+70%" },
        { name: "慢查询平均耗时缩减", width: "80%", val: "-80%" },
        { name: "自动化部署时间降低", width: "60%", val: "-60%" }
      ],
      results: [
        "深度优化了 Dapper 与 Oracle 的访问逻辑，将核心体检流程接口的响应时间稳定压测至 500ms 内。",
        "设计的 SaaS 租户架构保证了不同医疗机构之间数据的绝对物理/逻辑隔离。",
        "系统成功在多个卫生机构平滑上线，持续支撑了日均数千人次的公卫体检数据流转无宕机。"
      ]
    }
  }
];