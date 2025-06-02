import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const featureColors = [
  "#ff6a00", // blazing orange
  "#ff3c00", // bright flame red
  "#ffcc00", // hot yellow (like the core of a flame)
  "#ff1e00", // molten lava red
  "#e25822", // ember orange
  "#ffd700", // golden yellow (radiant heat)
];

const FeatureList = [
  {
    title: "Detonate Old Bookmarks",
    Svg: require("@site/static/img/icon-man-explode.svg").default,
    description: (
      <>
        Don't abandon browser bookmarks because of bookmark debt and fatigue,
        instead detonate old bookmarks.
      </>
    ),
  },
  {
    title: "Take Control",
    Svg: require("@site/static/img/icon-man-burn.svg").default,
    description: (
      <>
        Manage your bookmarks. Your browser's a chaos simulator full of
        decade-old links and folders you’ll never open. Detonate them!
      </>
    ),
  },
  {
    title: "Get Organized",
    Svg: require("@site/static/img/icon-man-door.svg").default,
    description: (
      <>
        ExplosiveBookmarks makes managing bookmarks fun and easy—no more running
        headfirst into a cluttered wall every time you open them.
      </>
    ),
  },
  {
    title: "Browser Plugin",
    Svg: require("@site/static/img/icon-man-boom.svg").default,
    description: (
      <>
        Place mines and claymores on websites to blast friends, blow up page
        elements, and detonate content like a pro. ExplosiveBookmarks turns your
        browser into a fun warzone—clean clutter, cause chaos, and unlock
        explosive Pro features to take control!
      </>
    ),
  },
  {
    title: "Privacy First",
    Svg: require("@site/static/img/icon-man-wolf.svg").default,
    description: (
      <>
        Data brokers are circling like wolves, feasting on your synced bookmarks
        and click history. Explosive Bookmarks cuts the cord—no cloud, no
        surveillance, just raw, local control. Your browser's built-in
        bookmarks, your rules. Light the fuse. Blow the clutter to hell.
      </>
    ),
  },
  {
    title: "Innovation",
    Svg: require("@site/static/img/icon-man-alien.svg").default,
    description: (
      <>
        ExplosiveBookmarks is innovation crashed into your browser like a
        UFO—bringing wild new ways to interact with bookmarks. It’s a fun
        playground for experiments and just the start. Get ready to explore a
        whole new universe of bookmark management!
      </>
    ),
  },
];

function Feature({ Svg, title, description, color }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* Pass the color as a fill or style to the SVG */}
        <Svg
          className={styles.featureSvg}
          role="img"
          style={{ fill: color, color: color }}
        />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3" style={{ color }}>
          {title}
        </Heading>
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
            <Feature
              key={idx}
              {...props}
              color={featureColors[idx % featureColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
