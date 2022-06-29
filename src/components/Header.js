import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
import "./../assets/style/Header.css";

export default function Header() {
  const [scroll, setScroll] = useState([]);
  const [open, setOpen] = useState();

  setInterval(() => {
    setScroll(window.scrollY);
  }, 100);
  const location = useLocation();

  const menu = [
    {
      id: 1,
      name: "Home",
      pathname: "/",
    },
    {
      id: 2,
      name: "How It Works",
      pathname: "/how-it-work",
    },
    {
      id: 3,
      name: "Team",
      pathname: "/team",
    },
  ];

  const change = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className="header_main h-16 flex text-center justify-between"
        style={{
          padding: "3rem 5vw",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          opacity: "0.8",
          backgroundColor: scroll > 100 ? "#194B97" : "#00000000",
        }}
      >
        {/* Left */}
        <Link className="left flex" to="/">
          <div className="logo mr-8">
            <img src={logo} />
          </div>
          <div className="company_name">
            <p
              style={{
                fontSize: "20px",
                color: "white",
              }}
            >
              Aira Protocol
            </p>
          </div>
        </Link>

        {/* Right */}
        <div className="right flex">
          <div className="menus flex">
            <nav
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                marginRight: "40px",
              }}
            >
              {menu.map((item) => {
                return (
                  <Link
                    className={
                      location.pathname === item.pathname
                        ? "underline"
                        : "" + " hover:underline"
                    }
                    key={item.id}
                    to={`${item.pathname}`}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "1rem",
                      color: "#FAFAFA",
                      marginRight: "20px",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 18px",
                width: "114px",
                height: "48px",
                background: "#1C64F2",
                borderRadius: "24px",
                color: "#ffffff",
              }}
            >
              Enter App
            </button>
          </div>
          <div className="icon text-white w-10" onClick={change}>
            {open === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* MENU */}
      <div
        className="grid grid-cols-1 grid-rows-2 menu_2"
        style={{
          background: `${open === true ? "#0324B8" : ""}`,
          position: "fixed",
          zIndex: "1365",
          height: "100vh",
          width: "100%",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        {/* Top */}
        <div className="w-20 h-20">
          <div
            className="header_main h-16 flex text-center justify-between"
            style={{
              padding: "3rem 5vw",
              alignItems: "center",
              position: "fixed",
              width: "100%",
              zIndex: "100",
              opacity: "0.8",
              backgroundColor: scroll > 100 ? "#194B97" : "#00000000",
              // backgroundImage:
              //   "linear-gradient(to right, #0327cc, #0028b7, #0028a2, #00268d, #032478, #0c226f, #111f66, #141d5d, #181a5e, #1d175f, #22135f, #270e5f)",
            }}
          >
            {/* Left */}
            <Link className="left flex" to="/">
              <div className="logo mr-8">
                <img src={logo} />
              </div>
              <div className="company_name">
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Aira Protocol
                </p>
              </div>
            </Link>

            {/* Right */}
            <div className="right flex">
              <div className="icon text-white w-10" onClick={change}>
                {open === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-56 mt-10 nav_2">
          {menu.map((item) => {
            return (
              <div
                className="text-white list-none justify-start text-left size ml-8 mt-8"
                key={item.id}
              >
                <Link
                  to={item.pathname}
                  className={`te text-xl  ${open === true ? "pt-5" : "hidden"}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/*  */}
        <div
          className={`bottom flex p-4 justify-between w-3/5 text-white ${open === true? "" : "hidden"}`}
          style={{
            marginTop: "30vh",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-medium"
            viewBox="0 0 16 16"
          >
            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>

          {/* Discard */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>

          {/*  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </div>
        <div
          style={{
            width: "auto",
            height: "1px",
            background: "#fff",
            margin: "1rem",
          }}
          className={`${open === true? "" : "hidden"}`}
        ></div>
        <div
          style={{
            justifyContent: "start",
            textAlign: "left",
            margin: "0px 15px",
          }}
        >
          <p
            className={`text-white t-tra ${open === true? "" : "hidden"}`}
            style={{
              textTransform: "uppercase",
            }}
          >
            © 2021, AIRA PROTOCOL. All Rights Reserved.
          </p>
          <p
            className={`text-white mt-3 ${open === true? "" : "hidden"}`}
            style={{
              textTransform: "uppercase",
            }}
          >
            Privacy Policy • Terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
