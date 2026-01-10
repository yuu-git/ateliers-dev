# development-guidelines 統合 移行指示書（Copilot 用）

> 目的：Docusaurus のドキュメント構成を整理し、  
> `github-guidelines` / `technical-policies` / `project-policies` を  
> 新しいカテゴリ `development-guidelines` に統合する。
>
> 対象読者：自分・チームメンバー・友人・興味を持つ読者  
> 性質：強制ルールではなく「私の普段の開発判断・参考情報」

---

## 0. 前提（重要）

- これは **大規模な情報アーキテクチャ変更**である。
- ゴールは「すべてを一気に完璧にする」ではなく、まず **壊さずに統合して、後から微調整できる状態**を作る。
- 変更後の URL 変更は避けられないため、**リダイレクト対応**と **リンク更新**を必ず行う。

---

## 1. 統合後の新しい構造（ゴール）

新カテゴリ：`docs/development-guidelines/`

この配下に、関心事ごとにサブフォルダを作る。

```
docs/
└─ development-guidelines/
　├─ category.json (カテゴリ定義)
　├─ index.mdx (カテゴリの説明・読み方)
　├─ github/
　│ ├─ category.json
　│ └─ ... (元 github-guidelines の内容)
　├─ coding/
　│ ├─ category.json
　│ ├─ csharp/
　│ │ ├─ category.json
　│ │ └─ ... (命名規則・設計方針など)
　│ └─ dotnet/
　├─ project/
　│ ├─ category.json
　│ └─ ... (versioning / release / compatibility など)
　└─ philosophy/
　　├─ category.json
　　└─ ... (設計思想・判断基準)
```


※ `index.mdx` を最初に用意し、「このカテゴリは何か」を先に宣言する。

---

## 2. 移行対象

移行元（例。実際のディレクトリ名は現状に合わせること）：

- `docs/github-guidelines/**`
- `docs/technical-policies/**`
- `docs/project-policies/**`（存在する場合）
- サイドバー定義：`sidebars.ts`
- ドキュメント内リンク：`docs/**` 全域
- もしあればサイトガイドライン（README / /docs の案内ページ 等）

---

## 3. 移行方針（ルール）

### 3.1 URL変更・リンク切れを防ぐ

- 移行後、旧URLから新URLへの **リダイレクト**を設定する。
- Docusaurus の推奨に従い `@docusaurus/plugin-client-redirects` を使うか、
  既存で使っているリダイレクト方式に合わせる。

最低限、次を満たす：

- 旧 docs へのリンクが 404 にならない
- 旧URLでアクセスしても新ページへ誘導できる

### 3.2 “分類” は厳密にやりすぎない

- 最初の移行では「完璧な再分類」よりも **移動・リンク更新・ビルド成功**を優先する。
- 再分類は移行後に細かく調整できるようにする。

### 3.3 ファイル名は可能な限り維持

- 移動時は **ファイル名を変えない**（差分が増えるのを避ける）
- タイトルや見出しは後で整える

---

## 4. マッピング（移行先の割当）

### 4.1 github-guidelines → development-guidelines/github

例：

- `docs/github-guidelines/branching.md`  
  → `docs/development-guidelines/github/branching.md`

- `docs/github-guidelines/actions.md`（CI/CD）  
  → `docs/development-guidelines/github/ci-cd.md`  
  ※ファイル名変更は避けたい場合は `actions.md` のままでも良い

### 4.2 technical-policies → development-guidelines/coding or philosophy

- C# / .NET 固有のルール  
  → `docs/development-guidelines/coding/csharp/**`  
  → `docs/development-guidelines/coding/dotnet/**`

- 設計思想・判断基準（YAGNI, DDD方針など）  
  → `docs/development-guidelines/philosophy/**`

### 4.3 project-policies → development-guidelines/project

- バージョニング、互換性、リリースポリシー  
  → `docs/development-guidelines/project/**`

---

## 5. 実作業手順（Copilot 実行）

### Step A: 新カテゴリの骨組み作成

1) `docs/development-guidelines/` を作成  
2) `docs/development-guidelines/_category_.json` を作成（label/position等）  
3) `docs/development-guidelines/index.mdx` を作成（説明文のみでOK）  
4) `github/`, `coding/`, `project/`, `philosophy/` 各フォルダと `_category_.json` を作成

### Step B: ドキュメントを移動

- `github-guidelines` 配下を `development-guidelines/github/` に移動
- `technical-policies` 配下を `development-guidelines/coding/` または `philosophy/` に移動
- `project-policies` があれば `development-guidelines/project/` に移動

※ 移動後に旧ディレクトリは削除（ただしリダイレクト設定が完了するまでは残しても良い）

### Step C: sidebars.ts を更新

- 既存サイドバーにあった
  - `github-guidelines`
  - `technical-policies`
  - `project-policies`
  のエントリを **削除または非表示**にし、
  `development-guidelines` を新規追加する。

- `development-guidelines` 内のカテゴリがサイドバー上で
  `github / coding / project / philosophy` として見えるようにする。

### Step D: 内部リンクの更新

- `docs/**` を走査し、
  `(/docs/github-guidelines/...)` のようなリンクを新パスに更新する。
- Docusaurus の `@site/docs/...` / 相対リンクの混在に注意し、最小差分で更新する。

### Step E: リダイレクト設定

- 旧URL → 新URL の対応表を作り、
  redirects を定義する。

最低限：
- 旧カテゴリトップ → 新カテゴリトップ
- 主要ページは個別に redirects

例（方針の例。実際の実装に合わせる）：
- `/docs/github-guidelines/*` → `/docs/development-guidelines/github/*`
- `/docs/technical-policies/*` → `/docs/development-guidelines/coding/*` または適切な場所

※ 可能なら「個別ページの旧→新」を明示的に書く（品質が上がる）

### Step F: ビルド確認

- `npm run build`（または `pnpm` / `yarn`）でビルド成功すること
- 404 が出ていないこと
- サイドバーが意図通りに表示されること

---

## 6. 完了条件（Done）

- `development-guidelines` がサイドバーに表示される
- 旧カテゴリのページにアクセスしても 404 にならず新ページへ誘導される
- 主要ページ同士のリンクが切れていない
- ビルドが通る

---

## 7. 禁止事項（やってはいけない）

- 移行と同時に文章を大幅リライトしない（差分が増えすぎる）
- いきなり全ファイル名を変更しない（リンク更新が破綻する）
- リダイレクト無しで旧パスを削除しない（外部リンクが死ぬ）

---

## 8. 移行後にやると良いこと（任意）

- `development-guidelines/index.mdx` に「読む順番」を追記
- `philosophy/` に「このサイトの信条（より良い未来のために）」と接続する短文を追加
- `CHANGELOG` や `SITE-GUIDELINES` など他ドキュメントの参照先を更新
- `API Reference` を追加する場合は、`/api` のように docs と分離する設計を検討

---

## 9. 補助：カテゴリ説明文（index.mdx に貼る用）

この配下は「私が普段、個人開発で何をどう判断し、どう使っているか」の参考情報です。  
正解を押し付けるものではなく、再現可能な形で意思決定を残すためのガイドラインです。

- GitHub の使い方（branch / CI/CD / submodule など）
- コーディング・設計方針（命名、例外設計、設計原則など）
- プロジェクト運営方針（バージョニング、互換性、リリースなど）

読者対象：自分 / チームメンバー / 友人 / この活動に興味のある人

---

## 10. マッピング定義（移行ルール一覧）

このセクションは、Copilot が **移行先を機械的に判断できるようにするための対応表**である。  
判断に迷った場合は、本マッピングを最優先で適用する。

---

### 10.1 github-guidelines → development-guidelines/github

**対象ディレクトリ**

```
docs/github-guidelines/**
```

**移行先**

```
docs/development-guidelines/github/**
```

**マッピングルール**

| 旧パス例 | 新パス例 | 備考 |
|---|---|---|
| github-guidelines/branching.md | development-guidelines/github/branching.md | そのまま移動 |
| github-guidelines/ci-cd.md | development-guidelines/github/ci-cd.md | GitHub Actions / CI |
| github-guidelines/submodules.md | development-guidelines/github/submodules.md | そのまま |
| github-guidelines/repository-structure.md | development-guidelines/github/repository-structure.md | そのまま |

**判断基準**
- GitHub の UI / 機能 / 運用方法 → `github`
- CI/CD でも GitHub Actions 前提なら `github`

---

### 10.2 technical-policies → development-guidelines/coding

**対象ディレクトリ**

```
docs/technical-policies/**
```

#### 10.2.1 C# 関連

**移行先**

```
docs/development-guidelines/coding/csharp/**
```


**マッピング例**

| 旧パス例 | 新パス例 |
|---|---|
| technical-policies/csharp/names-of-namespaces.md | development-guidelines/coding/csharp/names-of-namespaces.md |
| technical-policies/csharp/exception-handling.md | development-guidelines/coding/csharp/exception-handling.md |
| technical-policies/csharp/folder-structure.md | development-guidelines/coding/csharp/folder-structure.md |

**判断基準**
- C# 言語仕様
- .NET に依存しない C# 設計
→ `coding/csharp`

---

#### 10.2.2 .NET / ランタイム / DI 関連

**移行先**

```
docs/development-guidelines/coding/dotnet/**
```


**マッピング例**

| 旧パス例 | 新パス例 |
|---|---|
| technical-policies/dotnet/di.md | development-guidelines/coding/dotnet/di.md |
| technical-policies/dotnet/logging.md | development-guidelines/coding/dotnet/logging.md |
| technical-policies/dotnet/configuration.md | development-guidelines/coding/dotnet/configuration.md |

**判断基準**
- .NET の仕組み
- DI / Configuration / Logging など
→ `coding/dotnet`

---

### 10.3 technical-policies → development-guidelines/philosophy

**対象**
- 言語やツールに依存しない設計思想
- 判断基準・考え方・方針の文章

**移行先**

```
docs/development-guidelines/philosophy/**
```


**マッピング例**

| 旧パス例 | 新パス例 |
|---|---|
| technical-policies/design-principles.md | development-guidelines/philosophy/design-principles.md |
| technical-policies/yagni.md | development-guidelines/philosophy/yagni.md |
| technical-policies/decision-making.md | development-guidelines/philosophy/decision-making.md |

**判断基準**
- 「なぜそうするか」を説明している
- ルールではなく考え方
→ `philosophy`

---

### 10.4 project-policies → development-guidelines/project

※ 今回は **versioning.mdx を含めない**  
（統合リファクタ完了後に追加する）

**対象ディレクトリ**

```
docs/project-policies/**
```

**移行先**

```
docs/development-guidelines/project/**
```


**マッピング例（versioning 以外）**

| 旧パス例 | 新パス例 |
|---|---|
| project-policies/release-policy.md | development-guidelines/project/release-policy.md |
| project-policies/compatibility.md | development-guidelines/project/compatibility.md |
| project-policies/deprecation.md | development-guidelines/project/deprecation.md |

**判断基準**
- プロジェクト全体の運営・判断ルール
→ `project`

---

### 10.5 移行対象外（今回やらないもの）

以下は **今回の統合リファクタでは移行しない**。

- 新規追加予定の `versioning.mdx`
- 配布プログラム（EXE）向けドキュメント
- NuGet ライブラリ解説ドキュメント
- API Reference（将来対応）

これらは統合完了後、**独立したサイドバー or セクションとして追加**する。

---

### 10.6 判断に迷った場合の優先順位

1. GitHub の使い方 → `github`
2. 書き方・設計 → `coding`
3. 考え方・思想 → `philosophy`
4. プロジェクト運営 → `project`
5. それでも迷う → `philosophy` に一旦置く（後で分割可能）

---

### 10.7 Copilot への最終指示文（貼り付け用）

> このマッピング定義に従って、  
> 旧ディレクトリから `docs/development-guidelines/**` へ移行してください。  
> versioning.mdx は今回は移行対象外とします。  
> 移行後は sidebars.ts・内部リンク・リダイレクト設定まで含めて整合性を保ってください。

---
