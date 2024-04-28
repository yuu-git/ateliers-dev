---
id: technical-policies-csharp-names-of-namespaces
slug: /technical-policies/csharp/names-of-namespaces/
category: テクニカルポリシー
title: ateliers.dev - テクニカルポリシー - 【C#】 名前空間の命名方針
sidebar_label: 【C#】 名前空間の命名方針
tags: [C#, naming-policy, namespace]
description: ateliers.dev のコンテンツ「テクニカルポリシー」です。C# における名前空間の命名方針について記載しています。
image: img/jpg/ateliers-dev-technical-policies.jpg
---

# 【C#】 名前空間の命名方針

*[Created: 2024/04/29, Update: none(same as creation date) ]*

---

私の C# プロジェクトにおける名前空間の命名方針について記載します。  
**ベストプラクティスではなく、飽くまでも、私のプロジェクトにおける方針です。**  
参考にしていただければ幸いです。

---

## 1. 基本的な考え方

基本的に、MicrosoftのC#における名前空間の命名方針に従います。

参考: :outbox_tray:[Microsoft - 名前付けのガイドライン - 名前空間の名前](https://learn.microsoft.com/ja-jp/dotnet/standard/design-guidelines/names-of-namespaces)

上記に従い、私のC#の名前空間は、以下のように命名します。

```csharp
Ateliers.(<Product>|<Technology>)[.<Feature>][.<Subnamespace>]
```

---

## 2. 名前空間の命名方針の概要

* `Ateliers` は、私のプロジェクトの全てにおいて、名前空間のルートとします。
* 英単語を組み合わせて構成します。テクノロジー名やサービス名、国際的に通用する明瞭な英語を使用します。
* パスカルケースを使用し、必ず先頭は大文字で始めます。途中に大文字を含めるのも可能とします。
* 数字は使用可能です。（システム的に先頭には使用できません）
* 適切に略語を使用します。略語の意味を明確にし、一般的ではない略語とプロジェクト固有の略語は、極力避けます。
* ハイフン("-")やアンダースコア("_")および特殊文字は使用しません。

その他の方針については、Microsoftのガイドラインに従うため、省略します。  
（`Log` や `Text` などの競合しやすい名前は使わない、など）

次に、これらの命名方針の理由を具体化します。

### 2.1. 命名方針：推奨事項の具体的理由

> * `Ateliers` は、私のプロジェクトの全てにおいて、名前空間のルートとします。

`ateliers.dev` が私の保有ドメインであるため `Ateliers` を名前空間のルートとすることで、他のプロジェクトとの競合を避けます。

> * 英単語を組み合わせて構成します。テクノロジー名やサービス名、国際的に通用する明瞭な英語を使用します。

英単語を組み合わせることで、名前空間の理解を容易にします。

> * パスカルケースを使用し、必ず先頭は大文字で始めます。途中に大文字を含めるのも可能とします。

C#の標準的な命名規則です。パスカルケースを使用します。

> * 数字は使用可能です。（システム的に先頭には使用できません）

特別な特記事項となる項目はありませんが、C#では先頭に数字を使用することはできません。

### 2.2. 命名方針：注意事項の具体的理由

> * 適切に略語を使用します。略語の意味を明確にし、一般的ではない略語とプロジェクト固有の略語は、極力避けます。

略語を適切に使うことで、冗長な名前空間を避けます。  
これにより、名前空間の素早い理解ができるようにすることが目的です。

しかし、略語は一般的では無かったりプロジェクト固有のものを使うと、理解が難しくなる可能性があるため、極力避けるようにします。  
（極力であり、使ってはならない、というわけではありません）

例えば、ユーザー管理機能 (User Management) を `UM` と略すと、他の開発者が理解するのに時間がかかる可能性があります。  
このような場合は、略語を使わずに `UserManagement` とすることで、他の開発者が理解しやすくなります。

### 2.3. 命名方針：禁止事項の具体的理由

> * ハイフン("-")やアンダースコア("_")および特殊文字は使用しません。

ハイフン("-")およびアンダースコア("_")は、どちらも仕様上は利用が可能ですが  
C#の名前空間においての利用はあまり一般的ではないため、使用しないようにします。

特殊文字は異常に繋がる可能性があるため、使用しないようにします。

---

## 3. リポジトリへの名前空間適用

リポジトリ作成の際は、名前空間を使用してリポジトリを作成します。

例えばソリューション `Ateliers.Functions.GPTAPI` からリポジトリを作成する場合  
リポジトリ名は `ateliers-functions-gptapi` となります。

より詳しいリポジトリの命名方針については、以下の内部ドキュメントを参照してください。

参考: :page_facing_up:[GitHub ガイドライン - リポジトリの命名方針](/docs/github-guidelines/repository-naming-policy/):leftwards_arrow_with_hook:

### 3.1. ソリューションが複数プロジェクトを持つ場合

以下のように、ソリューションが複数プロジェクトを持ち、どれをリポジトリ名とするか、あいまいなケースがあります。

* Ateliers.Training.PresentationLayer.BlazorWebApp
* Ateliers.Training.PresentationLayer.MAUIApps
* Ateliers.Training.PresentationLayer.WebAPI

この場合、ソリューション名は各プロジェクト共通のルート `Ateliers.Training.PresentationLayer` とします。  
リポジトリ名は `ateliers-training-presentationlayer` とします。

---

## 4. テストプロジェクトの名前空間

テストプロジェクトの名前空間は、以下のように命名します。

`Ateliers.Functions.GPTAPI` のテストプロジェクトを作成する場合：

| テスト種別 | 名前空間 |
| --- | --- |
| 単体テスト | `Ateliers.Functions.GPTAPI.UnitTests` |
| 結合テスト | `Ateliers.Functions.GPTAPI.IntegrationTests` |
| テストリソース | `Ateliers.Functions.GPTAPI.TestResources` |
| Stab | `Ateliers.Functions.GPTAPI.Stubs` |

単体テストは `Mock` を使用し、結合テストは `Stub` を使用します。  
より詳しいテストについては、テスト戦略のドキュメントを参照してください。  
（作成中）

---

## 5. 命名規則の例外ケース

　***現在のところ、例外ケースの追加は、特にありません。***

---

## 6. 使用中の名前空間

プロダクト以外の名前空間は、以下のように命名して使用中です。  
随時更新します。

| 名前空間 | 利用目的 |
| --- | --- |
| Ateliers.Core | 全プロジェクトの中核となるコアライブラリ |
| Ateliers.Functions.【機能名】 | 単体機能の NuGet を提供するソリューション |
| Ateliers.Training.【学習名】 | 個人の学習や研究用のソリューション |
| Ateliers.Lectures.【教材名】 | 講義や機能説明用のソリューション |

### 6.1. 使用不可の名前空間

以下は C# 以外で使っているため、使用しないでください。

| リポジトリ名 | 利用目的 |
| --- | --- |
| ateliers-dev | 当WEBサイトのリポジトリ |
| ateliers-ai-assistants | AIサポート機能用のリポジトリ |

---
