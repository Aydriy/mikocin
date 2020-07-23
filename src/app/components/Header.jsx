import React from "react";
import Nav from "./Nav";
import circleInner from "../../sass/block/header/circleInner.png";
import circleOuter from "../../sass/block/header/circleOuter.png";
import leg from "../../sass/block/header/leg.png";
import pills1 from "../../sass/block/header/pills/pills1.png";
import pills2 from "../../sass/block/header/pills/pills2.png";
import pills3 from "../../sass/block/header/pills/pills3.png";
import pillsChapter from "../../sass/block/header/pills/pills3-chapter.png";
import pillsWhite from "../../sass/block/header/pills/pills-white.png";
import greenLeaves from "../../sass/block/header/pills/green-leavs.png";

export default function Header() {
  const PillsPrice = (props) => {
    return (
      <div className={`pills_container__price ${props.color}`}>
        <span>
          299
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="22px"
            height="24px"
          >
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M0.550,20.182 L4.400,20.182 L4.400,23.455 C4.400,23.615 4.452,23.744 4.555,23.847 C4.658,23.948 4.790,24.001 4.950,24.001 L7.821,24.001 C7.969,24.001 8.098,23.948 8.207,23.847 C8.316,23.744 8.370,23.615 8.370,23.455 L8.370,20.182 L17.050,20.182 C17.210,20.182 17.342,20.132 17.445,20.028 C17.549,19.926 17.600,19.796 17.600,19.637 L17.600,17.455 C17.600,17.296 17.549,17.165 17.445,17.063 C17.342,16.960 17.210,16.909 17.050,16.909 L8.370,16.909 L8.370,14.897 L14.214,14.897 C16.505,14.897 18.376,14.205 19.826,12.818 C21.275,11.433 22.000,9.642 22.000,7.449 C22.000,5.256 21.275,3.467 19.826,2.080 C18.376,0.694 16.505,-0.000 14.214,-0.000 L4.950,-0.000 C4.790,-0.000 4.658,0.051 4.555,0.153 C4.452,0.256 4.400,0.387 4.400,0.545 L4.400,11.267 L0.550,11.267 C0.390,11.267 0.258,11.321 0.155,11.429 C0.052,11.536 -0.000,11.665 -0.000,11.813 L-0.000,14.353 C-0.000,14.511 0.051,14.642 0.155,14.744 C0.258,14.847 0.389,14.897 0.550,14.897 L4.400,14.897 L4.400,16.909 L0.550,16.909 C0.390,16.909 0.258,16.960 0.155,17.063 C0.052,17.165 -0.000,17.295 -0.000,17.455 L-0.000,19.637 C-0.000,19.796 0.051,19.926 0.155,20.028 C0.258,20.132 0.390,20.182 0.550,20.182 ZM8.370,3.632 L13.870,3.632 C15.085,3.632 16.064,3.983 16.809,4.688 C17.554,5.392 17.926,6.313 17.926,7.450 C17.926,8.586 17.554,9.507 16.809,10.210 C16.064,10.916 15.085,11.267 13.870,11.267 L8.370,11.267 L8.370,3.632 Z"
            />
          </svg>
        </span>
      </div>
    );
  };
  const Arrow = () => {
    return (
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="9px"
        height="146px"
      >
        <path
          fillRule="evenodd"
          fill="rgb(129, 170, 218)"
          d="M8.289,5.000 L5.000,1.696 L5.000,6.000 L4.000,6.000 L4.000,1.696 L0.711,5.000 L0.000,4.285 L4.000,0.268 L4.000,-0.000 L4.266,-0.000 L4.267,-0.000 L4.267,-0.000 L4.733,-0.000 L4.733,-0.000 L4.733,-0.000 L5.000,-0.000 L5.000,0.268 L9.000,4.285 L8.289,5.000 ZM5.000,114.000 L4.000,114.000 L4.000,107.000 L5.000,107.000 L5.000,114.000 ZM4.000,12.000 L5.000,12.000 L5.000,19.000 L4.000,19.000 L4.000,12.000 ZM5.000,30.000 L4.000,30.000 L4.000,24.000 L5.000,24.000 L5.000,30.000 ZM4.000,123.000 L5.000,123.000 L5.000,126.000 L8.000,126.000 L8.000,127.000 L5.000,127.000 L5.000,130.000 L4.000,130.000 L4.000,127.000 L1.000,127.000 L1.000,126.000 L4.000,126.000 L4.000,123.000 ZM5.000,146.000 L4.000,146.000 L4.000,139.000 L5.000,139.000 L5.000,146.000 Z"
        />
      </svg>
    );
  };
  const Points = (props) => {
    return (
      <div className="points">
        <div className={`points__circles ${props.class}`}>
          <div className="points__circles_container">
            <div className="single">
              <span className="single_namber">{props.number}</span>
            </div>
            <div className="single_outer"></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <header>
      <Nav />
      <div className="header__content ">
        <div className="header__content_container container">
          <div className="images_container">
            <div className="leg">
              <img src={leg} alt="" />
            </div>
            <div className="circles">
              <div className="circles_container">
                <img src={circleInner} alt="" className="innerCircle" />
                <img src={circleOuter} alt="" />
              </div>
            </div>
            <div className="pills">
              <div className="pills_container">
                <PillsPrice color="yelow" />
                <PillsPrice color="green" />
                <img src={pills1} alt="" className="pills1" />
                <img src={greenLeaves} alt="" className="leaves" />
                <img src={pills2} alt="" className="pills2" />
                <img src={pills3} alt="" className="pills3" />
                <img src={pillsChapter} alt="" className="pillsChapter" />
                <img src={pillsWhite} alt="" className="pillsWhite" />
              </div>
            </div>
          </div>
          <div className="articles ">
            <span>
              Комплексное избавление <br /> от грибка — <br />
              <span className="inside">изнутри</span> и{" "}
              <span className="outside">снаружи</span>
            </span>

            <div className="descriptions">
              <div className="descriptions_text">
                <Arrow />
                <div className="descriptions_text_container">
                  <Points number="2 в 1" class="first_circle" />
                  <p>
                    Комплекс Микоцин{" "}
                    <span>устраняет зуд, неприятный запах</span> и возвращает
                    эстетичный вид
                  </p>
                </div>
                <div className="descriptions_text_container">
                  <Points number="1" class="second_circle" />
                  <p>
                    <span className="inside">Таблетки</span> Микоцин{" "}
                    <span>уничтожают все виды грибка</span> на ногтях и коже
                  </p>
                </div>
                <div className="descriptions_text_container">
                  <Points number="2" class="third_circle" />
                  <p>
                    <span className="outside">Гель</span> Микоцин{" "}
                    <span>восстанавливает кожу</span> и создает на ней{" "}
                    <span>защитный барьер</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form__container">
              <div className="form_green">
                <form className="form_white ">
                  <div className="shipping">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="27px"
                      height="15px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(253, 117, 50)"
                        d="M26.337,13.239 L24.857,13.239 C24.630,14.248 23.747,15.000 22.686,15.000 C21.625,15.000 20.742,14.242 20.515,13.239 L19.455,13.239 L12.572,13.239 C12.346,14.248 11.462,15.000 10.401,15.000 C9.341,15.000 8.451,14.248 8.230,13.239 C8.214,13.239 8.203,13.239 8.186,13.239 L6.214,13.239 C5.850,13.239 5.551,12.936 5.551,12.566 L5.551,10.221 L2.972,10.221 C2.607,10.221 2.309,9.917 2.309,9.548 C2.309,9.177 2.607,8.873 2.972,8.873 L6.159,8.873 C6.170,8.873 6.176,8.873 6.187,8.873 C6.198,8.873 6.209,8.873 6.220,8.873 C6.584,8.873 6.883,9.177 6.883,9.548 L6.883,11.898 L8.192,11.898 C8.241,11.898 8.286,11.904 8.335,11.914 C8.661,11.078 9.462,10.484 10.401,10.484 C11.335,10.484 12.136,11.073 12.467,11.904 C12.495,11.898 12.522,11.898 12.550,11.898 L18.792,11.898 L18.792,2.872 L18.792,1.346 L6.883,1.346 L6.883,3.691 C6.883,4.061 6.584,4.364 6.220,4.364 C6.214,4.364 6.214,4.364 6.214,4.364 C6.209,4.364 6.203,4.364 6.198,4.364 L2.972,4.364 C2.607,4.364 2.309,4.061 2.309,3.691 C2.309,3.321 2.607,3.018 2.972,3.018 L5.551,3.018 L5.551,0.673 C5.551,0.303 5.850,-0.001 6.214,-0.001 L19.449,-0.001 C19.814,-0.001 20.112,0.303 20.112,0.673 L20.112,2.199 L22.890,2.199 C24.045,2.199 25.083,2.642 25.812,3.445 C26.586,4.296 27.000,5.519 27.000,6.973 L27.000,12.566 C27.000,12.936 26.702,13.239 26.337,13.239 ZM10.401,11.830 C9.904,11.830 9.501,12.241 9.501,12.745 C9.501,13.250 9.904,13.659 10.401,13.659 C10.898,13.659 11.302,13.250 11.302,12.745 C11.302,12.241 10.898,11.830 10.401,11.830 ZM22.686,13.659 C23.178,13.659 23.581,13.250 23.586,12.745 C23.586,12.241 23.183,11.830 22.686,11.830 C22.189,11.830 21.786,12.241 21.786,12.745 C21.786,13.250 22.189,13.659 22.686,13.659 ZM25.674,6.978 C25.674,4.829 24.636,3.545 22.896,3.545 L20.117,3.545 L20.117,11.898 L20.626,11.898 C20.957,11.067 21.758,10.484 22.686,10.484 C23.614,10.484 24.415,11.073 24.746,11.898 L25.674,11.898 L25.674,6.978 ZM11.467,5.419 C11.208,5.155 11.208,4.729 11.467,4.465 C11.727,4.201 12.147,4.201 12.406,4.465 L14.030,6.115 L14.036,6.120 C14.047,6.136 14.064,6.147 14.075,6.164 C14.080,6.176 14.086,6.182 14.091,6.193 C14.102,6.204 14.108,6.209 14.113,6.221 C14.119,6.233 14.124,6.243 14.130,6.255 C14.135,6.266 14.141,6.271 14.146,6.283 C14.152,6.294 14.157,6.305 14.163,6.316 C14.163,6.327 14.168,6.334 14.174,6.344 C14.180,6.356 14.180,6.367 14.185,6.378 C14.190,6.384 14.190,6.395 14.196,6.406 C14.196,6.417 14.201,6.429 14.201,6.440 C14.201,6.450 14.207,6.462 14.207,6.474 C14.207,6.490 14.213,6.501 14.213,6.512 C14.218,6.524 14.218,6.529 14.218,6.541 C14.224,6.586 14.224,6.630 14.218,6.675 C14.218,6.687 14.213,6.692 14.213,6.704 C14.213,6.720 14.207,6.731 14.207,6.742 C14.207,6.754 14.201,6.766 14.201,6.776 C14.201,6.788 14.201,6.799 14.196,6.810 C14.190,6.816 14.190,6.827 14.185,6.838 C14.180,6.849 14.180,6.861 14.174,6.872 C14.174,6.882 14.168,6.888 14.163,6.900 C14.157,6.911 14.152,6.922 14.146,6.933 C14.141,6.945 14.135,6.950 14.130,6.962 C14.124,6.973 14.119,6.984 14.113,6.995 C14.102,7.007 14.097,7.012 14.091,7.023 C14.086,7.034 14.080,7.040 14.075,7.051 C14.064,7.068 14.047,7.079 14.036,7.096 L14.030,7.102 L12.323,8.835 C12.191,8.963 12.025,9.032 11.854,9.032 C11.683,9.032 11.512,8.963 11.384,8.835 C11.125,8.571 11.125,8.145 11.384,7.881 L11.953,7.265 L0.663,7.265 C0.298,7.265 -0.000,6.962 -0.000,6.591 C-0.000,6.221 0.298,5.918 0.663,5.918 L11.959,5.918 L11.467,5.419 Z"
                      />
                    </svg>
                    <span>Бесплатно</span>
                  </div>
                  <div className="sale text-center">
                    <p>
                      Успейте заказать <br />
                      со скидкой
                      <span>до 10.09.2018</span>
                    </p>
                  </div>
                  <div className="price_container">
                    <div>
                      <p>старая цена</p>
                      <div className="price old">
                        <span>
                          918{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="23px"
                            height="32px"
                          >
                            <path
                              fillRule="evenodd"
                              strokeWidth="1px"
                              stroke="rgb(0, 0, 0)"
                              fill="rgb(0, 0, 0)"
                              d="M17.361,15.535 C15.972,16.887 14.123,17.633 12.154,17.633 L12.154,17.639 L7.225,17.639 L7.225,20.933 L15.748,20.933 C15.972,20.933 16.158,21.112 16.158,21.328 C16.158,21.544 15.972,21.722 15.748,21.722 L7.225,21.722 L7.225,28.105 C7.225,28.321 7.039,28.500 6.815,28.500 C6.591,28.500 6.405,28.321 6.405,28.105 L6.405,21.722 L3.910,21.722 C3.686,21.722 3.500,21.544 3.500,21.328 C3.500,21.112 3.686,20.933 3.910,20.933 L6.405,20.933 L6.405,17.639 L3.910,17.639 C3.686,17.639 3.500,17.460 3.500,17.244 C3.500,17.029 3.686,16.850 3.910,16.850 L6.405,16.850 L6.405,3.894 C6.405,3.679 6.591,3.500 6.815,3.500 L12.148,3.500 C12.154,3.500 12.154,3.500 12.159,3.500 C14.134,3.542 15.977,4.290 17.356,5.610 C18.740,6.930 19.500,8.683 19.500,10.545 C19.500,12.419 18.740,14.193 17.361,15.535 ZM12.148,4.284 L7.231,4.284 L7.225,4.284 L7.225,16.839 L12.148,16.839 C15.753,16.839 18.680,14.014 18.680,10.541 C18.680,7.109 15.813,4.363 12.148,4.284 Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="88px"
                            height="25px"
                          >
                            <path
                              fillRule="evenodd"
                              fill="rgb(234, 120, 69)"
                              d="M87.122,23.035 L86.949,24.018 L44.000,13.014 L1.052,24.018 L0.878,23.035 L41.995,12.500 L0.878,1.965 L1.052,0.982 L44.000,11.986 L86.949,0.982 L87.122,1.965 L46.005,12.500 L87.122,23.035 Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>новая цена</p>
                      <div className="price new">
                        <span>
                          459{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="22px"
                            height="24px"
                          >
                            <path
                              fillRule="evenodd"
                              fill="rgb(0, 0, 0)"
                              d="M0.550,20.181 L4.400,20.181 L4.400,23.455 C4.400,23.615 4.452,23.745 4.555,23.846 C4.658,23.948 4.790,24.001 4.950,24.001 L7.821,24.001 C7.970,24.001 8.098,23.948 8.207,23.846 C8.316,23.745 8.371,23.615 8.371,23.455 L8.371,20.181 L17.050,20.181 C17.210,20.181 17.342,20.132 17.446,20.028 C17.549,19.925 17.600,19.795 17.600,19.636 L17.600,17.454 C17.600,17.296 17.549,17.165 17.446,17.063 C17.343,16.960 17.210,16.909 17.050,16.909 L8.370,16.909 L8.370,14.897 L14.214,14.897 C16.505,14.897 18.376,14.206 19.826,12.818 C21.275,11.433 22.000,9.642 22.000,7.449 C22.000,5.256 21.275,3.466 19.826,2.080 C18.376,0.694 16.505,0.000 14.214,0.000 L4.950,0.000 C4.790,0.000 4.658,0.051 4.555,0.153 C4.452,0.256 4.400,0.387 4.400,0.545 L4.400,11.267 L0.550,11.267 C0.390,11.267 0.258,11.321 0.155,11.429 C0.052,11.537 0.000,11.665 0.000,11.813 L0.000,14.353 C0.000,14.512 0.051,14.642 0.155,14.744 C0.258,14.847 0.389,14.897 0.550,14.897 L4.400,14.897 L4.400,16.909 L0.550,16.909 C0.390,16.909 0.258,16.960 0.155,17.063 C0.052,17.165 0.000,17.295 0.000,17.454 L0.000,19.636 C0.000,19.795 0.051,19.925 0.155,20.028 C0.258,20.132 0.390,20.181 0.550,20.181 ZM8.370,3.632 L13.870,3.632 C15.085,3.632 16.064,3.983 16.809,4.688 C17.554,5.392 17.926,6.313 17.926,7.449 C17.926,8.585 17.554,9.507 16.809,10.210 C16.064,10.915 15.085,11.267 13.870,11.267 L8.370,11.267 L8.370,3.632 Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inputs">
                    <p>
                      <input name="login" placeholder="Имя" />
                    </p>
                    <p>
                      <input type="tel" name="tel" placeholder="Телефон" />
                    </p>
                    <p>
                      <button>
                        <p>
                          <span>Заказать </span>со скидкой
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="218px"
                          height="70px"
                        >
                          <path
                            fillRule="evenodd"
                            strokeWidth="2px"
                            stroke="rgb(255, 255, 255)"
                            fillOpacity="0"
                            opacity="0.302"
                            fill="rgb(0, 128, 100)"
                            d="M32.406,5.375 L185.594,5.375 C200.505,5.375 212.594,17.463 212.594,32.375 L212.594,37.625 C212.594,52.537 200.505,64.625 185.594,64.625 L32.406,64.625 C17.495,64.625 5.406,52.537 5.406,37.625 L5.406,32.375 C5.406,17.463 17.495,5.375 32.406,5.375 Z"
                          />
                        </svg>
                      </button>
                    </p>
                    <div className="packs">
                      <h6 className="text-center">
                        Осталось <span>10</span> упаковок
                        <br /> со скидкой
                      </h6>
                    </div>
                    <div className="rules">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="19px"
                          height="20px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(255, 107, 0)"
                            d="M9.753,19.963 C9.671,19.986 9.585,20.000 9.500,20.000 C9.414,20.000 9.329,19.986 9.247,19.963 C0.000,17.068 0.145,10.207 0.251,5.199 C0.263,4.663 0.273,4.150 0.273,3.661 C0.273,3.276 0.619,2.966 1.046,2.966 C4.350,2.966 6.865,2.107 8.961,0.264 C9.261,0.002 9.738,0.000 10.038,0.264 C12.135,2.107 14.651,2.966 17.955,2.966 C18.382,2.966 18.727,3.276 18.727,3.661 C18.727,4.150 18.738,4.661 18.750,5.199 C18.855,10.206 19.000,17.068 9.753,19.963 ZM17.205,5.226 C17.198,4.923 17.192,4.630 17.188,4.345 C14.093,4.227 11.618,3.380 9.500,1.715 C7.382,3.380 4.907,4.227 1.813,4.345 C1.809,4.630 1.802,4.923 1.796,5.226 C1.690,10.261 1.570,15.959 9.500,18.562 C17.431,15.959 17.311,10.261 17.205,5.226 ZM8.978,12.457 C8.827,12.594 8.629,12.659 8.432,12.659 C8.234,12.659 8.036,12.594 7.885,12.457 L5.748,10.528 C5.446,10.254 5.446,9.815 5.748,9.541 C6.049,9.267 6.539,9.267 6.840,9.541 L8.432,10.977 L12.160,7.607 C12.462,7.337 12.951,7.337 13.253,7.607 C13.554,7.884 13.554,8.323 13.253,8.595 L8.978,12.457 Z"
                          />
                        </svg>
                        <p>Ваши данные защищены!</p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="255px"
                        height="44px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(238, 242, 247)"
                          d="M256.000,-0.001 L256.000,34.000 C256.000,39.523 251.523,43.999 246.000,43.999 L10.000,43.999 C4.477,43.999 -0.000,39.523 -0.000,34.000 L-0.000,-0.001 L256.000,-0.001 Z"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__mask_container">
        <div className="header__mask-wave"></div>
        <div className="header__mask"></div>
      </div>
    </header>
  );
}
