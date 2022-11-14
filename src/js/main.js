(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405], {
    1749: function(e, t, r) {
      "use strict";
      r.d(t, {
        r: function() {
          return n
        }
      });
      var i = r(7294);

      function s() {
        return (s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }).apply(this, arguments)
      }
      var l = i.createElement("path", {
          d: "M52.402 31.916c0 4.03-1.17 7.895-3.178 11.087l8.196 8.23c4.014-5.375 6.523-12.094 6.523-19.318s-2.51-13.942-6.523-19.318l-8.196 8.23c2.007 3.192 3.178 6.887 3.178 11.087z",
          fill: "#b8d3f4"
        }),
        a = i.createElement("path", {
          d: "M32.004 52.41c-11.207 0-20.406-9.24-20.406-20.493s9.2-20.493 20.406-20.493c4.182 0 7.86 1.176 11.04 3.36l8.196-8.23C45.887 2.52 39.197 0 32.004 0 14.44 0 .057 14.278.057 32.084S14.44 64 32.004 64c7.36 0 14.05-2.52 19.403-6.55l-8.196-8.23c-3.178 2.016-7.025 3.192-11.207 3.192z",
          fill: "#3385ff"
        });

      function n(e) {
        return i.createElement("svg", s({
          xmlns: "http://www.w3.org/2000/svg",
          width: 64,
          height: 64,
          viewBox: "0 0 64 64",
          fillRule: "evenodd"
        }, e), l, a)
      }
    },
    8581: function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
        return r(2142)
      }])
    },
    5745: function(e, t, r) {
      "use strict";
      r.d(t, {
        Z: function() {
          return l
        }
      });
      var i = r(5893),
        s = r(7294);

      function l() {
        var e = (0, s.useRef)(null);
        return (0, s.useEffect)((function() {
          var t = document.createElement("script");
          t.async = !0, t.src = "//cdn.carbonads.com/carbon.js?serve=CKYIE5QE&placement=swiperjscom", t.id = "_carbonads_js", e.current.appendChild(t)
        }), []), (0, i.jsx)("div", {
          ref: e,
          className: "carbon"
        })
      }
    },
    1295: function(e, t, r) {
      "use strict";
      r.d(t, {
        Z: function() {
          return n
        }
      });
      var i = r(5893),
        s = r(8004),
        l = r(9649),
        a = function(e) {
          var t = e.showPlaceholder,
            r = e.showTitle,
            a = l.filter((function(t) {
              var r = t.plan,
                i = t.active;
              return e.plan === r && i
            })),
            n = {
              "Platinum Sponsor": "m-2 w-40 h-40",
              "Gold Sponsor": "m-2 w-36 h-36",
              "Silver Sponsor": "m-2 sm:m-3 w-24 h-24 sm:w-32 sm:h-32",
              Sponsor: "m-2 w-16 h-16 sm:w-24 sm:h-24"
            } [e.plan];
          return a.length || t ? (0, i.jsxs)("div", {
            className: "mb-20",
            children: [r && (0, i.jsxs)("h2", {
              className: "mb-4 text-center text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl",
              children: [e.plan, "s"]
            }), (0, i.jsxs)("div", {
              className: "mx-auto flex max-w-6xl flex-wrap justify-center",
              children: [a.map((function(e) {
                var t = e.link,
                  r = e.title,
                  l = e.image;
                return (0, i.jsx)("a", {
                  className: "flex items-center justify-center text-center duration-300 dark:bg-white dark:p-0.5 ".concat(n),
                  href: t,
                  title: r,
                  rel: "noopener",
                  target: "_blank",
                  onClick: function() {
                    return (0, s.O)(t)
                  },
                  children: (0, i.jsx)("img", {
                    className: "h-auto max-h-full w-auto max-w-full",
                    src: "/images/sponsors/".concat(l),
                    alt: r
                  })
                }, r)
              })), t && (0, i.jsxs)("a", {
                className: "m-4 flex items-center justify-center bg-gray-100 p-3 text-center text-sm font-semibold duration-300 hover:bg-gray-200 hover:no-underline ".concat(n),
                href: "https://opencollective.com/swiper",
                onClick: function() {
                  return (0, s.O)("https://opencollective.com/swiper")
                },
                rel: "noopener",
                target: "_blank",
                children: ["Become ", e.plan]
              })]
            })]
          }) : null
        };

      function n(e) {
        var t = e.showPlaceholders,
          r = e.showTitles;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a, {
            showPlaceholder: t,
            showTitle: r,
            plan: "Platinum Sponsor"
          }), (0, i.jsx)(a, {
            showPlaceholder: t,
            showTitle: r,
            plan: "Gold Sponsor"
          }), (0, i.jsx)(a, {
            showPlaceholder: t,
            showTitle: r,
            plan: "Silver Sponsor"
          }), (0, i.jsx)(a, {
            showPlaceholder: t,
            showTitle: r,
            plan: "Sponsor"
          })]
        })
      }
    },
    2142: function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        HomeHeading: function() {
          return I
        },
        default: function() {
          return E
        }
      });
      var i = r(5893),
        s = r(7294),
        l = r(1664),
        a = r(5362),
        n = [{
          image: "xiaomi.svg",
          title: "Xiaomi"
        }, {
          image: "dji.svg",
          title: "DJI"
        }, {
          image: "mcdonalds.svg",
          title: "McDonalds"
        }, {
          image: "burger-king.svg",
          title: "Burger King"
        }, {
          image: "huawei.png",
          title: "Huawei"
        }, {
          image: "toyota.svg",
          title: "Toyota"
        }, {
          image: "adobe.jpg",
          title: "Adobe"
        }, {
          image: "cisco.jpg",
          title: "Cisco"
        }, {
          image: "alexa.jpg",
          title: "Alexa"
        }, {
          image: "bmw.jpg",
          title: "BMW"
        }, {
          image: "disney.jpg",
          title: "Disney"
        }, {
          image: "peugeot.jpg",
          title: "Peugeot"
        }, {
          image: "verizon.jpg",
          title: "Verizon"
        }, {
          image: "macrumors.jpg",
          title: "MacRumors"
        }, {
          image: "lacoste.jpg",
          title: "Lacoste"
        }, {
          image: "vodafone.svg",
          title: "Vodafone"
        }],
        o = r(5745),
        c = r(1457),
        d = r(7909);

      function m() {
        return (m = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }).apply(this, arguments)
      }
      var x = s.createElement("path", {
        d: "M209.977.035l6.162 23.846-4.877 1.275-2.408.64-4.757 1.287-2.349.647-4.637 1.3-2.289.652-4.517 1.31-4.438 1.32-4.358 1.326-4.277 1.334-4.198 1.341-4.117 1.35-2.03.676-3.997 1.36c-1.319.455-2.625.91-3.917 1.367l-3.838 1.374-1.888.69-3.718 1.384-3.637 1.39-1.788.699-3.517 1.4-1.729.703-3.396 1.411-1.668.708-3.277 1.42c-.54.237-1.075.475-1.608.712l-3.156 1.43a275.324 275.324 0 00-8.986 4.324l-2.834 1.453a224.708 224.708 0 00-4.102 2.19l-2.634 1.466-2.553 1.473a175.39 175.39 0 00-4.865 2.96l-2.312 1.487c-12.874 8.445-21.87 17.128-26.973 25.967-9.64 16.697-4.898 36.02 16.336 58.594l1.782 1.863c.607.623 1.226 1.249 1.857 1.877l1.932 1.892c.657.633 1.326 1.269 2.007 1.907l2.082 1.922c1.06.965 2.149 1.935 3.265 2.911l2.272 1.96c.77.655 1.552 1.314 2.348 1.975l2.424 1.99 2.501 2.005 2.578 2.021 2.656 2.037 2.733 2.052c54.973 40.853 74.283 80.937 52.641 118.422-8.283 14.347-22.562 27.661-42.864 40.09l-1.594.967a233.85 233.85 0 01-4.092 2.401l-1.68.954c-1.692.953-3.42 1.9-5.185 2.842l-1.777.94-3.34 1.725a308.572 308.572 0 01-3.422 1.712l-3.505 1.701a354.248 354.248 0 01-7.26 3.368l-3.755 1.667a439.113 439.113 0 01-15.848 6.558l-4.17 1.612-2.115.803-4.295 1.596-4.377 1.586-4.461 1.576-4.544 1.565c-1.529.52-3.071 1.039-4.627 1.555l-4.71 1.545-1.59.513-3.204 1.022-4.877 1.525-4.96 1.516-5.044 1.505-5.127 1.496-5.21 1.487-1.316.37-3.977 1.107-6.553-23.742 4.943-1.38 2.442-.691 4.822-1.39 4.742-1.397 4.661-1.404 2.3-.704 4.541-1.415 4.46-1.42 4.38-1.428 2.159-.716 4.258-1.437 2.099-.721 4.137-1.447 4.056-1.453 3.976-1.46 3.895-1.465 3.814-1.471c1.258-.491 2.502-.984 3.733-1.477l3.653-1.483 1.796-.743 3.531-1.492 2.31-.997c.381-.166.762-.333 1.14-.5l3.37-1.502 1.655-.753 3.248-1.51 3.167-1.515 3.087-1.52a264.496 264.496 0 007.362-3.823l2.802-1.537 2.722-1.542c19.217-11.067 32.19-22.482 38.888-34.084 10.048-17.402 5.528-37.112-15.615-59.843l-1.775-1.875c-.303-.313-.608-.627-.916-.942l-1.888-1.896a184.354 184.354 0 00-5.051-4.8l-2.154-1.944-1.105-.977-2.268-1.966a247.388 247.388 0 00-3.547-2.975l-2.46-2.001c-.417-.335-.837-.67-1.26-1.007l-2.576-2.023-2.655-2.037c-.449-.341-.901-.683-1.356-1.025l-1.376-1.028c-54.973-40.853-74.585-80.416-53.412-117.09C61.174 62.59 86.29 44.28 124.61 27.949l3.75-1.574 1.905-.783 3.874-1.555 3.956-1.544 2.009-.768 4.08-1.525c.686-.254 1.376-.507 2.07-.759l4.204-1.508 4.286-1.496 4.369-1.485c1.47-.493 2.953-.984 4.451-1.473l4.534-1.462 2.298-.727 4.658-1.445 2.36-.718 4.782-1.429 2.422-.71 4.907-1.412 4.989-1.4 1.68-.465 3.391-.926 5.155-1.38 5.237-1.37z",
        fill: "#0080FF"
      });

      function u(e) {
        return s.createElement("svg", m({
          width: 217,
          height: 387,
          viewBox: "0 0 217 387",
          xmlns: "http://www.w3.org/2000/svg"
        }, e), x)
      }
      var p = r(3850);
      r(933), r(92), r(8770), r(2299), r(7583), r(4650), r(3797);

      function h(e) {
        var t = e.children,
          r = e.className,
          s = void 0 === r ? "" : r;
        e.style;
        return (0, i.jsxs)("div", {
          className: "mx-auto flex h-[500px] max-w-[90rem] flex-col justify-center rounded-2xl bg-primary bg-opacity-5 px-4 text-primary dark:bg-opacity-20 md:h-[400px] lg:h-[500px] ".concat(s, " relative border-4 border-primary"),
          children: [(0, i.jsx)("div", {
            className: "pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"
          }), t]
        })
      }

      function f() {
        var e = (0, s.useRef)(null),
          t = (0, s.useRef)(null),
          r = (0, s.useRef)(null);
        return (0, s.useEffect)((function() {
          return e.current = new p.ZP(".header-swiper-main", {
              slidesPerView: 1,
              effect: "creative",
              grabCursor: !0,
              watchSlidesProgress: !0,
              creativeEffect: {
                perspective: !0,
                limitProgress: 2,
                shadowPerProgress: !0,
                prev: {
                  shadow: !0,
                  translate: ["-10%", 0, -200],
                  rotate: [0, 0, -2]
                },
                next: {
                  shadow: !1,
                  translate: ["120%", 0, 0]
                }
              },
              speed: 300,
              observer: !0,
              observeParents: !0,
              pagination: {
                el: ".header-swiper-main .swiper-pagination",
                clickable: !0
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              },
              a11y: !0
            }), t.current = new p.ZP(".header-swiper-cards", {
              nested: !0,
              effect: "cards",
              createElements: !0,
              pagination: !0,
              resistanceRatio: 0
            }), r.current = new p.ZP(".header-swiper-flip", {
              nested: !0,
              effect: "flip",
              createElements: !0,
              pagination: !0,
              resistanceRatio: 0
            }), document.querySelector(".header-swiper-main").style.overflow = "visible",
            function() {
              return t.current && t.current.destroy(), r.current && r.current.destroy(), void(e.current && e.current.destroy())
            }
        })), (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: "swiper-button-prev invisible !left-auto !right-full mr-4 md:visible 2xl:mr-8"
          }), (0, i.jsx)("div", {
            className: "swiper-button-next invisible !right-auto !left-full ml-4 md:visible 2xl:ml-8"
          }), (0, i.jsxs)("div", {
            className: "swiper header-swiper-main",
            children: [(0, i.jsx)("div", {
              className: "swiper-pagination !-bottom-6"
            }), (0, i.jsxs)("div", {
              className: "swiper-wrapper",
              children: [(0, i.jsxs)("div", {
                className: "swiper-slide rounded-xl",
                children: [(0, i.jsxs)(h, {
                  children: [(0, i.jsx)("span", {
                    className: "mb-8 text-center text-4xl font-bold",
                    children: "Top Notch Features"
                  }), (0, i.jsxs)("ul", {
                    className: "flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm",
                    children: [
                      ["Library Agnostic", "Mutation Observer", "Flexbox Layout", "Full True RTL Support", "Multi Row Slides Layout", "3D Effects", "Two-way Control", "Full Navigation Control", "Rich API", "Most Flexible Slides Layout Grid", "Parallax Transitions", "Images Lazy Loading", "Virtual Slides", "And many more"].map((function(e, t) {
                        return (0, i.jsxs)("li", {
                          className: "my-1 flex w-1/2 items-center",
                          children: [(0, i.jsx)("svg", {
                            className: "mr-2 flex-shrink-0 text-primary",
                            width: "20",
                            height: "20",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: (0, i.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                              clipRule: "evenodd"
                            })
                          }), e]
                        }, t)
                      })), (0, i.jsx)("li", {})
                    ]
                  })]
                }), (0, i.jsx)("div", {
                  className: "swiper-slide-shadow"
                })]
              }), (0, i.jsxs)("div", {
                className: "swiper-slide swiper-slide-gallery rounded-xl",
                children: [(0, i.jsxs)(h, {
                  className: "pt-10",
                  children: [(0, i.jsx)("span", {
                    className: "mb-8 text-center text-4xl font-bold",
                    children: "Build Complex Touch Galleries"
                  }), (0, i.jsxs)("div", {
                    className: "flex h-full min-h-0 justify-around pb-4",
                    children: [(0, i.jsx)("div", {
                      className: "swiper header-swiper-cards mx-auto h-80 max-h-full w-60 rounded-lg",
                      children: Array.from({
                        length: 5
                      }).map((function(e, t) {
                        return (0, i.jsx)("div", {
                          className: "swiper-slide rounded-xl",
                          children: (0, i.jsx)("img", {
                            src: "demos/images/nature-".concat(t + 1, ".jpg"),
                            className: "h-full w-full object-cover"
                          })
                        }, t)
                      }))
                    }), (0, i.jsx)("div", {
                      className: "swiper header-swiper-flip mx-auto hidden h-80 max-h-full w-60 rounded-lg sm:block lg:hidden xl:block",
                      children: Array.from({
                        length: 5
                      }).map((function(e, t) {
                        return (0, i.jsx)("div", {
                          className: "swiper-slide rounded-xl",
                          children: (0, i.jsx)("img", {
                            src: "demos/images/nature-".concat(t + 1, ".jpg"),
                            className: "h-full w-full object-cover"
                          })
                        }, t)
                      }))
                    })]
                  })]
                }), (0, i.jsx)("div", {
                  className: "swiper-slide-shadow"
                })]
              }), (0, i.jsxs)("div", {
                className: "swiper-slide rounded-xl",
                children: [(0, i.jsxs)(h, {
                  className: "items-center",
                  children: [(0, i.jsx)("div", {
                    className: "w-full text-center text-4xl font-bold",
                    children: "Start Using It Now"
                  }), (0, i.jsx)("div", {
                    className: "mt-4",
                    children: (0, i.jsx)(l.default, {
                      href: "/get-started",
                      children: (0, i.jsx)("a", {
                        className: "my-2 inline-block w-48 rounded-3xl bg-primary px-4 py-2 text-center text-lg font-bold text-white shadow-lg duration-200 hover:bg-opacity-95 hover:no-underline",
                        children: "Get Started"
                      })
                    })
                  })]
                }), (0, i.jsx)("div", {
                  className: "swiper-slide-shadow"
                })]
              })]
            })]
          })]
        })
      }

      function g() {
        return (0, i.jsxs)("div", {
          className: "relative overflow-hidden",
          children: [(0, i.jsx)(u, {
            className: "absolute left-1/2 top-1/2 -ml-[30%] h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10 md:-ml-[10%]"
          }), (0, i.jsxs)("div", {
            className: "mx-auto max-w-[90rem] px-4 pt-8 pb-16 sm:px-6 lg:flex lg:px-8 lg:pt-16 xl:px-10",
            children: [(0, i.jsxs)("div", {
              className: "relative z-10 flex w-full flex-shrink-0 flex-col items-center text-center lg:block lg:max-w-[500px] lg:text-left xl:mr-16",
              children: [(0, i.jsx)(d.r, {
                className: "swiper-logo h-32 w-32 flex-shrink-0 rounded-full lg:h-40 lg:w-40",
                alt: "Swiper"
              }), (0, i.jsx)("div", {
                className: "mt-8 text-5xl font-semibold text-primary md:text-6xl",
                children: "Swiper"
              }), (0, i.jsx)("div", {
                className: "my-2 mt-4 max-w-2xl text-2xl font-medium tracking-tight text-primary sm:text-4xl md:text-4xl md:leading-tight",
                children: "The Most Modern Mobile Touch Slider"
              }), (0, i.jsx)("nav", {
                className: "mt-4 flex flex-wrap justify-center font-medium lg:mt-8 lg:justify-start",
                children: a.Z.map((function(e) {
                  var t = e.name,
                    r = e.link;
                  return (0, i.jsx)(l.default, {
                    href: r,
                    children: (0, i.jsx)("a", {
                      className: "mr-4 text-sm text-black hover:!text-primary hover:no-underline dark:text-white",
                      children: t
                    })
                  }, r)
                }))
              }), (0, i.jsxs)("div", {
                className: "my-2 text-sm text-black dark:text-white lg:my-4",
                children: [(0, i.jsxs)("span", {
                  className: "opacity-50",
                  children: ["MIT Licensed, v", "8.4.4", " released on", " ", "October 12, 2022", " "]
                }), " ", (0, i.jsx)("span", {
                  children: " "
                }), (0, i.jsx)(l.default, {
                  href: "/changelog",
                  children: (0, i.jsx)("a", {
                    className: "text-black hover:text-primary hover:no-underline dark:text-white dark:hover:text-primary",
                    children: "Changelog"
                  })
                })]
              }), (0, i.jsx)("div", {
                className: "flex justify-center lg:justify-start",
                children: (0, i.jsx)(c.Z, {})
              })]
            }), (0, i.jsx)("div", {
              className: "home-slider-wrap mt-8 min-w-0 flex-shrink-[10] md:mx-12 lg:mt-0 xl:mx-0",
              style: {
                perspective: "1200px",
                "--swiper-theme-color": "#0080ff"
              },
              children: (0, i.jsx)(f, {})
            })]
          })]
        })
      }
      p.ZP.use([p.W_, p.tl, p.s5, p.gI, p.c4, p.VP, p.Qr]);
      var w = r(1295);

      function v() {
        return (0, i.jsx)("div", {
          className: "gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center",
          children: [{
            url: "https://framework7.io",
            title: "Framework7",
            description: "Full featured framework for building iOS, Android & desktop apps",
            logo: "framework7.svg"
          }, {
            url: "https://atroposjs.com",
            title: "Atropos",
            description: "Stunning touch-friendly 3D parallax hover effects",
            logo: "atropos.svg"
          }, {
            url: "https://konstaui.com",
            title: "Konsta UI",
            description: "Pixel perfect mobile UI components built with Tailwind CSS",
            logo: "konsta.svg"
          }].map((function(e) {
            return (0, i.jsxs)("a", {
              className: "flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl",
              href: e.url,
              target: "_blank",
              children: [(0, i.jsx)("img", {
                className: "mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32",
                src: "/images/projects/".concat(e.logo),
                alt: e.title
              }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                  className: "font-semibold text-black dark:text-white sm:mt-4 sm:mb-2",
                  children: e.title
                }), (0, i.jsx)("div", {
                  className: "text-sm opacity-75",
                  children: e.description
                })]
              })]
            }, e.title)
          }))
        })
      }
      var b = r(5078),
        j = r(8004),
        y = function() {
          return (0, i.jsx)("div", {
            className: "my-8",
            children: (0, i.jsx)(b.Z, {
              component: "a",
              highlight: !0,
              href: "https://uiinitiative.com",
              target: "_blank",
              className: "mx-auto block",
              rotateTouch: "scroll-y",
              rotateXMax: 5,
              rotateYMax: 5,
              onClick: function() {
                return (0, j.O)("https://uiinitiative.com")
              },
              innerClassName: "rounded-2xl",
              children: (0, i.jsx)("img", {
                src: "/images/uiinitiative-banner.jpg",
                alt: "UI Initiative",
                className: "rounded-2xl dark:border dark:border-white dark:border-opacity-5"
              })
            })
          })
        },
        N = function() {
          return (0, i.jsx)("div", {
            className: "my-8",
            children: (0, i.jsx)(b.Z, {
              component: "a",
              highlight: !0,
              href: "https://studio.swiperjs.com",
              target: "_blank",
              className: "mx-auto block",
              rotateTouch: "scroll-y",
              rotateXMax: 5,
              rotateYMax: 5,
              onClick: function() {
                return (0, j.O)("https://studio.swiperjs.com")
              },
              innerClassName: "rounded-2xl",
              children: (0, i.jsx)("img", {
                src: "/images/swiper-studio-banner.jpg",
                alt: "UI Initiative",
                className: "rounded-2xl dark:border dark:border-white dark:border-opacity-5"
              })
            })
          })
        },
        k = r(5544),
        S = r(1749);

      function O(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function P(e, t) {
        if (null == e) return {};
        var r, i, s = function(e, t) {
          if (null == e) return {};
          var r, i, s = {},
            l = Object.keys(e);
          for (i = 0; i < l.length; i++) r = l[i], t.indexOf(r) >= 0 || (s[r] = e[r]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++) r = l[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
      }

      function C(e) {
        var t = e.href,
          r = e.className,
          s = e.onClick,
          l = e.children,
          a = P(e, ["href", "className", "onClick", "children"]);
        return (0, i.jsx)("a", function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(r);
            "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            })))), i.forEach((function(t) {
              O(e, t, r[t])
            }))
          }
          return e
        }({
          href: t,
          rel: "noopener",
          target: "_blank"
        }, a, {
          className: "inline-flex max-w-full items-center rounded-full bg-white px-6 py-4 text-sm font-medium text-black shadow-lg duration-200 hover:bg-black hover:bg-opacity-5 hover:no-underline dark:bg-primary/80 dark:text-white dark:hover:bg-primary sm:text-lg ".concat(r),
          onClick: function(e) {
            s(e), (0, j.O)(t)
          },
          children: l
        }))
      }
      var T = [{
          title: "JavaScript",
          image: "js.svg",
          link: "/swiper-api"
        }, {
          title: "React",
          image: "react.svg",
          link: "/react"
        }, {
          title: "Vue.js",
          image: "vue.svg",
          link: "/vue"
        }, {
          title: "SolidJS",
          image: "solid.svg",
          link: "/solid"
        }, {
          title: "Svelte",
          image: "svelte.svg",
          link: "/svelte"
        }, {
          title: "Angular",
          image: "angular.svg",
          link: "/angular"
        }],
        M = [{
          title: "Library Agnostic",
          descr: "Swiper doesn't require any JavaScript libraries like jQuery, which makes Swiper much smaller and faster. It can be safely used with libraries such as jQuery, Zepto, jQuery Mobile, etc."
        }, {
          title: "1:1 Touch movement",
          descr: "By default, Swiper provides 1:1 touch movement interaction, but this ratio can be configured through Swiper settings"
        }, {
          title: "Mutation Observer",
          descr: "Swiper has an option to enable Mutation Observer, with this feature Swiper will be automatically reinitialized and recalculate all required parameters if you make dynamic changes to the DOM, or in Swiper styles itself"
        }, {
          title: "Rich API",
          descr: "Swiper comes with a very rich API. It allows creating your own pagination, navigation buttons, parallax effects and many more"
        }, {
          title: "Full True RTL Support",
          descr: "Swiper is the only slider that provides 100% RTL support with correct layout"
        }, {
          title: "Multi Row Slides Layout",
          descr: "Swiper allows a multiple row slides layout, with a few slides per column"
        }, {
          title: "Transition Effects",
          descr: "There are 3 new transition effects in addition to the usual Slide: Fade, 3D Cube and 3D Coverflow"
        }, {
          title: "Two-way Control",
          descr: "Now Swiper may be used as controller for any number of other Swipers, and even be controlled at the same time"
        }, {
          title: "Full Navigation Control",
          descr: "Swiper comes with all required built-in navigation elements, such as Pagination, Navigation arrows and Scrollbar"
        }, {
          title: "Flexbox Layout",
          descr: "Swiper uses modern flexbox layout for slides layout, which solves a lot of problems and time with size caclulations. Such layout also allows configuring the Slides grid using pure CSS"
        }, {
          title: "Most Flexible Slides Layout Grid",
          descr: "Swiper has a lot of parameters on initialization to make it as flexible as possible. You can control slides per view, per column, per group, space between slides, and many more"
        }, {
          title: "Parallax Transitions",
          descr: "Swiper supports modern parallax transition effects that can be used on any element inside of Swiper: images, text blocks, headings, backgrounds, etc."
        }, {
          title: "Images Lazy Loading",
          descr: "Swiper Lazy Loading delays loading of images in inactive/invisible slides until the user swipes to them. Such feature could make the page load faster and improve Swiper performance"
        }, {
          title: "Virtual Slides",
          descr: "Swiper comes with Virtual Slides feature that is great when you have a lot of slides or content-heavy/image-heavy slides so it will keep just the required amount of slides in DOM"
        }, {
          title: "And many more ...",
          descr: "All Swiper well-known features are also here: Responsive, Scroll prevention, Resistant bounds, Autoplay, Loop mode, Nested Swipers"
        }];

      function I(e) {
        var t = e.children;
        return (0, i.jsx)("h2", {
          className: "mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl",
          children: t
        })
      }

      function E() {
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(g, {}), (0, i.jsx)("div", {
            className: "mb-20 flex items-center justify-center bg-primary py-5",
            children: (0, i.jsx)(o.Z, {})
          }), (0, i.jsxs)("div", {
            className: "mx-auto max-w-[90rem] px-4 text-lg sm:px-6 lg:px-8 xl:px-10",
            children: [(0, i.jsxs)("div", {
              className: "mx-auto flex max-w-5xl flex-col space-y-5",
              children: [(0, i.jsx)("h1", {
                className: "mb-6 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl",
                children: "Swiper"
              }), (0, i.jsx)("p", {
                children: "Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps."
              }), (0, i.jsxs)("p", {
                children: ["Swiper is not compatible with all platforms,", " ", (0, i.jsx)("b", {
                  children: "it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity"
                }), "."]
              }), (0, i.jsxs)("p", {
                className: "mb-2",
                children: ["Swiper, along with other great components, is a part of", " ", (0, i.jsx)("a", {
                  href: "//framework7.io",
                  children: "Framework7"
                }), " - a fully-featured framework for building iOS & Android apps. Swiper is also a default slider component in the", " ", (0, i.jsx)("a", {
                  href: "http://ionicframework.com/",
                  target: "blank",
                  rel: "noopener",
                  children: "Ionic Framework"
                }), "."]
              })]
            }), (0, i.jsxs)("div", {
              className: "mt-24",
              children: [(0, i.jsx)(I, {
                children: "Available For"
              }), (0, i.jsx)("div", {
                className: "mx-auto grid max-w-6xl grid-cols-3 gap-4 sm:grid-cols-6",
                children: T.map((function(e) {
                  var t = e.title,
                    r = e.image,
                    s = e.link;
                  return (0, i.jsx)("a", {
                    href: s,
                    className: "flex items-center justify-center",
                    children: (0, i.jsx)("img", {
                      src: "/images/libs/".concat(r),
                      width: "140",
                      height: "140",
                      alt: "".concat(t, " logo"),
                      title: t,
                      loading: "lazy"
                    })
                  }, t)
                }))
              })]
            }), (0, i.jsxs)("div", {
              className: "mx-auto mt-24 max-w-6xl",
              children: [(0, i.jsx)(I, {
                children: "Powered With Top Notch Features"
              }), (0, i.jsx)("ul", {
                className: "text-md grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12",
                children: M.map((function(e) {
                  var t = e.title,
                    r = e.descr;
                  return (0, i.jsxs)("li", {
                    children: [(0, i.jsx)("h3", {
                      className: "mb-4 text-2xl font-bold text-gray-900 dark:text-gray-200",
                      children: t
                    }), r]
                  }, t)
                }))
              })]
            }), (0, i.jsxs)("div", {
              className: "mt-24",
              children: [(0, i.jsx)(I, {
                children: "Used By Millions"
              }), (0, i.jsx)("div", {
                className: "mx-auto grid max-w-6xl grid-cols-4 gap-6 sm:grid-cols-8",
                children: n.map((function(e) {
                  var t = e.image,
                    r = e.title;
                  return (0, i.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, i.jsx)("img", {
                      src: "/images/clients/".concat(t),
                      width: "120",
                      height: "120",
                      alt: "".concat(r, " logo"),
                      title: r,
                      loading: "lazy"
                    })
                  }, r)
                }))
              })]
            }), (0, i.jsxs)("div", {
              className: "mx-auto mt-24 mb-20 max-w-6xl text-center",
              children: [(0, i.jsx)(I, {
                children: "And It Is Free"
              }), (0, i.jsx)("div", {
                className: "my-4",
                children: "Swiper is completely free and open-source (MIT Licensed)"
              }), (0, i.jsx)("nav", {
                className: "space-x-2 text-lg",
                children: a.Z.map((function(e) {
                  var t = e.name,
                    r = e.link;
                  return (0, i.jsx)(l.default, {
                    href: r,
                    children: (0, i.jsx)("a", {
                      className: "my-2 inline-block w-40 rounded-full bg-primary bg-opacity-10 px-4 py-2 font-semibold text-primary duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-48",
                      children: t
                    })
                  }, r)
                }))
              })]
            }), (0, i.jsxs)("div", {
              className: "mt-24 mb-20 grid-cols-2 gap-8 md:grid",
              children: [(0, i.jsxs)("div", {
                className: "text-center",
                children: [(0, i.jsx)("h2", {
                  className: "mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:mb-4",
                  children: "Swiper Studio"
                }), (0, i.jsx)("p", {
                  children: "Premium no-code Swiper builder and editor for Swiper patrons"
                }), (0, i.jsx)(N, {})]
              }), (0, i.jsxs)("div", {
                className: "mt-24 text-center md:mt-0",
                children: [(0, i.jsx)("h2", {
                  className: "mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:mb-4",
                  children: "UI Initiative"
                }), (0, i.jsx)("p", {
                  children: "Premium Swiper templates & plugins for Swiper patrons"
                }), (0, i.jsx)(y, {})]
              })]
            }), (0, i.jsxs)("div", {
              className: "mx-auto mt-24 mb-20 max-w-6xl text-center",
              children: [(0, i.jsx)(I, {
                children: "More Of Our Projects"
              }), (0, i.jsx)(v, {})]
            }), (0, i.jsxs)("div", {
              className: "mt-24 mb-20 text-center",
              children: [(0, i.jsx)(I, {
                children: "Sponsors"
              }), (0, i.jsx)(w.Z, {}), (0, i.jsxs)("div", {
                className: "my-4",
                children: ["Support Swiper on", " ", (0, i.jsx)("a", {
                  href: "https://opencollective.com/swiper",
                  target: "_blank",
                  rel: "noopener",
                  onClick: function() {
                    return (0, j.O)("https://opencollective.com/swiper")
                  },
                  children: "Open Collective"
                }), " ", "or", " ", (0, i.jsx)("a", {
                  href: "https://patreon.com/swiperjs",
                  target: "_blank",
                  rel: "noopener",
                  onClick: function() {
                    return (0, j.O)("https://patreon.com/swiperjs")
                  },
                  children: "Patreon"
                }), " ", "and help us to make it even better!", (0, i.jsx)("br", {}), "Your support means a lot for us!"]
              }), (0, i.jsxs)("div", {
                className: "my-4 flex flex-col items-center space-y-6",
                children: [(0, i.jsxs)(C, {
                  href: "https://opencollective.com/swiper",
                  children: [(0, i.jsx)(S.r, {
                    className: "mr-4 h-6 w-6"
                  }), (0, i.jsx)("span", {
                    children: "Become a sponsor on OpenCollective"
                  })]
                }), (0, i.jsxs)(C, {
                  href: "https://patreon.com/swiperjs",
                  children: [(0, i.jsx)(k.r, {
                    className: "mr-4 h-6 w-6 text-[#FF424D]"
                  }), (0, i.jsx)("span", {
                    children: "Support Swiper on Patreon"
                  })]
                })]
              })]
            })]
          })]
        })
      }
    }
  },
  function(e) {
    e.O(0, [84, 774, 888, 179], (function() {
      return t = 8581, e(e.s = t);
      var t
    }));
    var t = e.O();
    _N_E = t
  }
]);
