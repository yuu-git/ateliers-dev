import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import customConfig from '../../customConfig';
/* import TitleSvg from './img/ateliers.dev.svg'; */

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const titleImg = require('../../static/img/webp/ateliers-dev-main-title.webp').default;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={titleImg} alt="Title Image" />
          {/* <TitleSvg /> */}
        </div>
        <div className={styles.titleContent}>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <hr/>
          <div className={styles.description}>
            <h2>{customConfig.sitePurposeTitle}</h2>
            <p>{customConfig.sitePurposeDescription}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${customConfig.siteShortDescription}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
