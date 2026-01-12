---
title: Gitのタグ（Tag）運用・管理ガイド
category: テクニカルノート
description: Gitのタグ（Tag）の基本、運用ルール、作成・削除・共有方法、CI/CD連携などを解説します。
tags: [Git, Tag, 運用, バージョン管理, CI/CD]
---

# Gitのタグ（Tag）運用・管理ガイド

---

Gitのタグ（Tag）は、リリースや重要なスナップショットに名前を付けて記録するための機能です。ここではタグの基本、運用ルール、作成・削除・共有方法、CI/CD連携のポイントをまとめます。

## 1. タグの基本

- タグは特定のコミットに「名前」を付けて記録する仕組み
- 主にリリースやバージョン管理、マイルストーンの明示に利用
- 軽量タグ（lightweight）と注釈付きタグ（annotated）がある

## 2. タグの作成・確認・削除

### タグの作成

- 軽量タグ: `git tag v1.0.0`
- 注釈付きタグ: `git tag -a v1.0.0 -m "リリースコメント"`

### タグ一覧の確認

- `git tag`

### タグの削除

- ローカル: `git tag -d v1.0.0`
- リモート: `git push origin :refs/tags/v1.0.0`

## 3. タグの共有・取得

- タグをリモートに送信: `git push origin v1.0.0`
- すべてのタグを送信: `git push origin --tags`
- リモートのタグを取得: `git fetch --tags`

## 4. タグ運用のベストプラクティス

- リリースごとに一意なバージョン名でタグを付与
- 注釈付きタグを推奨（作成者・日付・コメントが記録される）
- タグ名の命名規則をチームで統一（例: `v1.2.3`）
- タグ削除・再作成は慎重に（CI/CDや他開発者への影響大）

## 5. タグとCI/CDの連携

- タグPushをトリガーにリリース自動化（GitHub Actions等）
- 例: `.github/workflows/release.yml` で `on: push: tags: [ 'v*.*.*' ]` など
- タグ名をバージョン番号としてビルド・デプロイに利用

---

## 参考
- [Git公式ドキュメント: タグ](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E3%82%BF%E3%82%B0)
- [GitHub Docs: タグの管理](https://docs.github.com/ja/repositories/releasing-projects-on-github/managing-releases-in-a-repository/managing-tags-in-a-repository)


