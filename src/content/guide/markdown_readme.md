---
title: Markdown 书写格式速查手册
published: 2025-06-11
description: "本博客支持的 Markdown 语法完整指南，包括 Frontmatter、基础语法、扩展功能、代码块增强、视频嵌入等所有特殊用法。"
tags: ["Markdown", "Fuwari", "指南", "教程"]
category: Guides
draft: true
---

本指南汇总了该博客支持的所有 Markdown 格式与特殊用法，方便写文章时快速查阅。

---

## 📋 Frontmatter（文章头信息）

每篇文章顶部需用 `---` 包裹的 YAML 头信息：

```yaml
---
title: 文章标题
published: 2024-01-11
updated: 2024-01-20            # 可选，更新日期
description: "文章简介，会显示在首页卡片上"
image: ./cover.jpg              # 可选，封面图路径
tags: ["标签1", "标签2"]
category: 分类名
draft: false                    # true 则为草稿，不会发布
lang: "zh_CN"                   # 可选，语言代码
---
```

| 字段 | 说明 |
|------|------|
| `title` | 文章标题 |
| `published` | 发布日期，格式 `YYYY-MM-DD` 或 ISO 时间戳 |
| `updated` | 可选，更新日期 |
| `description` | 文章简介，显示在首页 |
| `image` | 封面图路径：网络 URL、`/public` 绝对路径、或相对文章的路径 |
| `tags` | 标签数组 |
| `category` | 分类 |
| `draft` | `true` 为草稿，不会显示 |
| `lang` | 可选，文章语言代码 |

### 文章存放位置

所有文章放在 `src/content/posts/` 目录下，支持子目录组织：

```
src/content/posts/
├── my-post.md
└── my-post-2/
    ├── cover.png
    └── index.md
```

---

## ✏️ 基础 Markdown 语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 文字样式

```markdown
*斜体* 或 _斜体_
**粗体**
***粗斜体***
`行内代码`
~~删除线~~
```

### 列表

```markdown
- 无序列表项
- 另一项

1. 有序列表
2. 第二项
```

嵌套列表（缩进 4 空格）：

```markdown
1. 第一项
    - 子项 a
    - 子项 b
2. 第二项
```

### 引用

```markdown
> 这是一段引用
>
> 可以跨多行
```

### 链接

```markdown
[显示文字](https://example.com)
[跳转到标题](#二级标题)
```

### 脚注

```markdown
这是一段带脚注的文字[^1]。

[^1]: 脚注内容写在这里。
```

### 表格

```markdown
| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 内容   | 内容  | 内容   |
```

### 分割线

```markdown
---
```

### 图片

```markdown
![替代文字](图片路径)
```

图片路径规则：
- `http://` 或 `https://` 开头 → 网络图片
- `/` 开头 → `public` 目录下的图片
- 其他 → 相对于 Markdown 文件的路径

### 定义列表

```markdown
术语
: 定义内容
: 另一个定义

另一术语
: 对应的定义
```

### 转义字符

```markdown
\`foo\` \*bar\* \_baz\_
```

---

## ➗ 数学公式

使用 KaTeX 渲染。

**行内公式**：用 `$` 包裹

```markdown
质能方程：$E = mc^2$
```

**独立公式**：用 `$$` 包裹

```markdown
$$
I = \int \rho R^{2} dV
$$
```

```markdown
$$
\begin{equation*}
\pi = 3.1415926535\;8979323846\;\ldots
\end{equation*}
$$
```

---

## 🚀 扩展功能

### GitHub 仓库卡片

一键生成带 GitHub API 动态信息的仓库卡片：

```markdown
::github{repo="saicaca/fuwari"}
```

效果：`::github{repo="saicaca/fuwari"}`

### 提示框（Admonitions）

支持 5 种类型：`note` `tip` `important` `warning` `caution`

```markdown
:::note
这是笔记提示框。
:::

:::tip
这是小贴士。
:::

:::important
这是重要提示。
:::

:::warning
这是警告。
:::

:::caution
这是小心注意。
:::
```

**自定义标题**：

```markdown
:::note[我的自定义标题]
自定义标题的提示框。
:::
```

**GitHub 兼容语法**：

```markdown
> [!NOTE]
> GitHub 格式也被支持。

> [!TIP]
> 小提示。
```

### 剧透（Spoiler）

```markdown
内容是 :spoiler[被隐藏了 **嘿嘿**] 的！
```

效果：内容是 :spoiler[被隐藏了 **嘿嘿**] 的！

---

## 💻 代码块 — Expressive Code 增强

本博客使用 [Expressive Code](https://expressive-code.com/) 对代码块进行增强。

### 语法高亮

基本的围栏代码块：

```markdown
    ```js
    console.log('Hello World!');
    ```
```

### ANSI 终端输出

使用 `ansi` 语言标识符可以渲染终端颜色输出：

```markdown
    ```ansi
    [31m红色文字[0m [32m绿色文字[0m
    [1;31m粗体红色[0m
    ```
```

### 编辑器/终端窗口样式

**编辑器窗口**（通过 `title` 属性）：

```markdown
    ```js title="my-file.js"
    console.log('带标题的编辑器窗口');
    ```
```

**终端窗口**（使用 shell 语言自动识别）：

```markdown
    ```bash title="终端示例"
    echo "带标题的终端窗口"
    ```
```

**覆盖窗口类型**：

```markdown
    ```sh frame="none"
    echo "无窗口样式"
    ```

    ```ps frame="code" title="强制编辑器样式"
    # 原本会被识别为终端，现在强制显示为编辑器
    ```
```

### 文件路径注释

代码块第一行写注释即可自动识别：

```markdown
    ```html
    <!-- src/components/MyComponent.html -->
    <div>文件名注释示例</div>
    ```
```

### 行标记（Line Markers）

通过行号标记特定行：

```markdown
    ```js {1, 4, 7-8}
    // 第 1 行被标记
    // 第 2 行
    // 第 3 行
    // 第 4 行被标记
    // 第 5 行
    // 第 6 行
    // 第 7 行被标记（范围 7-8）
    // 第 8 行被标记（范围 7-8）
    ```
```

**标记类型**：`del`（删除）、`ins`（插入）、默认（高亮）

```markdown
    ```js del={2} ins={3-4} {6}
    function demo() {
      console.log('这行标记为删除')       // del
      console.log('这行标记为插入')        // ins
      console.log('也是插入')             // ins
      return '这行使用默认高亮'            // 默认
    }
    ```
```

**带标签的行标记**：

```markdown
    ```jsx {"1. 设置 value":5-6} del={"2. 移除":8-10}
    // 行标记标签示例
    <button
      value={value}                       // 标签 1
      className={buttonClassName}
      disabled={disabled}                 // 标签 2
      active={active}                     // 标签 2
    >
    </button>
    ```
```

### Diff 语法

```markdown
    ```diff
    + 这行标记为新增
    - 这行标记为删除
      这行是普通行
    ```
```

**Diff + 语法高亮**：

```markdown
    ```diff lang="js"
      function demo() {
    -   console.log('旧代码')
    +   console.log('新代码')
      }
    ```
```

### 行内文本标记

标记指定文字：

```markdown
    ```js "return true"
    function demo() {
      return true;  // "return true" 会被高亮
    }
    ```
```

**正则表达式标记**：

```markdown
    ```ts /ye[sp]/
    console.log('yes 和 yep 都会被匹配');
    ```
```

**指定内联标记类型**：

```markdown
    ```js "return true;" ins="inserted" del="deleted"
    function demo() {
      console.log('标记为 inserted');  // ins
      return true;                     // 默认
    }
    ```
```

### 自动换行（Word Wrap）

```markdown
    ```js wrap
    // 长文本会自动换行...
    ```

    ```js wrap=false
    // 禁止自动换行，超出部分滚动
    ```

    ```js wrap preserveIndent
    // 换行时保持缩进（默认行为）
    ```

    ```js wrap preserveIndent=false
    // 换行时不保持缩进
    ```
```

### 可折叠代码块（Collapsible Sections）

```markdown
    ```js collapse={1-5, 12-14}
    // 1-5 行折叠
    import { setup } from 'lib'
    const config = setup()
    function init() { ... }

    // 6-11 行默认可见
    config.start()

    // 12-14 行再次折叠
    config.cleanup()
    config.exit()
    ```
```

### 行号

```markdown
    ```js showLineNumbers
    // 显示行号
    console.log('第 2 行')
    ```

    ```js showLineNumbers=false
    // 隐藏行号
    ```

    ```js showLineNumbers startLineNumber=5
    // 从第 5 行开始编号
    console.log('第 5 行')
    ```
```

---

## 🎬 嵌入视频

直接复制平台提供的 embed iframe 代码即可。

### YouTube

```html
<iframe width="100%" height="468" src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" frameborder="0" allowfullscreen>
</iframe>
```

### Bilibili

```html
<iframe width="100%" height="468" 
  src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" 
  scrolling="no" border="0" frameborder="no" allowfullscreen="true">
</iframe>
```

---

## 📝 草稿模式

在 Frontmatter 中设置 `draft: true`，文章不会发布到线上，仅在本地开发环境可见。

```yaml
---
title: 草稿示例
published: 2024-01-11
draft: true
---
```

发布时将 `draft` 改为 `false` 即可。

---

> 💡 **更多信息**可参考 [Astro 官方文档](https://docs.astro.build/) 和 [Expressive Code 文档](https://expressive-code.com/)。
