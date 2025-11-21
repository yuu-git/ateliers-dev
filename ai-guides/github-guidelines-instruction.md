
# GitHubガイドライン記事 生成・更新指示書（Copilot用）

この指示書は、AI（GitHub Copilot等）に「GitHubガイドライン」セクションの記事を追加・更新させる際の標準手順です。

---

## 1. 記事内容の準備
- タイトル、説明、本文、作成日などを用意する
- 記事ファイルのパス例：`docs/github-guidelines/` 配下

## 2. 記事ファイルの基本構成と各要素の記述ルール

### 2-1. Docusaurusメタデータ（YAMLフロントマター）
- 記事の一番最初には、必ず Docusaurus メタデータ（YAMLフロントマター）を記載してください。
- メタデータのテンプレートは `docs/github-guidelines/.template.md` など既存記事を参照してください。
- コメントアウトされていない行は必須項目です。コメントアウトされている行はコピー不要です。
- 各項目の内容は記事ごとに適切に変更してください。

### 2-2. import文
- Docusaurusメタデータの直後に、以下のimport文を必ず記載してください（不要なものは削除可）。
	```jsx
	import FullHeader from '@site/src/components/IntegratedArticleComponents/FullHeader';
	import FullFooter from '@site/src/components/IntegratedArticleComponents/FullFooter';
	import RelatedArticles from '@site/src/components/RelatedArticles';
	```

### 2-3. FullHeaderの挿入
- 記事の見出し1（# 記事タイトル）の直後に、必ずFullHeaderタグを記載してください。
- 例：
	```jsx
	<FullHeader
		slug="/github-guidelines/branch-strategy"
		title="ブランチ戦略 | ateliers.dev"
		created="YYYY/MM/DD"/>
	```
- slugはページのユニークIDとなり、ファイルの位置で決定してください。
- titleは必ず「記事タイトル | ateliers.dev」としてください。

### 2-4. 本文
- 見出しやリスト、手順、コード例等を記載してください。

### 2-5. FullFooterの挿入
- 記事の一番最後には、必ずFullFooterタグを記載してください。
- 例：
	```jsx
	<FullFooter
		slug="/github-guidelines/branch-strategy"
		title="ブランチ戦略 | ateliers.dev"/>
	```
- slugはページのユニークIDとなり、ファイルの位置で決定してください。
- titleは必ず「記事タイトル | ateliers.dev」としてください。

---


## 3. 記事追加・更新時の各種リスト・インデックスの更新

- 新しい記事を追加・カテゴリを編集した場合、必ず `src/data/ateliers-dev_content-list.json`（テーブル用）と `sidebars.ts`（サイドバー用）のカテゴリ名・順序・階層を一致させてください。
	- 例：テーブルで「GitHubガイドライン」カテゴリに記事を追加した場合、サイドバーの同名カテゴリにも同じ順序・内容で追加すること。
	- 必ず `"id": "github-guidelines"` の配下（github-guidelinesカテゴリ内）に配置してください。
	- カテゴリ名・順序・階層が不一致だと、ユーザー体験や自動化運用に不整合が生じます。
- `src/data/ateliers-dev_content-list.json` には、適切なカテゴリ・階層に `title`, `link`, `description` などを記載してください。
- `sidebars.ts` の `githubGuidelinesSidebar` も同じカテゴリ・順序・階層で記事IDを追加してください。
- `docs/github-guidelines/index.md` の一覧にもリンクを追加

---

この指示書に従い、GitHubガイドライン記事の追加・更新をAIに依頼してください。
