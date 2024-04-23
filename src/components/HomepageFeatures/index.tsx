import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GitHub ガイドライン',
    Svg: require('@site/static/img/svg/github-guidelines.svg').default,
    description: (
      <>
        『私が GitHub をどうやって運用するか』についてのガイドラインです。
        リポジトリの運用方針や、Issue や Pull Request の書き方など、GitHub の使い方について記載しています。
      </>
    ),
  },
  {
    title: 'テクニカル ポリシー',
    Svg: require('@site/static/img/svg/technical-policies.svg').default,
    description: (
      <>
        コーディングガイドラインや、テスト方針、セキュリティなど、技術的方針について記載しています。
        主に、得意とする C# や AI に関することを中心に書いています。
      </>
    ),
  },
  {
    title: 'テクニカル ノート',
    Svg: require('@site/static/img/svg/technical-notebook.svg').default,
    description: (
      <>
        技術的な事のドキュメントです。AI とのやりとりや技術解説の教育資料、技術的なメモを記録し、フィードバックを提供しています。
      </>
    ),
  },
  {
    title: 'プロフィール',
    Svg: require('@site/static/img/svg/profiles.svg').default,
    description: (
      <>
        私のプロフィールです。経歴やスタックスキル、興味などについて記載しています。
      </>
    ),
  },
  {
    title: 'FAQ',
    Svg: require('@site/static/img/svg/faq.svg').default,
    description: (
      <>
        よくある(かもしれない)質問についてまとめたセクションです。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
      </div>
    </section>
  );
}
