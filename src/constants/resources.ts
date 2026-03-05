// src/config/resources.ts

export interface ResourceItem {
  title: string;
  desc: string;
  tags: string[];
  // 核心变更：定义资源类型
  type: 'public' | 'wechat'; 
  
  // 公开资源专有字段
  link?: string; 
  code?: string; 
  
  // 微信引流资源专有字段
  keyword?: string; 
}

export interface ResourceSection {
  category: string;
  items: ResourceItem[];
}

export const resourceData: ResourceSection[] = [
  {
    category: "项目管理实战",
    items: [
      {
        title: "项目管理实用工具包",
        desc: "包含项目管理十大模板和项目经理常用工具表格。",
        tags: ["项目管理", "模板"],
        type: 'public', // 👈 这是直接公开的
        link: "https://pan.baidu.com/s/1Gi1xwQzPgcADtrUmzrOuFQ",
        code: "uji2"
      },
      {
        title: "PPT工作总结130套",
        desc: "极简风格，专治各种年终总结、项目复盘、成果汇报。",
        tags: ["PPT", "汇报"],
        type: 'public',
        link: "https://pan.baidu.com/s/18vUyPGaaQSRxwpKKX2dagw",
        code: "mu9k"
      }
    ]
  },
  {
    category: "认证与考试备考",
    items: [
      {
        title: "高项备考冲刺资料包",
        desc: "历年真题解析、十大管理领域计算题公式汇总及记忆口诀。",
        tags: ["高项", "备考", "软考"],
        type: 'wechat', // 👈 核心：这是一个需要公众号引流的资源
        keyword: "备考资源" // 对应的回复关键字
      }
    ]
  }
];