import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '個人開発ガイドライン',
    emoji: '⚙️',
    description: (
      <>
        個人開発における判断基準・設計方針・運用ルールをまとめたガイドラインです。<br/>
        GitHub の使い方、コーディング方針などを含みます。
      </>
    ),
  },
  {
    title: 'テクニカル ノート',
    emoji: '📚',
    description: (
      <>
        技術的なドキュメントです。AI とのやりとりや技術解説の教育資料、技術的なメモを記録し、フィードバックを提供しています。
      </>
    ),
  },
  {
    title: 'プロジェクト ナレッジ',
    emoji: '🗂️',
    description: (
      <>
        Ateliers プロジェクトに関するナレッジベースです。GitHub のリポジトリからサブモジュール形式で取り込んでいます。
      </>
    ),
  },
  {
    title: 'プロフィール',
    emoji: '🪪',
    description: (
      <>
        私のプロフィールです。経歴やスタックスキル、興味などについて記載しています。
      </>
    ),
  },
  {
    title: 'FAQ',
    emoji: '💬',
    description: (
      <>
        よくある（かもしれない）質問についてまとめたセクションです。
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
