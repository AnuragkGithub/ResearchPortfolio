import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,
              body {
                margin: 0;
                background: #f4f5ef;
              }

              /* Prevent the actual portfolio from flashing before React/CSS is ready */
              .portfolioAppContent {
                visibility: hidden;
              }

              /* Critical first-paint styles for the research loader */
              .researchLoader {
                position: fixed;
                inset: 0;
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                background: #f4f5ef;
                color: #17251f;
                font-family:
                  Inter,
                  ui-sans-serif,
                  system-ui,
                  -apple-system,
                  BlinkMacSystemFont,
                  "Segoe UI",
                  sans-serif;
              }

              .researchLoaderFrame {
                width: min(1180px, 92vw);
                min-height: 100vh;
                padding: 28px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
              }

              .researchLoaderHeader,
              .researchLoaderFooter {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                color: #50635a;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 2px;
                text-transform: uppercase;
              }

              .researchLoaderHeader i {
                color: #2c8069;
                font-style: normal;
                margin: 0 5px;
              }

              .researchLoaderMain {
                width: min(700px, 90vw);
                margin: auto;
              }

              .loaderInstrument {
                position: relative;
                width: 86px;
                height: 86px;
                margin-bottom: 42px;
              }

              .loaderInstrumentCore {
                position: absolute;
                inset: 50% auto auto 50%;
                transform: translate(-50%, -50%);
                display: grid;
                place-items: center;
                width: 42px;
                height: 42px;
                border: 1px solid rgba(44, 128, 105, 0.35);
                border-radius: 50%;
                color: #2c8069;
                font-size: 14px;
                font-weight: 800;
              }

              .loaderOrbit {
                position: absolute;
                inset: 50% auto auto 50%;
                width: 78px;
                height: 34px;
                border: 1px solid rgba(44, 128, 105, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%) rotate(25deg);
              }

              .loaderOrbitTwo {
                transform: translate(-50%, -50%) rotate(-25deg);
              }

              .loaderAxis {
                position: absolute;
                background: rgba(44, 128, 105, 0.2);
              }

              .loaderAxisHorizontal {
                left: 0;
                top: 50%;
                width: 100%;
                height: 1px;
              }

              .loaderAxisVertical {
                left: 50%;
                top: 0;
                width: 1px;
                height: 100%;
              }

              .loaderSignal {
                position: absolute;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #c96d4b;
              }

              .loaderSignalOne {
                top: 8px;
                left: 25px;
              }

              .loaderSignalTwo {
                right: 8px;
                top: 40px;
              }

              .loaderSignalThree {
                bottom: 9px;
                left: 44px;
              }

              .researchLoaderEyebrow {
                margin: 0 0 18px;
                color: #2c8069;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 3px;
                text-transform: uppercase;
              }

              .researchLoaderMain h1 {
                margin: 0;
                color: #17251f;
                font-family: Georgia, "Times New Roman", serif;
                font-size: clamp(3rem, 7vw, 6.5rem);
                line-height: 0.95;
                letter-spacing: -0.045em;
                font-weight: 500;
              }

              .researchLoaderDescription {
                max-width: 620px;
                margin: 26px 0 46px;
                color: #64736d;
                font-size: 1rem;
                line-height: 1.7;
              }

              .researchLoaderReadout {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                margin-bottom: 12px;
                color: #53645d;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 2px;
                text-transform: uppercase;
              }

              .researchLoaderPercent {
                color: #2c8069;
                font-variant-numeric: tabular-nums;
              }

              .researchLoaderTrack {
                width: 100%;
                height: 2px;
                overflow: hidden;
                background: rgba(44, 128, 105, 0.15);
              }

              .researchLoaderTrack span {
                display: block;
                height: 100%;
                background: #2c8069;
                transition: width 0.08s linear;
              }

              @media (max-width: 650px) {
                .researchLoaderFrame {
                  width: calc(100% - 32px);
                  padding: 20px 0;
                }

                .researchLoaderHeader,
                .researchLoaderFooter {
                  font-size: 8px;
                  letter-spacing: 1.4px;
                }

                .researchLoaderMain h1 {
                  font-size: clamp(2.8rem, 13vw, 4.5rem);
                }

                .researchLoaderDescription {
                  font-size: 0.9rem;
                }
              }
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}