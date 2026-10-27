/* 生物像素 sprite 素材库 —— 严格遵循 docs/images/美术素材/生物素材 风格：
   - 狮子鱼 / 紫珊瑚 / 鬼龙 / 黄海葵 四张参考图的共同语言：
     深海军蓝粗描边（o）、高饱和配色、 Cream 色尖端高光（w）、
     鱼身斑马纹/鳍条斑带、珊瑚生于灰岩底座（r 基色/q 暗/k 亮/m 苔/a 点缀）
   - 每个字符 = 1 像素；"." 为透明；图案朝右绘制（尾在左、头在右），反向由渲染层镜像
   - 统一眼睛画法：h 白眼高光 + i 蓝虹膜 + e 深色瞳孔 */

export type SpritePattern = string[]
export type Palette = Record<string, string>

export interface Sprite {
  pattern: SpritePattern
  palette: Palette
}

/* 通用眼睛与描边色（各 sprite 引用同款） */
const EYE = { h: "#ffffff", i: "#4a8ae8", e: "#10102a" }
const OUTLINE = { o: "#16163a" }
const ROCK_BASE = { r: "#8a94a4", q: "#5a6474", k: "#b8c2cc", m: "#58a838", a: "#f09830" }

/* ── 风暴鱼群 ─────────────────────────────── */

/** 沙丁鱼（银白 + 背部深色斑带） */
export const SARDINE: Sprite = {
  pattern: [
    "......ooooooooooo.......",
    "....ooSSSSSSSSSoo.......",
    "...oSSSdSSSdSSSSSoo.....",
    "..oSSSSSSSSSSSSSSSSSo...",
    ".oSSSSSSSSSSSSSSSSSSSo..",
    "ooSShieSSSSSSSSSSSSSSSo.",
    "ooSSSSSSSSSSSSSSSSSSSSo.",
    ".oSSSdSSSdSSSSSSSSSSo...",
    "..oSSSSSwwwwwwSSSSSo....",
    "...oSSwwwwwwwwwwSSo.....",
    "....oooooooooooooo......",
    "......oo....oo..........",
  ],
  palette: { ...OUTLINE, ...EYE, S: "#b0d4de", d: "#6a9cae", w: "#f0f8fa" },
}

/** 杰克鱼（青绿体侧 + 斑带 + 叉尾） */
export const JACK: Sprite = {
  pattern: [
    ".........ooooooooooo..........",
    ".......ooJJJJJJJJJJo..........",
    ".....ooJJJJJJJJJJJJJoo........",
    "....oJJdJJJdJJJJJJJJJo........",
    "...oJJJJJJJJJJJJJJJJJJJo......",
    "oooJJwhieJJJJJJJJJJJJJJJo.....",
    "oooJJJJJJJJJJJJJJJJJJJJo......",
    "...oJJdJJJdJJJJJJJJJJJo.......",
    "....oJJJJwwwwwwJJJJJo.........",
    ".....oJJwwwwwwwwJJJJo.........",
    "......oooooooooooooo..........",
    ".......oo......oo.............",
  ],
  palette: { ...OUTLINE, ...EYE, J: "#3aa8b8", d: "#1e6a78", w: "#d8f0f4" },
}

/** 海狼梭鱼（修长、尖吻、上体斑带、深色口裂） */
export const BARRACUDA: Sprite = {
  pattern: [
    "....................oooooooooo.........",
    "..................ooCCCCCCCCCoo........",
    ".................ooCCCCCCCCCCCo........",
    "..oooooooooooooooCCdCCCdCCCCCCCCoo.....",
    ".oCCCCCCCCCCCCCCChieCCCCCCCCCCCCCm.....",
    "ooCCdCCCdCCCCCCCCCCCCCCCCCCCCCCCwo.....",
    ".ooooooooooooooCCCCCCCCCCCCCCCwo.......",
    "................ooooooooooooo..........",
    "...............CCC.....CCC.............",
  ],
  palette: { ...OUTLINE, ...EYE, C: "#9ab2c0", d: "#5a7a8c", w: "#e8f0f4", m: "#2a1420" },
}

/** 隆头鹦哥鱼（翠绿 + 橙色鳍斑 + 浅色喙） */
export const PARROTFISH: Sprite = {
  pattern: [
    "...........ogggggo...........",
    ".........oogggggggoo.........",
    "........ogggggggggggo........",
    ".......ogdgggdgggggggo.......",
    "......oggggggggggggggggo.....",
    ".....ogggggggggggaagggggo....",
    "....ogghiegggggggagggggggo...",
    "...ogggggggggggggaggggggggo..",
    "..ogdgggdggggggggggggggggggo.",
    "..oggggwwwwwwwwwwwwwwwgggggo.",
    "...ogggwwwwwwwwwwwwwwwwwgggo.",
    "....oooooooooooooooooooooo...",
    "......oo......oo......oo.....",
  ],
  palette: { ...OUTLINE, ...EYE, g: "#48c068", d: "#268a44", w: "#e8f0c0", a: "#f0a030" },
}

/** 虎鲨（灰身 + 深黑虎纹 + 白肚皮） */
export const TIGER_SHARK: Sprite = {
  pattern: [
    "............oooooooooo...........",
    "..........ooTTTTTTTTTToo.........",
    "........ooTTTTTTTTTTTTTToo.......",
    ".......oTTTTTTTTTTTTTTTTTo.......",
    "......oTdTTdTTdTTTTTTTTTTTo......",
    ".....oTTTTTTTTTTTTTTTTTTTTTo.....",
    "....oTTwhieTTTdTTdTTTTTTTTTTo....",
    "...oTTTTTTTTTTTTTTTTTTTTTTTTTo...",
    "..oTdTTdTTdTTTTTTTTTTTTTTTTTTTo..",
    "..oTTTTwwwwwwwwwwwwwwwwwwTTTTo...",
    "...oTTwwwwwwwwwwwwwwwwwwTTTo.....",
    "....oooooooooooooooooooooo.......",
    "......ooo......ooo......oo.......",
  ],
  palette: { ...OUTLINE, ...EYE, T: "#8a98a8", d: "#4a5866", w: "#e0e8ee", t: "#2e3a46" },
}

/** 锤头鲨（双髻头、双眼在锤端） */
export const HAMMERHEAD: Sprite = {
  pattern: [
    "..........oooooooooooooooooo..........",
    ".........oBBBeBBBBBBBBBeBBBo..........",
    "........oBBBBBBBBBBBBBBBBBBBo.........",
    ".......oBBBBBBBBBBBBBBBBBBBBBo........",
    "......oBBBwBBBBBBBBBBBBBBBBBBBo.......",
    ".....oBBBBwBBBBBBBBBBBBBBBBBBBBo......",
    "....oBBBBBBBBBBBBBBBBBBBBBBBBBBBo.....",
    "...oBBBBBBBBBBBBBBBBBBBBBBBBBBBBBo....",
    "..oBBdBBBBdBBBBdBBBBBBBBBBBBBBBBBBo...",
    "..oBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBo...",
    ".oBBwhieBBBBdBBBBdBBBBBBBBBBBBBBBBBo..",
    ".oBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBo....",
    "..oBBBwwwwwwwwwwwwwwwwwwwwwwBBBBo.....",
    "...oBBwwwwwwwwwwwwwwwwwwwwBBBo........",
    "....ooooooooooooooooooooooooo.........",
    "......ooo.......ooo.......oo..........",
  ],
  palette: { ...OUTLINE, ...EYE, B: "#7b8ea1", d: "#4a5c6e", w: "#c8d6e0" },
}

/** 鲸鲨（巨无霸、浅蓝星斑、白肚） */
export const WHALE_SHARK: Sprite = {
  pattern: [
    ".............oooooooooooooo.............",
    "............ooBBBBBBBBBBBBoo............",
    "..........ooBBBBBBBBBBBBBBBBoo..........",
    ".........oBBwwBBBBwwBBBBBBBBBBo.........",
    "........oBBBwwBBBBwwBBBBwwBBBBBo........",
    "......ooBBwwBBBBwwBBBBwwBBBBBBBBBo......",
    ".....oBBBwwBBBBwwBBBBwwBBBBwwBBBBBBo....",
    "....oBBBwhieBBwwBBBBwwBBBBwwBBBBBBBBo...",
    "...oBBBBBBBBBBBBwwBBBBwwBBBBBBBBBBBBBo..",
    "..oBBdBBdBBdBBBBBBBBBBBBBBBBBBBBBBBBBBo.",
    "..oBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBo..",
    "...oBBBwwwwwwwwwwwwwwwwwwwwwwwwBBBBo....",
    "....oBBwwwwwwwwwwwwwwwwwwwwwwBBBo.......",
    ".....oooooooooooooooooooooooooo.........",
    ".......oooo...........oooo..............",
    "........oo.............oo...............",
  ],
  palette: { ...OUTLINE, ...EYE, B: "#5a8ab0", d: "#3a5e80", w: "#e8f0f6", p: "#d0e4ee" },
}

/** 蝠鲼（展翼、头鳍、白肚斑） */
export const MANTA: Sprite = {
  pattern: [
    "..............ooooo.............",
    "............ooMMMMMoo...........",
    "..........ooMMMMMMMMMoo.........",
    "........ooMMMMMMMMMMMMMoo.......",
    "......ooMMMMMMMMMMMMMMMMMoo.....",
    "....ooMMMMMMMMMMMMMMMMMMMMMoo...",
    "..ooMMMMMMMMMMMMMMMMMMMMMMMMMoo.",
    "ooMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo",
    "oMMM......oMMMMMMMMMMo......MMMo",
    "oM.........oMMwwwwMMo.........Mo",
    "............oMwwwwMo............",
    "............oMMMMMMMMo..........",
    ".............oooooooo...........",
  ],
  palette: { ...OUTLINE, M: "#5a6f9e", w: "#c0d0e8" },
}

/** 狮子鱼（棕黄绿斑马纹、扇形大鳍、蓝眼）—— 生物素材风格基准 */
export const LIONFISH: Sprite = {
  pattern: [
    ".....oo........oo........oo.....",
    "....oCCoo.....oCCoo.....oCCoo...",
    "....oCbCo....oCbwCo....oCbwCo...",
    "....oCCCo...ooCCCoo...ooCCCoo...",
    ".....oCo...oCbCbCbo...oCbCbCbo..",
    "..oo..o...oCbCbCbCbo.oCbCbCbCbo.",
    ".oCCoo....oCCbCbCCCoobCbCbCbCCo.",
    ".oCbwCo....oobCbCbooCCbCbCbCbo..",
    ".oCbCbCo..ooCCbCbCCCbCbCbCCoo...",
    ".ooCbwCoo.oCbCbCbCbCbCbCbo.o....",
    "..oCbCbCoobCbwwhiebCbCbCo.......",
    "..oCbwwCbCbCbCCbCbCbCbCo........",
    ".oCbCbCbCbCCbCbCbCbCCo..........",
    ".oCbwwwwwwwwwwwwwwCbo...........",
    ".ooCCCCCCCCCCCCCCCCo............",
    "..oooooooooooooooooo............",
    "....oo.....oo.....oo............",
  ],
  palette: { ...OUTLINE, ...EYE, C: "#e8d8a0", b: "#8a5a28", w: "#f8f0d8", d: "#5a3a18", g: "#8ab830" },
}

/** 鬼龙（橙红叶片附体、奶油色叶缘） */
export const LEAFY_DRAGON: Sprite = {
  pattern: [
    "..........oo........oo........oo..",
    ".........oR Roo....oR Roo....oR Ro",
    "........oRwRRRo..oRwRRRo..oRwRRRo",
    "........oRRdRoo..oRRdRoo..oRRdRoo",
    ".........oRoo.....oRoo.....oRoo..",
    "..oo......oo.......oo.......oo...",
    ".oRRo....oR Roo....oR Roo....oR...",
    ".oRdRo..oRwRRRo..oRwRRRo..ooR....",
    ".oRRdRooRRRdRRooRRRdRRoo.oR......",
    "..oRRooRRwwhieRRoRRdRoo.oR.......",
    "...oo.oRwwwwwwwwRRRRo.oR.........",
    "......oRRwwwwwwwwRRo.oR..........",
    ".....oRRdRRRRRRRRRo.oR...........",
    ".....oRdRRRRRRRRo..oR............",
    "......oRRRRRRRo..oo..............",
    "......oooooooooo.................",
  ],
  palette: { ...OUTLINE, ...EYE, R: "#e86820", d: "#a83c10", w: "#f8e0b8" },
}

/* ── 底栖/奇珍生物 ────────────────────────── */

/** 花园鳗（条纹、固定在沙地） */
export const GARDEN_EEL: Sprite = {
  pattern: [
    ".oo...",
    "ohebo.",
    ".bbdo.",
    ".wwb..",
    ".bbd..",
    ".bb...",
    ".wwb..",
    ".bb...",
    ".bbd..",
    ".bb...",
    ".wwb..",
    ".bb...",
  ],
  palette: { ...OUTLINE, ...EYE, b: "#e8cc96", d: "#b89858", w: "#f8ecd0" },
}

/** 螃蟹（红壳、眼柄） */
export const CRAB: Sprite = {
  pattern: [
    "...oo......oo...",
    "...oheo..oheo...",
    "..ooCCooooCCoo..",
    ".oCCCCCCCCCCCCo.",
    "oCCdCCCCCCCCdCCo",
    "oCCCCCCCCCCCCCCo",
    "oCdCCCCCCCCCCdCo",
    ".oCCCCCCCCCCCCo.",
    "..ooCCCooCCCoo..",
    "..oC..o..o..Co..",
  ],
  palette: { ...OUTLINE, ...EYE, C: "#e86040", d: "#a83820", w: "#f8a880" },
}

/** 海马（明黄、卷尾） */
export const SEAHORSE: Sprite = {
  pattern: [
    "...ooo....",
    "..oYYYo...",
    "..oYheYo..",
    "..oYYYdo..",
    "...oYYo...",
    "...oYYo...",
    "...oYYdo..",
    "....oYYo..",
    "....oYYdo.",
    "....oYYo..",
    "...oYYdo..",
    "..oYYo....",
    ".oYYdo....",
    ".oYoo.....",
    "oYo.......",
    "oo........",
  ],
  palette: { ...OUTLINE, ...EYE, Y: "#f0b040", d: "#c07818", w: "#f8e0a0" },
}

/** 河豚（鼓气圆球 + 尖刺 + 大眼） */
export const PUFFER: Sprite = {
  pattern: [
    "...oo...oo...oo...",
    "..oPPooPPooPPo....",
    ".oPPPPPPPPPPPPo...",
    "oPPdPPPPPPPPPdPo..",
    "oPwhiePPPPPPPPPPo.",
    "oPPPPPPPPPPPPdPPo.",
    "oPdPPPPPPPPPPPPPo.",
    ".oPPPPPPPPPdPPPo..",
    "..oPPdPPPPPPPo....",
    "...oooooooooo.....",
    "...oo..oo..oo.....",
  ],
  palette: { ...OUTLINE, ...EYE, P: "#c8d84e", d: "#8a9a28", w: "#eef4a0" },
}

/* ── 珊瑚与海底装饰（灰岩底座 + 顶端高光，紫珊瑚/黄海葵素材风格） ── */

/** 紫珊瑚（紫粉分枝，粉尖端，灰岩底座带苔与管海绵） */
export const BRANCH_CORAL: Sprite = {
  pattern: [
    "...............ww...............",
    "..............opppo.............",
    ".............oppppo.....ww......",
    "......ww....opdpppo...oppo......",
    ".....oppo..opppdppo..opdppo.....",
    "....opdppo.opdppppo.opppppo.....",
    "....oppppo.oppppppo.opdpppo.....",
    ".....oppo.opdwwpppo.oppppo......",
    ".......w..oppppppdo..oppo.......",
    "...ww.....opdppppo....w.........",
    "..oppo....oppppppo...oppo...ww..",
    "..opppo..opdwwpppo..opppo..oppo.",
    "..opdppo.opppppppo.opdppo.opdppo",
    "..oppppo.opppppppo.oppppo.oppupo".replace("u", "p"),
    "...oppo.opdppppppo.oppo...oppo..",
    "....w...oppppppppo...w.....w....",
    "........opdppwwppo..............",
    "...ww...oppppppppo...ww.........",
    "..oppo.opdppppppppo.opppo.......",
    "..oppwooppppppppppooppppo.......",
    "...ooooooooooooooooooooo........",
    ".orrrrrrrrrrrrrrrrrrrrrrro......",
    "orrkkkqrrrqrrrrmrrrqrrkkkro.....",
    "orrqkqrrrrmrrrrrrqrrrrqkqrro....",
    "orrrrrrrrrrrrrrrrrrrrrrrrrro....",
    ".oqqqqqqqqqqqqqqqqqqqqqqqo......",
    ".orrmrraoorrmrraoorrmrrorr......",
    "..oooooooooooooooooooooo........",
  ],
  palette: { ...OUTLINE, p: "#9a3ed8", d: "#5e1e96", w: "#f0a8d8", ...ROCK_BASE },
}

/** 黄海葵（橙黄触手、奶油尖端，底座伴红珊瑚与橙管） */
export const YELLOW_ANEMONE: Sprite = {
  pattern: [
    "...oo.....oo.....oo.............",
    "..oTTo...oTTo...oTTo............",
    "..oTwTo..oTdTo..oTwTo.....oo....",
    "..oTtTo..oTtTo..oTtTo....oTTo...",
    "...oTo...oTTo...oTTo....oTwTo...",
    "....oo....oTo....oTo....oTtTo...",
    "..oo......oo.....oo......oTo....",
    ".oTTo....oTTo...oTTo......oo....",
    ".oTwTo..oTdTo..oTwTo...oo.......",
    ".oTtTo..oTtTo..oTtTo..oTTo......",
    ".oTTo..oTwwwwwwwwTo..oTdTo......",
    "..oTo..oTwwhiewwwTo..oTtTo......",
    "...oo..oTwwwwwwwTo...oTTo.......",
    "....oo.oTdTTTTTTdTo...oTo.......",
    ".....ooTTTTTTTTTTTo....oo.......",
    "......oTdTTdTdTTdTo.............",
    "......oTTTTTTTTTTo..............",
    ".....oTdTTTTTTTTdTo.............",
    ".....oooooooooooooo.............",
    ".orrrrrrrrrrrrrrrrrro...........",
    "orrkkhqrrrqrrrrmrrrqrrro........",
    "orrqhqrrrrmrrrrrmrrqhqrrro......",
    "orrrrrrrrrrrrrrrrrrrrrrrro......",
    ".oqqqqqqqqqqqqqqqqqqqqqqo.......",
    ".orrRrraoorrRrraoorrRrorr.......",
    "..oooooooooooooooooooooo........",
  ],
  palette: { ...OUTLINE, ...EYE, T: "#f0a030", d: "#c06818", w: "#f8e0b0", t: "#f8c060", R: "#d83838", ...ROCK_BASE },
}

/** 桌面珊瑚（橙色圆盘 + 灰岩底座） */
export const TABLE_CORAL: Sprite = {
  pattern: [
    "....ooooooooooooooo.....",
    "..ooDDDDDDDDDDDDDDo.....",
    ".oDDDwwwwwwwwwwwDDDDo...",
    "oDDDwwwwwwwwwwwwwDDDDDo.",
    "oDwwwwwwwwwwwwwwwwwDDDDo",
    "oDDDDDDDDDDDDDDDDDDDDDDo",
    ".oDDDDDDDDDDDDDDDDDDDo..",
    "..oooooooooooooooooo....",
    ".orrrrrrrrrrrrrrrrrro...",
    "orrkkkqrrrqrrrqrrkkkro..",
    "orrqkqrrrrmrrrrrqkqrrro.",
    "orrrrrrrrrrrrrrrrrrrrrro",
    ".oqqqqqqqqqqqqqqqqqqqqo.",
    "..oooooooooooooooooooo..",
  ],
  palette: { ...OUTLINE, D: "#e07830", w: "#ffb060", ...ROCK_BASE },
}

/** 管海绵（紫管粉口 + 灰岩底座） */
export const TUBE_SPONGE: Sprite = {
  pattern: [
    "..oo...oo...oo........",
    ".owwo..owwo..owwo.....",
    ".opdo..opdo..opdo.....",
    ".opdo..opdo..opdo.....",
    ".opdo..opdo..opdo.....",
    ".opdo..opdo..opdo.....",
    "oopdoooowwoooopdoo....",
    "ooppppppppppppppo.....",
    ".oooooooooooooooo.....",
    ".orrrrrrrrrrrrrrrro...",
    "orrkkkqrrrqrrqkkkro...",
    "orrqkqrrrrmrrrqkqrrro.",
    "orrrrrrrrrrrrrrrrrrrro",
    ".oqqqqqqqqqqqqqqqqqqo.",
    "..oooooooooooooooooo..",
  ],
  palette: { ...OUTLINE, p: "#a058c8", w: "#e0b0f0", d: "#3a1a50", ...ROCK_BASE },
}

/** 红桶海绵（红桶 + 灰岩底座） */
export const BARREL_SPONGE: Sprite = {
  pattern: [
    "..oooooooooooo..",
    ".oKKKKKKKKKKKKo.",
    "oKdddddddddddKo.",
    "oKcwcwcwccccccKo",
    "oKccccccccwcccKo",
    "oKccccccccccccKo",
    "oKccccwcccccccKo",
    "oKdddddddddddKo.",
    ".oKKKKKKKKKKKKo.",
    "..oooooooooooo..",
    ".orrrrrrrrrrrro.",
    "orrkkkqrrqkkkro.",
    "orrqkqrrrrqkqrro",
    "orrrrrrrrrrrrrro",
    ".oqqqqqqqqqqqqo.",
    "..oooooooooooo..",
  ],
  palette: { ...OUTLINE, c: "#d4553f", d: "#8e3428", w: "#f08868", K: "#e87858", ...ROCK_BASE },
}

/** 巨藻（绿粗叶，明暗双阶） */
export const KELP: Sprite = {
  pattern: [
    "..ooo...",
    ".ogwgo..",
    ".ogggo..",
    "..oggo..",
    "..ogwgo.",
    "..ogggo.",
    ".ogwgo..",
    ".ogggo..",
    "..oggo..",
    "..ogggo.",
    "..ogwgo.",
    "..ogggo.",
    ".oggggo.",
  ],
  palette: { ...OUTLINE, g: "#2a9a52", w: "#5cc477" },
}

/** 海星（金 + 描边） */
export const STAR: Sprite = {
  pattern: [
    "...oo...",
    "..oXXo..",
    ".oXwXXo.",
    "oXXXXXXo",
    "oXwXXwXo",
    ".oXXXXo.",
    "..oooo..",
  ],
  palette: { ...OUTLINE, X: "#f0c84a", w: "#ffe89a" },
}

/** 贝壳（粉白 + 描边） */
export const SHELL: Sprite = {
  pattern: [
    "...oo...",
    "..opppo.",
    ".opwppo.",
    "opwwwpo.",
    "opppppo.",
    "..oooo..",
  ],
  palette: { ...OUTLINE, p: "#e88aa0", w: "#f9e6ec" },
}

/** 游艇（白色船体 + 蓝色舷窗 + 红色防污底 + 雷达桅） */
export const BOAT_YACHT: Sprite = {
  pattern: [
    "......................................................",
    "..........oo..........................................",
    "..........owo.........................................",
    "..........oddoo......o................................",
    ".........ooddddo....oyyo..............................",
    "..ooooooooodddooooooooooo.............................",
    ".ohhhhhhhhhhhhhhhhhhhhhho.............................",
    ".ohhhhwwhhhhwwhhhhwwhhhho.............................",
    ".ohhhhhhhhhhhhhhhhhhhhhho.............................",
    ".ohhhhhhhhhhhhhhhhhhhhhho.............................",
    ".ooooooooooooooooooooooooo............................",
    ".ohhhhhhhhhhhhhhhhhhhhhhhhhhhoo.......................",
    ".ohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhoo....................",
    ".ohbbbbhhhhhhhhhhhhhhhhhhhhhhhhhhhhoo.................",
    ".obbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbo...............",
    ".obbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbboo...........",
    "oobrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrroo..........",
    ".orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrro..........",
    "..orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrro...........",
    "...oooooooooooooooooooooooooooooooooooooooo...........",
  ],
  palette: {
    ...OUTLINE,
    h: "#f0f4f8",
    b: "#c8d4dc",
    w: "#4a8ae8",
    d: "#8a94a0",
    r: "#d4553f",
    y: "#f0a030",
  },
}

/** 渔船（蓝白船体 + 小舰桥，远景小型） */
export const BOAT_FISHING: Sprite = {
  pattern: [
    "...................................",
    "............oo.....................",
    "...........owwo....................",
    "...........oddo....................",
    "..........oodddoo..................",
    "..oooooooooooooo...................",
    ".ohhhhhhhhhhho.....................",
    ".ohhwwhhhhhwwo.....................",
    ".ohhhhhhhhhho......................",
    ".ooooooooooooooooo.................",
    ".ohhhhhhhhhhhhhhhhhhhoo............",
    ".ohbbbbhhhhhhhhhhhhhhhhhhoo........",
    "oobbbbbbbbbbbbbbbbbbbbbbbbbo.......",
    ".obrrrrrrrrrrrrrrrrrrrrrrrrroo.....",
    "..orrrrrrrrrrrrrrrrrrrrrrrrro......",
    "....oooooooooooooooooooooooo.......",
  ],
  palette: {
    ...OUTLINE,
    h: "#e8f0f4",
    b: "#a8c4d4",
    w: "#4a8ae8",
    d: "#8a94a0",
    r: "#c04838",
  },
}

/** 组合查找表 */
export const SPRITES = {
  sardine: SARDINE,
  jack: JACK,
  barracuda: BARRACUDA,
  parrotfish: PARROTFISH,
  hammerhead: HAMMERHEAD,
  tiger: TIGER_SHARK,
  whaleshark: WHALE_SHARK,
  manta: MANTA,
  lionfish: LIONFISH,
  leafyDragon: LEAFY_DRAGON,
  gardenEel: GARDEN_EEL,
  crab: CRAB,
  seahorse: SEAHORSE,
  puffer: PUFFER,
  branchCoral: BRANCH_CORAL,
  yellowAnemone: YELLOW_ANEMONE,
  tableCoral: TABLE_CORAL,
  tubeSponge: TUBE_SPONGE,
  barrelSponge: BARREL_SPONGE,
  kelp: KELP,
  star: STAR,
  shell: SHELL,
  boatYacht: BOAT_YACHT,
  boatFishing: BOAT_FISHING,
} as const

export type SpriteName = keyof typeof SPRITES

/** 按字符逐像素渲染到独立 canvas（缓存用） */
export function renderSprite(
  sprite: Sprite,
  scale = 1,
): { cv: HTMLCanvasElement; w: number; h: number } {
  const h = sprite.pattern.length
  const w = Math.max(...sprite.pattern.map((r) => r.length))
  const cv = document.createElement("canvas")
  cv.width = w * scale
  cv.height = h * scale
  const ctx = cv.getContext("2d")!
  sprite.pattern.forEach((row, y) => {
    ;[...row].forEach((ch, x) => {
      const color = sprite.palette[ch]
      if (!color) return
      ctx.fillStyle = color
      ctx.fillRect(x * scale, y * scale, scale, scale)
    })
  })
  return { cv, w, h }
}
