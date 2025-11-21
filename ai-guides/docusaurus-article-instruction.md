# Docusaurus技術記事 追加・更新手順（Copilot用）

この指示書は、AI（GitHub Copilot等）にDocusaurus技術記事の追加・更新を依頼する際の標準手順です。

---

## 1. 記事内容の準備
- タイトル、説明、本文、作成日などを用意する
- 記事ファイルのパスを決める（例：`docs/technical-notebook/github-methods/pat-update-guide.md`）

## 2. 記事ファイルの基本構成
- フロントマター（`---` で囲む。title, description, tags など）
- import文（FullHeader, FullFooter, 必要なら SeriesList, RelatedArticles など）
- FullHeader タグ（slug, title, created, updated など）
- 本文（見出しやリスト、コードブロック等）
- FullFooter タグ（slug, title）

### サンプル構成
```markdown
---
title: 記事タイトル
description: 記事の説明
tags: [タグ1, タグ2]
---

import FullHeader from '@site/src/components/IntegratedArticleComponents/FullHeader';
import FullFooter from '@site/src/components/IntegratedArticleComponents/FullFooter';

<FullHeader
  slug="/記事のスラッグ"
  title="記事タイトル"
  created="YYYY/MM/DD"
  updated="YYYY/MM/DD"/>

---

# 記事タイトル

本文...

---

<FullFooter
  slug="/記事のスラッグ"
  title="記事タイトル"/>
```

## 3. サイドバーやトップページへのリンク追加
- 必要な場合は、その旨もAIに指示する
- 例：`sidebars.ts`や`index.md`の該当箇所にリンクを追加

---

この手順書をAIに渡すことで、Docusaurus記事の追加・更新作業を自動化・標準化できます。
