# @deepseek-ai/dsh-client-ui-aqua

[English](README.md) | 中文

> **适配版本** — DSH `0.1.2-rc.1` · **更新日期** 2026-09-05 · 插件 v1.4.4
>
> **本次更新内容**
>
> - **适配 DSH 0.1.2-rc.1**：弃用已移除的 `@deepseek-ai/dsh-client-runtime` 客户端模块——设置行 store 改从 `@deepseek-ai/dsh-client-store` 导入 `defineStore`/`EngineStoreHandle`，客户端插件上下文改为普通 cordis `Context`，`settings.register()` 直接接收命名空间字符串（0.1.2-rc.1 移除了 `settingsNamespace` 辅助函数）；peer 依赖升至 `^0.1.2-rc.1`，profile patch 改为注册 scoped 包名
> - **Agent 任务列表玻璃元素适配**：任务列表工具胶囊（todo 写入条）与任务列表面板接入同一套玻璃配方——半透明填充 + 可调模糊 + 内高光，明暗两套成对适配，不再是一块实色面板
> - **对话框玻璃重构**：设置/插件弹窗把 backdrop 模糊从弹窗本体挪到 `isolation:isolate` + `::before` 层（z-index:-1），弹窗内 fixed 定位后代（如用量账本热力图 tooltip）不再被重新锚进弹窗坐标系——磨砂效果不变，弹层不再错位
> - **新建会话按钮 hover 高亮**：附加「+」悬停时改为蓝色玻璃辉光（填充/描边/外晕），取代原先单纯的亮白，明暗两套
> - **倾倒交互对触发器豁免**：悬停在按钮 / 菜单项 / 选项上时玻璃片立即归位（不走缓动），不再倾倒，触发器自带的 tooltip/菜单不会被带进玻璃片坐标系
> - **Aqua 独立设置页**：主题在设置导航中拥有自己的页面（排在通用设置之后），页面顶部自带总开关——即使 Host 未加载插件命名空间的部署里也能直接开关，全部玻璃旋钮从通用设置迁入
> - **中英文字体分别自定义**：独立的英文字体/中文字体选择器，采用自绘玻璃下拉（原生 `<select>` 弹层无法定制主题且暗色下闪白），通过 Local Font Access API 枚举系统字体，内置常用字体列表兜底，各列表按视角中文优先/英文优先排序，选项显示「中文名（English）」双语，代码块跟随设置（仅当至少设置了一项字体时生效，保证代码永远不丢等宽）
> - **主输入栏倾倒效果恢复**：输入栏与顶栏/侧边栏一致，随鼠标位置倾倒。之前迫使输入栏禁用倾倒的弹层（提示/菜单都是 bar 内的 `position:fixed` 元素）改为倾倒会话期间隐藏、transform 归位的同一帧再放行显示并重播淡入；常驻的统计提示在鼠标离开输入栏后自动隐藏，倾倒每次都能恢复
> - **统计提示不再被侧边栏覆盖**：宽幅统计提示出现时输入栏层级抬升到侧边栏之上，不再被玻璃侧边栏盖住
> - **玻璃化补全与调透**：代码块（外壳+头部条）、设置面板、菜单、下拉、tooltip 全部磨砂化，且全部跟随模糊度/磨砂度滑杆；不透明度整体调透；第三方插件的原生 `<select>` 获得配色锁定，暗色模式下不再闪白

此版本适配当前 DSH 的 `settings.plugin.item` keyed slot 契约。

Aqua 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片,你还可以添加视频和图片作为背景。关掉开关就回到原生界面，不改 DSH 任何一行源码。

![](assets/1.png)

![](assets/2.png)

![](assets/3.png)

![](assets/4.png)

## 特性

- **双模式**：**云母效果**把布局改成悬浮玻璃卡片（模糊度、磨砂度可调）；**兼容模式**保持原版排版一字不动，只把材质换成通用玻璃，其他插件的界面也会自动玻璃化
- **背景自由**：流体板（颜色可调）或自定义壁纸（铺满页面、比例不变，可单独调模糊度/磨砂度）；浅色壁纸配浅色模式、深色壁纸配深色模式观感更佳
- **背景亮度**：自动跟随深浅模式——深色模式 0–50 压暗、浅色模式 50–100 提亮，50 原样
- **粒子鲸鱼**：deepseek.com/harness 同款粒子鱼（官网粒子引擎移植），显示在聊天区域正中央（不含侧边栏），深色模式白粒子、浅色模式灰粒子，设置里可开关
- **Harness 光泽铭牌**：深色模式下侧边栏铭牌换成官网同款「Harness」药丸（135° 渐变描边 + 柔光），浅色模式保持原版铭牌
- **边缘渐变模糊**：页面顶部/底部各 5px 渐变模糊带，悬浮在聊天内容上层，内容滚到边缘渐入模糊；浅色微泛白、深色微泛黑
- **第三方插件适配**：任意插件弹窗内的徽章、统计按钮、下拉框、标签等常见元素自动玻璃化（如「用量账本」dsh-tokenledger）；悬浮面板及其提示气泡不再被侧边栏截断
- 一键开关：关闭即完全还原原生界面，所有效果随插件卸载一并消失

## 安装

### 方式一：npm 一键安装（推荐）

```sh
dsh plugin --profile web add dsh-client-ui-aqua
```

从 npm 安装最新版，自动注册为 profile 插件层（`dsh.bundle` 补丁），所有平台通用。刷新 Web 界面即可。

### 方式二：GitHub 安装器（备用）

不需要 npm、不需要 git（自动退回 zip 下载）。

**Windows（一条命令）：**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/WYH66666666/DSH-Transparent-UI-Plugin/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

默认安装**最新发布版**。脚本会把插件链接进 profile 的 `node_modules`，并在 `cordis.patch.yml` 里登记 `ui-aqua`（幂等，重复跑不会重复登记）。

指定版本或跟随开发分支：

```powershell
.\install.ps1 -Version 'v1.1.0'   # 指定某个发布版
.\install.ps1 -Version 'main'     # 开发分支
```

**macOS / Linux（手动，三步）：**

```sh
git clone --depth 1 --branch v1.1.0 https://github.com/WYH66666666/DSH-Transparent-UI-Plugin.git
ln -s "$PWD/DSH" "$DSH_HOME/profiles/node_modules/@deepseek-ai/dsh-client-ui-aqua"
```

然后往 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加：

```yaml
- insert:
    - id: ui-aqua
      name: '@deepseek-ai/dsh-client-ui-aqua'
```

## 使用

刷新 Web 界面。Aqua **默认开启**；总开关在 **设置 → 插件 → 玻璃主题**（形状与其他插件卡片一致），其余全部调节在 **设置 → 通用设置 → 外观** 的正下方（无独立标题）：模式、模糊度/磨砂度（云母模式）、流体颜色、背景亮度、背景（流体/壁纸）、壁纸设置，以及粒子鲸鱼开关。总开关关闭时，外观下方的整块调节自动隐藏。
