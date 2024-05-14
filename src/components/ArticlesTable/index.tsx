import React, { useEffect, useState } from 'react';
import articlesData from '../../../.submodules/ateliers-shared-resource/Data/JSON/WebSite/ateliers-dev_content-list.json'; // サブモジュールからJSONデータをインポート
import './articles-table.css'; // CSSファイルをインポート

const ArticlesTable = ({ categoryId }) => {
    const [category, setCategory] = useState(null);
  
    useEffect(() => {
      const selectedCategory = articlesData.content.find(cat => cat.id === categoryId);
      setCategory(selectedCategory);
    }, [categoryId]);
  
    if (!category) {
      return <div>Loading...</div>;
    }
  
    const baseUrl = category.url || ''; // カテゴリのURLを取得し、デフォルト値を空文字列に設定
  
    const renderArticles = (articles, level = 0) => {
      return articles.map((article, index) => (
        <React.Fragment key={index}>
          <tr>
            <td className={`level-${level}`}>
              <div style={{ fontWeight: article.link ? 'normal' : 'bold' }}>
                {article.link ? (
                  <a href={`${baseUrl}${article.link}`}>{article.title}</a>
                ) : (
                  article.title
                )}
              </div>
            </td>
            <td>{article.description}</td>
          </tr>
          {article.articles && renderArticles(article.articles, level + 1)}
        </React.Fragment>
      ));
    };
  
    return (
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>タイトルとリンク</th>
              <th>概要説明</th>
            </tr>
          </thead>
          <tbody>
            {renderArticles(category.articles)}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ArticlesTable;