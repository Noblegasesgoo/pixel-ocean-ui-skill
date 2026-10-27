import Link from "next/link"
import { TRIP_STATUS_LABELS } from "@/lib/labels"
import { SPRITES, type SpriteName } from "@/components/pixel-sprites"

/* ─────────────────────────────────────────────
   像素组件库：星露谷 × 潜水员戴夫 融合风
   样式类定义见 globals.css（.px-panel / .px-btn / .px-badge ...）
   ───────────────────────────────────────────── */

/** box-shadow 像素画：用 "." 表示透明；传 palette 时按字符取色（星露谷式多色 sprite），否则单色。
    实现要点：内层元素 = pixel×pixel（阴影与其同尺寸），外层容器按图案实际足迹预留布局空间，
    否则阴影不占据布局，会盖住相邻文字/组件。 */
export function PixelArt({
  pattern,
  color,
  palette,
  pixel = 4,
  className,
}: {
  pattern: string[]
  color?: string
  palette?: Record<string, string>
  pixel?: number
  className?: string
}) {
  const shadows: string[] = []
  let maxW = 0
  pattern.forEach((row, y) => {
    maxW = Math.max(maxW, row.length)
    ;[...row].forEach((ch, x) => {
      if (ch === "." || ch === " ") return
      const c = palette?.[ch] ?? color
      if (!c) return
      shadows.push(`${x * pixel}px ${y * pixel}px 0 0 ${c}`)
    })
  })
  // 调用方若传入 Tailwind 定位类（absolute/fixed 等），不再内联 position:relative，
  // 否则内联样式优先级更高，absolute right-x top-x 会失效导致图标错位重叠
  const hasPositionClass = /(?:^|\s)(?:static|fixed|absolute|relative|sticky)(?:\s|$)/.test(
    className ?? ""
  )
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        ...(hasPositionClass ? {} : { position: "relative" }),
        width: maxW * pixel,
        height: pattern.length * pixel,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: pixel,
          height: pixel,
          boxShadow: shadows.join(","),
        }}
      />
    </span>
  )
}

/** 向右游的小鱼 */
export const FISH_RIGHT = [".XX..", "XXXXX", "X.XXX", "XXXXX", ".XX.."]

/** 向左游的小鱼（右图的镜像） */
export const FISH_LEFT = ["..XX.", "XXXXX", "XXX.X", "XXXXX", "..XX."]

/** 水草 */
export const SEAWEED = [".X.", "XX.", ".X.", ".XX", ".X.", "XX.", ".X.", ".XX", ".X."]

/** 小海星 */
export const STAR = ["..X..", ".XXX.", "XXXXX", ".XXX.", "X.X.X"]

/** 像素锚 ⚓ 的替代装饰：贝壳 */
export const SHELL = [".XXXX.", "XX..XX", "X.XX.X", "XXXXXX", ".XXXX."]

/** 星露谷式精灵便捷组件：直接按名字取多色 sprite */
export function SpriteArt({
  name,
  pixel = 4,
  className,
}: {
  name: SpriteName
  pixel?: number
  className?: string
}) {
  const sprite = SPRITES[name]
  return <PixelArt pattern={sprite.pattern} palette={sprite.palette} pixel={pixel} className={className} />
}

/** 分区标题（编辑式：编号章 + 标题 + 伸缩线 + 更多链接） */
export function SectionHeader({
  title,
  href,
  moreText = "全部 →",
  index,
}: {
  title: string
  href?: string
  moreText?: string
  index?: string
}) {
  return (
    <div className="mb-6 flex items-center gap-4">
      {index && <span className="px-index">{index}</span>}
      <h2 className="px-section-title font-pixel text-lg md:text-xl">{title}</h2>
      <span className="h-[3px] flex-1 bg-teal/40" />
      {href && (
        <Link href={href} className="font-pixel text-sm text-foam/80 hover:text-coral">
          {moreText}
        </Link>
      )}
    </div>
  )
}

/** 空状态：像素鱼 + 文案 */
export function Empty({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`px-panel px-empty ${className}`}>
      <SpriteArt name="sardine" pixel={3} />
      <p className="text-sm font-medium">{text}</p>
    </div>
  )
}

/** 组队状态徽章（像素风，状态驱动配色） */
export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    recruiting: "px-badge-recruiting",
    confirmed: "px-badge-confirmed",
    full: "px-badge-full",
    finished: "px-badge-muted",
    cancelled: "px-badge-muted",
  }
  return (
    <span className={`px-badge ${styles[status] ?? "px-badge-muted"}`}>
      {TRIP_STATUS_LABELS[status] ?? status}
    </span>
  )
}

/** 页面大标题（复古立体字） */
export function PageTitle({
  children,
  coral = false,
}: {
  children: React.ReactNode
  coral?: boolean
}) {
  return (
    <h1
      className={`font-pixel text-2xl md:text-3xl font-bold mb-2 ${
        coral ? "title-retro-coral" : "title-retro"
      }`}
    >
      {children}
    </h1>
  )
}

/** 像素加载动画 */
export function PixelLoading({ label = "加载中" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-foam/80">
      <span className="px-loading">
        <span />
        <span />
        <span />
      </span>
      <span className="font-pixel text-sm">{label}…</span>
    </div>
  )
}

/** 表单通用字段包装：label + 控件 */
export function Field({
  label,
  children,
  hint,
}: {
  label: string
  children: React.ReactNode
  hint?: string
}) {
  return (
    <label className="block">
      <span className="font-pixel text-sm font-bold">{label}</span>
      <div className="mt-1.5">{children}</div>
      {hint && <p className="mt-1 text-xs text-ink/60">{hint}</p>}
    </label>
  )
}
