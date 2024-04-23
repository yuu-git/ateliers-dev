# ateliers-dev - repository information

このリポジトリは Docusaurus を使って生成する静的サイトのソースコードです。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) です。  
詳細については、[LICENSE](LICENSE) ファイルをご確認ください。  
  
(This project is licensed under the terms of the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details. )

## Docusaurus について

Docusaurus は、React と Markdown を使って静的サイトを生成するためのツールです。  
オープンソースで Facebook によって開発されています。

公式サイトは、以下のリンクからアクセスできます。
[Docusaurus](https://docusaurus.io/)

素晴らしいツールを提供してくれた Facebook に感謝します。

## 開発と動作確認の環境

*<2024/04/23 時点>*
以下の環境にて、開発と動作確認を行っています。

OS: Windows 11 Pro  
IDE: VS Code 1.88.1  
IDE Extension:   
* GitHub Copilot 1.181.0  
Node.js: v20.7.0

Docusaurus のバージョンは 3.2.1 です。

## ブランチについて

このリポジトリでは、以下のブランチを使用しています。

* `master` ブランチ: 
    GitHub Pages リリース用のブランチです。軽微な修正やドキュメントの更新などは、このブランチで直接作業します。
* `develop` ブランチ:
    開発用のブランチです。プラグイン追加や機能修正など、大幅な変更を行う場合は、このブランチで作業してから `master` ブランチにマージします。
* `gh-pages` ブランチ: 
    GitHub Pages の公開用ブランチです。

`gh-pages` ブランチには、ビルド済みの静的ファイルが格納されています。
このブランチは、`master` ブランチが更新されると GitHub Actions によって自動的に更新されます。
ワークフローについては `.github/workflows/deploy.yml` を参照してください。

## 貢献について

このプロジェクトにフィードバックや提案がある場合は、GitHubのIssueを通じてお知らせください。  
貢献が予想される場合は、`CONTRIBUTING.md` を追加し、具体的な貢献方法について詳細を記述します。

## 技術的な問題や質問について

このプロジェクトに関する質問やフィードバック、提案があれば、GitHubのIssueを通じてお知らせください。
