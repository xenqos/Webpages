(() => {
  var t = {
      482: (t, n) => {
        const e = "AKQJT98765432",
          o = "scdh",
          r = {
            d: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 57.14286 75" xmlns="http://www.w3.org/2000/svg"><path d="M 40.154739,20.623825 C 32.594025,10.395258 28.571428,0 28.571428,0 c 0,0 -4.022597,10.395258 -11.583311,20.623825 C 9.4238315,30.848825 0,37.5 0,37.5 c 0,0 9.4238315,6.647591 16.988117,16.879733 7.560714,10.224999 11.583311,20.620266 11.583311,20.620266 0,0 4.022597,-10.395267 11.583311,-20.620266 C 47.719024,44.147591 57.142858,37.5 57.142858,37.5 c 0,0 -9.423834,-6.651175 -16.988119,-16.876175 z" style="fill:#df0000;stroke-width:3.5714283"/></svg>',
            h: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 71.232315 75" xmlns="http://www.w3.org/2000/svg"><path d="m 51.981784,-4e-7 c -14.4379,0 -16.365625,14.4874994 -16.365625,14.4874994 0,0 -1.927725,-14.4874994 -16.365625,-14.4874994 C 9.1444487,-4e-7 -2e-7,6.4958328 -2e-7,18.749999 -2e-7,34.941666 29.29051,51.224224 35.616159,74.999998 41.635334,51.244153 71.232318,34.941666 71.232318,18.749999 71.232318,6.4958328 62.087869,-4e-7 51.981784,-4e-7 Z" style="fill:#df0000;fill-opacity:1;stroke-width:4.30698061"/></svg>',
            c: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><path d="m 46.022365,34.089478 c 0,0 9.375,-7.499997 9.375,-17.897367 C 55.397365,10.10527 49.993415,3.6991588e-6 37.499998,3.6991588e-6 25.006575,3.6991588e-6 19.602631,10.109218 19.602631,16.192111 c 0,10.39737 9.375,17.897367 9.375,17.897367 C 18.56447,25.97764 -3.4074026e-6,31.515794 -3.4074026e-6,47.727639 -3.4074026e-6,55.84343 6.6315759,64.772373 17.044731,64.772373 c 12.493423,0 17.897373,-13.638155 17.897373,-13.638155 0,0 1.586841,15.544739 -7.66974,23.865788 h 20.455262 c -9.256575,-8.317102 -7.669734,-23.865788 -7.669734,-23.865788 0,0 5.403944,13.638155 17.897367,13.638155 10.417108,0 17.04474,-8.932891 17.04474,-17.044734 0,-16.211845 -18.564473,-21.749999 -28.977634,-13.638161 z" style="fill:#000000;fill-opacity:1;stroke-width:3.94736862"/></svg>',
            s: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 62.492939 75" xmlns="http://www.w3.org/2000/svg"><path d="M 62.451125,48.579829 C 61.505884,34.091233 32.191701,6.8211035 31.24646,-2.5e-7 30.301219,6.8175322 0.98703591,34.087662 0.04179509,48.579829 -0.6183111,58.822199 6.6623868,63.068425 13.282978,63.068425 20.451062,62.991354 26.371322,53.066421 28.410738,51.13685 29.355978,53.693871 22.149494,75 19.899664,75 h 22.697498 c -2.24983,0 -9.456314,-21.306129 -8.511074,-23.86315 1.785596,1.772402 7.019498,11.634552 15.131665,11.931575 6.616686,-0.0036 13.893478,-4.246226 13.233372,-14.488596 z" style="fill:#000000;stroke-width:3.73485875"/></svg>'
          },
          s = new Set,
          c = function(t, n, e, o) {
            const s = e / 2;
            let c = "";
            return c = "d" == t || "h" == t ? "#df0000" : "#000", $(`<div class='rounded playingcard border' id=${o} style='width: ${2*e/3}px;height: ${e}px; margin:2px'></div>`).append($(`<div class="text-center" style="width: 100%;height: 50%;color: ${c}"></div>`).append($(`<div style='font-size: ${s}px; line-height: 100%;'>${n}</div>`))).append($('<div class="text-center" style="width: 100%;height: 50%;"></div>').append(r[t]))
          },
          a = function(t) {
            return $(`<div class='rounded playingcard' style='height: ${t}px; width: ${2*t/3}px;margin:0px 3px' value='empty'></div>`).append('<svg height="100%" display="block" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><pattern id="a" width="2.5" height="1" patternTransform="matrix(19.455 -19.455 19.455 19.455 -7.1429 27.143)" patternUnits="userSpaceOnUse"><rect y="-.5" width="1" height="2" fill="#190c80"/></pattern></defs><rect transform="scale(-1,1)" x="-585" y="15" width="570" height="870" fill="url(#a)" stroke="#190c80" stroke-width="30"/></svg>')
          };
        n.makeHiddenCard = a;
        const l = function() {
          const t = $(this).attr("id"),
            n = $("<div></div>");
          for (let r = 0; r < 4; r++) {
            const a = o[r],
              l = $('<div class="row mx-0"></div>');
            for (let n = 0; n < 13; n++) {
              const o = e[n],
                r = c(a, o, 40, `${t}_${o}${a}`);
              s.has(o + a) ? r.addClass("selected") : r.click(d), l.append(r)
            }
            n.append(l)
          }
          const r = $('<button type="button" class="btn btn-light border" style="width: 99%; margin:2px 0px 2px 2px">Clear</button>').attr("id", `${t}_clear`).click(i);
          return n.append(r), n
        };
        n.addCardSelect = function(t) {
          t.popover({
            container: t,
            content: l,
            trigger: "focus",
            html: !0,
            placement: "bottom"
          })
        };
        const i = function() {
          const t = $(this).attr("id").split("_")[0],
            n = $(`#${t}`).attr("value"),
            e = parseInt($(`#${t}`).css("height"));
          s.delete(n);
          const o = a(e);
          $(`#${t}`).html(o.children()), $(`#${t}`).attr("value", "empty"), $(`#${t}`).removeClass("border"), window.cardUpdate(t)
        };
        n.removeSelection = function(t) {
          s.delete(t)
        };
        const d = function() {
          const t = $(this).attr("id").split("_"),
            n = t[0],
            e = t[1][0],
            o = t[1][1],
            r = $(`#${n}`).attr("value"),
            a = parseInt($(`#${n}`).css("height"));
          s.delete(r), s.add(t[1]);
          const l = c(o, e, a, "tmp");
          $(`#${n}`).html(l.children()), $(`#${n}`).attr("value", e + o), $(`#${n}`).addClass("border"), window.cardUpdate(n)
        };
        n.setCardRandom = function(t) {
          const n = $(`#${t}`).attr("value"),
            r = parseInt($(`#${t}`).css("height"));
          s.delete(n);
          const a = [];
          for (let t = 0; t < 4; t++) {
            const n = o[t];
            for (let t = 0; t < 13; t++) {
              const o = e[t];
              s.has(o + n) || a.push(o + n)
            }
          }
          const l = (i = a)[Math.floor(Math.random() * i.length)];
          var i;
          s.add(l);
          const d = c(l[1], l[0], r, "tmp");
          $(`#${t}`).html(d.children()), $(`#${t}`).attr("value", l), $(`#${t}`).addClass("border")
        }, n.resetCard = function(t) {
          const n = $(`#${t}`).attr("value"),
            e = parseInt($(`#${t}`).css("height"));
          s.delete(n);
          const o = a(e);
          $(`#${t}`).html(o.children()), $(`#${t}`).attr("value", "empty"), $(`#${t}`).removeClass("border")
        }
      },
      831: (t, n) => {
        const e = function(t) {
          return t < 5 ? Math.round(2 * t) / 2 : Math.round(t)
        };
        n.getPotOdds = function(t, n) {
          const o = 100 * t + 50 * n,
            r = 100 - o;
          return r > o ? o <= 0 ? "∞" : e(r / o).toString() + ":1" : r <= 0 ? "0" : "1:" + e(o / r).toString()
        }
      },
      284: (t, n, e) => {
        const o = e(77),
          r = o.FLUT,
          s = o.ULUT,
          c = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          a = {
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
          l = {
            s: 1,
            h: 2,
            d: 4,
            c: 8
          };
        n.cardToInt = function(t) {
          const n = t[0],
            e = t[1],
            o = a[n];
          return 1 << o << 16 | l[e] << 12 | o << 8 | c[o]
        }, n.getRankInt = function(t) {
          return t >> 8 & 15
        }, n.getSuitInt = function(t) {
          return t >> 12 & 15
        }, n.combinations = function(t, n) {
          if (n > t.length || 0 == n) return [];
          const e = [];
          for (let t = n - 1; t >= 0; t--) e.push(t);
          const o = [];
          for (;;) {
            const r = [];
            for (let o = 0; o < n; o++) r.push(t[e[o]]);
            o.push(r);
            for (let o = 0; o < n; o++)
              if (e[o] += 1, e[o] < t.length - o) {
                for (let t = o - 1; t >= 0; t--) e[t] = e[t + 1] + 1;
                break
              } if (e[0] >= t.length) break
          }
          return o
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
        n.evaluate = function(t, n) {
          const e = n.concat(t);
          let o = 7462;
          if (7 === e.length) {
            const t = i(e);
            for (let n = 0; n < t.length; n++) {
              const e = f(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (6 === e.length) {
            const t = d(e);
            for (let n = 0; n < t.length; n++) {
              const e = f(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (5 === e.length) return f(e)
        }, n.evaluateEarly = function(t, n, e) {
          const o = n.concat(t);
          let r = 7462;
          if (7 === o.length) {
            const t = i(o);
            for (let n = 0; n < t.length; n++) {
              const o = f(t[n]);
              if (o < e) return o;
              o < r && (r = o)
            }
            return r
          }
          if (6 === o.length) {
            const t = d(o);
            for (let n = 0; n < t.length; n++) {
              const o = f(t[n]);
              if (o < e) return o;
              o < r && (r = o)
            }
            return r
          }
          if (5 === o.length) return f(o)
        };
        const f = function(t) {
          if (t[0] & t[1] & t[2] & t[3] & t[4] & 61440) {
            const n = (t[0] | t[1] | t[2] | t[3] | t[4]) >> 16,
              e = p(n);
            return r.get(e)
          } {
            const n = g(t);
            return s.get(n)
          }
        };
        n.evaluateRainbow = function(t, n) {
          const e = n.concat(t);
          let o = 7462;
          if (7 === e.length) {
            const t = i(e);
            for (let n = 0; n < t.length; n++) {
              const e = u(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (6 === e.length) {
            const t = d(e);
            for (let n = 0; n < t.length; n++) {
              const e = u(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (5 === e.length) return f(e)
        }, n.evaluateFlush = function(t, n) {
          const e = n.concat(t);
          let o = 7462;
          if (7 === e.length) {
            const t = i(e);
            for (let n = 0; n < t.length; n++) {
              const e = h(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (6 === e.length) {
            const t = d(e);
            for (let n = 0; n < t.length; n++) {
              const e = h(t[n]);
              e < o && (o = e)
            }
            return o
          }
          if (5 === e.length) return f(e)
        };
        const u = function(t) {
            const n = g(t);
            return s.get(n)
          },
          h = function(t) {
            const n = (t[0] | t[1] | t[2] | t[3] | t[4]) >> 16,
              e = p(n);
            return r.get(e)
          },
          g = function(t) {
            let n = 1;
            for (let e = 0; e < 5; e++) n *= 255 & t[e];
            return n
          },
          p = function(t) {
            let n = 1;
            for (let e = 0; e <= 12; e++) t & 1 << e && (n *= c[e]);
            return n
          };
        n.findWinners = function(t) {
          const n = Math.min(...t),
            e = [];
          for (let o = 0; o < t.length; o++) t[o] == n && e.push(o);
          return e
        }
      },
      418: (t, n, e) => {
        const o = e(284),
          r = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"],
          s = ["s", "h", "d", "c"],
          c = [4096, 8192, 16384, 32768],
          a = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1]
          ],
          l = function(t, n) {
            return n > t ? 0 : a[t][n]
          },
          i = function(t) {
            const n = new Map;
            for (const e of t) n.set(e, (n.get(e) || 0) + 1);
            return n
          },
          d = function(t, n) {
            let e = 1;
            for (const [o, r] of t) e *= l(n.cards[o].length, r);
            return e
          },
          f = function(t) {
            let n = 0,
              e = -1;
            for (const [o, r] of t) r > n && (n = r, e = o);
            return [e, n]
          },
          u = function(t, n) {
            return 3 == t.size ? h(t, n) : 4 == t.size ? g(t, n) : 5 == t.size ? p(t, n) : []
          },
          h = function(t, n) {
            const e = [],
              o = f(t);
            let r;
            if (2 == o[1]) {
              const [e, o] = function(t) {
                const n = [];
                for (const [e, o] of t) 2 == o && n.push(e);
                return n
              }(t);
              r = (n.cards[e].length - 1) * (n.cards[o].length - 1)
            } else r = l(n.cards[o[0]].length - 1, 2);
            for (let o = 0; o < c.length; o++) {
              const s = c[o],
                a = [];
              for (const e of t.keys()) {
                if (!n.cardSuits[e].includes(s)) break;
                a.push(4294905855 & n.cards[e][0] | s)
              }
              3 == a.length && e.push({
                board: a,
                numVariations: r,
                color: s,
                num: 3
              })
            }
            return e
          },
          g = function(t, n) {
            const e = [],
              r = f(t);
            let s;
            const a = Array.from(t.keys()),
              i = o.combinations(a, 3);
            for (let t = 0; t < i.length; t++) {
              const o = i[t],
                d = a.filter((t => !o.includes(t)));
              for (let t = 0; t < c.length; t++) {
                const a = c[t],
                  i = [];
                for (const t of o) {
                  if (!n.cardSuits[t].includes(a)) break;
                  i.push(4294905855 & n.cards[t][0] | a)
                }
                3 == i.length && (s = n.cardSuits[d[0]].includes(a) ? d[0] == r[0] ? l(n.cards[r[0]].length - 1, 2) : (n.cards[r[0]].length - 1) * (n.cards[d[0]].length - 1) : d[0] == r[0] ? l(n.cards[r[0]].length, 2) : (n.cards[r[0]].length - 1) * n.cards[d[0]].length, e.push({
                  board: i,
                  numVariations: s,
                  color: a,
                  num: 3
                }))
              }
            }
            s = n.cards[r[0]].length - 1;
            for (let o = 0; o < c.length; o++) {
              const r = c[o],
                a = [];
              for (const e of t.keys()) {
                if (!n.cardSuits[e].includes(r)) break;
                a.push(4294905855 & n.cards[e][0] | r)
              }
              4 == a.length && e.push({
                board: a,
                numVariations: s,
                color: r,
                num: 4
              })
            }
            return e
          },
          p = function(t, n) {
            const e = [];
            let r;
            const s = Array.from(t.keys());
            let a = o.combinations(s, 3);
            for (let t = 0; t < a.length; t++) {
              const o = a[t],
                l = s.filter((t => !o.includes(t)));
              for (let t = 0; t < c.length; t++) {
                const s = c[t],
                  a = [];
                for (const t of o) {
                  if (!n.cardSuits[t].includes(s)) break;
                  a.push(4294905855 & n.cards[t][0] | s)
                }
                if (3 == a.length) {
                  const t = n.cardSuits[l[0]].includes(s),
                    o = n.cardSuits[l[1]].includes(s);
                  r = t && o ? (n.cards[l[0]].length - 1) * (n.cards[l[1]].length - 1) : t ? (n.cards[l[0]].length - 1) * n.cards[l[1]].length : o ? n.cards[l[0]].length * (n.cards[l[1]].length - 1) : n.cards[l[0]].length * n.cards[l[1]].length, e.push({
                    board: a,
                    numVariations: r,
                    color: s,
                    num: 3
                  })
                }
              }
            }
            a = o.combinations(s, 4);
            for (let t = 0; t < a.length; t++) {
              const o = a[t],
                l = s.filter((t => !o.includes(t)));
              for (let t = 0; t < c.length; t++) {
                const s = c[t],
                  a = [];
                for (const t of o) {
                  if (!n.cardSuits[t].includes(s)) break;
                  a.push(4294905855 & n.cards[t][0] | s)
                }
                4 == a.length && (r = n.cardSuits[l[0]].includes(s) ? n.cards[l[0]].length - 1 : n.cards[l[0]].length, e.push({
                  board: a,
                  numVariations: r,
                  color: s,
                  num: 4
                }))
              }
            }
            for (let o = 0; o < c.length; o++) {
              const r = c[o],
                s = [];
              for (const e of t.keys()) {
                if (!n.cardSuits[e].includes(r)) break;
                s.push(4294905855 & n.cards[e][0] | r)
              }
              5 == s.length && e.push({
                board: s,
                numVariations: 1,
                color: r,
                num: 5
              })
            }
            return e
          },
          m = function(t, n) {
            return (61440 & t) == n
          },
          $ = function(t, n, e, r, s) {
            if (3 == s) return m(t[0], r) && m(t[1], r) ? Math.min(e, o.evaluateFlush(t, n)) : e;
            if (4 == s) {
              const s = m(t[0], r),
                c = m(t[1], r);
              return s && c ? Math.min(e, o.evaluateFlush(t, n)) : s ? Math.min(e, o.evaluateFlush([t[0]], n)) : c ? Math.min(e, o.evaluateFlush([t[1]], n)) : e
            }
            if (5 == s) {
              const s = m(t[0], r),
                c = m(t[1], r);
              return s && c ? Math.min(e, o.evaluateFlush(t, n)) : s ? Math.min(e, o.evaluateFlush([t[0]], n)) : c ? Math.min(e, o.evaluateFlush([t[1]], n)) : Math.min(e, o.evaluateFlush([], n))
            }
          },
          v = [69634, 73730, 81922, 98306, 135427, 139523, 147715, 164099, 266757, 270853, 279045, 295429, 529159, 533255, 541447, 557831, 1053707, 1057803, 1065995, 1082379, 2102541, 2106637, 2114829, 2131213, 4199953, 4204049, 4212241, 4228625, 8394515, 8398611, 8406803, 8423187, 16783383, 16787479, 16795671, 16812055, 33560861, 33564957, 33573149, 33589533, 67115551, 67119647, 67127839, 67144223, 134224677, 134228773, 134236965, 134253349, 268442665, 268446761, 268454953, 268471337];
        n.calculateHandHandEquities = function(t, n) {
          const e = [];
          for (const n of t) e.push([o.cardToInt(n[0]), o.cardToInt(n[1])]);
          if ((n = n.map(o.cardToInt)).length < 3) return function(t) {
            const n = new Array(t.length).fill(0),
              e = new Array(t.length).fill(0);
            let a = 0;
            const l = function(t) {
                const n = [],
                  e = [];
                for (let a = 0; a < r.length; a++) {
                  const l = [],
                    i = [];
                  for (let n = 0; n < 4; n++) {
                    const e = o.cardToInt(r[a] + s[n]);
                    t.includes(e) || (l.push(e), i.push(c[n]))
                  }
                  n.push(l), e.push(i)
                }
                return {
                  cards: n,
                  cardSuits: e
                }
              }([].concat(...t)),
              f = [0, 0, 0, 0, 0];
            for (;;) {
              const r = i(f);
              let s = !0;
              for (const [t, n] of r)
                if (n > l.cards[t].length) {
                  s = !1;
                  break
                } if (s) {
                const s = d(r, l),
                  c = [];
                for (let t = 0; t < 5; t++) c.push(l.cards[f[t]][0]);
                const i = [];
                for (let n = 0; n < t.length; n++) i.push(o.evaluateRainbow(t[n], c));
                let h = 0;
                const g = u(r, l);
                for (let r = 0; r < g.length; r++) {
                  const s = g[r],
                    c = s.numVariations;
                  if (0 == c) continue;
                  const a = [];
                  for (let n = 0; n < t.length; n++) a.push($(t[n], s.board, i[n], s.color, s.num));
                  const l = o.findWinners(a);
                  if (l.length > 1)
                    for (let t = 0; t < l.length; t++) e[l[t]] += c;
                  else n[l[0]] += c;
                  h += c
                }
                const p = o.findWinners(i);
                if (p.length > 1)
                  for (let t = 0; t < p.length; t++) e[p[t]] += s - h;
                else n[p[0]] += s - h;
                a += s
              }
              for (let t = 0; t < 5; t++)
                if (f[t] += 1, f[t] < 13) {
                  for (let n = t - 1; n >= 0; n--) f[n] = f[t];
                  break
                } if (f[4] > 12) break
            }
            return [n, e, a]
          }(e);
          let a = 0;
          const l = new Array(e.length).fill(0),
            f = new Array(e.length).fill(0);
          if (5 == n.length) {
            const t = [];
            for (const r of e) t.push(o.evaluate(n, r));
            const r = o.findWinners(t);
            if (r.length > 1)
              for (const t of r) f[t] += 1;
            else l[r[0]] += 1;
            a += 1
          } else {
            const t = function(t) {
                const n = [];
                for (const e of v) t.includes(e) || n.push(e);
                return n
              }(n.concat(...e)),
              r = o.combinations(t, 5 - n.length);
            for (const t of r) {
              const r = n.concat(t),
                s = [];
              for (let t = 0; t < e.length; t++) s.push(o.evaluate(r, e[t]));
              const c = o.findWinners(s);
              if (c.length > 1)
                for (const t of c) f[t] += 1;
              else l[c[0]] += 1;
              a += 1
            }
          }
          return [l, f, a]
        }
      },
      77: (t, n) => {
        const e = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          o = new Map,
          r = new Map;

        function s(t, n) {
          const e = t.indexOf(n);
          e > -1 && t.splice(e, 1)
        }

        function c(t, n) {
          if (n > t.length || 0 == n) return [];
          const e = [];
          for (let t = n - 1; t >= 0; t--) e.push(t);
          const o = [];
          for (;;) {
            const r = [];
            for (const n of e) r.push(t[n]);
            o.push(r);
            for (let o = 0; o < n; o++)
              if (e[o] += 1, e[o] < t.length - o) {
                for (let t = o - 1; t >= 0; t--) e[t] = e[t + 1] + 1;
                break
              } if (e[0] >= t.length) break
          }
          return o
        }

        function a(t) {
          let n = 1;
          for (let o = 0; o <= 12; o++) t & 1 << o && (n *= e[o]);
          return n
        }! function() {
          const t = [7936, 3968, 1984, 992, 496, 248, 124, 62, 31, 4111],
            n = [],
            e = function*(t) {
              let n = 32,
                e = n | (Math.floor((n & -n) / 1) >> 1) - 1;
              for (yield e;;) n = 1 + (e | e - 1), e = n | (Math.floor((n & -n) / (e & -e)) >> 1) - 1, yield e
            }();
          for (let o = 0; o < 1286; o++) {
            const o = e.next().value;
            let r = !0;
            for (const n of t) o ^ n || (r = !1);
            r && n.push(o)
          }
          let s = 1;
          for (const n of t) {
            const t = a(n);
            o.set(t, s), s += 1
          }
          s = 323;
          for (let t = n.length - 1; t >= 0; t--) {
            const e = a(n[t]);
            o.set(e, s), s += 1
          }! function(t, n) {
            let e = 1600;
            for (const n of t) {
              const t = a(n);
              r.set(t, e), e += 1
            }
            e = 6186;
            for (let t = n.length - 1; t >= 0; t--) {
              const o = a(n[t]);
              r.set(o, e), e += 1
            }
          }(t, n)
        }(),
        function() {
          const t = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          let n = 11;
          for (const o of t) {
            const c = [...t];
            s(c, o);
            for (const t of c) {
              const s = e[o] ** 4 * e[t];
              r.set(s, n), n += 1
            }
          }
          n = 167;
          for (const o of t) {
            const c = [...t];
            s(c, o);
            for (const t of c) {
              const s = e[o] ** 3 * e[t] ** 2;
              r.set(s, n), n += 1
            }
          }
          n = 1610;
          for (const o of t) {
            const a = [...t];
            s(a, o);
            const l = c(a, 2);
            for (const t of l) {
              const s = t[0],
                c = t[1],
                a = e[o] ** 3 * e[s] * e[c];
              r.set(a, n), n += 1
            }
          }
          n = 2468;
          const o = c(t, 2);
          for (const c of o) {
            const o = c[0],
              a = c[1],
              l = [...t];
            s(l, o), s(l, a);
            for (const t of l) {
              const s = e[o] ** 2 * e[a] ** 2 * e[t];
              r.set(s, n), n += 1
            }
          }
          n = 3326;
          for (const o of t) {
            const a = [...t];
            s(a, o);
            const l = c(a, 3);
            for (const t of l) {
              const s = t[0],
                c = t[1],
                a = t[2],
                l = e[o] ** 2 * e[s] * e[c] * e[a];
              r.set(l, n), n += 1
            }
          }
        }(), n.FLUT = o, n.ULUT = r
      }
    },
    n = {};

  function e(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var s = n[o] = {
      exports: {}
    };
    return t[o](s, s.exports, e), s.exports
  }(() => {
    const t = e(418),
      n = e(482),
      o = e(831);

    function r(t) {
      const e = n.makeHiddenCard(50).attr({
        id: `${t}card1`,
        tabindex: "0",
        playercard: !0
      }).addClass("ml-auto");
      n.addCardSelect(e);
      const o = n.makeHiddenCard(50).attr({
        id: `${t}card2`,
        tabindex: "0",
        playercard: !0
      }).addClass("mr-auto");
      n.addCardSelect(o);
      const r = $('<div class="d-flex"></div>');
      return r.append(e, o), r
    }

    function s() {
      const n = [],
        e = [];
      for (let t = 0; t < 9; t++) {
        const o = $(`#${t}card1`).attr("value"),
          r = $(`#${t}card2`).attr("value");
        "empty" != o && "empty" != r && (n.push([o, r]), e.push(t))
      }
      if (n.length < 2) return;
      const o = [];
      for (let t = 1; t <= 5; t++) {
        const n = $(`#board${t}`).attr("value");
        "empty" != n && o.push(n)
      }
      const r = t.calculateHandHandEquities(n, o);
      for (let t = 0; t < 9; t++) s = t, $(`#${s}_equity`).text("-"), $(`#${s}_tie`).text("-"), $(`#${s}_potodds`).text("-");
      var s;
      for (let t = 0; t < n.length; t++) c(e[t], r[0][t], r[1][t], r[2])
    }

    function c(t, n, e, r) {
      const s = (n / r * 100).toFixed(1);
      $(`#${t}_equity`).text(`${s}%`);
      const c = (e / r * 100).toFixed(1);
      $(`#${t}_tie`).text(`${c}%`), $(`#${t}_potodds`).text(o.getPotOdds(n / r, e / r))
    }
    window.cardUpdate = function(t) {
        s()
      },
      function() {
        const t = n.makeHiddenCard(60).attr({
          id: "board1",
          tabindex: "0"
        }).css("margin", "0px 5px 0px 0px").addClass("ml-auto");
        n.addCardSelect(t);
        const e = n.makeHiddenCard(60).attr({
          id: "board2",
          tabindex: "0"
        }).css("margin", "0px 5px 0px 0px");
        n.addCardSelect(e);
        const o = n.makeHiddenCard(60).attr({
          id: "board3",
          tabindex: "0"
        }).css("margin", "0px 15px 0px 0px");
        n.addCardSelect(o);
        const r = n.makeHiddenCard(60).attr({
          id: "board4",
          tabindex: "0"
        }).css("margin", "0px 15px 0px 0px");
        n.addCardSelect(r);
        const s = n.makeHiddenCard(60).attr({
          id: "board5",
          tabindex: "0"
        }).css("margin", "0px 0px 0px 0px").addClass("mr-auto");
        n.addCardSelect(s), $("#board").append(t, e, o, r, s)
      }(),
      function() {
        for (let t = 0; t < 9; t++) {
          const n = r(t);
          $(`#${t}_cards`).append(n)
        }
      }(), s()
  })()
})();
