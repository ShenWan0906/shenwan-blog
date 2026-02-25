// src/constants/xiaohongshu.ts

export interface RedPost {
    title: string;
    description: string; // 列表页简短描述
    content: string[];   // 详情页完整正文（每段一句话）
    cover: string;       
    link: string;        
    likes: string;       
    date: string;
  }
  
  export const redPosts: RedPost[] = [
    {
      title: "可能猫猫也有烦恼吧",
      description: "可能猫猫也有烦恼吧",
      content: [
        "可能猫猫也有烦恼吧"
      ],
      cover: "/public/redbookimages/cat.jpg",
      link: "https://www.xiaohongshu.com/explore/69667897000000000e03db52?xsec_token=AB5pcn3QWIsLxFDN4i5tGvLu2Y7qWbEyhgSFVyT3L94I0=&xsec_source=pc_user",
      likes: "1.5w",
      date: "2026-01-14"
    },
    {
      title: "喵咪界的霸总原来长这样啊啊啊啊",
      description: "喵咪界的霸总原来长这样啊啊啊啊",
      content: [
        "喵咪界的霸总原来长这样啊啊啊啊"
      ],
      cover: "/public/redbookimages/cat2.png",
      link: "https://www.xiaohongshu.com/explore/69593a99000000001e00741b?xsec_token=ABnDeVvx1DB2jEY_PP4hIKrTQDWW9oo0xlM1yy4qkM8oY=&xsec_source=pc_user",
      likes: "768",
      date: "2026-01-03"
    }
  ];