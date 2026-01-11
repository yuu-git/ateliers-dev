---
id: llms-txt-documentation
title: llms.txt とは
description: AIツール向け索引ファイルllms.txtの概要・役割・作成方法・運用ルールを詳しく解説
slug: /technical-notebook/ai/llms-txt-documentation
tags:
  - AI
  - ドキュメント
  - プロジェクト運用
  - llms.txt
created: 2025-11-22
updated: 2025-11-22
---
import FullHeader from '@site/src/components/IntegratedArticleComponents/FullHeader';
import FullFooter from '@site/src/components/IntegratedArticleComponents/FullFooter';
import SeriesList from '@site/src/components/SeriesList';
import RelatedArticles from '@site/src/components/RelatedArticles';

# llms.txt とは

<FullHeader
  slug="/technical-notebook/ai/llms-txt-documentation"
  title="llms.txt とは | ateliers.dev"
  created="2025/11/22"
/>

---

AIツール（Large Language Model）がプロジェクトの構造と内容を理解するための索引ファイル「llms.txt」について、概要・役割・作成方法・運用ルールを詳しく解説します。

## 概要

`llms.txt` は、**AI ツール（Large Language Model）がプロジェクトの構造と内容を理解するための索引ファイル**です。

人間が README.md を読んでプロジェクトを理解するように、AI が llms.txt を読んでプロジェクトの全体像を把握します。

## 誕生の背景

### 問題：AI がプロジェクトを理解できない

従来、AI コーディングアシスタント（GitHub Copilot、Cursor、Claude 等）には以下の課題がありました：

```
問題1: ファイルが多すぎる
  ↓
AI がどのファイルを参照すべきか分からない

問題2: ドキュメントが散在
  ↓
重要なガイドラインを見落とす

問題3: プロジェクト固有のルールを伝えられない
  ↓
一貫性のないコードが生成される
```

### 解決：llms.txt による明示的な案内

```
llms.txt を配置
  ↓
AI が最初に読むべき「目次」を提供
  ↓
重要なファイルへ直接案内
  ↓
プロジェクトのルール・構造を理解
  ↓
一貫性のあるコード生成
```

## llms.txt の役割

### 1. 構造の可視化

ディレクトリ構造を明示的に示します。

```markdown
## Directory Structure

project/
├─ src/
│  ├─ components/
│  └─ utils/
├─ tests/
└─ docs/
```

AI は「どこに何があるか」を即座に理解できます。

### 2. 重要ファイルへの案内

主要なドキュメント・ガイドラインへの直接リンクを提供します。

```markdown
## Core Guidelines

- [Coding Standards](docs/coding-standards.md)
- [Test Guidelines](docs/test-guidelines.md)
- [Architecture](docs/architecture.md)
```

AI は「何を参照すべきか」を知ることができます。

### 3. プロジェクト固有のルールの伝達

プロジェクト特有の規約・パターンを説明します。

```markdown
## Technical Details

- **Language**: TypeScript
- **Test Framework**: Jest
- **Naming Convention**: PascalCase for components
- **Import Rule**: Use absolute imports (@/)
```

AI は「このプロジェクトのルール」に従ったコードを生成できます。

### 4. 使用方法の提示

AI ツールごとの参照方法を明示します。

```markdown
## Usage

### Cursor / Cline

@Docs llms.txt

### Claude

このプロジェクトのガイドラインに従ってください：
[llms.txt の URL]

```

## llms.txt の必要性

### なぜ README.md ではダメなのか？

README.md と llms.txt は**目的が異なります**：

| 観点 | README.md | llms.txt |
|:--|:--|:--|
| **対象読者** | 人間 | AI |
| **目的** | プロジェクトの紹介 | 構造とルールの伝達 |
| **内容** | 概要・インストール・使い方 | ディレクトリ構造・ガイドライン・技術仕様 |
| **最適化** | 読みやすさ | 機械可読性 |

README.md は「プロジェクトの宣伝」、llms.txt は「プロジェクトの設計図」です。

### 具体例：README vs llms.txt

#### README.md（人間向け）

```markdown
# My Awesome Project

素晴らしいプロジェクトです！

## Features
- 高速
- 安全
- 使いやすい

## Installation

npm install

```

**人間**：「素晴らしそう！インストールしよう」

**AI**：「どのファイルを参照すればいいか分からない」

#### llms.txt（AI向け）

```markdown
# My Awesome Project

## Directory Structure

src/
  components/  - React components
  utils/       - Utility functions
  types/       - TypeScript types

## Core Guidelines
- [Component Guidelines](docs/components.md)
- [TypeScript Style](docs/typescript.md)

## Technical Details
- Language: TypeScript 5.0
- Framework: React 18
- Test: Jest + Testing Library
```

**AI**：「src/components/ にコンポーネントを配置、docs/components.md のガイドラインに従う」

## llms.txt の構造

### 基本構成

```markdown
# プロジェクト名

> 簡潔な説明

## Overview
基本情報（リポジトリURL、ライセンス、言語等）

## Directory Structure
ディレクトリツリーと各フォルダの説明

## Core Guidelines
主要なガイドラインへのリンクと説明

## Technical Details
技術スタック、フレームワーク、規約

## Usage in AI Tools
AI ツールごとの参照方法
```

### 最小構成の例

最低限、以下があれば機能します：

```markdown
# my-project

## Directory Structure

src/
  main.ts
  utils/

## Core Guidelines
- Use TypeScript strict mode
- Write tests for all public functions

## Technical Details
- Language: TypeScript
- Runtime: Node.js 20
```

## llms.txt の効果

### Before（llms.txt なし）

```
開発者: 「このプロジェクトのテスト書いて」
  ↓
AI: 「適当なテストフレームワークで書きます」
  ↓
開発者: 「いや、Jest を使って」
  ↓
AI: 「分かりました。でも命名規則は？」
  ↓
開発者: 「TESTNAME_XXX_XXXXX 形式で」
  ↓
（毎回説明が必要）
```

### After（llms.txt あり）

```
開発者: 「このプロジェクトのテスト書いて」
  ↓
AI: llms.txt を読む
  ↓
AI: 「Jest で TESTNAME_XXX_XXXXX 形式のテストを生成します」
  ↓
開発者: 「完璧！」
```

## どのプロジェクトに必要か

### 必要性が高いプロジェクト

- ✅ AI によるコード生成を活用するプロジェクト
- ✅ 複数人で開発するプロジェクト
- ✅ プロジェクト固有のルール・規約があるプロジェクト
- ✅ ドキュメントが複数ファイルに分散しているプロジェクト
- ✅ 長期運用するプロジェクト

### 必要性が低いプロジェクト

- ❌ 個人の実験的プロジェクト（小規模・短期）
- ❌ AI を使わないプロジェクト
- ❌ 特別なルールのない標準的なプロジェクト

## llms.txt の作成方法

### ステップ1：構造を把握

```bash
# ディレクトリツリーを生成
tree -L 3 -I 'node_modules|dist|.git'
```

### ステップ2：重要なドキュメントをリスト化

```
プロジェクトで重要なガイドラインは？
- コーディング規約
- テストガイドライン
- アーキテクチャドキュメント
- 命名規則
```

### ステップ3：技術情報を整理

```
- 使用言語・バージョン
- フレームワーク
- テストフレームワーク
- 重要な依存関係
- プロジェクト固有のルール
```

### ステップ4：llms.txt を作成

テンプレートを使用して作成します（後述）。

## llms.txt のテンプレート

### シンプル版

```markdown
# [プロジェクト名]

> [1行の説明]

## Directory Structure

[ディレクトリツリー]

## Core Guidelines

- [重要なガイドライン1]
- [重要なガイドライン2]

## Technical Details

- **Language**: [言語]
- **Framework**: [フレームワーク]
- **Test Framework**: [テストフレームワーク]

## Usage in AI Tools

### Cursor / Cline

@Docs llms.txt

```

## llms.txt のメンテナンス

### 更新タイミング

以下の変更があった場合、llms.txt を更新してください：

- ✅ ディレクトリ構造の変更
- ✅ 主要ガイドラインの追加・削除
- ✅ 技術スタックの変更
- ✅ プロジェクトルールの変更

### 更新不要なケース

- ❌ ガイドライン内容の細かい修正
- ❌ サンプルコードの追加（構造変更なし）
- ❌ README の説明の改善

## AI ツールでの使用方法

### Cursor / Cline

```
@Docs llms.txt
```

または GitHub の Raw URL：

```
@Docs https://raw.githubusercontent.com/[user]/[repo]/main/llms.txt
```

### Claude

会話の最初に：

```
このプロジェクトのガイドラインに従ってください：
https://raw.githubusercontent.com/[user]/[repo]/main/llms.txt
```

### GitHub Copilot

プロジェクトルートに llms.txt を配置すると、自動的にコンテキストとして認識されます。

## まとめ

### llms.txt の本質

```
llms.txt = AI のための「プロジェクトの説明書」
```

### 主な利点

1. **AI の理解を助ける**：プロジェクト構造を明示
2. **一貫性を保つ**：プロジェクト固有のルールを伝達
3. **効率を上げる**：毎回説明する手間を削減
4. **品質を向上**：ガイドラインに沿ったコード生成

### 始め方

1. プロジェクトルートに `llms.txt` を作成
2. ディレクトリ構造を記載
3. 重要なガイドラインへのリンクを追加
4. 技術情報を整理
5. AI ツールで参照

---

**次のステップ**

- [llms.txt のサンプルを見る](https://github.com/yuu-git/ateliers-knowledge/blob/master/llms.txt)

*AI 時代のプロジェクトには、AI のためのドキュメントが必要です。*

<FullFooter
  slug="/technical-notebook/ai/llms-txt-documentation"
  title="llms.txt とは | ateliers.dev"
/>
