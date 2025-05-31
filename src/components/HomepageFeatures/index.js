import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Detonate Old Bookmarks",
    Svg: require("@site/static/img/icon-bomb.svg").default,
    description: (
      <>
        Don't abandon browser bookmarks because of bookmark debt and fatigue,
        instead dotonate old bookmarks.
      </>
    ),
  },
  {
    title: "Take Control",
    Svg: require("@site/static/img/icon-sub.svg").default,
    description: (
      <>Manager your bookmarks like a command center in a nuclear submarine.</>
    ),
  },
  {
    title: "Browser Plugin",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        ExplosiveBookmarks is a browser plugin that makes bookmarks fun again
        and gives you control.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
