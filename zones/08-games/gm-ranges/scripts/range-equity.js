(() => {
  var t = {
      482: (t, e) => {
        const o = "AKQJT98765432",
          n = "scdh",
          s = {
            d: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 57.14286 75" xmlns="http://www.w3.org/2000/svg"><path d="M 40.154739,20.623825 C 32.594025,10.395258 28.571428,0 28.571428,0 c 0,0 -4.022597,10.395258 -11.583311,20.623825 C 9.4238315,30.848825 0,37.5 0,37.5 c 0,0 9.4238315,6.647591 16.988117,16.879733 7.560714,10.224999 11.583311,20.620266 11.583311,20.620266 0,0 4.022597,-10.395267 11.583311,-20.620266 C 47.719024,44.147591 57.142858,37.5 57.142858,37.5 c 0,0 -9.423834,-6.651175 -16.988119,-16.876175 z" style="fill:#df0000;stroke-width:3.5714283"/></svg>',
            h: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 71.232315 75" xmlns="http://www.w3.org/2000/svg"><path d="m 51.981784,-4e-7 c -14.4379,0 -16.365625,14.4874994 -16.365625,14.4874994 0,0 -1.927725,-14.4874994 -16.365625,-14.4874994 C 9.1444487,-4e-7 -2e-7,6.4958328 -2e-7,18.749999 -2e-7,34.941666 29.29051,51.224224 35.616159,74.999998 41.635334,51.244153 71.232318,34.941666 71.232318,18.749999 71.232318,6.4958328 62.087869,-4e-7 51.981784,-4e-7 Z" style="fill:#df0000;fill-opacity:1;stroke-width:4.30698061"/></svg>',
            c: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><path d="m 46.022365,34.089478 c 0,0 9.375,-7.499997 9.375,-17.897367 C 55.397365,10.10527 49.993415,3.6991588e-6 37.499998,3.6991588e-6 25.006575,3.6991588e-6 19.602631,10.109218 19.602631,16.192111 c 0,10.39737 9.375,17.897367 9.375,17.897367 C 18.56447,25.97764 -3.4074026e-6,31.515794 -3.4074026e-6,47.727639 -3.4074026e-6,55.84343 6.6315759,64.772373 17.044731,64.772373 c 12.493423,0 17.897373,-13.638155 17.897373,-13.638155 0,0 1.586841,15.544739 -7.66974,23.865788 h 20.455262 c -9.256575,-8.317102 -7.669734,-23.865788 -7.669734,-23.865788 0,0 5.403944,13.638155 17.897367,13.638155 10.417108,0 17.04474,-8.932891 17.04474,-17.044734 0,-16.211845 -18.564473,-21.749999 -28.977634,-13.638161 z" style="fill:#000000;fill-opacity:1;stroke-width:3.94736862"/></svg>',
            s: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 62.492939 75" xmlns="http://www.w3.org/2000/svg"><path d="M 62.451125,48.579829 C 61.505884,34.091233 32.191701,6.8211035 31.24646,-2.5e-7 30.301219,6.8175322 0.98703591,34.087662 0.04179509,48.579829 -0.6183111,58.822199 6.6623868,63.068425 13.282978,63.068425 20.451062,62.991354 26.371322,53.066421 28.410738,51.13685 29.355978,53.693871 22.149494,75 19.899664,75 h 22.697498 c -2.24983,0 -9.456314,-21.306129 -8.511074,-23.86315 1.785596,1.772402 7.019498,11.634552 15.131665,11.931575 6.616686,-0.0036 13.893478,-4.246226 13.233372,-14.488596 z" style="fill:#000000;stroke-width:3.73485875"/></svg>'
          },
          a = new Set,
          r = function(t, e, o, n) {
            const a = o / 2;
            let r = "";
            return r = "d" == t || "h" == t ? "#df0000" : "#000", $(`<div class='rounded playingcard border' id=${n} style='width: ${2*o/3}px;height: ${o}px; margin:2px'></div>`).append($(`<div class="text-center" style="width: 100%;height: 50%;color: ${r}"></div>`).append($(`<div style='font-size: ${a}px; line-height: 100%;'>${e}</div>`))).append($('<div class="text-center" style="width: 100%;height: 50%;"></div>').append(s[t]))
          },
          l = function(t) {
            return $(`<div class='rounded playingcard' style='height: ${t}px; width: ${2*t/3}px;margin:0px 3px' value='empty'></div>`).append('<svg height="100%" display="block" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><pattern id="a" width="2.5" height="1" patternTransform="matrix(19.455 -19.455 19.455 19.455 -7.1429 27.143)" patternUnits="userSpaceOnUse"><rect y="-.5" width="1" height="2" fill="#190c80"/></pattern></defs><rect transform="scale(-1,1)" x="-585" y="15" width="570" height="870" fill="url(#a)" stroke="#190c80" stroke-width="30"/></svg>')
          };
        e.makeHiddenCard = l;
        const c = function() {
          const t = $(this).attr("id"),
            e = $("<div></div>");
          for (let s = 0; s < 4; s++) {
            const l = n[s],
              c = $('<div class="row mx-0"></div>');
            for (let e = 0; e < 13; e++) {
              const n = o[e],
                s = r(l, n, 40, `${t}_${n}${l}`);
              a.has(n + l) ? s.addClass("selected") : s.click(d), c.append(s)
            }
            e.append(c)
          }
          const s = $('<button type="button" class="btn btn-light border" style="width: 99%; margin:2px 0px 2px 2px">Clear</button>').attr("id", `${t}_clear`).click(i);
          return e.append(s), e
        };
        e.addCardSelect = function(t) {
          t.popover({
            container: t,
            content: c,
            trigger: "focus",
            html: !0,
            placement: "bottom"
          })
        };
        const i = function() {
          const t = $(this).attr("id").split("_")[0],
            e = $(`#${t}`).attr("value"),
            o = parseInt($(`#${t}`).css("height"));
          a.delete(e);
          const n = l(o);
          $(`#${t}`).html(n.children()), $(`#${t}`).attr("value", "empty"), $(`#${t}`).removeClass("border"), window.cardUpdate(t)
        };
        e.removeSelection = function(t) {
          a.delete(t)
        };
        const d = function() {
          const t = $(this).attr("id").split("_"),
            e = t[0],
            o = t[1][0],
            n = t[1][1],
            s = $(`#${e}`).attr("value"),
            l = parseInt($(`#${e}`).css("height"));
          a.delete(s), a.add(t[1]);
          const c = r(n, o, l, "tmp");
          $(`#${e}`).html(c.children()), $(`#${e}`).attr("value", o + n), $(`#${e}`).addClass("border"), window.cardUpdate(e)
        };
        e.setCardRandom = function(t) {
          const e = $(`#${t}`).attr("value"),
            s = parseInt($(`#${t}`).css("height"));
          a.delete(e);
          const l = [];
          for (let t = 0; t < 4; t++) {
            const e = n[t];
            for (let t = 0; t < 13; t++) {
              const n = o[t];
              a.has(n + e) || l.push(n + e)
            }
          }
          const c = (i = l)[Math.floor(Math.random() * i.length)];
          var i;
          a.add(c);
          const d = r(c[1], c[0], s, "tmp");
          $(`#${t}`).html(d.children()), $(`#${t}`).attr("value", c), $(`#${t}`).addClass("border")
        }, e.resetCard = function(t) {
          const e = $(`#${t}`).attr("value"),
            o = parseInt($(`#${t}`).css("height"));
          a.delete(e);
          const n = l(o);
          $(`#${t}`).html(n.children()), $(`#${t}`).attr("value", "empty"), $(`#${t}`).removeClass("border")
        }
      },
      831: (t, e) => {
        const o = function(t) {
          return t < 5 ? Math.round(2 * t) / 2 : Math.round(t)
        };
        e.getPotOdds = function(t, e) {
          const n = 100 * t + 50 * e,
            s = 100 - n;
          return s > n ? n <= 0 ? "∞" : o(s / n).toString() + ":1" : s <= 0 ? "0" : "1:" + o(n / s).toString()
        }
      },
      581: (t, e, o) => {
        const n = o(284),
          s = [69634, 73730, 81922, 98306, 135427, 139523, 147715, 164099, 266757, 270853, 279045, 295429, 529159, 533255, 541447, 557831, 1053707, 1057803, 1065995, 1082379, 2102541, 2106637, 2114829, 2131213, 4199953, 4204049, 4212241, 4228625, 8394515, 8398611, 8406803, 8423187, 16783383, 16787479, 16795671, 16812055, 33560861, 33564957, 33573149, 33589533, 67115551, 67119647, 67127839, 67144223, 134224677, 134228773, 134236965, 134253349, 268442665, 268446761, 268454953, 268471337],
          a = function(t) {
            const e = [];
            for (const o of s) t.includes(o) || e.push(o);
            return e
          },
          r = function(t, e) {
            const o = [];
            for (; o.length < e;) {
              const e = t[Math.floor(Math.random() * t.length)];
              o.includes(e) || o.push(e)
            }
            return o
          },
          l = function(t, e) {
            for (let o = t.length - 1; o >= 0; o--) {
              const s = Math.floor(Math.random() * (o + 1)),
                a = t[s];
              t[s] = t[o], t[o] = a;
              const r = [n.cardToInt(a[0]), n.cardToInt(a[1])];
              if (!e.has(r[0]) && !e.has(r[1])) return e.add(r[0]), e.add(r[1]), r
            }
            return !1
          };
        e.calculateHandRangeEquity = function(t, e, o) {
          let s = 0,
            r = 0,
            l = 0;
          if (t = t.map(n.cardToInt), 5 === (o = o.map(n.cardToInt)).length) {
            const a = n.evaluate(o, t);
            for (let t of e) {
              t = t.map(n.cardToInt);
              const e = n.evaluateEarly(o, t, a);
              a < e ? s += 1 : a === e && (r += 1), l += 1
            }
          } else {
            const c = [],
              i = a(o.concat(t)),
              d = n.combinations(i, 5 - o.length);
            for (const e of d) {
              const s = o.concat(e),
                a = n.evaluate(s, t);
              c.push(a)
            }
            for (let t of e) {
              t = t.map(n.cardToInt);
              for (let e = 0; e < d.length; e++) {
                const a = d[e];
                if (a.includes(t[0]) || a.includes(t[1])) continue;
                const i = o.concat(a),
                  p = c[e],
                  u = n.evaluateEarly(i, t, p);
                p < u ? s += 1 : p === u && (r += 1), l += 1
              }
            }
          }
          return [s / l, r / l]
        }, e.approximateHandRangeEquity = function(t, e, o) {
          let s = 0,
            c = 0;
          t = t.map(n.cardToInt);
          for (let i = 0; i < o; i++) {
            const o = [t],
              i = new Set(t),
              d = l(e, i);
            if (!1 === d) throw "No viable hand combinations in player ranges";
            o.push(d);
            const p = a([].concat(...o)),
              u = r(p, 5),
              f = [];
            for (const t of o) f.push(n.evaluate(u, t));
            f[0] < f[1] ? s += 1 : f[0] === f[1] && (c += 1)
          }
          return [s / o, c / o]
        }, e.calculateRangeRangeEquities = function(t, e) {
          const o = new Array(t.length).fill(0),
            s = new Array(t.length).fill(0),
            c = [];
          e = e.map(n.cardToInt);
          for (let e = 0; e < t.length; e++) c.push(e);
          c.sort(((e, o) => t[e].length - t[o].length));
          for (let i = 0; i < 5e3; i++) {
            let i = new Set(e),
              d = [],
              p = !1,
              u = 0;
            for (; !p;) {
              p = !0;
              for (const o of c) {
                const n = l(t[o], i);
                if (!1 === n) {
                  if (p = !1, u > 2e3) throw "No viable hand combinations in player ranges";
                  u += 1, i = new Set(e), d = [];
                  break
                }
                d.push(n)
              }
            }
            const f = a(e.concat(...d)),
              $ = e.concat(r(f, 5 - e.length)),
              h = [];
            for (const t of d) h.push(n.evaluate($, t));
            const g = n.findWinners(h);
            if (g.length > 1)
              for (const t of g) s[c[t]] += 1;
            else o[c[g[0]]] += 1
          }
          return [o, s, 5e3]
        }
      },
      284: (t, e, o) => {
        const n = o(77),
          s = n.FLUT,
          a = n.ULUT,
          r = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          l = {
            2: 0,
            3: 1,
            4: 2,
            5: 3,
            6: 4,
            7: 5,
            8: 6,
            9: 7,
            T: 8,
            J: 9,
            Q: 10,
            K: 11,
            A: 12
          },
          c = {
            s: 1,
            h: 2,
            d: 4,
            c: 8
          };
        e.cardToInt = function(t) {
          const e = t[0],
            o = t[1],
            n = l[e];
          return 1 << n << 16 | c[o] << 12 | n << 8 | r[n]
        }, e.getRankInt = function(t) {
          return t >> 8 & 15
        }, e.getSuitInt = function(t) {
          return t >> 12 & 15
        }, e.combinations = function(t, e) {
          if (e > t.length || 0 == e) return [];
          const o = [];
          for (let t = e - 1; t >= 0; t--) o.push(t);
          const n = [];
          for (;;) {
            const s = [];
            for (let n = 0; n < e; n++) s.push(t[o[n]]);
            n.push(s);
            for (let n = 0; n < e; n++)
              if (o[n] += 1, o[n] < t.length - n) {
                for (let t = n - 1; t >= 0; t--) o[t] = o[t + 1] + 1;
                break
              } if (o[0] >= t.length) break
          }
          return n
        };
        const i = function(t) {
            return [
              [t[0], t[1], t[2], t[3], t[4]],
              [t[0], t[1], t[2], t[3], t[5]],
              [t[0], t[1], t[2], t[3], t[6]],
              [t[0], t[1], t[2], t[4], t[5]],
              [t[0], t[1], t[2], t[4], t[6]],
              [t[0], t[1], t[2], t[5], t[6]],
              [t[0], t[1], t[3], t[4], t[5]],
              [t[0], t[1], t[3], t[4], t[6]],
              [t[0], t[1], t[3], t[5], t[6]],
              [t[0], t[1], t[4], t[5], t[6]],
              [t[0], t[2], t[3], t[4], t[5]],
              [t[0], t[2], t[3], t[4], t[6]],
              [t[0], t[2], t[3], t[5], t[6]],
              [t[0], t[2], t[4], t[5], t[6]],
              [t[0], t[3], t[4], t[5], t[6]],
              [t[1], t[2], t[3], t[4], t[5]],
              [t[1], t[2], t[3], t[4], t[6]],
              [t[1], t[2], t[3], t[5], t[6]],
              [t[1], t[2], t[4], t[5], t[6]],
              [t[1], t[3], t[4], t[5], t[6]],
              [t[2], t[3], t[4], t[5], t[6]]
            ]
          },
          d = function(t) {
            return [
              [t[0], t[1], t[2], t[3], t[4]],
              [t[0], t[1], t[2], t[3], t[5]],
              [t[0], t[1], t[2], t[4], t[5]],
              [t[0], t[1], t[3], t[4], t[5]],
              [t[0], t[2], t[3], t[4], t[5]],
              [t[1], t[2], t[3], t[4], t[5]]
            ]
          };
        e.evaluate = function(t, e) {
          const o = e.concat(t);
          let n = 7462;
          if (7 === o.length) {
            const t = i(o);
            for (let e = 0; e < t.length; e++) {
              const o = p(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (6 === o.length) {
            const t = d(o);
            for (let e = 0; e < t.length; e++) {
              const o = p(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (5 === o.length) return p(o)
        }, e.evaluateEarly = function(t, e, o) {
          const n = e.concat(t);
          let s = 7462;
          if (7 === n.length) {
            const t = i(n);
            for (let e = 0; e < t.length; e++) {
              const n = p(t[e]);
              if (n < o) return n;
              n < s && (s = n)
            }
            return s
          }
          if (6 === n.length) {
            const t = d(n);
            for (let e = 0; e < t.length; e++) {
              const n = p(t[e]);
              if (n < o) return n;
              n < s && (s = n)
            }
            return s
          }
          if (5 === n.length) return p(n)
        };
        const p = function(t) {
          if (t[0] & t[1] & t[2] & t[3] & t[4] & 61440) {
            const e = (t[0] | t[1] | t[2] | t[3] | t[4]) >> 16,
              o = h(e);
            return s.get(o)
          } {
            const e = $(t);
            return a.get(e)
          }
        };
        e.evaluateRainbow = function(t, e) {
          const o = e.concat(t);
          let n = 7462;
          if (7 === o.length) {
            const t = i(o);
            for (let e = 0; e < t.length; e++) {
              const o = u(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (6 === o.length) {
            const t = d(o);
            for (let e = 0; e < t.length; e++) {
              const o = u(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (5 === o.length) return p(o)
        }, e.evaluateFlush = function(t, e) {
          const o = e.concat(t);
          let n = 7462;
          if (7 === o.length) {
            const t = i(o);
            for (let e = 0; e < t.length; e++) {
              const o = f(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (6 === o.length) {
            const t = d(o);
            for (let e = 0; e < t.length; e++) {
              const o = f(t[e]);
              o < n && (n = o)
            }
            return n
          }
          if (5 === o.length) return p(o)
        };
        const u = function(t) {
            const e = $(t);
            return a.get(e)
          },
          f = function(t) {
            const e = (t[0] | t[1] | t[2] | t[3] | t[4]) >> 16,
              o = h(e);
            return s.get(o)
          },
          $ = function(t) {
            let e = 1;
            for (let o = 0; o < 5; o++) e *= 255 & t[o];
            return e
          },
          h = function(t) {
            let e = 1;
            for (let o = 0; o <= 12; o++) t & 1 << o && (e *= r[o]);
            return e
          };
        e.findWinners = function(t) {
          const e = Math.min(...t),
            o = [];
          for (let n = 0; n < t.length; n++) t[n] == e && o.push(n);
          return o
        }
      },
      77: (t, e) => {
        const o = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          n = new Map,
          s = new Map;

        function a(t, e) {
          const o = t.indexOf(e);
          o > -1 && t.splice(o, 1)
        }

        function r(t, e) {
          if (e > t.length || 0 == e) return [];
          const o = [];
          for (let t = e - 1; t >= 0; t--) o.push(t);
          const n = [];
          for (;;) {
            const s = [];
            for (const e of o) s.push(t[e]);
            n.push(s);
            for (let n = 0; n < e; n++)
              if (o[n] += 1, o[n] < t.length - n) {
                for (let t = n - 1; t >= 0; t--) o[t] = o[t + 1] + 1;
                break
              } if (o[0] >= t.length) break
          }
          return n
        }

        function l(t) {
          let e = 1;
          for (let n = 0; n <= 12; n++) t & 1 << n && (e *= o[n]);
          return e
        }! function() {
          const t = [7936, 3968, 1984, 992, 496, 248, 124, 62, 31, 4111],
            e = [],
            o = function*(t) {
              let e = 32,
                o = e | (Math.floor((e & -e) / 1) >> 1) - 1;
              for (yield o;;) e = 1 + (o | o - 1), o = e | (Math.floor((e & -e) / (o & -o)) >> 1) - 1, yield o
            }();
          for (let n = 0; n < 1286; n++) {
            const n = o.next().value;
            let s = !0;
            for (const e of t) n ^ e || (s = !1);
            s && e.push(n)
          }
          let a = 1;
          for (const e of t) {
            const t = l(e);
            n.set(t, a), a += 1
          }
          a = 323;
          for (let t = e.length - 1; t >= 0; t--) {
            const o = l(e[t]);
            n.set(o, a), a += 1
          }! function(t, e) {
            let o = 1600;
            for (const e of t) {
              const t = l(e);
              s.set(t, o), o += 1
            }
            o = 6186;
            for (let t = e.length - 1; t >= 0; t--) {
              const n = l(e[t]);
              s.set(n, o), o += 1
            }
          }(t, e)
        }(),
        function() {
          const t = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          let e = 11;
          for (const n of t) {
            const r = [...t];
            a(r, n);
            for (const t of r) {
              const a = o[n] ** 4 * o[t];
              s.set(a, e), e += 1
            }
          }
          e = 167;
          for (const n of t) {
            const r = [...t];
            a(r, n);
            for (const t of r) {
              const a = o[n] ** 3 * o[t] ** 2;
              s.set(a, e), e += 1
            }
          }
          e = 1610;
          for (const n of t) {
            const l = [...t];
            a(l, n);
            const c = r(l, 2);
            for (const t of c) {
              const a = t[0],
                r = t[1],
                l = o[n] ** 3 * o[a] * o[r];
              s.set(l, e), e += 1
            }
          }
          e = 2468;
          const n = r(t, 2);
          for (const r of n) {
            const n = r[0],
              l = r[1],
              c = [...t];
            a(c, n), a(c, l);
            for (const t of c) {
              const a = o[n] ** 2 * o[l] ** 2 * o[t];
              s.set(a, e), e += 1
            }
          }
          e = 3326;
          for (const n of t) {
            const l = [...t];
            a(l, n);
            const c = r(l, 3);
            for (const t of c) {
              const a = t[0],
                r = t[1],
                l = t[2],
                c = o[n] ** 2 * o[a] * o[r] * o[l];
              s.set(c, e), e += 1
            }
          }
        }(), e.FLUT = n, e.ULUT = s
      },
      922: (t, e) => {
        const o = ["AA", "KK", "QQ", "JJ", "TT", "99", "AKs", "AQs", "88", "AJs", "AKo", "KQs", "ATs", "AQo", "77", "KJs", "A9s", "KTs", "AJo", "KQo", "QJs", "A8s", "66", "QTs", "ATo", "K9s", "A7s", "KJo", "JTs", "A5s", "A6s", "KTo", "Q9s", "55", "A9o", "QJo", "A4s", "K8s", "A3s", "A8o", "K7s", "J9s", "QTo", "A2s", "Q8s", "K9o", "K6s", "A7o", "T9s", "44", "JTo", "K5s", "J8s", "A5o", "Q7s", "A6o", "Q9o", "K4s", "T8s", "K3s", "K8o", "A4o", "Q6s", "98s", "K7o", "J7s", "K2s", "A3o", "33", "J9o", "Q5s", "T7s", "Q8o", "T9o", "A2o", "K6o", "Q4s", "J6s", "97s", "Q3s", "J5s", "K5o", "87s", "J8o", "22", "T6s", "Q2s", "Q7o", "J4s", "96s", "K4o", "T8o", "86s", "76s", "J3s", "98o", "Q6o", "J7o", "K3o", "T5s", "T4s", "K2o", "J2s", "95s", "Q5o", "T3s", "T7o", "85s", "65s", "Q4o", "75s", "J6o", "T2s", "97o", "94s", "87o", "Q3o", "93s", "54s", "84s", "J5o", "64s", "T6o", "74s", "Q2o", "92s", "J4o", "53s", "96o", "86o", "76o", "73s", "83s", "63s", "J3o", "T5o", "82s", "43s", "J2o", "T4o", "95o", "52s", "62s", "72s", "85o", "65o", "75o", "T3o", "42s", "32s", "T2o", "94o", "54o", "84o", "64o", "93o", "74o", "92o", "53o", "83o", "63o", "73o", "43o", "82o", "52o", "62o", "72o", "42o", "32o"];
        e.CO = o;
        const n = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
          s = ["s", "h", "d", "c"];
        let a = [];
        const r = [],
          l = [],
          c = {
            UTG: "44+, A2s+, K9s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KJo+",
            "UTG+1": "22+, A2s+, K8s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, 65s, 54s, ATo+, KTo+, QJo, JTo",
            Cutoff: "22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 75s+, 65s, 54s, 43s, 32s, A8o+, A5o, KTo+, QTo+, JTo, T9o, 98o",
            Button: "22+, A2s+, K2s+, Q4s+, J6s+, T6s+, 95s+, 85s+, 74s+, 63s+, 53s+, 43s, 32s, A2o+, K7o+, Q9o+, J9o+, T9o, 98o",
            "Small Blind": "22+, A2s+, K2s+, Q3s+, J4s+, T4s+, 94s+, 84s+, 73s+, 63s+, 53s+, 43s, 32s, A2o+, K4o+, Q8o+, J9o+, T9o, 98o"
          },
          i = {
            UTG: "77+, ATs+, A5s, KTs+, QTs+, J9s+, T9s, 98s, AQo+",
            "UTG+1": "77+, ATs+, A5s, KTs+, QTs+, J9s+, T9s, 98s, AQo+",
            "UTG+2": "77+, A8s+, A4s-A5s, K9s+, Q9s+, J9s+, T9s, 98s, AJo+",
            Lojack: "44+, A2s+, K9s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KJo+",
            Hijack: "22+, A2s+, K8s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, 65s, 54s, ATo+, KTo+, QJo, JTo",
            Cutoff: "22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 75s+, 65s, 54s, 43s, 32s, A8o+, A5o, KTo+, QTo+, JTo, T9o, 98o",
            Button: "22+, A2s+, K2s+, Q4s+, J6s+, T6s+, 95s+, 85s+, 74s+, 63s+, 53s+, 43s, 32s, A2o+, K7o+, Q9o+, J9o+, T9o, 98o",
            "Small Blind": "22+, A2s+, K2s+, Q3s+, J4s+, T4s+, 94s+, 84s+, 73s+, 63s+, 53s+, 43s, 32s, A2o+, K4o+, Q8o+, J9o+, T9o, 98o"
          },
          d = function(t) {
            return t.attr("id").split("_")[0]
          };
        e.loadRanges = function() {
          const t = localStorage.getItem("RANGEINDICES");
          if (null !== t) {
            t.includes("NaN") || "" === t ? localStorage.clear() : a = t.split(",");
            for (let t = 0; t < a.length; t++) {
              const e = a[t],
                o = localStorage.getItem("rn" + e),
                n = localStorage.getItem("r" + e);
              r.push(o), l.push(n)
            }
          }
        };
        const p = function() {
            const t = prompt("Please enter a name for this range.");
            if (null === t) return;
            const e = d($(this)),
              o = $(`#${e}_range`).val();
            let n = "";
            n = 0 === a.length ? "0" : (parseInt(a[a.length - 1]) + 1).toString(), a.push(n), localStorage.setItem("RANGEINDICES", a.join()), localStorage.setItem("rn" + n, t), localStorage.setItem("r" + n, o), $(".customrangesgroup").append($(`<option id='${n}_user_range' class='${n}_user_range' value='${o}'>${t}</option>`)), $(`#${e}_rangeloaderselector`).val(`${o}`)
          },
          u = function() {
            const t = d($(this)),
              e = $("option:selected", $(`#${t}_rangeloaderselector`));
            if ("customrangesgroup" !== e.parent().attr("id")) return;
            const o = e.attr("id").split("_")[0],
              n = a.indexOf(o);
            a.splice(n, 1), a.length > 0 ? localStorage.setItem("RANGEINDICES", a.join()) : localStorage.removeItem("RANGEINDICES"), localStorage.removeItem("rn" + o), localStorage.removeItem("r" + o), $(`.${o}_user_range`).remove()
          },
          f = function() {
            const t = d($(this)),
              e = $("option:selected", this).val();
            v(t, e)
          },
          h = function() {
            $(this).toggleClass("selected");
            const t = d($(this));
            T(t), A(t, !0), window.rangeUpdate(t)
          },
          g = function(t, e, o) {
            return $("<td></td>").attr({
              id: t,
              class: "range_cell " + o
            }).mousedown(h).append(e)
          },
          m = function(t) {
            const e = d($(this)),
              n = $(this).val(),
              s = x(n);
            for (const t of o) $(`#${e}_${t}`).removeClass("selected");
            s.forEach((t => $(`#${e}_${t}`).addClass("selected"))), A(e, !0), window.rangeUpdate(e)
          },
          v = function(t, e) {
            $(`#${t}_range`).val(e);
            const n = x(e);
            for (const e of o) $(`#${t}_${e}`).removeClass("selected");
            n.forEach((e => $(`#${t}_${e}`).addClass("selected"))), A(t, !0), window.rangeUpdate(t)
          },
          x = function(t) {
            const e = new Set,
              o = t.toUpperCase().split(/[\s,]+/);
            for (let t = 0; t < o.length; t++) {
              const n = y(o[t]);
              for (let t = 0; t < n.length; t++) e.add(n[t])
            }
            return e
          },
          y = function(t) {
            const e = t;
            return "+" === e[e.length - 1] ? _(e) : "-" === e[e.length - 1] ? b(e) : e.indexOf("-") >= 0 ? w(e) : e.length < 2 ? [] : 2 === e.length ? [e] : [e[0] + e[1] + e[2].toLowerCase()]
          },
          _ = function(t) {
            const e = [],
              o = n.indexOf(t[1]);
            if (t[0] === t[1])
              for (let t = 0; t <= o; t++) e.push(n[t] + n[t]);
            else
              for (let s = n.indexOf(t[0]) + 1; s <= o; s++) e.push(t[0] + n[s] + t[2].toLowerCase());
            return e
          },
          b = function(t) {
            const e = [],
              o = n.indexOf(t[1]);
            if (t[0] === t[1])
              for (let t = o; t <= 12; t++) e.push(n[t] + n[t]);
            else
              for (let s = o; s <= 12; s++) e.push(t[0] + n[s] + t[2].toLowerCase());
            return e
          },
          w = function(t) {
            const e = [],
              o = t.split("-"),
              s = o[0],
              a = o[1];
            let r = n.indexOf(s[1]),
              l = n.indexOf(a[1]);
            if (l > r) {
              const t = l;
              l = r, r = t
            }
            if (s[0] === s[1])
              for (let t = l; t <= r; t++) e.push(n[t] + n[t]);
            else
              for (let t = l; t <= r; t++) e.push(s[0] + n[t] + s[2].toLowerCase());
            return e
          },
          T = function(t) {
            let e = "",
              o = !1,
              s = "",
              a = "";
            for (let r = 0; r <= 12; r++) $(`#${t}_${n[r]}${n[r]}`).hasClass("selected") ? (o || (o = !0, s = n[r] + n[r]), a = n[r] + n[r]) : (o && (e += s === a ? a + ", " : "AA" === s ? a + "+, " : a + "-" + s + ", "), o = !1);
            o && (e += s === a ? a + ", " : "AA" === s ? a + "+, " : s + "-, ");
            for (let r = 0; r <= 11; r++) {
              o = !1, s = "", a = "";
              for (let l = r + 1; l <= 12; l++) $(`#${t}_${n[r]}${n[l]}s`).hasClass("selected") ? (o || (o = !0, s = n[r] + n[l] + "s"), a = n[r] + n[l] + "s") : (o && (s === a ? e += a + ", " : s === n[r] + n[r + 1] + "s" ? e += a + "+, " : e += a + "-" + s + ", "), o = !1);
              o && (s === a ? e += a + ", " : s === n[r] + n[r + 1] + "s" ? e += a + "+, " : e += s + "-, ")
            }
            for (let r = 0; r <= 11; r++) {
              o = !1, s = "", a = "";
              for (let l = r + 1; l <= 12; l++) $(`#${t}_${n[r]}${n[l]}o`).hasClass("selected") ? (o || (o = !0, s = n[r] + n[l] + "o"), a = n[r] + n[l] + "o") : (o && (s === a ? e += a + ", " : s === n[r] + n[r + 1] + "o" ? e += a + "+, " : e += a + "-" + s + ", "), o = !1);
              o && (s === a ? e += a + ", " : s === n[r] + n[r + 1] + "o" ? e += a + "+, " : e += s + "-, ")
            }
            e.length > 2 && (e = e.slice(0, -2)), $(`#${t}_range`).val(e)
          },
          C = function(t) {
            const e = t.from,
              n = t.to,
              s = d(t.input);
            let a = 0;
            for (const t of o) $(`#${s}_${t}`).removeClass("selected");
            for (const t of o)
              if (t[0] === t[1] ? a += 6 : "s" === t[2] ? a += 4 : a += 12, a > e && a <= n && $(`#${s}_${t}`).addClass("selected"), a > n) break;
            T(s), A(s, !1), window.rangeUpdate(s)
          },
          A = function(t, e) {
            let n = 0,
              s = 0,
              a = !0;
            for (const e of o)
              if ($(`#${t}_${e}`).hasClass("selected")) a = !1, e[0] === e[1] ? n += 6 : "s" === e[2] ? n += 4 : n += 12;
              else {
                let t = 0;
                t = e[0] === e[1] ? 6 : "s" === e[2] ? 4 : 12, a && (s += t)
              } 1326 === s && (s = 0);
            const r = (s / 1326 * 100).toFixed(1) + "%",
              l = (n / 1326 * 100).toFixed(1) + "%";
            $(`#${t}_percent`).text("R: " + r + ", C: " + l), $(`#${t}_percent_display`).text(l), e && $(`#${t}_slider`).data("ionRangeSlider").update({
              from: s,
              to: s + n
            })
          };
        e.buildRange = function(t, e) {
          const o = $(`<h4 class='mb-2'>${t}</h4>`),
            s = $(`<div id='${e}_percent' style='float: right;' data-toggle='tooltip' data-html='true' title='<strong>Raising</strong> and <strong>Calling</strong> percentages'>R: 0.0%, C: 0.0%</div>`);
          s.tooltip(), o.append(s);
          const d = $(`<input type='text' style='width: 100%; font-size: small;' id='${e}_range' aria-label='Range text input'>`),
            h = $('<div class="my-1"></div>'),
            v = $(`<input id='${e}_slider' type='text' class='js-range-slider' value='' />`);
          h.append(v), v.ionRangeSlider({
            type: "double",
            min: 0,
            max: 1326,
            from: 0,
            to: 0,
            skin: "round",
            hide_min_max: !0,
            hide_from_to: !0,
            drag_interval: !0,
            onChange: C
          });
          const x = function(t) {
              const e = $("<tbody></tbody>");
              for (let o = 0; o < 13; o++) {
                const s = $("<tr></tr>");
                for (let e = 0; e < 13; e++) {
                  let a = "",
                    r = "";
                  o === e ? (a = n[o] + n[e], r = g(`${t}_${a}`, a, "pocketpair")) : o < e ? (a = n[o] + n[e] + "s", r = g(`${t}_${a}`, a, "suited")) : (a = n[e] + n[o] + "o", r = g(`${t}_${a}`, a, "offsuit")), s.append(r)
                }
                e.append(s)
              }
              return $(`<table id='${t}_table' class='mx-auto range_table'></table>`).append(e)
            }(e),
            y = function(t) {
              const e = $(`<button type='button' class='btn btn-success' id='${t}_saverange' style='width: 45%; white-space: nowrap;'>Save range</button>`).click(p),
                o = $(`<button type='button' class='btn btn-danger ml-2' id='${t}_delrange' style='width: 45%; white-space: nowrap;'>Delete range</button>`).click(u),
                n = $(`<select name='saved_range' id='${t}_rangeloaderselector' class='form-select ml-auto' style='width: 100%; height: 100%' aria-label='User range selector'></select>`).change(f);
              n.append($('<option id="empty_user_range" value="">&lt;empty&gt;</option>'));
              const s = $('<optgroup label="Custom Ranges" id="customrangesgroup" class="customrangesgroup"></optgroup>');
              for (let t = 0; t < r.length; t++) s.append(`<option id='${a[t]}_user_range' class='${a[t]}_user_range' value='${l[t]}'>${r[t]}</option>`);
              n.append(s);
              const d = $('<optgroup label="6-Max Opening Ranges"></optgroup>');
              for (const t in c) d.append(`<option id='sixmax_${t}' value='${c[t]}'>${t}</option>`);
              n.append(d);
              const h = $('<optgroup label="9-Max Opening Ranges"></optgroup>');
              for (const t in i) h.append(`<option id='ninemax_${t}' value='${i[t]}'>${t}</option>`);
              n.append(h);
              const g = $('<div class="col-7" style="padding: 0"></div>').append(e, o),
                m = $('<div class="col-5" style="padding: 0"></div>').append(n),
                v = $('<div class="range_loader row mt-2 mx-0"></div>');
              return v.append(g, m), v
            }(e);
          return d.on("keyup", m), $(`<div id='${e}_player' class='col-5 player p-3'></div>`).append(o).append(d).append(h).append(x).append(y)
        };
        const J = function(t) {
            const e = [];
            for (const o of t) {
              const t = k(o);
              for (const o of t) e.push(o)
            }
            return e
          },
          k = function(t) {
            const e = [];
            if (2 === t.length)
              for (let o = 0; o <= 2; o++)
                for (let n = o + 1; n <= 3; n++) e.push([t[0] + s[o], t[1] + s[n]]);
            else if ("s" === t[2])
              for (const o of s) e.push([t[0] + o, t[1] + o]);
            else
              for (const o of s)
                for (const n of s) o !== n && e.push([t[0] + o, t[1] + n]);
            return e
          };
        e.getPlayerHands = function(t) {
          try {
            return function(t) {
              const e = $(`#${t}card1`).attr("value"),
                o = $(`#${t}card2`).attr("value");
              if ("empty" === e || "empty" === o) throw "Incomplete hand";
              return [
                [e, o]
              ]
            }(t)
          } catch (e) {
            const n = [];
            for (const e of o) $(`#${t}_${e}`).hasClass("selected") && n.push(e);
            const s = J(n);
            if (s.length > 0) return s;
            throw `No hands in <strong>${$(`#${t}_name`).text()}</strong> range`
          }
        }, e.getHands = function(t) {
          const e = [];
          for (const n of o) $(`#${t}_${n}`).hasClass("selected") && e.push(n);
          return J(e)
        }
      }
    },
    e = {};

  function o(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var a = e[n] = {
      exports: {}
    };
    return t[n](a, a.exports, o), a.exports
  }(() => {
    const t = o(482),
      e = o(922),
      n = o(831),
      s = o(581);
    let a = !1,
      r = [];
    const l = function() {
        r = []
      },
      c = function(t) {
        return t.attr("id").split("_")[0]
      },
      i = function(e) {
        const o = t.makeHiddenCard(50).attr({
          id: `${e}card1`,
          tabindex: "0",
          playercard: !0
        }).addClass("ml-auto");
        t.addCardSelect(o);
        const n = t.makeHiddenCard(50).attr({
          id: `${e}card2`,
          tabindex: "0",
          playercard: !0
        }).addClass("mr-auto");
        t.addCardSelect(n);
        const s = $('<div class="d-flex"></div>');
        return s.append(o, n), s
      },
      d = function() {
        const t = v;
        let o = "";
        o = 0 === t ? "Hero" : `Villain ${t}`, $(`#${t}_delete`).click(p);
        const n = i(t);
        $(`#${t}_cards`).append(n);
        const s = e.buildRange(o, t);
        s.addClass("rounded my-3 mx-xl-4 mx-lg-2 mx-md-1"), $(`#${t}_player`).replaceWith(s), $(`#${t}_box`).change(l), v += 1
      },
      p = function() {
        const e = c($(this)),
          o = $(`#${e}_box`).prop("checked");
        t.removeSelection($(`#${e}card1`).attr("value")), t.removeSelection($(`#${e}card2`).attr("value")), $(`#${e}_player`).remove(), $(`#${e}_display_row`).remove(), o && l()
      },
      u = function(t) {
        const e = $('<div class="alert alert-danger alert-dismissible fade show" role="alert"></div>').append(t).append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        return $("#simulation_errors").prepend(e)
      },
      f = function() {
        a = !0
      },
      h = function() {
        return $("#simulate").removeClass("btn-danger"), $("#simulate").addClass("btn-primary"), $("#simulate_spinner").remove(), $("#simulate").text("Simulate"), $("#simulate").off("click"), $("#simulate").click(m)
      },
      g = function() {
        return setTimeout((() => {
          if (a) h();
          else {
            let t;
            try {
              t = function() {
                const t = [];
                if ($("#display_body > tr").each(((e, o) => {
                    const n = c($(o));
                    return $(`#${n}_box`).prop("checked") ? t.push(n) : ($(`#${n}_equity`).text("-"), $(`#${n}_tie`).text("-"), $(`#${n}_potodds`).text("-"))
                  })), 0 === t.length) throw u("No active players to simulate"), "Failed";
                const o = [];
                try {
                  for (const n of t) o.push(e.getPlayerHands(n))
                } catch (t) {
                  throw u(t), "Failed"
                }
                try {
                  return s.calculateRangeRangeEquities(o, function() {
                    const t = [];
                    for (let e = 1; e <= 5; e++) {
                      const o = $(`#board${e}`).attr("value");
                      "empty" !== o && t.push(o)
                    }
                    return t
                  }())
                } catch (t) {
                  throw u(t), t
                }
              }()
            } catch (t) {
              return void h()
            }
            if (0 === r.length) r = t;
            else {
              for (let e = 0; e < t[0].length; e++) r[0][e] += t[0][e], r[1][e] += t[1][e];
              r[2] += t[2]
            }! function(t, e, o) {
              const s = [];
              $("#display_body > tr").each(((t, e) => {
                const o = c($(e));
                if ($(`#${o}_box`).prop("checked")) return s.push(o)
              }));
              for (let a = 0; a < s.length; a++) {
                const r = s[a],
                  l = (t[a] / o * 100).toFixed(1);
                $(`#${r}_equity`).text(`${l}%`);
                const c = (e[a] / o * 100).toFixed(1);
                $(`#${r}_tie`).text(`${c}%`), $(`#${r}_potodds`).text(n.getPotOdds(t[a] / o, e[a] / o))
              }
            }(r[0], r[1], r[2]), g()
          }
        }), 50)
      },
      m = function(t) {
        t.detail && 1 !== t.detail || (a = !1, l(), $("#simulate").removeClass("btn-primary"), $("#simulate").addClass("btn-danger"), $("#simulate").text("Stop"), $("#simulate").prepend($('<span id="simulate_spinner" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>')), $("#simulate").off("click"), $("#simulate").click(f), g())
      };
    window.cardUpdate = function(t) {
      if (l(), $(`#${t}`).attr("playercard")) {
        const e = t[0];
        "empty" !== $(`#${e}card1`).attr("value") && "empty" !== $(`#${e}card2`).attr("value") ? ($(`#${e}card1`).addClass("inplay"), $(`#${e}card2`).addClass("inplay"), $(`#${e}_percent_display`).css("text-decoration", "line-through")) : ($(`#${e}card1`).removeClass("inplay"), $(`#${e}card2`).removeClass("inplay"), $(`#${e}_percent_display`).css("text-decoration", "none"))
      }
    }, window.rangeUpdate = function(t) {
      l()
    };
    let v = 0;
    e.loadRanges(), d(), d();
    const x = t.makeHiddenCard(60).attr({
      id: "board1",
      tabindex: "0"
    }).css("margin", "0px 5px 0px 0px").addClass("ml-auto");
    t.addCardSelect(x);
    const y = t.makeHiddenCard(60).attr({
      id: "board2",
      tabindex: "0"
    }).css("margin", "0px 5px 0px 0px");
    t.addCardSelect(y);
    const _ = t.makeHiddenCard(60).attr({
      id: "board3",
      tabindex: "0"
    }).css("margin", "0px 15px 0px 0px");
    t.addCardSelect(_);
    const b = t.makeHiddenCard(60).attr({
      id: "board4",
      tabindex: "0"
    }).css("margin", "0px 15px 0px 0px");
    t.addCardSelect(b);
    const w = t.makeHiddenCard(60).attr({
      id: "board5",
      tabindex: "0"
    }).css("margin", "0px 0px 0px 0px").addClass("mr-auto");
    t.addCardSelect(w), $("#board").append(x, y, _, b, w), $("#clear_board").click((function() {
      t.resetCard("board1"), t.resetCard("board2"), t.resetCard("board3"), t.resetCard("board4"), t.resetCard("board5")
    })), $("#add_player").click((function() {
      const t = v,
        o = `Villain ${t}`;
      ! function(t, e) {
        const o = $(`<td id='${t}_delete' style='cursor: pointer; vertical-align: middle; font-size: 1.5rem; font-weight: 700; color: firebrick;'>&times;</td>`);
        o.click(p);
        const n = i(t),
          s = $(`<input type='checkbox' id='${t}_box' aria-label='Select player ${t} for simulation' checked>`);
        s.change(l);
        const a = $(`<tr id='${t}_display_row'></tr`).append($("<td style='vertical-align: middle;'></td>").append(s)).append($(`<td style='vertical-align: middle;' id='${t}_name'><a href='#${t}_player' style='color: black;'>${e}</a></td>`)).append($("<td></td>").append(n)).append($(`<td style='vertical-align: middle; text-align: center;' id='${t}_percent_display'>0.0%</td>`)).append($(`<td style='vertical-align: middle; text-align: center;' id='${t}_equity'>-</td>`)).append($(`<td style='vertical-align: middle; text-align: center;' id='${t}_tie'>-</td>`)).append($(`<td style='vertical-align: middle; text-align: center;' id='${t}_potodds'>-</td>`)).append(o);
        $("#display_body").append(a)
      }(t, o);
      const n = e.buildRange(o, t);
      n.addClass("rounded my-3 mx-xl-4 mx-lg-2 mx-md-1"), $("#players").append(n), v += 1
    })), $("#simulate").click(m)
  })()
})();
