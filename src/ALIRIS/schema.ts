export const Schema = z.object({
  系统: z.object({
    日期季节: z.string().prefault('深渊历117年4月，初春'),
    时段: z.string().prefault('早晨'),
    天气: z.string().prefault('晴'),
    当前区域: z.string().prefault('起始之森入口'),
    剧情进度: z.string().prefault('冒险初期，暂住翠风城旅店，尚未接取首个委托'),
  }),
  爱丽丝: z.object({
    Alice人格好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(60),
    Eris人格好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(40),
    当前人格: z.string().prefault('Alice'),
    冒险者等级: z.string().prefault('铜级'),
  }),
  主角: z.object({
    金钱: z.object({
      金币: z.coerce.number().transform(v => _.clamp(v, 0, 100000)).prefault(0),
      银币: z.coerce.number().transform(v => _.clamp(v, 0, 100000)).prefault(5),
      铜币: z.coerce.number().transform(v => _.clamp(v, 0, 100000)).prefault(0),
    }),
    体力: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    装备物资: z.record(z.string(), z.coerce.number()).prefault({}),
    房产: z.string().prefault('翠风城旅店「鹿角亭」的房间'),
    冒险者等级: z.string().prefault('铜级'),
  }),
});

export type Schema = z.output<typeof Schema>;
