---
title: GitHub Personal Access Token（PAT）更新手順
category: テクニカルノート
description: GitHub Actions用のPAT（Personal Access Token）を発行・更新する手順まとめ
tags: [GitHub, Actions, PAT, セキュリティ, 運用]
---

# GitHub Personal Access Token（PAT）更新手順

---

GitHub Actions などで使う PAT（Personal Access Token）の発行・更新手順をまとめます。

## 1. PAT（Personal Access Token）の発行

1. GitHub右上のアイコン → **Settings** をクリック
2. 左メニューの下部「**Access**」→「**Tokens**」→「**Fine-grained tokens**」または「**Personal access tokens (classic)**」を選択
3. 「**Generate new token**」をクリック
4. トークン名・有効期限・権限（`repo` など）を設定
5. **Generate token** をクリックし、表示されたトークンをコピー

> ※ 公開リポジトリのみなら `public_repo` 権限でも可

---

## 2. リポジトリのSecretsに登録

1. 対象リポジトリの **Settings** → **Secrets and variables** → **Actions** を開く
2. **New repository secret** をクリック
3. Name に `GH_TOKEN_DEPLOY` など、workflowで参照する名前を入力
4. Value にコピーしたPATを貼り付けて **Add secret**

---

## 3. 古いPATの削除

- 使わなくなったPATは **Settings > Access > Tokens** から削除してOK
- セキュリティのため、不要なトークンは必ず削除

---

## 4. よくあるトラブル

- **認証エラー**：PATの有効期限切れや権限不足が主な原因
- **workflowのtoken指定ミス**：`with: personal_token: ${{ secrets.GH_TOKEN_DEPLOY }}` など指定名に注意

---

## 参考
- [GitHub公式ドキュメント: Personal access tokens](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [peaceiris/actions-gh-pages ドキュメント](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key)


