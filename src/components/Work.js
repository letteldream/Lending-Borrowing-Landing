import Header from "./Header";
import Background from "./../assets/sec_1_background.png";
import Background2 from "./../assets/sec_2_background.png";
import Background3 from "./../assets/sec_3_background.png";
import Background4 from "./../assets/sec_4_background.png";

import A1 from "./../assets/ic_1.png";
import A2 from "./../assets/ic_2.png";
import A3 from "./../assets/ic_3.png";

import IC1 from "./../assets/mic_1.png";
import IC2 from "./../assets/mic_2.png";
import IC3 from "./../assets/mic_3.png";
import IC4 from "./../assets/mic_4.png";
import Footer from "./Footer";

import "./../assets/style/Work.css";

export default function Work() {
  const details_data = [
    {
      id: 1,
      icon: A1,
      title: "Utilization",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 2,
      icon: A2,
      title: "Liquidity",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      icon: A3,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
  ];

  const product_data = [
    {
      id: 1,
      title: "Seamless  Experience",
      description:
        "We aim to build a UI/UX experience from the ground up that simplifies the current deposit to borrowing flow and then deploys the same.",
    },
    {
      id: 2,
      title: "Staking Rewards",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      title: "Multi-Chain  Experience",
      description:
        "Our goal is to reach as many users as possible, which would mean deploying Aira Protocol to a number of L1s and L2s",
    },
    {
      id: 4,
      title: "Additonal Key Feature",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const growth_strategy = [
    {
      id: 1,
      icon: IC1,
      title: "Interest",
      description:
        "There will be a variable interest fee based on the underlying asset against which the stable coin is minted. The base interest will range from 0% to 10%.",
    },
    {
      id: 2,
      icon: IC2,
      title: "Initial Borrow Fee",
      description:
        "Every new borrower will automatically accrue initial borrow fees. This will help us to keep the interest low. This fees ranges from 0.5% to 1%.",
    },
    {
      id: 3,
      icon: IC3,
      title: "Liquidation Fee",
      description:
        "Every time a position is liquidated, there is a liquidation fee. This fee ranges from 2.5% to 12.5%.",
    },
    {
      id: 3,
      icon: IC4,
      title: "Distribution of Fees & Interest",
      description:
        "80% of all the interest and fees collected will be distributed amongst all stakers. 20% of the interest and fees collected will be sent to the treasury.",
    },
  ];

  const our_roadmap = [
    {
      id: 1,
      title: "Phase One",
      description:
        "Between Uniswap & Curve we have over $13 billion in TVL, that lies untapped and ready to be deployed towards more productive tasks ",
      sec_des:
        "We are focusing on is stETH from Lido or other variants of staked ETH. There are $8b of stETH on the market, and we as a platform can provide efficient use of capital for users who are staking their ETH with Lido by allowing them to borrow against it to either hedge or just to get the extra liquidity.",
    },
    {
      id: 2,
      title: "Phase Two",
      description:
        "4-6 weeks post the first launch sprint, we aim to expand to add compatibility for roll-ups/L2s.  Followed by a  launch on AVAX, Aurora, and other EVM-compatible chains. ",
      sec_des:
        "This would be quite contingent on how we see EVM compatibility develop on the Cosmos ecosystem over the next few weeks as we see an opportunity to be exploited with untapped demand for feature-rich DeFi offerings.",
    },
    {
      id: 3,
      title: "Future Frontiers",
      description:
        "With the potential launch of our EUR, YUAN, YEN, JPY, and other stable coins that users can mint/borrow instead of the USD stable coin, this will lead us to offer FX trading capabilities in-house which will lead to extra revenues for the platform.",
      sec_des:
        "And extra revenues lead to increased staking yields. After we are done with expansion to EVM chains, we will then begin our expansion into non-EVM chains such as Solana, Cosmos, Near, etc",
    },
  ];

  return (
    <>
      <Header />
      {/* Section 1 - */}
      <section
        className="sec-1"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sec-1-info mt-20">
          <div>
            <p className="sec-1-title">
              Aira Protocol is a <br></br> collateralized debt platform
            </p>
            <p className="subtitle">
              with a more expansive choice of asset options to mint a USD stable
              coin using<br></br> Collateralized Debt Positions (CDPs).
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-3 mt-40 gap-40 sec-1-grid"
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {details_data.map((item) => {
            return (
              <div
                key={item.id}
                className="justify-center align-middle text-center grid-1-card"
              >
                <div
                  className="card-1-ic"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    // marginLeft: "55%",
                    // transform: "translateX(-50%)",
                  }}
                >
                  <img src={item.icon} alt="" />
                </div>
                <p
                  className="mt-5"
                  style={{
                    fontSize: "24px",
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="sec-2"
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{ marginLeft: "10%", marginRight: "10%", textAlign: "start" }}
        >
          <p
            className="sec-2-title"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Key Product Differenciators
          </p>
          <p className="sec-2-subtitle" style={{ textAlign: "center" }}>
            We aim to provide users with a simple to interact process with
            detailed explanations unlike our competitors. We want to stay away
            from creating unnecessary complicated design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 mt-20 grid-rows-2 gap-20 sec-2-grid">
          {product_data.map((item) => {
            return (
              <div className="sec-2-card" key={item.id}>
                <p className="grid-2-title" >
                  {item.title}
                </p>
                <p className="grid-2-subtitle" >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="sec-3"
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div >
          <p
            className="sec-2-title"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            Growth Strategy
          </p>
          <div
            className="grid grid-cols-2 mt-20 grid-rows-2 gap-10 sec-3-grid"
            
          >
            {growth_strategy.map((item) => {
              return (
                <div className="grid-3-card" key={item.id} >
                  <img src={item.icon} />
                  <p className="card-3-title" >
                    {item.title}
                  </p>
                  <p className="card-3-subtitle" >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        className="sec-4"
        style={{
          backgroundImage: `url(${Background4})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div >
          <p
            className="sec-4-heading"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Our Roadmap
          </p>
          <p className="sec-4-subheading" >
            The idea is to first launch on ETH, the main consideration in this
            decision being the liquidity <br></br> on the mainnet. Our primary
            aim is to capture as much of this liquidity as possible.{" "}
          </p>
          <div className="grid grid-cols-3 mt-20 gap-20 grid-4 sec-4-grid">
            {our_roadmap.map((item) => {
              return (
                <div className="grid-4-card" key={item.id}>
                  <img src={item.icon} />
                  <p className="card-4-heading">{item.title}</p>
                  <p className="mt-5 card-1-description" >
                    {item.description}
                  </p>
                  <p className="mt-10 card-1-sec-description">{item.sec_des}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 backdrop-blur-xl bg-white/30 rounded-xl flex justify-between p-8 trans-div">
          <div className="jus justify-start text-start">
            <p className="trans-title">Get integrated.</p>
            <p
              className="tran-subtitle"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              Easy integration, frictionless access, and safeness.
            </p>
          </div>
          <button
            className="trans-work-btn"
            style={{ color: "black", fontWeight: "700", fontSize: "1.2rem" }}
          >
            Get Docs
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
}
