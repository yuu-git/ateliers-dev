import React from 'react';
import articlesData from '../../../.submodules/ateliers-shared-resource/Data/JSON/WebSite/ateliers-dev_content-list.json'; // サブモジュールからJSONデータをインポート
import './series-list.css'; // CSSファイルをインポート

const SeriesList = ({ seriesName, exclusion }) => {
  const seriesArticles = [];

  const findSeriesArticles = (articles) => {
    articles.forEach(article => {
      if (article.series === seriesName) {
        seriesArticles.push(article);
      }
      if (article.articles) {
        findSeriesArticles(article.articles);
      }
    });
  };

  articlesData.content.forEach(category => {
    findSeriesArticles(category.articles);
  });

  // seriesNumberでソート
  seriesArticles.sort((a, b) => a.seriesNumber - b.seriesNumber);

  if (seriesArticles.length === 0) {
    return <div>No articles found in this series.</div>;
  }

  return (
    <div className="series-list">
      <table className="series-table">
        <thead>
          <tr>
            <th>タイトルとリンク</th>
            <th>概要説明</th>
          </tr>
        </thead>
        <tbody>
          {seriesArticles.map((article, index) => (
            <tr key={index}>
              <td>
                <span>{article.seriesNumber}. </span>
                {article.seriesId === exclusion ? (
                  article.title
                ) : (
                  <a href={`${articlesData.url}${article.link}`}>{article.title}</a>
                )}
              </td>
              <td>
                {article.seriesId === exclusion ? (
                  '本記事です。'
                ) : (
                  article.description
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeriesList;