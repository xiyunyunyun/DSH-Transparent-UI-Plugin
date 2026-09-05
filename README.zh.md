# @deepseek-ai/dsh-client-ui-seaglass

[English](README.md) | 中文

> **适配版本** — DSH `0.1.2-rc.1` · **更新日期** 2026-09-05 · 插件 v1.5.0
>
> **本次更新内容**
>
> - **主题更名为 Seaglass**：包名与仓库改为 `@deepseek-ai/dsh-client-ui-seaglass`（`dsh-client-ui-seaglass`）。主题本身不变——请按「安装」一节的命令更新安装方式 / profile 补丁
> - **代码块玻璃化**：单行（行内）与多行代码块不再是不透明实板，与全主题一致跟随磨砂度滑杆；代码块外壳保留 backdrop 模糊，流体之上的代码依旧清晰
> - **移除插件页冗余开关**：设置 → 插件 里的主题卡片与主题设置页顶部的总开关完全重复——已删除；总开关现在就在 **设置 → Seaglass** 页面顶部
> - **视图页玻璃化**：轨迹页与任何插件的整页视图（如 dsh-context 的上下文面板）自动玻璃化——共享 layer token 在视图内转半透明，卡片面板随光标倾斜 + 辉光；未来新插件的视图页零适配自动继承
> - **指令列表玻璃化**：输入栏指令列表（及一切锚定弹层外壳）读作一整块磨砂玻璃，悬停列表时输入栏倾斜保持

Seaglass 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图、插件视图页都成了磨砂玻璃片，你还可以添加图片和视频作为背景。关掉开关就回到原生界面，不改 DSH 任何一行源码。

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
- **第三方插件适配**：任意插件弹窗内的徽章、统计按钮、下拉框、标签等常见元素自动玻璃化（如「用量账本」dsh-tokenledger）；悬浮面板及其提示气泡不再被侧边栏截断；插件视图页整页玻璃化、卡片随光标倾斜
- 一键开关：关闭即完全还原原生界面，所有效果随插件卸载一并消失

## 安装

### 方式一：npm 一键安装（推荐）

```sh
dsh plugin --profile web add dsh-client-ui-seaglass
```

从 npm 安装最新版，自动注册为 profile 插件层（`dsh.bundle` 补丁），所有平台通用。刷新 Web 界面即可。

### 方式二：GitHub 安装器（备用）

不需要 npm、不需要 git（自动退回 zip 下载）。

**Windows（一条命令）：**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/xiyunyunyun/dsh-client-ui-seaglass/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

默认安装**最新发布版**。脚本会把插件链接进 profile 的 `node_modules`，并在 `cordis.patch.yml` 里登记 `ui-seaglass`（幂等，重复跑不会重复登记）。

指定版本或跟随开发分支：

```powershell
.\install.ps1 -Version 'v1.5.0'    # 指定某个发布版
.\install.ps1 -Version 'main'      # 开发分支
```

**macOS / Linux（手动，三步）：**

```sh
git clone --depth 1 --branch v1.5.0 https://github.com/xiyunyunyun/dsh-client-ui-seaglass.git
ln -s "$PWD/dsh-client-ui-seaglass" "$DSH_HOME/profiles/node_modules/@deepseek-ai/dsh-client-ui-seaglass"
```

然后往 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加：

```yaml
- insert:
    - id: ui-seaglass
      name: '@deepseek-ai/dsh-client-ui-seaglass'
```

## 使用

刷新 Web 界面。Seaglass **默认开启**；总开关在独立的 **设置 → Seaglass** 页面顶部（排在通用设置之后），同页集中了全部调节：模式、模糊度/磨砂度（云母模式）、流体颜色、背景亮度、背景（流体/壁纸）、壁纸设置、粒子鲸鱼开关，以及中英文字体选择。总开关关闭时，下方调节自动收起，只留开关与提示。
