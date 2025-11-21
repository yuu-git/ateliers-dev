
# テクニカルノート記事 生成・更新指示書（Copilot用）

この指示書は、AI（GitHub Copilot等）に「テクニカルノート」セクションの記事を追加・更新させる際の標準手順です。

---

## 1. 記事内容の準備
- タイトル、説明、本文、作成日などを用意する
- 記事ファイルのパス例：`docs/technical-notebook/` 配下

## 2. 記事ファイルの基本構成と各要素の記述ルール

### 2-1. Docusaurusメタデータ（YAMLフロントマター）
- 記事の一番最初には、必ず Docusaurus メタデータ（YAMLフロントマター）を記載してください。
- メタデータのテンプレートは `docs/technical-notebook/.template.md` を参照してください。
- コメントアウトされていない行は必須項目です。コメントアウトされている行はコピー不要です。
- 各項目の内容は記事ごとに適切に変更してください。

### 2-2. import文
- Docusaurusメタデータの直後に、以下のimport文を必ず記載してください（不要なものは削除可）。
  ```jsx
  import FullHeader from '@site/src/components/IntegratedArticleComponents/FullHeader';
  import FullFooter from '@site/src/components/IntegratedArticleComponents/FullFooter';
  import SeriesList from '@site/src/components/SeriesList';
  import RelatedArticles from '@site/src/components/RelatedArticles';
  ```

### 2-3. FullHeaderの挿入
- 記事の見出し1（# 記事タイトル）の直後に、必ずFullHeaderタグを記載してください。
- 例：
  ```jsx
  <FullHeader
    slug="/technical-notebook/dotnet/github-actions/vulnerability-scan"
    title="【.NET】GitHub Actions で脆弱性検査を実行 | ateliers.dev"
    created="2024/05/18"/>
  ```
- slugはページのユニークIDとなり、ファイルの位置で決定してください。
- titleは必ず「記事タイトル | ateliers.dev」としてください。

### 2-4. 本文
- 見出しやリスト、技術解説、コード例等を記載してください。

### 2-5. FullFooterの挿入
- 記事の一番最後には、必ずFullFooterタグを記載してください。
- 例：
  ```jsx
  <FullFooter
    slug="/technical-notebook/dotnet/github-actions/vulnerability-scan"
    title="【.NET】GitHub Actions で脆弱性検査を実行 | ateliers.dev"/>
  ```
- slugはページのユニークIDとなり、ファイルの位置で決定してください。
- titleは必ず「記事タイトル | ateliers.dev」としてください。

---


## 3. 記事追加・更新時の各種リスト・インデックスの更新

- 新しい記事を追加した場合、必ず `src/data/ateliers-dev_content-list.json` に該当記事のエントリを追加・更新してください。
  - 適切なカテゴリ・階層に、`title`, `link`, `description` などを記載します。
  - これによりコンテンツ一覧テーブルや関連記事リストに自動反映されます。
- `sidebars.ts` の `technicalNotebookSidebar` に記事IDを追加
- 記事を追加・更新した場合は、必ず `docs/technical-notebook/index.md` の `<DateAndCopyUrlHeader ... updated="YYYY/MM/DD"/>` も最新日付に更新すること
- 必要に応じて、`docs/site-guidance/index.md` や `docs/site-guidance/planned-content-and-update-history.md` も更新し、内容を反映・案内すること。これらを更新した場合も `<DateAndCopyUrlHeader ... updated="YYYY/MM/DD"/>` を最新日付に変更すること

---

この指示書に従い、テクニカルノート記事の追加・更新をAIに依頼してください。
