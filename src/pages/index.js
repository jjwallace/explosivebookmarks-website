// import clsx from "clsx";
// import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

// import Heading from "@theme/Heading";
// import styles from "./index.module.css";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Download Plugin
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />"
//     >
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { useEffect, useRef, useState } from "react";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

const slogans = [
  "Your detonator for the web.",
  "Blow up your bookmark bloat.",
  "Clear the clutter. Keep the impact.",
  "Kaboom your chaos.",
  "Because bookmarks shouldn't be a minefield.",
  "Minimal effort. Maximum detonation.",
  "Organize explosively. Browse intentionally.",
  "Declutter the web—one boom at a time.",
  "Your browser's reset button.",
  "Smart cleanup with a blast.",
  "Explode the mess. Reveal the useful.",
  "Reclaim your web—one bookmark at a time.",
  "Tactical cleanup for your digital life.",
  "Make your browser feel brand new.",
  "Launch your bookmarks into order.",
  "Bookmark fatigue? Time to detonate.",
  "Where digital chaos meets precision cleanup.",
  "Web curation, with an attitude.",
  "Organize like a bomb squad.",
  "Leave no bookmark behind.",
  "A new tab, a fresh start.",
  "Memory meets momentum.",
  "Control the chaos, don't just collect it.",
  "Nuclear cleanup for your browser.",
  "Clean up with force, not friction.",
];

function PhaserBackground() {
  const gameRef = useRef(null);
  const phaserGameRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js";
    script.onload = () => {
      initializePhaserGame();
    };
    document.head.appendChild(script);

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy();
      }
      document.head.removeChild(script);
    };
  }, []);

  const initializePhaserGame = () => {
    if (!window.Phaser || !gameRef.current) return;

    const width = gameRef.current.offsetWidth || 1200;
    const height = gameRef.current.offsetHeight || 400;

    let sprite;
    let deadGroup = null;

    function preload() {
      this.load.crossOrigin = "Anonymous";
      this.load.spritesheet(
        "ms",
        "https://jjwallace.github.io/assets/examples/images/boom.png",
        256,
        256,
        64
      );
    }

    function create() {
      createSprite.call(
        this,
        random(0, width),
        random(0, height),
        randomRotation(),
        Math.floor(Math.random() * 30)
      );
    }

    function createSprite(x, y, r, f) {
      if (!deadGroup) {
        deadGroup = this.add.group();
      }
      sprite = this.add.sprite(40, 100, "ms");
      sprite.x = x;
      sprite.y = y;
      sprite.angle = r;
      sprite.alpha = 0.7;
      var anim = sprite.animations.add("boom");
      anim.frame = f;
      anim.play("boom", 60, false);
      anim.killOnComplete = true;
      anim.onComplete.add(function () {
        if (deadGroup) {
          deadGroup.add(this);
        }
      }, sprite);
    }

    function update() {
      if (deadGroup != null) {
        deadGroup.forEach(function (sprite) {
          sprite.destroy();
        });
      }
      if (Math.random() < 0.3) {
        createSprite.call(
          this,
          random(0, width),
          random(0, height),
          randomRotation(),
          0
        );
      }
    }

    function random(min, max) {
      return Math.floor(Math.random() * max + min);
    }

    function randomRotation() {
      return Math.floor(Math.random() * 180 - 180);
    }

    phaserGameRef.current = new window.Phaser.Game({
      width: width,
      height: height,
      renderer: window.Phaser.AUTO,
      parent: gameRef.current,
      backgroundColor: "#eab676",
      state: {
        preload: preload,
        create: create,
        update: update,
      },
    });
  };

  return (
    <div
      ref={gameRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

function RotatingSlogan({ slogans, secondsPerSlogan = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 300); // Half second for fade out/in transition
    }, secondsPerSlogan * 1000);

    return () => clearInterval(interval);
  }, [slogans.length, secondsPerSlogan]);

  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <p
        style={{
          fontSize: "1.7rem",
          fontWeight: "500",
          color: "rgba(255, 255, 255, 0.9)",
          textAlign: "center",
          margin: 0,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          fontStyle: "italic",
        }}
      >
        {slogans[currentIndex]}
      </p>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [selected, setSelected] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [glowActive, setGlowActive] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const browsers = [
    {
      id: "brave",
      label: "Brave",
      icon: "img/icon-browser-brave.png",
      downloadPath: "/downloads/brave.zip",
    },
    {
      id: "chrome",
      label: "Chrome",
      icon: "img/icon-browser-chrome.png",
      downloadPath: "/downloads/chrome.zip",
    },
    {
      id: "firefox",
      label: "Firefox",
      icon: "img/icon-browser-firefox.png",
      downloadPath: "/downloads/firefox.zip",
    },
  ];

  useEffect(() => {
    if (glowActive && !selected) {
      const interval = setInterval(() => {
        setHighlightIndex((prev) => (prev + 1) % browsers.length);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [glowActive, selected]);

  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <PhaserBackground />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {/* Rotating Slogan Section */}
        <RotatingSlogan slogans={slogans} secondsPerSlogan={4} />

        <div
          style={{
            backgroundColor: "rgba(43, 43, 43, 0.5)",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {browsers.map((browser, index) => {
              const isSelected = selected === browser.id;
              const isGlowing =
                glowActive && !selected && highlightIndex === index;
              return (
                <div
                  key={browser.id}
                  onClick={() => setSelected(browser.id)}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    border: isSelected
                      ? "6px solid white"
                      : "6px solid transparent",
                    boxShadow: isGlowing
                      ? "0 0 10px 5px rgba(255,255,255,0.4)"
                      : "none",
                    cursor: "pointer",
                    padding: "4px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={browser.icon}
                    alt={browser.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {showPrompt && (
            <div
              style={{
                color: "#fff",
                fontSize: "0.9rem",
                opacity: 0.8,
                animation: "fadeinout 2s ease-in-out",
                textAlign: "center",
                marginTop: "-5px",
              }}
            >
              Choose a browser
            </div>
          )}

          <Link
            className="button button--secondary button--lg"
            to={
              selected
                ? browsers.find((b) => b.id === selected).downloadPath
                : "#"
            }
            onClick={(e) => {
              if (!selected) {
                e.preventDefault();
                setGlowActive(true);
                setShowPrompt(true);
                setTimeout(() => setShowPrompt(false), 2000);
              }
            }}
            style={{
              transition: "opacity 0.3s ease",
            }}
          >
            Download Plugin
          </Link>
        </div>
      </div>

      {/* Fade animation keyframes */}
      <style>
        {`
        @keyframes fadeinout {
          0% { opacity: 0; }
          25% { opacity: 0.8; }
          75% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        `}
      </style>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
