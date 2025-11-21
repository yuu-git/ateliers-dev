import React from 'react';
import articlesData from '../../data/ateliers-dev_content-list.json'; // src/data配下からJSONデータをインポート
import './related-articles.css'; // CSSファイルをインポート

// パラメータ:
// - currentUrl: 現在の記事のURLを指定します（string型）。
// - currentSeries: 現在の記事が属するシリーズを指定します（string型）。
// - currentTags: 現在の記事のタグを指定します（array型）。
// - maxItems: 表示する最大件数を指定します（number型、デフォルトは20）。
// - showHeading: 見出しを表示するかどうかを指定します（boolean型、デフォルトはfalse）。
// - title: 見出しのタイトルを指定します（string型、デフォルトは"関連記事"）。
const RelatedArticles = ({ currentUrl, currentSeries, currentTags, maxItems = 20, showHeading = false, title = "関連記事" }) => {
  const relatedArticles = [];

  const findRelatedArticles = (articles, category) => {
    articles.forEach(article => {
      // currentUrl と currentSeries を除外し、AND条件でタグをフィルタリング
      if (
        article.link !== currentUrl &&
        article.series !== currentSeries &&
        article.tags && currentTags.every(tag => article.tags.includes(tag))
      ) {
        relatedArticles.push({ ...article, category, relatedPriority: article.relatedPriority || 0 });
      }
      if (article.articles) {
        findRelatedArticles(article.articles, category);
      }
    });
  };

  articlesData.content.forEach(category => {
    findRelatedArticles(category.articles, category.name);
  });

  // 優先度でソートし、最大表示件数を指定された件数またはデフォルトで制限
  const sortedArticles = relatedArticles.sort((a, b) => b.relatedPriority - a.relatedPriority);
  const maxRelatedArticles = sortedArticles.slice(0, maxItems);

  if (maxRelatedArticles.length === 0) {
    return null; // 関連記事がない場合は何も表示しない
  }

  return (
    <div className="related-articles">
      {showHeading && <h2>{title}</h2>}
      <table className="related-table">
        <thead>
          <tr>
            <th>カテゴリ</th>
            <th>タイトルとリンク</th>
            <th>概要説明</th>
          </tr>
        </thead>
        <tbody>
          {maxRelatedArticles.map((article, index) => (
            <tr key={index}>
              <td>{article.category}</td>
              <td><a href={`${articlesData.url}${article.link}`}>{article.title}</a></td>
              <td>{article.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RelatedArticles;