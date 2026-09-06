# Changelog

## Unreleased

### v1.6.3

- **修复：展开侧边栏时鼠标辉光卡住（指针不动的话）**——两层缺陷叠加：①辉光/倾斜几何只在 childList 变更或窗口 resize 时刷新（overlay keeper 的两个喂源），而侧栏展开是轨道 grid 模板滑动——纯样式变更，静止的指针既不发 pointermove 也不触发 childList，会话几何冻结在进入帧；② keeper 刷新会用新会话对象取代旧会话，入口排队的那次 paint 被 stale-session 守卫丢弃，而刷新重画 radial 依赖 lastPointer——`onOver` 建会话时从不写它（等第一次 pointermove），静止指针下 radial 永远画不出来/停在过期盒上。修复：keeper 给每个 spot 挂 ResizeObserver（observe-on-first-tick，新 stamp 的面板自动覆盖），面板盒变化走同一 rAF 合并通道喂刷新；`onOver` 建会话即写入口坐标进 lastPointer，刷新重画永远有位可用。实测（合成 hover + 全程零 pointermove）：radial 全程在画（17/17 采样）、辉光盒宽度跟随列宽 32→256，中途还把过期的 56px 盒修正到 32px
- **修复：侧边栏收/展动画图标飞出列外（两个方向）**——逐帧采样 + 溢出规则普查定位到真因：v1.4.5 的幻影溢出开关给所有倾斜面板 `overflow: clip; overflow-clip-margin: 64px`（列缘外 64px 内全部可见），侧栏也是 tilt pane——而收/展动画中冻结的宽内容与紧凑图标恰落在窄轨边缘 64px 以内（"新会话"按钮探出 29px、图标贴着 64px 线），两个方向都"飞出列外"；此前归因于 5f tooltip 释放不准确（释放只在 tooltip 挂载时额外全开，是叠加因素而非根因）。修复：①侧栏例外按盒缘裁剪（`overflow-clip-margin: 0`，特异性高于面板开关规则）；②stamper 监听 frame 的 `data-sidebar-collapsed` 翻转，翻转后 ~1s 动画窗口内在 `<html>` 盖 `[data-dsh-sidebar-anim]`，窗口内抑制 5f 释放——收起方向的冻结宽内容不再外溢；③收起稳态 + tooltip 在场时释放照常，气泡逃逸保留。实测：动画中列外 15px 处 elementFromPoint 命中背景滚动层而非按钮（修复前命中按钮）、anim 标记动画内 true/稳态 false、clipMargin 0px 生效

### v1.6.2

- **修复：视图嵌套内容面板被壁纸亮区冲成突兀灰板（泛用适配）**——视图里"卡中卡"的内容面板（dsh-context 的系统提示词阅读卡、分类块，轨迹页嵌套板，任何插件页同层级）坐在玻璃上而非应用底色上，填充叠在父级淡层上：磨砂度 7 时整叠 alpha 仅 ~5.6%，壁纸亮区一冲就读成平板灰块。嵌套面板现在带下限地重声明 layer token（暗 rgb(28 34 44)@≥42%、亮白系 ≥50-62%，高磨砂度仍由旋钮驱动；保留插件选层意图与 backdrop blur），内联 token 涂色的嵌套面板走同一下限——按"卡中卡"结构选择器泛化，不写死任何插件类名
- **修复：F5 后 hero 输入卡的蓝色虚线框**——stock 在未选工作区的 hero 态给输入卡加 `cardWorkspaceTrigger` 变体，用 SVG mask（`stroke-dasharray 4 4`，悬停转 accent 蓝）的 `::after` 叠层画虚线环提示"点击选择工作区"；虚线藏在 data-URI 的 SVG 里（不含 "dashed" 字样），此前按关键字扫描漏判，主题还特意把 mask 圆角重画成 24px 保留它。玻璃面板上它读作凭空的蓝色虚线矩形，而占位文案"选择一个工作区开始"与 pointer 光标已表达可点性——`[data-composer-card]::after` 整体 `display: none`（stock 仅在触发器变体下渲染该叠层，常规态空操作）
- **修复：dsh 提问态下输入框的蓝色焦点环（实测确认）**——提问面板挂载即自动聚焦答案输入框，而文本录入元素按规范无论以何种方式聚焦都命中 `:focus-visible`，主题全局蓝环（2px `rgba(110,155,232,.85)` + 1px offset）凭空落到框上（活页提取：`TEXTAREA.Mbwy4a_fieldInput` outline solid/2px/主题蓝、`focusVisible: true`；面板在 `data-dsh-inputbar` 之外，composer 范围的局部豁免覆盖不到）。侧栏搜索框、composer 输入区、提问面板三处同病——合并为按元素类别的全应用豁免：`[data-dsh-aqua] :is(input, textarea, [contenteditable='true']):focus-visible { outline: none }`（焦点由光标与控件自身边框表达；按钮/菜单项保留焦点环，键盘可达性不变）。重建后同一提问态实测 outline 已为 none
- **修复：上下文页玻璃延迟数秒 + 鼠标移过矩形频繁闪烁（两症状同源于 stampPluginViews）**——其一，v1.6.0 的宽限期对所有非聊天根一律延迟 ~1.5s 打标，但真插件页（上下文）是根+卡片同 commit 挂载、聊天根才是"先空后填"（倾斜 bug 的唯一形态）：改为**有 card 家族内容 ⇒ 立即打标**，宽限期只保护空根——上下文页玻璃从 1.5~2.4s 缩到首个 stamp pass（页面实测 251ms，含 rAF 合并延迟）。其二，`closest()` 从元素自身开始匹配：卡片被打上 spot 后，后续 pass 里每张卡都"包含自己"而被判为已嵌套 pane 跳过，`spotted` 恒为 false，兜底逻辑把整个 `lc-root` 打成 spot——鼠标经过卡片间隙时整页成为 hover 面板（全页 glow + 整页 tilt + 固定定位气泡重锚定），读作频繁闪烁（实测根级 spot 在卡片打标 128ms 后追加）。改为父链检查（`parentElement.closest`，嵌套卡仍归外层 pane），并在有卡片时主动摘除根级 stale spot（含手动污染的自愈验证）

### v1.6.1
