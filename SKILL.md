---
name: pixel-ocean-ui
description: 星露谷物语 × 潜水员戴夫融合像素海洋风 UI 开发规范。用于：给网站/应用搭建像素海洋主题界面、用纯 CSS box-shadow 绘制像素画组件、创作 16-bit 鱼类/珊瑚 sprite、搭建"背景图+遮罩+内容"三层页面结构。源自潜水世界（Diving-World）项目实战，含两次真实踩坑的避坑清单。
license: 项目实战提炼，自由使用
---

# 像素海洋风 UI（星露谷 × 潜水员戴夫）

给 Web 项目快速落地一套"复古像素 + 深海蓝绿 + 暖木奶油"的融合风 UI。全部方案零图片依赖（生物除外）、零 JS 动画依赖，SSR 友好。

## 何时使用

- 需要为网站/活动页/H5 做像素海洋、潜水、水族主题界面
- 需要把 AI 生成的像素美术素材（鱼/珊瑚/船只）规范化为可复用 sprite
- 需要纯 CSS 绘制像素画（不想引入 canvas/图片）

## 设计基线

**风格融合**：星露谷（暖木框 + 奶油面板 + 厚投影）× 潜水员戴夫（深海蓝绿 + Q 版生物 + 光柱气泡）。

### 色彩 token（CSS 变量）

| 角色 | 变量 | 值 |
|---|---|---|
| 深海底 | `--abyss` | `#06222b` |
| 深海底 | `--deep` | `#0b3c49` |
| 松石绿 | `--teal` | `#1b7f79` |
| 浅沫绿 | `--foam` | `#9adbc8` |
| 奶油/文字浅 | `--sand` | `#f7f3e3` |
| 面板文字深 | `--ink` | `#3a2a18` |
| 木框 | `--wood` / `--wood-dark` | `#7a4a21` / `#4a2c12` |
| 珊瑚橙点缀 | `--coral` | `#f4a259` |
| 海带绿 | `--kelp` | `#3fa46a` |
| 明黄 | `--gold` | `#e8c060` |
| 像素描边 | 固定 | `#16163a`（深海军蓝，全库统一） |

### 字体

- 标题/数字：`"Press Start 2P", "VT323", "Fusion Pixel", "Zpix", ui-monospace, "PingFang SC", monospace`（前两个走 Google Fonts，中文自动回退系统字体）
- 正文：**永不用像素字体**，常规无衬线保证可读性

## 快速开始

1. 拷贝 `references/globals.css` 中的 `:root` token、`@theme inline` 与全部 `.px-*` 类到项目全局 CSS
2. 拷贝 `references/pixel-ui.tsx`（PixelArt / SpriteArt / 通用组件）到 `src/components/`
3. 从 `references/pixel-sprites.ts` 挑选 sprite，或按下方规范自创
4. 按"背景三层结构"搭建页面骨架

## 核心 1：box-shadow 像素画（两次踩坑后的正确实现）

`references/pixel-ui.tsx` 的 `PixelArt` 是最终正确版。原理与**必须遵守**的约束：

- **每个字符 = 1 像素**，`"."` 或空格为透明，其余字符从 `palette` 取色
- **内层元素尺寸 = `pixel×pixel`**（一个阴影 = 一个像素块，偏移 `x*pixel, y*pixel`）
- **外层容器按图案足迹（maxW×行数）占位**——box-shadow 不参与布局，缺少占位层会画出界、盖住相邻文字（真实踩坑 ①）
- 元素设成整图尺寸会让每个阴影与元素同大、叠成实心色块（真实踩坑 ②，极难排查）
- 多色 sprite 传 `palette: Record<char, color>`；单色传 `color`
- 动画类（浮动 `px-bob`、摇摆 `pixel-seaweed`）挂在外层容器上

## 核心 2：sprite 创作规范（AI 素材提炼）

适用于鱼、珊瑚、船只、底栖生物。见 `references/pixel-sprites.ts` 完整样例。

**硬性规则：**
- **深海军蓝描边**：外圈完整 `#16163a` 勾边（字符 `o`）
- **每色 2-3 阶赛璐璐**：基色 + 暗部 + 高光，硬切无色阶渐变
- **配色鲜艳**：青蓝、珊瑚橙、紫、明黄；底色用 `...EYE`/`OUTLINE` 共享色板
- **眼睛统一三像素**：`h` 白眼高光 + `i` 蓝虹膜 `#4a8ae8` + `e` 深瞳 `#10102a`
- **鱼身装饰**：背部深色横带/斑纹，肚皮浅色（`w`），鳍可配异色点缀
- **鱼朝向**：一律头朝右（尾在左），游向左侧由渲染层 `scale(-1,1)` 镜像
- **珊瑚**：灰岩底座（基色/暗/亮 + 苔藓 `m` + 点缀）+ 顶端 Cream 色尖端（`w`）
- **图案尺寸**：小鱼 24-32 宽，大鱼/鲨 34-48 宽，珊瑚 26-34 宽；渲染层 `pixel` 取 2-4

## 核心 3：.px-* 组件类清单

| 类 | 用途 |
|---|---|
| `.px-panel` | 奶油面板：sand 底 + ink 字 + 木框 3px + 厚投影（面板内文字一律 `text-ink/*`） |
| `.px-panel-dark` | 深海暗面板（dark 底 + sand 字），少用 |
| `.px-card` | 可交互卡：悬停上浮 + 边缘点亮（叠在 px-panel 上） |
| `.px-btn` | 像素按钮：按下下沉 4px（steps 硬跳变）；变体 `-teal/-wood/-ghost`，小号 `-sm` |
| `.px-badge` | 状态徽章；语义色 `-recruiting/-confirmed/-full/-muted/-gold` |
| `.px-input` | 输入框：木框 + 内阴影，focus 珊瑚橙 |
| `.px-wave` | 像素波浪分隔条 |
| `.px-section-title` / `.px-index` | 编辑式分区标题（菱形点 / 编号章） |
| `.px-ghost-num` | 幽灵大数字（卡片序号装饰） |
| `.px-empty` | 空状态容器 |
| `.px-shake` / `.px-loading` / `.px-bob` | 抖动 / 方块加载 / 浮动动画 |
| `.px-marquee` + `.px-marquee-track` | 无缝跑马灯（内容须偶数份，-50% 位移=整周期） |
| `.title-retro` / `.title-retro-coral` | 复古立体标题（层叠硬阴影） |

## 核心 4：页面背景三层结构

```
.px-site-bg   → background: url(.webp) center / cover no-repeat;（元素本身 fixed inset:0，
                不要 background-attachment: fixed——full-page 截图与 iOS 会漏画一条区域）
.px-site-mask → linear-gradient(rgba(0,20,40,.55) → rgba(0,10,25,.75))，固定满视口
泡泡层        → .pixel-bubble × ~14，随机 left/速度/相位，上升穿屏
内容层        → <main> 居中 max-width: 1200px
```

背景图处理：AI 生成的地图/场景图**要无损就用无损 webp**（PIL `lossless=True` 逐位一致）；程序打补丁去瑕疵必然留"撕裂"痕迹，精细像素画请用 AI 修图工具无痕处理后再上。`<link rel="preload" as="image">` 预载背景。

## 布局与交互原则

- **编辑式版式**优于传统居中窄栏：宽幅画布、编号分区（01/02/03 + 伸缩线 + 链接）、头条大卡 + 次条、横向吸附滚动条带
- **信息密集页克制用像素**：像素是店招与图标语言，不进正文排版；正文零像素元素
- **游戏感反馈**：按钮按压下沉、悬停整卡上浮、提交加载方块、失败抖动；动效只用 transform/opacity + `steps()` 硬跳变
- **性能/无障碍**：动画全部可 `prefers-reduced-motion` 降级；位图 `image-rendering: pixelated`；像素装饰每页 ≤3 处

## 常见错误清单（全部真实踩过）

1. PixelArt 元素设成整图尺寸 → 实心色块（见核心 1）
2. PixelArt 缺占位容器 → 阴影画到相邻文字上
3. `background-attachment: fixed` → 整页截图/iOS 出现未遮罩亮带
4. 跑马灯只放 2 份内容 → 宽屏露出空白
5. 奶油面板内用 `text-sand/*` → 浅色文字看不见（应用 `text-ink/*`）
6. 程序拼贴修补像素画 → 重复纹理"撕裂"
7. 大面积 box-shadow sprite（>40px 宽 × pixel≥4）性能下降 → 超大幅改用 canvas 逐像素 fillRect 预渲染

## 参考文件

- `references/pixel-ui.tsx` — PixelArt/SpriteArt 正确实现 + 共享组件（SectionHeader/Empty/StatusBadge/PageTitle/Field 等）
- `references/globals.css` — 全部 token 与 .px-* 类
- `references/pixel-sprites.ts` — 22 个成品 sprite（鱼×10、底栖×4、珊瑚×6、船×2）与共享色板
