(() => {
  var s = {
      482: (s, a) => {
        const r = "AKQJT98765432",
          o = "scdh",
          t = {
            d: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 57.14286 75" xmlns="http://www.w3.org/2000/svg"><path d="M 40.154739,20.623825 C 32.594025,10.395258 28.571428,0 28.571428,0 c 0,0 -4.022597,10.395258 -11.583311,20.623825 C 9.4238315,30.848825 0,37.5 0,37.5 c 0,0 9.4238315,6.647591 16.988117,16.879733 7.560714,10.224999 11.583311,20.620266 11.583311,20.620266 0,0 4.022597,-10.395267 11.583311,-20.620266 C 47.719024,44.147591 57.142858,37.5 57.142858,37.5 c 0,0 -9.423834,-6.651175 -16.988119,-16.876175 z" style="fill:#df0000;stroke-width:3.5714283"/></svg>',
            h: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 71.232315 75" xmlns="http://www.w3.org/2000/svg"><path d="m 51.981784,-4e-7 c -14.4379,0 -16.365625,14.4874994 -16.365625,14.4874994 0,0 -1.927725,-14.4874994 -16.365625,-14.4874994 C 9.1444487,-4e-7 -2e-7,6.4958328 -2e-7,18.749999 -2e-7,34.941666 29.29051,51.224224 35.616159,74.999998 41.635334,51.244153 71.232318,34.941666 71.232318,18.749999 71.232318,6.4958328 62.087869,-4e-7 51.981784,-4e-7 Z" style="fill:#df0000;fill-opacity:1;stroke-width:4.30698061"/></svg>',
            c: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><path d="m 46.022365,34.089478 c 0,0 9.375,-7.499997 9.375,-17.897367 C 55.397365,10.10527 49.993415,3.6991588e-6 37.499998,3.6991588e-6 25.006575,3.6991588e-6 19.602631,10.109218 19.602631,16.192111 c 0,10.39737 9.375,17.897367 9.375,17.897367 C 18.56447,25.97764 -3.4074026e-6,31.515794 -3.4074026e-6,47.727639 -3.4074026e-6,55.84343 6.6315759,64.772373 17.044731,64.772373 c 12.493423,0 17.897373,-13.638155 17.897373,-13.638155 0,0 1.586841,15.544739 -7.66974,23.865788 h 20.455262 c -9.256575,-8.317102 -7.669734,-23.865788 -7.669734,-23.865788 0,0 5.403944,13.638155 17.897367,13.638155 10.417108,0 17.04474,-8.932891 17.04474,-17.044734 0,-16.211845 -18.564473,-21.749999 -28.977634,-13.638161 z" style="fill:#000000;fill-opacity:1;stroke-width:3.94736862"/></svg>',
            s: '<svg height="75%" style="display: block; margin: auto; margin-top: 8%" viewBox="0 0 62.492939 75" xmlns="http://www.w3.org/2000/svg"><path d="M 62.451125,48.579829 C 61.505884,34.091233 32.191701,6.8211035 31.24646,-2.5e-7 30.301219,6.8175322 0.98703591,34.087662 0.04179509,48.579829 -0.6183111,58.822199 6.6623868,63.068425 13.282978,63.068425 20.451062,62.991354 26.371322,53.066421 28.410738,51.13685 29.355978,53.693871 22.149494,75 19.899664,75 h 22.697498 c -2.24983,0 -9.456314,-21.306129 -8.511074,-23.86315 1.785596,1.772402 7.019498,11.634552 15.131665,11.931575 6.616686,-0.0036 13.893478,-4.246226 13.233372,-14.488596 z" style="fill:#000000;stroke-width:3.73485875"/></svg>'
          },
          h = new Set,
          d = function(s, a, r, o) {
            const h = r / 2;
            let d = "";
            return d = "d" == s || "h" == s ? "#df0000" : "#000", $(`<div class='rounded playingcard border' id=${o} style='width: ${2*r/3}px;height: ${r}px; margin:2px'></div>`).append($(`<div class="text-center" style="width: 100%;height: 50%;color: ${d}"></div>`).append($(`<div style='font-size: ${h}px; line-height: 100%;'>${a}</div>`))).append($('<div class="text-center" style="width: 100%;height: 50%;"></div>').append(t[s]))
          },
          e = function(s) {
            return $(`<div class='rounded playingcard' style='height: ${s}px; width: ${2*s/3}px;margin:0px 3px' value='empty'></div>`).append('<svg height="100%" display="block" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><pattern id="a" width="2.5" height="1" patternTransform="matrix(19.455 -19.455 19.455 19.455 -7.1429 27.143)" patternUnits="userSpaceOnUse"><rect y="-.5" width="1" height="2" fill="#190c80"/></pattern></defs><rect transform="scale(-1,1)" x="-585" y="15" width="570" height="870" fill="url(#a)" stroke="#190c80" stroke-width="30"/></svg>')
          };
        a.makeHiddenCard = e;
        const i = function() {
          const s = $(this).attr("id"),
            a = $("<div></div>");
          for (let t = 0; t < 4; t++) {
            const e = o[t],
              i = $('<div class="row mx-0"></div>');
            for (let a = 0; a < 13; a++) {
              const o = r[a],
                t = d(e, o, 40, `${s}_${o}${e}`);
              h.has(o + e) ? t.addClass("selected") : t.click(p), i.append(t)
            }
            a.append(i)
          }
          const t = $('<button type="button" class="btn btn-light border" style="width: 99%; margin:2px 0px 2px 2px">Clear</button>').attr("id", `${s}_clear`).click(u);
          return a.append(t), a
        };
        a.addCardSelect = function(s) {
          s.popover({
            container: s,
            content: i,
            trigger: "focus",
            html: !0,
            placement: "bottom"
          })
        };
        const u = function() {
          const s = $(this).attr("id").split("_")[0],
            a = $(`#${s}`).attr("value"),
            r = parseInt($(`#${s}`).css("height"));
          h.delete(a);
          const o = e(r);
          $(`#${s}`).html(o.children()), $(`#${s}`).attr("value", "empty"), $(`#${s}`).removeClass("border"), window.cardUpdate(s)
        };
        a.removeSelection = function(s) {
          h.delete(s)
        };
        const p = function() {
          const s = $(this).attr("id").split("_"),
            a = s[0],
            r = s[1][0],
            o = s[1][1],
            t = $(`#${a}`).attr("value"),
            e = parseInt($(`#${a}`).css("height"));
          h.delete(t), h.add(s[1]);
          const i = d(o, r, e, "tmp");
          $(`#${a}`).html(i.children()), $(`#${a}`).attr("value", r + o), $(`#${a}`).addClass("border"), window.cardUpdate(a)
        };
        a.setCardRandom = function(s) {
          const a = $(`#${s}`).attr("value"),
            t = parseInt($(`#${s}`).css("height"));
          h.delete(a);
          const e = [];
          for (let s = 0; s < 4; s++) {
            const a = o[s];
            for (let s = 0; s < 13; s++) {
              const o = r[s];
              h.has(o + a) || e.push(o + a)
            }
          }
          const i = (u = e)[Math.floor(Math.random() * u.length)];
          var u;
          h.add(i);
          const p = d(i[1], i[0], t, "tmp");
          $(`#${s}`).html(p.children()), $(`#${s}`).attr("value", i), $(`#${s}`).addClass("border")
        }, a.resetCard = function(s) {
          const a = $(`#${s}`).attr("value"),
            r = parseInt($(`#${s}`).css("height"));
          h.delete(a);
          const o = e(r);
          $(`#${s}`).html(o.children()), $(`#${s}`).attr("value", "empty"), $(`#${s}`).removeClass("border")
        }
      },
      101: (s, a, r) => {
        const o = r(284),
          t = 1,
          h = 2,
          d = 3,
          e = 4,
          i = 5,
          u = 6,
          p = 7,
          l = 8,
          c = 9,
          f = {
            1: "straightflush",
            2: "quads",
            3: "fullhouse",
            4: "flush",
            5: "straight",
            6: "trips",
            7: "twopair",
            8: "pair",
            9: "highcard"
          },
          w = function(s) {
            return o.getRankInt(s[0]) === o.getRankInt(s[1])
          },
          n = function(s, a, r) {
            return Math.min(...a.map(o.getRankInt)) > Math.max(...r.map(o.getRankInt))
          },
          g = function(s) {
            const a = {};
            for (const r of s) a[r] = (a[r] || 0) + 1;
            let r = 0,
              o = -1;
            for (const s in a) a[s] > r && (r = a[s], o = s);
            return [Number(o), r]
          };
        a.qualifyCards = function(s, a) {
          const r = [];
          s = s.map(o.cardToInt), a = a.map(o.cardToInt);
          const _ = (k = o.evaluate(s, a)) >= 0 && k <= 10 ? f[t] : k <= 166 ? f[h] : k <= 322 ? f[d] : k <= 1599 ? f[e] : k <= 1609 ? f[i] : k <= 2467 ? f[u] : k <= 3325 ? f[p] : k <= 6185 ? f[l] : k <= 7462 ? f[c] : void 0;
          var k;
          r.push(_);
          const v = function(s, a, r) {
            if ("trips" === s) {
              if (w(a)) return "set"
            } else {
              if ("pair" === s) {
                const s = r.every((s => o.getRankInt(a[0]) > o.getRankInt(s)));
                if (w(a) && s) return "overpair";
                {
                  const s = (t = a.concat(...r), g(t.map(o.getRankInt))[0]),
                    h = r.filter((a => o.getRankInt(a) > s)).length;
                  return 0 === h ? "toppair" : 1 === h ? "secondpair" : "weakpair"
                }
              }
              if ("highcard" === s) {
                const s = a.concat(r).map(o.getRankInt);
                if (12 === Math.max(...s)) return "acehigh"
              }
            }
            var t;
            return "none"
          }(_, s, a);
          "none" !== v && r.push(v);
          const $ = function(s, a, r) {
            const t = [],
              h = (d = a.concat(...r), g(d.map(o.getSuitInt))[1]);
            var d;
            const e = function(s) {
              (s = s.map(o.getRankInt)).indexOf(12) >= 0 && s.push(-1), s = s.sort(((s, a) => s - a));
              let a = "";
              for (let r = 0; r < s.length - 1; r++) s[r + 1] - s[r] != 0 && (s[r + 1] - s[r] > 9 ? a += "9" : a += s[r + 1] - s[r]);
              return a.includes("1111") ? "straight" : a.includes("111") || a.includes("2112") ? 0 === a.indexOf("111") && -1 === s[0] || a.indexOf("111") === a.length - 3 && 12 === s[s.length - 1] ? "gutshot" : "oesd" : ["211", "121", "112"].some((s => a.includes(s))) ? "gutshot" : "none"
            }(a.concat(...r));
            return 4 === h ? (t.push("flushdraw"), "pair" === s && t.push("flushdraw_pair"), "oesd" === e ? t.push("flushdraw_oesd") : "gutshot" === e && t.push("flushdraw_gutshot")) : 3 === h && t.push("backdoorflushdraw"), "oesd" === e ? (t.push("oesd"), "pair" === s && t.push("oesd_pair")) : "gutshot" === e && (t.push("gutshot"), "pair" === s ? t.push("gutshot_pair") : n(0, a, r) && t.push("gutshot_overcards")), n(0, a, r) && t.push("overcards"), t
          }(_, s, a);
          for (let s = 0; s < $.length; s++) r.push($[s]);
          return r
        }
      },
      581: (s, a, r) => {
        const o = r(284),
          t = [69634, 73730, 81922, 98306, 135427, 139523, 147715, 164099, 266757, 270853, 279045, 295429, 529159, 533255, 541447, 557831, 1053707, 1057803, 1065995, 1082379, 2102541, 2106637, 2114829, 2131213, 4199953, 4204049, 4212241, 4228625, 8394515, 8398611, 8406803, 8423187, 16783383, 16787479, 16795671, 16812055, 33560861, 33564957, 33573149, 33589533, 67115551, 67119647, 67127839, 67144223, 134224677, 134228773, 134236965, 134253349, 268442665, 268446761, 268454953, 268471337],
          h = function(s) {
            const a = [];
            for (const r of t) s.includes(r) || a.push(r);
            return a
          },
          d = function(s, a) {
            const r = [];
            for (; r.length < a;) {
              const a = s[Math.floor(Math.random() * s.length)];
              r.includes(a) || r.push(a)
            }
            return r
          },
          e = function(s, a) {
            for (let r = s.length - 1; r >= 0; r--) {
              const t = Math.floor(Math.random() * (r + 1)),
                h = s[t];
              s[t] = s[r], s[r] = h;
              const d = [o.cardToInt(h[0]), o.cardToInt(h[1])];
              if (!a.has(d[0]) && !a.has(d[1])) return a.add(d[0]), a.add(d[1]), d
            }
            return !1
          };
        a.calculateHandRangeEquity = function(s, a, r) {
          let t = 0,
            d = 0,
            e = 0;
          if (s = s.map(o.cardToInt), 5 === (r = r.map(o.cardToInt)).length) {
            const h = o.evaluate(r, s);
            for (let s of a) {
              s = s.map(o.cardToInt);
              const a = o.evaluateEarly(r, s, h);
              h < a ? t += 1 : h === a && (d += 1), e += 1
            }
          } else {
            const i = [],
              u = h(r.concat(s)),
              p = o.combinations(u, 5 - r.length);
            for (const a of p) {
              const t = r.concat(a),
                h = o.evaluate(t, s);
              i.push(h)
            }
            for (let s of a) {
              s = s.map(o.cardToInt);
              for (let a = 0; a < p.length; a++) {
                const h = p[a];
                if (h.includes(s[0]) || h.includes(s[1])) continue;
                const u = r.concat(h),
                  l = i[a],
                  c = o.evaluateEarly(u, s, l);
                l < c ? t += 1 : l === c && (d += 1), e += 1
              }
            }
          }
          return [t / e, d / e]
        }, a.approximateHandRangeEquity = function(s, a, r) {
          let t = 0,
            i = 0;
          s = s.map(o.cardToInt);
          for (let u = 0; u < r; u++) {
            const r = [s],
              u = new Set(s),
              p = e(a, u);
            if (!1 === p) throw "No viable hand combinations in player ranges";
            r.push(p);
            const l = h([].concat(...r)),
              c = d(l, 5),
              f = [];
            for (const s of r) f.push(o.evaluate(c, s));
            f[0] < f[1] ? t += 1 : f[0] === f[1] && (i += 1)
          }
          return [t / r, i / r]
        }, a.calculateRangeRangeEquities = function(s, a) {
          const r = new Array(s.length).fill(0),
            t = new Array(s.length).fill(0),
            i = [];
          a = a.map(o.cardToInt);
          for (let a = 0; a < s.length; a++) i.push(a);
          i.sort(((a, r) => s[a].length - s[r].length));
          for (let u = 0; u < 5e3; u++) {
            let u = new Set(a),
              p = [],
              l = !1,
              c = 0;
            for (; !l;) {
              l = !0;
              for (const r of i) {
                const o = e(s[r], u);
                if (!1 === o) {
                  if (l = !1, c > 2e3) throw "No viable hand combinations in player ranges";
                  c += 1, u = new Set(a), p = [];
                  break
                }
                p.push(o)
              }
            }
            const f = h(a.concat(...p)),
              w = a.concat(d(f, 5 - a.length)),
              n = [];
            for (const s of p) n.push(o.evaluate(w, s));
            const g = o.findWinners(n);
            if (g.length > 1)
              for (const s of g) t[i[s]] += 1;
            else r[i[g[0]]] += 1
          }
          return [r, t, 5e3]
        }
      },
      284: (s, a, r) => {
        const o = r(77),
          t = o.FLUT,
          h = o.ULUT,
          d = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          e = {
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
          i = {
            s: 1,
            h: 2,
            d: 4,
            c: 8
          };
        a.cardToInt = function(s) {
          const a = s[0],
            r = s[1],
            o = e[a];
          return 1 << o << 16 | i[r] << 12 | o << 8 | d[o]
        }, a.getRankInt = function(s) {
          return s >> 8 & 15
        }, a.getSuitInt = function(s) {
          return s >> 12 & 15
        }, a.combinations = function(s, a) {
          if (a > s.length || 0 == a) return [];
          const r = [];
          for (let s = a - 1; s >= 0; s--) r.push(s);
          const o = [];
          for (;;) {
            const t = [];
            for (let o = 0; o < a; o++) t.push(s[r[o]]);
            o.push(t);
            for (let o = 0; o < a; o++)
              if (r[o] += 1, r[o] < s.length - o) {
                for (let s = o - 1; s >= 0; s--) r[s] = r[s + 1] + 1;
                break
              } if (r[0] >= s.length) break
          }
          return o
        };
        const u = function(s) {
            return [
              [s[0], s[1], s[2], s[3], s[4]],
              [s[0], s[1], s[2], s[3], s[5]],
              [s[0], s[1], s[2], s[3], s[6]],
              [s[0], s[1], s[2], s[4], s[5]],
              [s[0], s[1], s[2], s[4], s[6]],
              [s[0], s[1], s[2], s[5], s[6]],
              [s[0], s[1], s[3], s[4], s[5]],
              [s[0], s[1], s[3], s[4], s[6]],
              [s[0], s[1], s[3], s[5], s[6]],
              [s[0], s[1], s[4], s[5], s[6]],
              [s[0], s[2], s[3], s[4], s[5]],
              [s[0], s[2], s[3], s[4], s[6]],
              [s[0], s[2], s[3], s[5], s[6]],
              [s[0], s[2], s[4], s[5], s[6]],
              [s[0], s[3], s[4], s[5], s[6]],
              [s[1], s[2], s[3], s[4], s[5]],
              [s[1], s[2], s[3], s[4], s[6]],
              [s[1], s[2], s[3], s[5], s[6]],
              [s[1], s[2], s[4], s[5], s[6]],
              [s[1], s[3], s[4], s[5], s[6]],
              [s[2], s[3], s[4], s[5], s[6]]
            ]
          },
          p = function(s) {
            return [
              [s[0], s[1], s[2], s[3], s[4]],
              [s[0], s[1], s[2], s[3], s[5]],
              [s[0], s[1], s[2], s[4], s[5]],
              [s[0], s[1], s[3], s[4], s[5]],
              [s[0], s[2], s[3], s[4], s[5]],
              [s[1], s[2], s[3], s[4], s[5]]
            ]
          };
        a.evaluate = function(s, a) {
          const r = a.concat(s);
          let o = 7462;
          if (7 === r.length) {
            const s = u(r);
            for (let a = 0; a < s.length; a++) {
              const r = l(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (6 === r.length) {
            const s = p(r);
            for (let a = 0; a < s.length; a++) {
              const r = l(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (5 === r.length) return l(r)
        }, a.evaluateEarly = function(s, a, r) {
          const o = a.concat(s);
          let t = 7462;
          if (7 === o.length) {
            const s = u(o);
            for (let a = 0; a < s.length; a++) {
              const o = l(s[a]);
              if (o < r) return o;
              o < t && (t = o)
            }
            return t
          }
          if (6 === o.length) {
            const s = p(o);
            for (let a = 0; a < s.length; a++) {
              const o = l(s[a]);
              if (o < r) return o;
              o < t && (t = o)
            }
            return t
          }
          if (5 === o.length) return l(o)
        };
        const l = function(s) {
          if (s[0] & s[1] & s[2] & s[3] & s[4] & 61440) {
            const a = (s[0] | s[1] | s[2] | s[3] | s[4]) >> 16,
              r = n(a);
            return t.get(r)
          } {
            const a = w(s);
            return h.get(a)
          }
        };
        a.evaluateRainbow = function(s, a) {
          const r = a.concat(s);
          let o = 7462;
          if (7 === r.length) {
            const s = u(r);
            for (let a = 0; a < s.length; a++) {
              const r = c(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (6 === r.length) {
            const s = p(r);
            for (let a = 0; a < s.length; a++) {
              const r = c(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (5 === r.length) return l(r)
        }, a.evaluateFlush = function(s, a) {
          const r = a.concat(s);
          let o = 7462;
          if (7 === r.length) {
            const s = u(r);
            for (let a = 0; a < s.length; a++) {
              const r = f(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (6 === r.length) {
            const s = p(r);
            for (let a = 0; a < s.length; a++) {
              const r = f(s[a]);
              r < o && (o = r)
            }
            return o
          }
          if (5 === r.length) return l(r)
        };
        const c = function(s) {
            const a = w(s);
            return h.get(a)
          },
          f = function(s) {
            const a = (s[0] | s[1] | s[2] | s[3] | s[4]) >> 16,
              r = n(a);
            return t.get(r)
          },
          w = function(s) {
            let a = 1;
            for (let r = 0; r < 5; r++) a *= 255 & s[r];
            return a
          },
          n = function(s) {
            let a = 1;
            for (let r = 0; r <= 12; r++) s & 1 << r && (a *= d[r]);
            return a
          };
        a.findWinners = function(s) {
          const a = Math.min(...s),
            r = [];
          for (let o = 0; o < s.length; o++) s[o] == a && r.push(o);
          return r
        }
      },
      77: (s, a) => {
        const r = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
          o = new Map,
          t = new Map;

        function h(s, a) {
          const r = s.indexOf(a);
          r > -1 && s.splice(r, 1)
        }

        function d(s, a) {
          if (a > s.length || 0 == a) return [];
          const r = [];
          for (let s = a - 1; s >= 0; s--) r.push(s);
          const o = [];
          for (;;) {
            const t = [];
            for (const a of r) t.push(s[a]);
            o.push(t);
            for (let o = 0; o < a; o++)
              if (r[o] += 1, r[o] < s.length - o) {
                for (let s = o - 1; s >= 0; s--) r[s] = r[s + 1] + 1;
                break
              } if (r[0] >= s.length) break
          }
          return o
        }

        function e(s) {
          let a = 1;
          for (let o = 0; o <= 12; o++) s & 1 << o && (a *= r[o]);
          return a
        }! function() {
          const s = [7936, 3968, 1984, 992, 496, 248, 124, 62, 31, 4111],
            a = [],
            r = function*(s) {
              let a = 32,
                r = a | (Math.floor((a & -a) / 1) >> 1) - 1;
              for (yield r;;) a = 1 + (r | r - 1), r = a | (Math.floor((a & -a) / (r & -r)) >> 1) - 1, yield r
            }();
          for (let o = 0; o < 1286; o++) {
            const o = r.next().value;
            let t = !0;
            for (const a of s) o ^ a || (t = !1);
            t && a.push(o)
          }
          let h = 1;
          for (const a of s) {
            const s = e(a);
            o.set(s, h), h += 1
          }
          h = 323;
          for (let s = a.length - 1; s >= 0; s--) {
            const r = e(a[s]);
            o.set(r, h), h += 1
          }! function(s, a) {
            let r = 1600;
            for (const a of s) {
              const s = e(a);
              t.set(s, r), r += 1
            }
            r = 6186;
            for (let s = a.length - 1; s >= 0; s--) {
              const o = e(a[s]);
              t.set(o, r), r += 1
            }
          }(s, a)
        }(),
        function() {
          const s = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          let a = 11;
          for (const o of s) {
            const d = [...s];
            h(d, o);
            for (const s of d) {
              const h = r[o] ** 4 * r[s];
              t.set(h, a), a += 1
            }
          }
          a = 167;
          for (const o of s) {
            const d = [...s];
            h(d, o);
            for (const s of d) {
              const h = r[o] ** 3 * r[s] ** 2;
              t.set(h, a), a += 1
            }
          }
          a = 1610;
          for (const o of s) {
            const e = [...s];
            h(e, o);
            const i = d(e, 2);
            for (const s of i) {
              const h = s[0],
                d = s[1],
                e = r[o] ** 3 * r[h] * r[d];
              t.set(e, a), a += 1
            }
          }
          a = 2468;
          const o = d(s, 2);
          for (const d of o) {
            const o = d[0],
              e = d[1],
              i = [...s];
            h(i, o), h(i, e);
            for (const s of i) {
              const h = r[o] ** 2 * r[e] ** 2 * r[s];
              t.set(h, a), a += 1
            }
          }
          a = 3326;
          for (const o of s) {
            const e = [...s];
            h(e, o);
            const i = d(e, 3);
            for (const s of i) {
              const h = s[0],
                d = s[1],
                e = s[2],
                i = r[o] ** 2 * r[h] * r[d] * r[e];
              t.set(i, a), a += 1
            }
          }
        }(), a.FLUT = o, a.ULUT = t
      },
      922: (s, a) => {
        const r = ["AA", "KK", "QQ", "JJ", "TT", "99", "AKs", "AQs", "88", "AJs", "AKo", "KQs", "ATs", "AQo", "77", "KJs", "A9s", "KTs", "AJo", "KQo", "QJs", "A8s", "66", "QTs", "ATo", "K9s", "A7s", "KJo", "JTs", "A5s", "A6s", "KTo", "Q9s", "55", "A9o", "QJo", "A4s", "K8s", "A3s", "A8o", "K7s", "J9s", "QTo", "A2s", "Q8s", "K9o", "K6s", "A7o", "T9s", "44", "JTo", "K5s", "J8s", "A5o", "Q7s", "A6o", "Q9o", "K4s", "T8s", "K3s", "K8o", "A4o", "Q6s", "98s", "K7o", "J7s", "K2s", "A3o", "33", "J9o", "Q5s", "T7s", "Q8o", "T9o", "A2o", "K6o", "Q4s", "J6s", "97s", "Q3s", "J5s", "K5o", "87s", "J8o", "22", "T6s", "Q2s", "Q7o", "J4s", "96s", "K4o", "T8o", "86s", "76s", "J3s", "98o", "Q6o", "J7o", "K3o", "T5s", "T4s", "K2o", "J2s", "95s", "Q5o", "T3s", "T7o", "85s", "65s", "Q4o", "75s", "J6o", "T2s", "97o", "94s", "87o", "Q3o", "93s", "54s", "84s", "J5o", "64s", "T6o", "74s", "Q2o", "92s", "J4o", "53s", "96o", "86o", "76o", "73s", "83s", "63s", "J3o", "T5o", "82s", "43s", "J2o", "T4o", "95o", "52s", "62s", "72s", "85o", "65o", "75o", "T3o", "42s", "32s", "T2o", "94o", "54o", "84o", "64o", "93o", "74o", "92o", "53o", "83o", "63o", "73o", "43o", "82o", "52o", "62o", "72o", "42o", "32o"];
        a.CO = r;
        const o = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
          t = ["s", "h", "d", "c"];
        let h = [];
        const d = [],
          e = [],
          i = {
            UTG: "44+, A2s+, K9s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KJo+",
            "UTG+1": "22+, A2s+, K8s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, 65s, 54s, ATo+, KTo+, QJo, JTo",
            Cutoff: "22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 75s+, 65s, 54s, 43s, 32s, A8o+, A5o, KTo+, QTo+, JTo, T9o, 98o",
            Button: "22+, A2s+, K2s+, Q4s+, J6s+, T6s+, 95s+, 85s+, 74s+, 63s+, 53s+, 43s, 32s, A2o+, K7o+, Q9o+, J9o+, T9o, 98o",
            "Small Blind": "22+, A2s+, K2s+, Q3s+, J4s+, T4s+, 94s+, 84s+, 73s+, 63s+, 53s+, 43s, 32s, A2o+, K4o+, Q8o+, J9o+, T9o, 98o"
          },
          u = {
            UTG: "77+, ATs+, A5s, KTs+, QTs+, J9s+, T9s, 98s, AQo+",
            "UTG+1": "77+, ATs+, A5s, KTs+, QTs+, J9s+, T9s, 98s, AQo+",
            "UTG+2": "77+, A8s+, A4s-A5s, K9s+, Q9s+, J9s+, T9s, 98s, AJo+",
            Lojack: "44+, A2s+, K9s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KJo+",
            Hijack: "22+, A2s+, K8s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, 65s, 54s, ATo+, KTo+, QJo, JTo",
            Cutoff: "22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 75s+, 65s, 54s, 43s, 32s, A8o+, A5o, KTo+, QTo+, JTo, T9o, 98o",
            Button: "22+, A2s+, K2s+, Q4s+, J6s+, T6s+, 95s+, 85s+, 74s+, 63s+, 53s+, 43s, 32s, A2o+, K7o+, Q9o+, J9o+, T9o, 98o",
            "Small Blind": "22+, A2s+, K2s+, Q3s+, J4s+, T4s+, 94s+, 84s+, 73s+, 63s+, 53s+, 43s, 32s, A2o+, K4o+, Q8o+, J9o+, T9o, 98o"
          },
          p = function(s) {
            return s.attr("id").split("_")[0]
          };
        a.loadRanges = function() {
          const s = localStorage.getItem("RANGEINDICES");
          if (null !== s) {
            s.includes("NaN") || "" === s ? localStorage.clear() : h = s.split(",");
            for (let s = 0; s < h.length; s++) {
              const a = h[s],
                r = localStorage.getItem("rn" + a),
                o = localStorage.getItem("r" + a);
              d.push(r), e.push(o)
            }
          }
        };
        const l = function() {
            const s = prompt("Please enter a name for this range.");
            if (null === s) return;
            const a = p($(this)),
              r = $(`#${a}_range`).val();
            let o = "";
            o = 0 === h.length ? "0" : (parseInt(h[h.length - 1]) + 1).toString(), h.push(o), localStorage.setItem("RANGEINDICES", h.join()), localStorage.setItem("rn" + o, s), localStorage.setItem("r" + o, r), $(".customrangesgroup").append($(`<option id='${o}_user_range' class='${o}_user_range' value='${r}'>${s}</option>`)), $(`#${a}_rangeloaderselector`).val(`${r}`)
          },
          c = function() {
            const s = p($(this)),
              a = $("option:selected", $(`#${s}_rangeloaderselector`));
            if ("customrangesgroup" !== a.parent().attr("id")) return;
            const r = a.attr("id").split("_")[0],
              o = h.indexOf(r);
            h.splice(o, 1), h.length > 0 ? localStorage.setItem("RANGEINDICES", h.join()) : localStorage.removeItem("RANGEINDICES"), localStorage.removeItem("rn" + r), localStorage.removeItem("r" + r), $(`.${r}_user_range`).remove()
          },
          f = function() {
            const s = p($(this)),
              a = $("option:selected", this).val();
            _(s, a)
          },
          w = function() {
            $(this).toggleClass("selected");
            const s = p($(this));
            x(s), T(s, !0), window.rangeUpdate(s)
          },
          n = function(s, a, r) {
            return $("<td></td>").attr({
              id: s,
              class: "range_cell " + r
            }).mousedown(w).append(a)
          },
          g = function(s) {
            const a = p($(this)),
              o = $(this).val(),
              t = k(o);
            for (const s of r) $(`#${a}_${s}`).removeClass("selected");
            t.forEach((s => $(`#${a}_${s}`).addClass("selected"))), T(a, !0), window.rangeUpdate(a)
          },
          _ = function(s, a) {
            $(`#${s}_range`).val(a);
            const o = k(a);
            for (const a of r) $(`#${s}_${a}`).removeClass("selected");
            o.forEach((a => $(`#${s}_${a}`).addClass("selected"))), T(s, !0), window.rangeUpdate(s)
          },
          k = function(s) {
            const a = new Set,
              r = s.toUpperCase().split(/[\s,]+/);
            for (let s = 0; s < r.length; s++) {
              const o = v(r[s]);
              for (let s = 0; s < o.length; s++) a.add(o[s])
            }
            return a
          },
          v = function(s) {
            const a = s;
            return "+" === a[a.length - 1] ? b(a) : "-" === a[a.length - 1] ? m(a) : a.indexOf("-") >= 0 ? q(a) : a.length < 2 ? [] : 2 === a.length ? [a] : [a[0] + a[1] + a[2].toLowerCase()]
          },
          b = function(s) {
            const a = [],
              r = o.indexOf(s[1]);
            if (s[0] === s[1])
              for (let s = 0; s <= r; s++) a.push(o[s] + o[s]);
            else
              for (let t = o.indexOf(s[0]) + 1; t <= r; t++) a.push(s[0] + o[t] + s[2].toLowerCase());
            return a
          },
          m = function(s) {
            const a = [],
              r = o.indexOf(s[1]);
            if (s[0] === s[1])
              for (let s = r; s <= 12; s++) a.push(o[s] + o[s]);
            else
              for (let t = r; t <= 12; t++) a.push(s[0] + o[t] + s[2].toLowerCase());
            return a
          },
          q = function(s) {
            const a = [],
              r = s.split("-"),
              t = r[0],
              h = r[1];
            let d = o.indexOf(t[1]),
              e = o.indexOf(h[1]);
            if (e > d) {
              const s = e;
              e = d, d = s
            }
            if (t[0] === t[1])
              for (let s = e; s <= d; s++) a.push(o[s] + o[s]);
            else
              for (let s = e; s <= d; s++) a.push(t[0] + o[s] + t[2].toLowerCase());
            return a
          },
          x = function(s) {
            let a = "",
              r = !1,
              t = "",
              h = "";
            for (let d = 0; d <= 12; d++) $(`#${s}_${o[d]}${o[d]}`).hasClass("selected") ? (r || (r = !0, t = o[d] + o[d]), h = o[d] + o[d]) : (r && (a += t === h ? h + ", " : "AA" === t ? h + "+, " : h + "-" + t + ", "), r = !1);
            r && (a += t === h ? h + ", " : "AA" === t ? h + "+, " : t + "-, ");
            for (let d = 0; d <= 11; d++) {
              r = !1, t = "", h = "";
              for (let e = d + 1; e <= 12; e++) $(`#${s}_${o[d]}${o[e]}s`).hasClass("selected") ? (r || (r = !0, t = o[d] + o[e] + "s"), h = o[d] + o[e] + "s") : (r && (t === h ? a += h + ", " : t === o[d] + o[d + 1] + "s" ? a += h + "+, " : a += h + "-" + t + ", "), r = !1);
              r && (t === h ? a += h + ", " : t === o[d] + o[d + 1] + "s" ? a += h + "+, " : a += t + "-, ")
            }
            for (let d = 0; d <= 11; d++) {
              r = !1, t = "", h = "";
              for (let e = d + 1; e <= 12; e++) $(`#${s}_${o[d]}${o[e]}o`).hasClass("selected") ? (r || (r = !0, t = o[d] + o[e] + "o"), h = o[d] + o[e] + "o") : (r && (t === h ? a += h + ", " : t === o[d] + o[d + 1] + "o" ? a += h + "+, " : a += h + "-" + t + ", "), r = !1);
              r && (t === h ? a += h + ", " : t === o[d] + o[d + 1] + "o" ? a += h + "+, " : a += t + "-, ")
            }
            a.length > 2 && (a = a.slice(0, -2)), $(`#${s}_range`).val(a)
          },
          y = function(s) {
            const a = s.from,
              o = s.to,
              t = p(s.input);
            let h = 0;
            for (const s of r) $(`#${t}_${s}`).removeClass("selected");
            for (const s of r)
              if (s[0] === s[1] ? h += 6 : "s" === s[2] ? h += 4 : h += 12, h > a && h <= o && $(`#${t}_${s}`).addClass("selected"), h > o) break;
            x(t), T(t, !1), window.rangeUpdate(t)
          },
          T = function(s, a) {
            let o = 0,
              t = 0,
              h = !0;
            for (const a of r)
              if ($(`#${s}_${a}`).hasClass("selected")) h = !1, a[0] === a[1] ? o += 6 : "s" === a[2] ? o += 4 : o += 12;
              else {
                let s = 0;
                s = a[0] === a[1] ? 6 : "s" === a[2] ? 4 : 12, h && (t += s)
              } 1326 === t && (t = 0);
            const d = (t / 1326 * 100).toFixed(1) + "%",
              e = (o / 1326 * 100).toFixed(1) + "%";
            $(`#${s}_percent`).text("R: " + d + ", C: " + e), $(`#${s}_percent_display`).text(e), a && $(`#${s}_slider`).data("ionRangeSlider").update({
              from: t,
              to: t + o
            })
          };
        a.buildRange = function(s, a) {
          const r = $(`<h4 class='mb-2'>${s}</h4>`),
            t = $(`<div id='${a}_percent' style='float: right;' data-toggle='tooltip' data-html='true' title='<strong>Raising</strong> and <strong>Calling</strong> percentages'>R: 0.0%, C: 0.0%</div>`);
          t.tooltip(), r.append(t);
          const p = $(`<input type='text' style='width: 100%; font-size: small;' id='${a}_range' aria-label='Range text input'>`),
            w = $('<div class="my-1"></div>'),
            _ = $(`<input id='${a}_slider' type='text' class='js-range-slider' value='' />`);
          w.append(_), _.ionRangeSlider({
            type: "double",
            min: 0,
            max: 1326,
            from: 0,
            to: 0,
            skin: "round",
            hide_min_max: !0,
            hide_from_to: !0,
            drag_interval: !0,
            onChange: y
          });
          const k = function(s) {
              const a = $("<tbody></tbody>");
              for (let r = 0; r < 13; r++) {
                const t = $("<tr></tr>");
                for (let a = 0; a < 13; a++) {
                  let h = "",
                    d = "";
                  r === a ? (h = o[r] + o[a], d = n(`${s}_${h}`, h, "pocketpair")) : r < a ? (h = o[r] + o[a] + "s", d = n(`${s}_${h}`, h, "suited")) : (h = o[a] + o[r] + "o", d = n(`${s}_${h}`, h, "offsuit")), t.append(d)
                }
                a.append(t)
              }
              return $(`<table id='${s}_table' class='mx-auto range_table'></table>`).append(a)
            }(a),
            v = function(s) {
              const a = $(`<button type='button' class='btn btn-success' id='${s}_saverange' style='width: 45%; white-space: nowrap;'>Save range</button>`).click(l),
                r = $(`<button type='button' class='btn btn-danger ml-2' id='${s}_delrange' style='width: 45%; white-space: nowrap;'>Delete range</button>`).click(c),
                o = $(`<select name='saved_range' id='${s}_rangeloaderselector' class='form-select ml-auto' style='width: 100%; height: 100%' aria-label='User range selector'></select>`).change(f);
              o.append($('<option id="empty_user_range" value="">&lt;empty&gt;</option>'));
              const t = $('<optgroup label="Custom Ranges" id="customrangesgroup" class="customrangesgroup"></optgroup>');
              for (let s = 0; s < d.length; s++) t.append(`<option id='${h[s]}_user_range' class='${h[s]}_user_range' value='${e[s]}'>${d[s]}</option>`);
              o.append(t);
              const p = $('<optgroup label="6-Max Opening Ranges"></optgroup>');
              for (const s in i) p.append(`<option id='sixmax_${s}' value='${i[s]}'>${s}</option>`);
              o.append(p);
              const w = $('<optgroup label="9-Max Opening Ranges"></optgroup>');
              for (const s in u) w.append(`<option id='ninemax_${s}' value='${u[s]}'>${s}</option>`);
              o.append(w);
              const n = $('<div class="col-7" style="padding: 0"></div>').append(a, r),
                g = $('<div class="col-5" style="padding: 0"></div>').append(o),
                _ = $('<div class="range_loader row mt-2 mx-0"></div>');
              return _.append(n, g), _
            }(a);
          return p.on("keyup", g), $(`<div id='${a}_player' class='col-5 player p-3'></div>`).append(r).append(p).append(w).append(k).append(v)
        };
        const A = function(s) {
            const a = [];
            for (const r of s) {
              const s = C(r);
              for (const r of s) a.push(r)
            }
            return a
          },
          C = function(s) {
            const a = [];
            if (2 === s.length)
              for (let r = 0; r <= 2; r++)
                for (let o = r + 1; o <= 3; o++) a.push([s[0] + t[r], s[1] + t[o]]);
            else if ("s" === s[2])
              for (const r of t) a.push([s[0] + r, s[1] + r]);
            else
              for (const r of t)
                for (const o of t) r !== o && a.push([s[0] + r, s[1] + o]);
            return a
          };
        a.getPlayerHands = function(s) {
          try {
            return function(s) {
              const a = $(`#${s}card1`).attr("value"),
                r = $(`#${s}card2`).attr("value");
              if ("empty" === a || "empty" === r) throw "Incomplete hand";
              return [
                [a, r]
              ]
            }(s)
          } catch (a) {
            const o = [];
            for (const a of r) $(`#${s}_${a}`).hasClass("selected") && o.push(a);
            const t = A(o);
            if (t.length > 0) return t;
            throw `No hands in <strong>${$(`#${s}_name`).text()}</strong> range`
          }
        }, a.getHands = function(s) {
          const a = [];
          for (const o of r) $(`#${s}_${o}`).hasClass("selected") && a.push(o);
          return A(a)
        }
      }
    },
    a = {};

  function r(o) {
    var t = a[o];
    if (void 0 !== t) return t.exports;
    var h = a[o] = {
      exports: {}
    };
    return s[o](h, h.exports, r), h.exports
  }(() => {
    const s = r(101),
      a = r(922),
      o = r(482),
      t = r(581),
      h = a.CO,
      d = {
        AA: {
          fullhouse: 192,
          overcards: 17296,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 14080,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_gutshot: 16,
          gutshot: 512,
          gutshot_pair: 512,
          trips: 2112,
          set: 2112,
          quads: 48
        },
        AKs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 13244,
          pair: 7920,
          secondpair: 1320,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 6600,
          flush: 164,
          gutshot: 2224,
          gutshot_overcards: 1792,
          highcard: 10332,
          acehigh: 10332,
          flushdraw_gutshot: 288,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63,
          quads: 2,
          fullhouse: 18
        },
        AKo: {
          trips: 308,
          overcards: 13244,
          pair: 7920,
          secondpair: 1320,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 6600,
          highcard: 10496,
          acehigh: 10496,
          flushdraw: 440,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_overcards: 1792,
          flushdraw_pair: 110,
          gutshot_pair: 432,
          straight: 64,
          quads: 2,
          fullhouse: 18
        },
        AQs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 9880,
          pair: 7920,
          secondpair: 1800,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 6120,
          flush: 164,
          gutshot: 2224,
          gutshot_overcards: 768,
          highcard: 10332,
          acehigh: 10332,
          flushdraw_gutshot: 288,
          oesd: 128,
          flushdraw_oesd: 18,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63,
          quads: 2,
          fullhouse: 18
        },
        AQo: {
          trips: 308,
          overcards: 9880,
          pair: 7920,
          secondpair: 1800,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 6120,
          highcard: 10496,
          acehigh: 10496,
          flushdraw: 440,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_overcards: 768,
          flushdraw_pair: 110,
          flushdraw_oesd: 4,
          oesd: 128,
          gutshot_pair: 432,
          straight: 64,
          quads: 2,
          fullhouse: 18
        },
        AJs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 7140,
          pair: 7920,
          secondpair: 2184,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 5688,
          flush: 164,
          gutshot: 2352,
          gutshot_overcards: 448,
          highcard: 10332,
          acehigh: 10332,
          flushdraw_gutshot: 306,
          oesd: 192,
          flushdraw_oesd: 27,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63,
          quads: 2,
          fullhouse: 18,
          weakpair: 48
        },
        AJo: {
          trips: 308,
          overcards: 7140,
          pair: 7920,
          secondpair: 2184,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 5688,
          highcard: 10496,
          acehigh: 10496,
          flushdraw: 440,
          flushdraw_gutshot: 66,
          gutshot: 2352,
          gutshot_overcards: 448,
          flushdraw_pair: 110,
          flushdraw_oesd: 6,
          oesd: 192,
          gutshot_pair: 432,
          straight: 64,
          quads: 2,
          fullhouse: 18,
          weakpair: 48
        },
        ATs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4960,
          pair: 7920,
          secondpair: 2472,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 5304,
          flush: 164,
          gutshot: 2480,
          gutshot_overcards: 448,
          highcard: 10332,
          acehigh: 10332,
          flushdraw_gutshot: 324,
          oesd: 256,
          flushdraw_oesd: 36,
          quads: 2,
          fullhouse: 18,
          weakpair: 144,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        ATo: {
          trips: 308,
          overcards: 4960,
          pair: 7920,
          secondpair: 2472,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 5304,
          highcard: 10496,
          acehigh: 10496,
          flushdraw: 440,
          flushdraw_gutshot: 70,
          gutshot: 2480,
          gutshot_overcards: 448,
          flushdraw_pair: 110,
          flushdraw_oesd: 8,
          oesd: 256,
          quads: 2,
          fullhouse: 18,
          weakpair: 144,
          gutshot_pair: 432,
          straight: 64
        },
        A9s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 3276,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4968,
          flush: 165,
          gutshot: 1024,
          gutshot_overcards: 448,
          highcard: 10395,
          acehigh: 10395,
          flushdraw_gutshot: 144,
          oesd: 256,
          flushdraw_oesd: 36,
          quads: 2,
          fullhouse: 18,
          weakpair: 288
        },
        A9o: {
          trips: 308,
          overcards: 3276,
          pair: 7920,
          secondpair: 2664,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4968,
          highcard: 10560,
          acehigh: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          gutshot_overcards: 448,
          flushdraw_pair: 110,
          flushdraw_oesd: 8,
          oesd: 256,
          quads: 2,
          fullhouse: 18,
          weakpair: 288
        },
        A8s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 2760,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4680,
          flush: 165,
          gutshot: 1152,
          gutshot_overcards: 448,
          highcard: 10395,
          acehigh: 10395,
          flushdraw_gutshot: 162,
          oesd: 320,
          flushdraw_oesd: 45,
          quads: 2,
          fullhouse: 18,
          weakpair: 480
        },
        A8o: {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 2760,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4680,
          highcard: 10560,
          acehigh: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          gutshot_overcards: 448,
          flushdraw_pair: 110,
          flushdraw_oesd: 10,
          oesd: 320,
          quads: 2,
          fullhouse: 18,
          weakpair: 480
        },
        A7s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 2760,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4440,
          flush: 165,
          gutshot: 1152,
          gutshot_overcards: 320,
          highcard: 10395,
          acehigh: 10395,
          flushdraw_gutshot: 162,
          oesd: 320,
          flushdraw_oesd: 45,
          quads: 2,
          fullhouse: 18,
          weakpair: 720
        },
        A7o: {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 2760,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4440,
          highcard: 10560,
          acehigh: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          gutshot_overcards: 320,
          flushdraw_pair: 110,
          flushdraw_oesd: 10,
          oesd: 320,
          quads: 2,
          fullhouse: 18,
          weakpair: 720
        },
        A6s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4248,
          flush: 165,
          gutshot: 1024,
          gutshot_overcards: 192,
          highcard: 10395,
          acehigh: 10395,
          flushdraw_gutshot: 144,
          oesd: 256,
          flushdraw_oesd: 36,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008
        },
        A6o: {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 2664,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4248,
          highcard: 10560,
          acehigh: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          flushdraw_oesd: 8,
          oesd: 256,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008
        },
        A5s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 2472,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 324,
          gutshot: 2480,
          gutshot_pair: 432,
          twopair: 792,
          toppair: 4104,
          straightflush: 1,
          straight: 63,
          flush: 164,
          highcard: 10332,
          acehigh: 10332,
          oesd: 256,
          flushdraw_oesd: 36,
          quads: 2,
          fullhouse: 18,
          weakpair: 1344
        },
        A5o: {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 2472,
          backdoorflushdraw: 5588,
          gutshot: 2480,
          gutshot_pair: 432,
          twopair: 792,
          toppair: 4104,
          straight: 64,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 70,
          highcard: 10496,
          acehigh: 10496,
          flushdraw_oesd: 8,
          oesd: 256,
          quads: 2,
          fullhouse: 18,
          weakpair: 1344
        },
        A4s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 2184,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 306,
          gutshot: 2352,
          gutshot_pair: 432,
          twopair: 792,
          toppair: 4008,
          straightflush: 1,
          straight: 63,
          flush: 164,
          highcard: 10332,
          acehigh: 10332,
          oesd: 192,
          flushdraw_oesd: 27,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        A4o: {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 2184,
          backdoorflushdraw: 5588,
          gutshot: 2352,
          gutshot_pair: 432,
          twopair: 792,
          toppair: 4008,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 66,
          straight: 64,
          highcard: 10496,
          acehigh: 10496,
          flushdraw_oesd: 6,
          oesd: 192,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        A3s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 1800,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 288,
          gutshot: 2224,
          gutshot_pair: 432,
          toppair: 3960,
          straightflush: 1,
          straight: 63,
          flush: 164,
          highcard: 10332,
          acehigh: 10332,
          quads: 2,
          fullhouse: 18,
          weakpair: 2160,
          oesd: 128,
          flushdraw_oesd: 18
        },
        A3o: {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 1800,
          gutshot: 2224,
          gutshot_pair: 432,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 62,
          toppair: 3960,
          straight: 64,
          highcard: 10496,
          acehigh: 10496,
          quads: 2,
          fullhouse: 18,
          weakpair: 2160,
          flushdraw_oesd: 4,
          oesd: 128
        },
        A2s: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2640,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 288,
          gutshot: 2224,
          gutshot_pair: 432,
          secondpair: 1320,
          toppair: 3960,
          straightflush: 1,
          straight: 63,
          flush: 164,
          highcard: 10332,
          acehigh: 10332
        },
        A2o: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2640,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_pair: 432,
          secondpair: 1320,
          toppair: 3960,
          straight: 64,
          highcard: 10496,
          acehigh: 10496
        },
        KK: {
          fullhouse: 192,
          overcards: 13244,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 10560,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 3520,
          quads: 48,
          flushdraw_gutshot: 12,
          gutshot: 384,
          gutshot_pair: 384,
          flushdraw_oesd: 2,
          oesd: 64,
          oesd_pair: 64
        },
        KQs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 9880,
          pair: 7920,
          secondpair: 2280,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 5640,
          flush: 163,
          highcard: 10269,
          acehigh: 2772,
          gutshot: 2496,
          gutshot_overcards: 896,
          flushdraw_gutshot: 318,
          oesd: 592,
          flushdraw_oesd: 75,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          oesd_pair: 144,
          quads: 2,
          fullhouse: 18
        },
        KQo: {
          trips: 308,
          overcards: 9880,
          pair: 7920,
          secondpair: 2280,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 5640,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 68,
          gutshot: 2496,
          gutshot_overcards: 896,
          flushdraw_oesd: 16,
          oesd: 592,
          gutshot_pair: 576,
          straight: 128,
          oesd_pair: 144,
          quads: 2,
          fullhouse: 18
        },
        KJs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 7140,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 5208,
          flush: 163,
          highcard: 10269,
          acehigh: 2772,
          gutshot: 2496,
          gutshot_overcards: 448,
          flushdraw_gutshot: 318,
          oesd: 720,
          flushdraw_oesd: 93,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          oesd_pair: 144,
          quads: 2,
          fullhouse: 18,
          weakpair: 48
        },
        KJo: {
          trips: 308,
          overcards: 7140,
          pair: 7920,
          secondpair: 2664,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 5208,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 68,
          gutshot: 2496,
          gutshot_overcards: 448,
          flushdraw_oesd: 20,
          oesd: 720,
          gutshot_pair: 576,
          straight: 128,
          oesd_pair: 144,
          quads: 2,
          fullhouse: 18,
          weakpair: 48
        },
        KTs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4960,
          pair: 7920,
          secondpair: 2952,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4824,
          flush: 163,
          highcard: 10269,
          acehigh: 2772,
          gutshot: 2624,
          flushdraw_gutshot: 336,
          oesd: 784,
          flushdraw_oesd: 102,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 144,
          oesd_pair: 144
        },
        KTo: {
          trips: 308,
          overcards: 4960,
          pair: 7920,
          secondpair: 2952,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4824,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 72,
          gutshot: 2624,
          flushdraw_oesd: 22,
          oesd: 784,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 144,
          oesd_pair: 144
        },
        K9s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 3276,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4488,
          flush: 164,
          highcard: 10332,
          acehigh: 2835,
          gutshot: 2224,
          flushdraw_gutshot: 288,
          gutshot_overcards: 192,
          oesd: 256,
          flushdraw_oesd: 36,
          quads: 2,
          fullhouse: 18,
          weakpair: 288,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        K9o: {
          trips: 308,
          overcards: 3276,
          pair: 7920,
          secondpair: 3144,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4488,
          highcard: 10496,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_overcards: 192,
          flushdraw_oesd: 8,
          oesd: 256,
          quads: 2,
          fullhouse: 18,
          weakpair: 288,
          gutshot_pair: 432,
          straight: 64
        },
        K8s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4200,
          flush: 165,
          highcard: 10395,
          acehigh: 2835,
          gutshot: 896,
          gutshot_overcards: 192,
          flushdraw_gutshot: 126,
          oesd: 320,
          flushdraw_oesd: 45,
          quads: 2,
          fullhouse: 18,
          weakpair: 480
        },
        K8o: {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 3240,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4200,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 28,
          gutshot: 896,
          gutshot_overcards: 192,
          flushdraw_oesd: 10,
          oesd: 320,
          quads: 2,
          fullhouse: 18,
          weakpair: 480
        },
        K7s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3960,
          flush: 165,
          highcard: 10395,
          acehigh: 2835,
          gutshot: 1024,
          gutshot_overcards: 192,
          flushdraw_gutshot: 144,
          oesd: 384,
          flushdraw_oesd: 54,
          quads: 2,
          fullhouse: 18,
          weakpair: 720
        },
        K7o: {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 3240,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3960,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          gutshot_overcards: 192,
          flushdraw_oesd: 12,
          oesd: 384,
          quads: 2,
          fullhouse: 18,
          weakpair: 720
        },
        K6s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3768,
          flush: 165,
          gutshot: 1152,
          gutshot_overcards: 192,
          highcard: 10395,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          oesd: 320,
          flushdraw_oesd: 45,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008
        },
        K6o: {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 3144,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3768,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 10,
          oesd: 320,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008
        },
        K5s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 2952,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3624,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1344
        },
        K5o: {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 2952,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3624,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_pair: 110,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1344
        },
        K4s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3528,
          flush: 165,
          oesd: 256,
          highcard: 10395,
          flushdraw_oesd: 36,
          gutshot: 1024,
          flushdraw_gutshot: 144,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        K4o: {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 2664,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3528,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10560,
          flushdraw_oesd: 8,
          oesd: 256,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        K3s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2280,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 3480,
          flush: 165,
          oesd: 192,
          highcard: 10395,
          flushdraw_oesd: 27,
          gutshot: 896,
          flushdraw_gutshot: 126,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2160
        },
        K3o: {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2280,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 3480,
          highcard: 10560,
          flushdraw_oesd: 6,
          oesd: 192,
          flushdraw_gutshot: 28,
          gutshot: 896,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2160
        },
        K2s: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2640,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 1800,
          toppair: 3480,
          flush: 165,
          oesd: 128,
          highcard: 10395,
          flushdraw_oesd: 18,
          gutshot: 768,
          flushdraw_gutshot: 108,
          acehigh: 2835
        },
        K2o: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2640,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 1800,
          toppair: 3480,
          highcard: 10560,
          flushdraw_oesd: 4,
          oesd: 128,
          flushdraw_gutshot: 24,
          gutshot: 768,
          acehigh: 2880
        },
        QQ: {
          fullhouse: 192,
          overcards: 9880,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 7680,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 5760,
          quads: 48,
          weakpair: 640,
          flushdraw_gutshot: 16,
          gutshot: 512,
          gutshot_pair: 512,
          flushdraw_oesd: 4,
          oesd: 128,
          oesd_pair: 128
        },
        QJs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 7140,
          pair: 7920,
          secondpair: 3048,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4776,
          flush: 162,
          highcard: 10206,
          acehigh: 2772,
          gutshot: 2896,
          gutshot_overcards: 768,
          flushdraw_gutshot: 366,
          oesd: 1248,
          flushdraw_oesd: 159,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 96
        },
        QJo: {
          trips: 308,
          overcards: 7140,
          pair: 7920,
          secondpair: 3048,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4776,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 768,
          flushdraw_oesd: 34,
          oesd: 1248,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 96
        },
        QTs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4960,
          pair: 7920,
          secondpair: 3336,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4392,
          flush: 162,
          highcard: 10206,
          acehigh: 2772,
          gutshot: 2896,
          gutshot_overcards: 384,
          flushdraw_gutshot: 366,
          oesd: 1376,
          flushdraw_oesd: 177,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 192
        },
        QTo: {
          trips: 308,
          overcards: 4960,
          pair: 7920,
          secondpair: 3336,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4392,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 384,
          flushdraw_oesd: 38,
          oesd: 1376,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 192
        },
        Q9s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 3276,
          pair: 7920,
          secondpair: 3528,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4056,
          flush: 163,
          highcard: 10269,
          acehigh: 2835,
          gutshot: 2624,
          flushdraw_gutshot: 336,
          oesd: 784,
          flushdraw_oesd: 102,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 336,
          oesd_pair: 144
        },
        Q9o: {
          trips: 308,
          overcards: 3276,
          pair: 7920,
          secondpair: 3528,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4056,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 72,
          gutshot: 2624,
          flushdraw_oesd: 22,
          oesd: 784,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 336,
          oesd_pair: 144
        },
        Q8s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3768,
          flush: 164,
          highcard: 10332,
          acehigh: 2835,
          gutshot: 2224,
          flushdraw_gutshot: 288,
          gutshot_overcards: 192,
          oesd: 384,
          flushdraw_oesd: 54,
          quads: 2,
          fullhouse: 18,
          weakpair: 528,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        Q8o: {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3768,
          highcard: 10496,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_overcards: 192,
          flushdraw_oesd: 12,
          oesd: 384,
          quads: 2,
          fullhouse: 18,
          weakpair: 528,
          gutshot_pair: 432,
          straight: 64
        },
        Q7s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3528,
          flush: 165,
          highcard: 10395,
          acehigh: 2835,
          gutshot: 1024,
          gutshot_overcards: 192,
          flushdraw_gutshot: 144,
          oesd: 384,
          flushdraw_oesd: 54,
          quads: 2,
          fullhouse: 18,
          weakpair: 768
        },
        Q7o: {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3528,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          gutshot_overcards: 192,
          flushdraw_oesd: 12,
          oesd: 384,
          quads: 2,
          fullhouse: 18,
          weakpair: 768
        },
        Q6s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 3528,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3336,
          flush: 165,
          gutshot: 1152,
          gutshot_overcards: 192,
          highcard: 10395,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          oesd: 448,
          flushdraw_oesd: 63,
          quads: 2,
          fullhouse: 18,
          weakpair: 1056
        },
        Q6o: {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 3528,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3336,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 14,
          oesd: 448,
          quads: 2,
          fullhouse: 18,
          weakpair: 1056
        },
        Q5s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3336,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3192,
          flush: 165,
          oesd: 384,
          highcard: 10395,
          flushdraw_oesd: 54,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1392
        },
        Q5o: {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3336,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3192,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_pair: 110,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1392
        },
        Q4s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3048,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3096,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1776
        },
        Q4o: {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3048,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3096,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10560,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1776
        },
        Q3s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 3048,
          flush: 165,
          oesd: 256,
          highcard: 10395,
          flushdraw_oesd: 36,
          gutshot: 1024,
          flushdraw_gutshot: 144,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2208
        },
        Q3o: {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 3048,
          highcard: 10560,
          flushdraw_oesd: 8,
          oesd: 256,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2208
        },
        Q2s: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2688,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2184,
          toppair: 3048,
          flush: 165,
          oesd: 192,
          highcard: 10395,
          flushdraw_oesd: 27,
          gutshot: 896,
          flushdraw_gutshot: 126,
          acehigh: 2835
        },
        Q2o: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2688,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2184,
          toppair: 3048,
          highcard: 10560,
          flushdraw_oesd: 6,
          oesd: 192,
          flushdraw_gutshot: 28,
          gutshot: 896,
          acehigh: 2880
        },
        JJ: {
          fullhouse: 192,
          overcards: 7140,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 5376,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 6912,
          quads: 48,
          weakpair: 1792,
          flushdraw_gutshot: 20,
          gutshot: 640,
          gutshot_pair: 640,
          flushdraw_oesd: 6,
          oesd: 192,
          oesd_pair: 192
        },
        JTs: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4960,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 4008,
          flush: 161,
          highcard: 10143,
          acehigh: 2772,
          gutshot: 3296,
          gutshot_overcards: 640,
          flushdraw_gutshot: 414,
          oesd: 1904,
          flushdraw_oesd: 243,
          gutshot_pair: 864,
          straightflush: 4,
          straight: 252,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 288
        },
        JTo: {
          trips: 308,
          overcards: 4960,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 4008,
          highcard: 10304,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2816,
          flushdraw_gutshot: 88,
          gutshot: 3296,
          gutshot_overcards: 640,
          flushdraw_oesd: 52,
          oesd: 1904,
          gutshot_pair: 864,
          straight: 256,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 288
        },
        J9s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 3276,
          pair: 7920,
          secondpair: 3816,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3672,
          flush: 162,
          highcard: 10206,
          acehigh: 2835,
          gutshot: 2896,
          gutshot_overcards: 320,
          flushdraw_gutshot: 366,
          oesd: 1376,
          flushdraw_oesd: 177,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 432
        },
        J9o: {
          trips: 308,
          overcards: 3276,
          pair: 7920,
          secondpair: 3816,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3672,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 320,
          flushdraw_oesd: 38,
          oesd: 1376,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 432
        },
        J8s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 3912,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3384,
          flush: 163,
          highcard: 10269,
          acehigh: 2835,
          gutshot: 2624,
          flushdraw_gutshot: 336,
          oesd: 912,
          flushdraw_oesd: 120,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 624,
          oesd_pair: 144
        },
        J8o: {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 3912,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3384,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 72,
          gutshot: 2624,
          flushdraw_oesd: 26,
          oesd: 912,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 624,
          oesd_pair: 144
        },
        J7s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 3912,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3144,
          flush: 164,
          highcard: 10332,
          acehigh: 2835,
          gutshot: 2352,
          flushdraw_gutshot: 306,
          gutshot_overcards: 192,
          oesd: 448,
          flushdraw_oesd: 63,
          quads: 2,
          fullhouse: 18,
          weakpair: 864,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        J7o: {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 3912,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3144,
          highcard: 10496,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 66,
          gutshot: 2352,
          gutshot_overcards: 192,
          flushdraw_oesd: 14,
          oesd: 448,
          quads: 2,
          fullhouse: 18,
          weakpair: 864,
          gutshot_pair: 432,
          straight: 64
        },
        J6s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 3816,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2952,
          flush: 165,
          gutshot: 1152,
          gutshot_overcards: 192,
          highcard: 10395,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          oesd: 448,
          flushdraw_oesd: 63,
          quads: 2,
          fullhouse: 18,
          weakpair: 1152
        },
        J6o: {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 3816,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2952,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 14,
          oesd: 448,
          quads: 2,
          fullhouse: 18,
          weakpair: 1152
        },
        J5s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2808,
          flush: 165,
          oesd: 512,
          highcard: 10395,
          flushdraw_oesd: 72,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1488
        },
        J5o: {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2808,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_oesd: 16,
          oesd: 512,
          flushdraw_pair: 110,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1488
        },
        J4s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3336,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2712,
          flush: 165,
          oesd: 384,
          highcard: 10395,
          flushdraw_oesd: 54,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1872
        },
        J4o: {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3336,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2712,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10560,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1872
        },
        J3s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2952,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 2664,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2304
        },
        J3o: {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2952,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 2664,
          highcard: 10560,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2304
        },
        J2s: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2784,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2472,
          toppair: 2664,
          flush: 165,
          oesd: 256,
          highcard: 10395,
          flushdraw_oesd: 36,
          gutshot: 1024,
          flushdraw_gutshot: 144,
          acehigh: 2835
        },
        J2o: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2784,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2472,
          toppair: 2664,
          highcard: 10560,
          flushdraw_oesd: 8,
          oesd: 256,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          acehigh: 2880
        },
        TT: {
          fullhouse: 192,
          overcards: 4960,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 3584,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 7168,
          quads: 48,
          weakpair: 3328,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256
        },
        T9s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 3276,
          pair: 7920,
          secondpair: 4008,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3336,
          flush: 161,
          highcard: 10143,
          acehigh: 2835,
          gutshot: 3296,
          gutshot_overcards: 512,
          flushdraw_gutshot: 414,
          oesd: 1904,
          flushdraw_oesd: 243,
          gutshot_pair: 864,
          straightflush: 4,
          straight: 252,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 576
        },
        T9o: {
          trips: 308,
          overcards: 3276,
          pair: 7920,
          secondpair: 4008,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3336,
          highcard: 10304,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 88,
          gutshot: 3296,
          gutshot_overcards: 512,
          flushdraw_oesd: 52,
          oesd: 1904,
          gutshot_pair: 864,
          straight: 256,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 576
        },
        T8s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 4104,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 3048,
          flush: 162,
          highcard: 10206,
          acehigh: 2835,
          gutshot: 2896,
          gutshot_overcards: 256,
          flushdraw_gutshot: 366,
          oesd: 1504,
          flushdraw_oesd: 195,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 768
        },
        T8o: {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 4104,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 3048,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 256,
          flushdraw_oesd: 42,
          oesd: 1504,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 768
        },
        T7s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 4104,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2808,
          flush: 163,
          highcard: 10269,
          acehigh: 2835,
          gutshot: 2752,
          flushdraw_gutshot: 354,
          oesd: 976,
          flushdraw_oesd: 129,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008,
          oesd_pair: 144
        },
        T7o: {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 4104,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2808,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 76,
          gutshot: 2752,
          flushdraw_oesd: 28,
          oesd: 976,
          gutshot_overcards: 192,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 1008,
          oesd_pair: 144
        },
        T6s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 4008,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2616,
          flush: 164,
          gutshot: 2480,
          gutshot_overcards: 192,
          highcard: 10332,
          flushdraw_gutshot: 324,
          acehigh: 2835,
          oesd: 512,
          flushdraw_oesd: 72,
          quads: 2,
          fullhouse: 18,
          weakpair: 1296,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        T6o: {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 4008,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2616,
          highcard: 10496,
          flushdraw: 440,
          flushdraw_gutshot: 70,
          gutshot: 2480,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 16,
          oesd: 512,
          quads: 2,
          fullhouse: 18,
          weakpair: 1296,
          gutshot_pair: 432,
          straight: 64
        },
        T5s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3816,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2472,
          flush: 165,
          oesd: 512,
          highcard: 10395,
          flushdraw_oesd: 72,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1632
        },
        T5o: {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3816,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2472,
          highcard: 10560,
          flushdraw: 440,
          flushdraw_oesd: 16,
          oesd: 512,
          flushdraw_pair: 110,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1632
        },
        T4s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3528,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2376,
          flush: 165,
          oesd: 512,
          highcard: 10395,
          flushdraw_oesd: 72,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2016
        },
        T4o: {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3528,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2376,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10560,
          flushdraw_oesd: 16,
          oesd: 512,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2016
        },
        T3s: {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 2328,
          flush: 165,
          oesd: 384,
          highcard: 10395,
          flushdraw_oesd: 54,
          gutshot: 1280,
          flushdraw_gutshot: 180,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2448
        },
        T3o: {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 2328,
          highcard: 10560,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_gutshot: 40,
          gutshot: 1280,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2448
        },
        T2s: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2928,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2664,
          toppair: 2328,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835
        },
        T2o: {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 2928,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2664,
          toppair: 2328,
          highcard: 10560,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880
        },
        99: {
          fullhouse: 192,
          overcards: 3276,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 2240,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 6720,
          quads: 48,
          weakpair: 5120,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256
        },
        "98s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 2024,
          pair: 7920,
          secondpair: 4200,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2760,
          flush: 161,
          highcard: 10143,
          acehigh: 2835,
          gutshot: 3296,
          gutshot_overcards: 384,
          flushdraw_gutshot: 414,
          oesd: 1904,
          flushdraw_oesd: 243,
          gutshot_pair: 864,
          straightflush: 4,
          straight: 252,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 960
        },
        "98o": {
          trips: 308,
          overcards: 2024,
          pair: 7920,
          secondpair: 4200,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2760,
          highcard: 10304,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 88,
          gutshot: 3296,
          gutshot_overcards: 384,
          flushdraw_oesd: 52,
          oesd: 1904,
          gutshot_pair: 864,
          straight: 256,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 960
        },
        "97s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 4200,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2520,
          flush: 162,
          highcard: 10206,
          acehigh: 2835,
          gutshot: 2896,
          gutshot_overcards: 192,
          flushdraw_gutshot: 366,
          oesd: 1504,
          flushdraw_oesd: 195,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 1200
        },
        "97o": {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 4200,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2520,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 192,
          flushdraw_oesd: 42,
          oesd: 1504,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 1200
        },
        "96s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 4104,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2328,
          flush: 163,
          gutshot: 2752,
          gutshot_overcards: 192,
          highcard: 10269,
          flushdraw_gutshot: 354,
          acehigh: 2835,
          oesd: 976,
          flushdraw_oesd: 129,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 1488,
          oesd_pair: 144
        },
        "96o": {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 4104,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2328,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_gutshot: 76,
          gutshot: 2752,
          gutshot_overcards: 192,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 28,
          oesd: 976,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 1488,
          oesd_pair: 144
        },
        "95s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3912,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2184,
          flush: 164,
          oesd: 512,
          highcard: 10332,
          flushdraw_oesd: 72,
          gutshot: 2480,
          flushdraw_gutshot: 324,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 1824,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        "95o": {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3912,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2184,
          highcard: 10496,
          flushdraw: 440,
          flushdraw_oesd: 16,
          oesd: 512,
          flushdraw_pair: 110,
          flushdraw_gutshot: 70,
          gutshot: 2480,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 1824,
          gutshot_pair: 432,
          straight: 64
        },
        "94s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2088,
          flush: 165,
          oesd: 448,
          highcard: 10395,
          flushdraw_oesd: 63,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2208
        },
        "94o": {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2088,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10560,
          flushdraw_oesd: 14,
          oesd: 448,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2208
        },
        "93s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 2040,
          flush: 165,
          oesd: 448,
          highcard: 10395,
          flushdraw_oesd: 63,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2640
        },
        "93o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 2040,
          highcard: 10560,
          flushdraw_oesd: 14,
          oesd: 448,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2640
        },
        "92s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3120,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2760,
          toppair: 2040,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 1152,
          flushdraw_gutshot: 162,
          acehigh: 2835
        },
        "92o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3120,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2760,
          toppair: 2040,
          highcard: 10560,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_gutshot: 36,
          gutshot: 1152,
          acehigh: 2880
        },
        88: {
          fullhouse: 192,
          overcards: 2024,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 1280,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 5760,
          quads: 48,
          weakpair: 7040,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256
        },
        "87s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 1140,
          pair: 7920,
          secondpair: 4200,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2280,
          flush: 161,
          highcard: 10143,
          acehigh: 2835,
          gutshot: 3296,
          gutshot_overcards: 256,
          flushdraw_gutshot: 414,
          oesd: 1904,
          flushdraw_oesd: 243,
          gutshot_pair: 864,
          straightflush: 4,
          straight: 252,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 1440
        },
        "87o": {
          trips: 308,
          overcards: 1140,
          pair: 7920,
          secondpair: 4200,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2280,
          highcard: 10304,
          flushdraw: 440,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_gutshot: 88,
          gutshot: 3296,
          gutshot_overcards: 256,
          flushdraw_oesd: 52,
          oesd: 1904,
          gutshot_pair: 864,
          straight: 256,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 1440
        },
        "86s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 4104,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 2088,
          flush: 162,
          gutshot: 2896,
          gutshot_overcards: 128,
          highcard: 10206,
          flushdraw_gutshot: 366,
          acehigh: 2835,
          oesd: 1504,
          flushdraw_oesd: 195,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        "86o": {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 4104,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 2088,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          gutshot_overcards: 128,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 42,
          oesd: 1504,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 1728
        },
        "85s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3912,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 1944,
          flush: 163,
          oesd: 976,
          highcard: 10269,
          flushdraw_oesd: 129,
          gutshot: 2752,
          flushdraw_gutshot: 354,
          acehigh: 2835,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 2064,
          oesd_pair: 144
        },
        "85o": {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3912,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 1944,
          highcard: 10432,
          flushdraw: 440,
          flushdraw_oesd: 28,
          oesd: 976,
          flushdraw_pair: 110,
          flushdraw_gutshot: 76,
          gutshot: 2752,
          acehigh: 2880,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 2064,
          oesd_pair: 144
        },
        "84s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 1848,
          flush: 164,
          oesd: 448,
          highcard: 10332,
          flushdraw_oesd: 63,
          gutshot: 2352,
          flushdraw_gutshot: 306,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2448,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        "84o": {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 1848,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10496,
          flushdraw_oesd: 14,
          oesd: 448,
          flushdraw_gutshot: 66,
          gutshot: 2352,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2448,
          gutshot_pair: 432,
          straight: 64
        },
        "83s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 1800,
          flush: 165,
          oesd: 384,
          highcard: 10395,
          flushdraw_oesd: 54,
          gutshot: 1024,
          flushdraw_gutshot: 144,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 2880
        },
        "83o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 3240,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 1800,
          highcard: 10560,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 2880
        },
        "82s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3360,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2760,
          toppair: 1800,
          flush: 165,
          oesd: 384,
          highcard: 10395,
          flushdraw_oesd: 54,
          gutshot: 1024,
          flushdraw_gutshot: 144,
          acehigh: 2835
        },
        "82o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3360,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2760,
          toppair: 1800,
          highcard: 10560,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_gutshot: 32,
          gutshot: 1024,
          acehigh: 2880
        },
        77: {
          fullhouse: 192,
          overcards: 1140,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 640,
          flushdraw: 440,
          flushdraw_pair: 440,
          trips: 2112,
          set: 2112,
          secondpair: 4480,
          quads: 48,
          weakpair: 8960,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256
        },
        "76s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 560,
          pair: 7920,
          secondpair: 4008,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 1896,
          flush: 161,
          gutshot: 3296,
          gutshot_overcards: 128,
          highcard: 10143,
          flushdraw_gutshot: 414,
          acehigh: 2835,
          oesd: 1904,
          flushdraw_oesd: 243,
          gutshot_pair: 864,
          straightflush: 4,
          straight: 252,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 2016
        },
        "76o": {
          trips: 308,
          overcards: 560,
          pair: 7920,
          secondpair: 4008,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 1896,
          highcard: 10304,
          flushdraw: 440,
          flushdraw_gutshot: 88,
          gutshot: 3296,
          gutshot_overcards: 128,
          flushdraw_pair: 110,
          acehigh: 2880,
          flushdraw_oesd: 52,
          oesd: 1904,
          gutshot_pair: 864,
          straight: 256,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 2016
        },
        "75s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3816,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 1752,
          flush: 162,
          oesd: 1504,
          highcard: 10206,
          flushdraw_oesd: 195,
          gutshot: 2896,
          flushdraw_gutshot: 366,
          acehigh: 2835,
          gutshot_pair: 720,
          straightflush: 3,
          straight: 189,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 2352
        },
        "75o": {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3816,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 1752,
          highcard: 10368,
          flushdraw: 440,
          flushdraw_oesd: 42,
          oesd: 1504,
          flushdraw_pair: 110,
          flushdraw_gutshot: 78,
          gutshot: 2896,
          acehigh: 2880,
          gutshot_pair: 720,
          straight: 192,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 2352
        },
        "74s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3528,
          flushdraw: 2145,
          flushdraw_pair: 660,
          twopair: 792,
          toppair: 1656,
          flush: 163,
          oesd: 912,
          highcard: 10269,
          flushdraw_oesd: 120,
          gutshot: 2624,
          flushdraw_gutshot: 336,
          acehigh: 2835,
          gutshot_pair: 576,
          straightflush: 2,
          straight: 126,
          quads: 2,
          fullhouse: 18,
          weakpair: 2736,
          oesd_pair: 144
        },
        "74o": {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3528,
          backdoorflushdraw: 5588,
          twopair: 792,
          toppair: 1656,
          flushdraw: 440,
          flushdraw_pair: 110,
          highcard: 10432,
          flushdraw_oesd: 26,
          oesd: 912,
          flushdraw_gutshot: 72,
          gutshot: 2624,
          acehigh: 2880,
          gutshot_pair: 576,
          straight: 128,
          quads: 2,
          fullhouse: 18,
          weakpair: 2736,
          oesd_pair: 144
        },
        "73s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 2145,
          flushdraw_pair: 660,
          toppair: 1608,
          flush: 164,
          oesd: 384,
          highcard: 10332,
          flushdraw_oesd: 54,
          gutshot: 2224,
          flushdraw_gutshot: 288,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 3168,
          gutshot_pair: 432,
          straightflush: 1,
          straight: 63
        },
        "73o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 3144,
          flushdraw: 440,
          flushdraw_pair: 110,
          toppair: 1608,
          highcard: 10496,
          flushdraw_oesd: 12,
          oesd: 384,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 3168,
          gutshot_pair: 432,
          straight: 64
        },
        "72s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3648,
          flushdraw: 2145,
          flushdraw_pair: 660,
          secondpair: 2664,
          toppair: 1608,
          flush: 165,
          oesd: 320,
          highcard: 10395,
          flushdraw_oesd: 45,
          gutshot: 896,
          flushdraw_gutshot: 126,
          acehigh: 2835
        },
        "72o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3648,
          flushdraw: 440,
          flushdraw_pair: 110,
          secondpair: 2664,
          toppair: 1608,
          highcard: 10560,
          flushdraw_oesd: 10,
          oesd: 320,
          flushdraw_gutshot: 28,
          gutshot: 896,
          acehigh: 2880
        },
        66: {
          fullhouse: 192,
          overcards: 560,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 256,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          trips: 2112,
          set: 2112,
          secondpair: 3072,
          quads: 48,
          weakpair: 10752,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256
        },
        "65s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 220,
          pair: 7920,
          secondpair: 3624,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 414,
          gutshot: 3296,
          gutshot_pair: 864,
          twopair: 792,
          toppair: 1608,
          straightflush: 4,
          straight: 252,
          flush: 161,
          highcard: 10143,
          acehigh: 2835,
          oesd: 1904,
          flushdraw_oesd: 243,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 2688
        },
        "65o": {
          trips: 308,
          overcards: 220,
          pair: 7920,
          secondpair: 3624,
          backdoorflushdraw: 5588,
          gutshot: 3296,
          gutshot_pair: 864,
          twopair: 792,
          toppair: 1608,
          straight: 256,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 88,
          highcard: 10304,
          acehigh: 2880,
          flushdraw_oesd: 52,
          oesd: 1904,
          oesd_pair: 432,
          quads: 2,
          fullhouse: 18,
          weakpair: 2688
        },
        "64s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3336,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 366,
          gutshot: 2896,
          gutshot_pair: 720,
          twopair: 792,
          toppair: 1512,
          straightflush: 3,
          straight: 189,
          flush: 162,
          highcard: 10206,
          acehigh: 2835,
          oesd: 1376,
          flushdraw_oesd: 177,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 3072
        },
        "64o": {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3336,
          backdoorflushdraw: 5588,
          gutshot: 2896,
          gutshot_pair: 720,
          twopair: 792,
          toppair: 1512,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 78,
          straight: 192,
          highcard: 10368,
          acehigh: 2880,
          flushdraw_oesd: 38,
          oesd: 1376,
          oesd_pair: 288,
          quads: 2,
          fullhouse: 18,
          weakpair: 3072
        },
        "63s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2952,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 336,
          gutshot: 2624,
          gutshot_pair: 576,
          toppair: 1464,
          straightflush: 2,
          straight: 126,
          flush: 163,
          highcard: 10269,
          acehigh: 2835,
          quads: 2,
          fullhouse: 18,
          weakpair: 3504,
          flushdraw_oesd: 102,
          oesd: 784,
          oesd_pair: 144
        },
        "63o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2952,
          gutshot: 2624,
          gutshot_pair: 576,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 72,
          toppair: 1464,
          straight: 128,
          highcard: 10432,
          acehigh: 2880,
          quads: 2,
          fullhouse: 18,
          weakpair: 3504,
          flushdraw_oesd: 22,
          oesd: 784,
          oesd_pair: 144
        },
        "62s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3984,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_gutshot: 288,
          gutshot: 2224,
          gutshot_pair: 432,
          secondpair: 2472,
          toppair: 1464,
          straightflush: 1,
          straight: 63,
          flush: 164,
          highcard: 10332,
          acehigh: 2835,
          oesd: 256,
          flushdraw_oesd: 36
        },
        "62o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 3984,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_gutshot: 62,
          gutshot: 2224,
          gutshot_pair: 432,
          secondpair: 2472,
          toppair: 1464,
          straight: 64,
          highcard: 10496,
          acehigh: 2880,
          flushdraw_oesd: 8,
          oesd: 256
        },
        55: {
          fullhouse: 192,
          overcards: 220,
          twopair: 3168,
          backdoorflushdraw: 5588,
          pair: 14080,
          overpair: 64,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_oesd: 8,
          oesd: 256,
          oesd_pair: 256,
          trips: 2112,
          set: 2112,
          secondpair: 1728,
          flushdraw_gutshot: 24,
          gutshot: 768,
          gutshot_pair: 768,
          quads: 48,
          weakpair: 12288
        },
        "54s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 56,
          pair: 7920,
          secondpair: 3048,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 243,
          oesd: 1904,
          oesd_pair: 432,
          twopair: 792,
          flushdraw_gutshot: 414,
          gutshot: 3296,
          gutshot_pair: 864,
          toppair: 1416,
          straightflush: 4,
          straight: 252,
          flush: 161,
          highcard: 10143,
          acehigh: 2772,
          quads: 2,
          fullhouse: 18,
          weakpair: 3456
        },
        "54o": {
          trips: 308,
          overcards: 56,
          pair: 7920,
          secondpair: 3048,
          backdoorflushdraw: 5588,
          oesd: 1904,
          oesd_pair: 432,
          twopair: 792,
          gutshot: 3296,
          gutshot_pair: 864,
          toppair: 1416,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 52,
          straight: 256,
          highcard: 10304,
          flushdraw_gutshot: 88,
          acehigh: 2816,
          quads: 2,
          fullhouse: 18,
          weakpair: 3456
        },
        "53s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2664,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 177,
          oesd: 1376,
          oesd_pair: 288,
          flushdraw_gutshot: 366,
          gutshot: 2896,
          gutshot_pair: 720,
          toppair: 1368,
          straightflush: 3,
          straight: 189,
          flush: 162,
          highcard: 10206,
          acehigh: 2772,
          quads: 2,
          fullhouse: 18,
          weakpair: 3888
        },
        "53o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2664,
          oesd: 1376,
          oesd_pair: 288,
          gutshot: 2896,
          gutshot_pair: 720,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 38,
          flushdraw_gutshot: 78,
          toppair: 1368,
          straight: 192,
          highcard: 10368,
          acehigh: 2816,
          quads: 2,
          fullhouse: 18,
          weakpair: 3888
        },
        "52s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 4368,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 102,
          oesd: 784,
          oesd_pair: 144,
          flushdraw_gutshot: 336,
          gutshot: 2624,
          gutshot_pair: 576,
          secondpair: 2184,
          toppair: 1368,
          straightflush: 2,
          straight: 126,
          flush: 163,
          highcard: 10269,
          acehigh: 2772
        },
        "52o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 4368,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 22,
          oesd: 784,
          oesd_pair: 144,
          flushdraw_gutshot: 72,
          gutshot: 2624,
          gutshot_pair: 576,
          secondpair: 2184,
          toppair: 1368,
          straight: 128,
          highcard: 10432,
          acehigh: 2816
        },
        44: {
          fullhouse: 192,
          overcards: 56,
          twopair: 3168,
          backdoorflushdraw: 5588,
          trips: 2112,
          set: 2112,
          pair: 14080,
          secondpair: 640,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_oesd: 6,
          oesd: 192,
          oesd_pair: 192,
          flushdraw_gutshot: 20,
          gutshot: 640,
          gutshot_pair: 640,
          quads: 48,
          weakpair: 13440
        },
        "43s": {
          trips: 308,
          backdoorflushdraw: 9009,
          overcards: 4,
          twopair: 792,
          pair: 7920,
          secondpair: 2280,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 159,
          oesd: 1248,
          oesd_pair: 288,
          flushdraw_gutshot: 366,
          gutshot: 2896,
          gutshot_pair: 720,
          toppair: 1320,
          straightflush: 3,
          straight: 189,
          flush: 162,
          highcard: 10206,
          acehigh: 2772,
          quads: 2,
          fullhouse: 18,
          weakpair: 4320
        },
        "43o": {
          trips: 308,
          overcards: 4,
          twopair: 792,
          backdoorflushdraw: 5588,
          pair: 7920,
          secondpair: 2280,
          oesd: 1248,
          oesd_pair: 288,
          gutshot: 2896,
          gutshot_pair: 720,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 34,
          flushdraw_gutshot: 78,
          toppair: 1320,
          straight: 192,
          highcard: 10368,
          acehigh: 2816,
          quads: 2,
          fullhouse: 18,
          weakpair: 4320
        },
        "42s": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 9009,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 4800,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 93,
          oesd: 720,
          oesd_pair: 144,
          flushdraw_gutshot: 318,
          gutshot: 2496,
          gutshot_pair: 576,
          secondpair: 1800,
          toppair: 1320,
          straightflush: 2,
          straight: 126,
          flush: 163,
          highcard: 10269,
          acehigh: 2772
        },
        "42o": {
          quads: 2,
          trips: 308,
          backdoorflushdraw: 5588,
          fullhouse: 18,
          twopair: 792,
          pair: 7920,
          weakpair: 4800,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 20,
          oesd: 720,
          oesd_pair: 144,
          flushdraw_gutshot: 68,
          gutshot: 2496,
          gutshot_pair: 576,
          secondpair: 1800,
          toppair: 1320,
          straight: 128,
          highcard: 10432,
          acehigh: 2816
        },
        33: {
          fullhouse: 192,
          overcards: 4,
          twopair: 3168,
          backdoorflushdraw: 5588,
          quads: 48,
          trips: 2112,
          set: 2112,
          pair: 14080,
          weakpair: 14080,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_oesd: 4,
          oesd: 128,
          oesd_pair: 128,
          flushdraw_gutshot: 16,
          gutshot: 512,
          gutshot_pair: 512
        },
        "32s": {
          quads: 2,
          fullhouse: 18,
          trips: 308,
          backdoorflushdraw: 9009,
          twopair: 792,
          pair: 7920,
          weakpair: 5280,
          flushdraw: 2145,
          flushdraw_pair: 660,
          flushdraw_oesd: 75,
          oesd: 592,
          oesd_pair: 144,
          flushdraw_gutshot: 318,
          gutshot: 2496,
          gutshot_pair: 576,
          secondpair: 1320,
          toppair: 1320,
          straightflush: 2,
          straight: 126,
          flush: 163,
          highcard: 10269,
          acehigh: 2772
        },
        "32o": {
          quads: 2,
          fullhouse: 18,
          trips: 308,
          backdoorflushdraw: 5588,
          twopair: 792,
          pair: 7920,
          weakpair: 5280,
          flushdraw: 440,
          flushdraw_pair: 110,
          flushdraw_oesd: 16,
          oesd: 592,
          oesd_pair: 144,
          flushdraw_gutshot: 68,
          gutshot: 2496,
          gutshot_pair: 576,
          secondpair: 1320,
          toppair: 1320,
          straight: 128,
          highcard: 10432,
          acehigh: 2816
        },
        22: {
          quads: 48,
          fullhouse: 192,
          trips: 2112,
          set: 2112,
          backdoorflushdraw: 5588,
          twopair: 3168,
          pair: 14080,
          weakpair: 14080,
          flushdraw: 440,
          flushdraw_pair: 440,
          flushdraw_oesd: 2,
          oesd: 64,
          oesd_pair: 64,
          flushdraw_gutshot: 12,
          gutshot: 384,
          gutshot_pair: 384
        }
      },
      e = ["straightflush", "quads", "fullhouse", "flush", "straight", "trips", "set", "twopair", "pair", "overpair", "toppair", "secondpair", "weakpair", "highcard", "acehigh", "flushdraw", "flushdraw_pair", "flushdraw_oesd", "flushdraw_gutshot", "backdoorflushdraw", "oesd", "oesd_pair", "gutshot", "gutshot_pair", "gutshot_overcards", "overcards"],
      i = ["straightflush", "quads", "fullhouse", "flush", "straight", "trips", "twopair", "pair", "highcard", "flushdraw", "backdoorflushdraw", "oesd", "gutshot", "overcards"],
      u = {
        trips: ["set"],
        pair: ["overpair", "toppair", "secondpair", "weakpair"],
        highcard: ["acehigh"],
        flushdraw: ["flushdraw_pair", "flushdraw_oesd", "flushdraw_gutshot"],
        oesd: ["oesd_pair"],
        gutshot: ["gutshot_pair", "gutshot_overcards"]
      },
      p = {
        straightflush: "Straight Flush",
        quads: "Quads",
        fullhouse: "Full House",
        flush: "Flush",
        straight: "Straight",
        trips: "Trips",
        set: "Set",
        twopair: "Two Pair",
        pair: "Pair",
        overpair: "Overpair",
        toppair: "Top Pair",
        secondpair: "Second Pair",
        weakpair: "Weak Pair",
        highcard: "High Card",
        acehigh: "Ace High",
        flushdraw: "Flush Draw",
        flushdraw_pair: "Flush Draw + Pair",
        flushdraw_oesd: "Flush Draw + OESD",
        flushdraw_gutshot: "Flush Draw + Gutshot",
        backdoorflushdraw: "Backdoor Flush Draw",
        oesd: "OESD",
        oesd_pair: "OESD + Pair",
        gutshot: "Gutshot",
        gutshot_pair: "Gutshot + Pair",
        gutshot_overcards: "Gutshot + Overcards",
        overcards: "Overcards"
      },
      l = {
        s: "&spades;",
        c: "&clubs;",
        d: "&diams;",
        h: "&hearts;"
      },
      c = function(s) {
        const a = {};
        let r = 0;
        for (const s of e) a[s] = 0;
        for (const s of h)
          if ($(`#0_${s}`).hasClass("selected")) {
            let o = 0;
            o = s[0] === s[1] ? 6 : "s" === s[2] ? 4 : 12, r += 19600 * o;
            const t = d[s];
            for (const s in t) a[s] += o * t[s]
          } if (0 === r)
          for (const s in a) $(`#preflop_${s}_meter`).val(0), $(`#preflop_${s}_percent`).text((0).toFixed(1) + "%");
        else
          for (const s in a) {
            const o = a[s];
            $(`#preflop_${s}_meter`).val(1e3 * o / r), $(`#preflop_${s}_percent`).text((100 * o / r).toFixed(1) + "%")
          }
        q(0), A()
      },
      f = function() {
        const s = [];
        for (let a = 1; a <= 5; a++) s.push($(`#board${a}`).attr("value"));
        return s
      },
      w = function() {
        return [$("#hole1").attr("value"), $("#hole2").attr("value")]
      },
      n = function(s, a) {
        for (const r of s)
          if (a.has(r)) return !0;
        return !1
      },
      g = function(s) {
        let a, r;
        return a = "h" === s[0][1] || "d" === s[0][1] ? `<span style='color:red'>${s[0][0]}${l[s[0][1]]}</span>` : `<span style='color:black'>${s[0][0]}${l[s[0][1]]}</span>`, r = "h" === s[1][1] || "d" === s[1][1] ? `<span style='color:red'>${s[1][0]}${l[s[1][1]]}</span>` : `<span style='color:black'>${s[1][0]}${l[s[1][1]]}</span>`, a + r
      },
      _ = function(a, r, o, t) {
        const h = [],
          d = function(s) {
            const a = new Set;
            for (const r of e) $(`#${s}_${r}_box`).prop("checked") && a.add(r);
            return a
          }(a),
          i = {};
        let u = 0;
        for (const s of e) i[s] = 0;
        const p = new Set(o.concat(t));
        for (const a of r) {
          if (p.has(a[0]) || p.has(a[1])) continue;
          u += 1;
          const r = s.qualifyCards(a, o);
          for (const s of r) i[s] += 1;
          n(r, d) && h.push(a)
        }
        for (const s in i) {
          const r = i[s];
          $(`#${a}_${s}_meter`).val(1e3 * r / u), $(`#${a}_${s}_percent`).text((100 * r / u).toFixed(1) + "%")
        }
        return $(`#${a}_combos`).text(h.length), $(`#${a}_combos_percent`).text((h.length / u * 100).toFixed(1) + "%"),
          function(s, a) {
            if ($(`#${s}_combos_all`).hasClass("show")) {
              $(`#${s}_combos_all`).empty();
              for (let r = 0; r < a.length; r++) {
                const o = g(a[r]);
                r === a.length - 1 ? $(`#${s}_combos_all`).append(o) : $(`#${s}_combos_all`).append(o + ",&nbsp;")
              }
            }
          }(a, h), h
      };
    let k = [],
      v = [],
      b = [],
      m = [];
    const q = function(s) {
        const r = a.getHands(s);
        k = [], v = [], b = [], m = [];
        const o = f(),
          t = w(),
          h = new Set(t);
        for (const s of r) h.has(s[0]) || h.has(s[1]) || k.push(s);
        const d = "empty" !== o[0] && "empty" !== o[1] && "empty" !== o[2],
          e = d && "empty" !== o[3],
          i = e && "empty" !== o[4];
        return d && r.length > 0 ? v = _("flop", r, o.slice(0, 3), t) : x("flop"), e && v.length > 0 ? b = _("turn", v, o.slice(0, 4), t) : x("turn"), i && b.length > 0 ? m = _("river", b, o, t) : x("river")
      },
      x = function(s) {
        for (const a of e) $(`#${s}_${a}_meter`).val(0), $(`#${s}_${a}_percent`).text((0).toFixed(1) + "%");
        $(`#${s}_combos_all`).empty()
      },
      y = function(s) {
        const a = s.target.id.slice(0, -4);
        $(s.target).prop("checked") && $(`.${a}_subqualifier`).prop("checked", $(s.target).prop("checked")), c()
      },
      T = function(s) {
        const a = $(s.target).attr("class");
        let r = !1,
          o = !0;
        $(`.${a}`).each(((s, a) => {
          r = r || $(a).prop("checked"), o = o && $(a).prop("checked")
        })), o ? $(`#${a.slice(0,-13)}_box`).prop("checked", !0) : $(`#${a.slice(0,-13)}_box`).prop("checked", !1), c()
      };
    window.cardUpdate = function(s) {
      return c()
    }, window.rangeUpdate = function(s) {
      return c()
    };
    const A = function() {
        let s;
        if ("nav-preflop-tab" === Q) {
          for (const s of h) $(`#0_${s}`).css("background", "");
          return
        }
        s = "nav-flop-tab" === Q ? v : "nav-turn-tab" === Q ? b : m;
        const a = {};
        for (const o of s) {
          const s = (r = o)[0][0] === r[1][0] ? [r[0][0] + r[1][0], 2] : r[0][1] === r[1][1] ? [r[0][0] + r[1][0] + "s", 3] : [r[0][0] + r[1][0] + "o", 1],
            t = s[0],
            h = s[1];
          t in a ? a[t] += h : a[t] = h
        }
        var r;
        for (const s of h)
          if (s in a) {
            const r = a[s] / 12 * 100;
            $(`#0_${s}`).css("background", `linear-gradient(to right, #ffdd99 ${r}%, #fdf1d9 ${r}%)`)
          } else $(`#0_${s}`).css("background", "")
      },
      C = function(s) {
        const a = $('<div class="alert alert-danger alert-dismissible fade show" role="alert"></div>').append(s).append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        return $("#simulation_errors").prepend(a)
      },
      J = function() {
        return Q = $(this).attr("id"), A()
      };
    let Q = "nav-preflop-tab";
    $("#calc_equity").click((function(s) {
        if (!s.detail || 1 === s.detail) {
          $("#preflop_equity").text("-"), $("#flop_equity").text("-"), $("#turn_equity").text("-"), $("#river_equity").text("-");
          const s = w();
          if ("empty" === s[0] || "empty" === s[1]) return void C("Missing <strong>Hole Cards</strong>");
          if (0 === k.length) return void C("No hands in <strong>Range</strong>");
          const a = f(),
            r = "empty" !== a[0] && "empty" !== a[1] && "empty" !== a[2],
            o = r && "empty" !== a[3],
            h = o && "empty" !== a[4];
          $("#calc_equity").prepend($('<span id="equity_spinner" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>')), $("#calc_equity").attr("disabled", !0), setTimeout((() => {
            let d = t.approximateHandRangeEquity(s, k, 1e4);
            $("#preflop_equity").text("~" + (100 * d[0]).toFixed(1) + "%"), r && (d = t.calculateHandRangeEquity(s, v, a.slice(0, 3)), $("#flop_equity").text((100 * d[0]).toFixed(1) + "%")), o && (d = t.calculateHandRangeEquity(s, b, a.slice(0, 4)), $("#turn_equity").text((100 * d[0]).toFixed(1) + "%")), h && (d = t.calculateHandRangeEquity(s, m, a), $("#river_equity").text((100 * d[0]).toFixed(1) + "%")), $("#equity_spinner").remove(), $("#calc_equity").attr("disabled", !1)
          }), 100)
        }
      })), $("#nav-preflop-tab").click(J), $("#nav-flop-tab").click(J), $("#nav-turn-tab").click(J), $("#nav-river-tab").click(J), a.loadRanges(),
      function() {
        const s = a.buildRange("Range", 0);
        s.addClass("mx-auto"), $("#player_0").replaceWith(s),
          function() {
            for (const s of ["preflop", "flop", "turn", "river"]) {
              let a = "made";
              for (const r of i) {
                "straightflush" === r ? $(`#${s}_body`).append("<tr><td colspan=4><i>Made Hands</i></td></tr>") : "flushdraw" === r && (a = "draw", $(`#${s}_body`).append("<tr><td colspan=4><i>Draws</i></td></tr>"));
                let o = $("<tr></tr>");
                if ("preflop" === s ? o.append('<td style="width: 13px"></td>') : "river" === s && "draw" === a || "turn" === s && "backdoorflushdraw" === r ? o.append($('<td style="width: 13px"></td>').append($(`<input type='checkbox' id='${s}_${r}_box'>`).change(y))) : o.append($('<td style="width: 13px"></td>').append($(`<input type='checkbox' id='${s}_${r}_box' checked>`).change(y))), o.append(`<td class='pl-1 pr-xl-3 stats_hand_qualifier'>${p[r]}</td>`).append(`<td id='${s}_${r}_percent' class='stats_hand_percent'>0.0%</td>`).append(`<td class='stats_hand_meter'><meter id='${s}_${r}_meter' value=0 min=0 max=1000 style='width: 100%'></meter></td>`), $(`#${s}_body`).append(o), r in u)
                  for (const t of u[r]) o = $('<tr class="subqualifier"></tr>'), "preflop" === s ? (o.append('<td style="width: 13px"></td>'), o.append(`<td class='pl-3 pr-xl-3 stats_hand_qualifier'>${p[t]}</td>`).append(`<td id='${s}_${t}_percent' class='stats_hand_percent'>0.0%</td>`).append(`<td class='stats_hand_meter'><meter id='${s}_${t}_meter' value=0 min=0 max=1000 style='width: 100%'></meter></td>`)) : "river" === s && "draw" === a ? (o.append('<td style="width: 13px"></td>'), o.append($(`<td class='pr-xl-3 stats_hand_qualifier'>&nbsp;&nbsp;${p[t]}</td>`).prepend($(`<input type='checkbox' id='${s}_${t}_box' class='${s}_${r}_subqualifier'>`).change(T))).append(`<td id='${s}_${t}_percent' class='stats_hand_percent'>0.0%</td>`).append(`<td class='stats_hand_meter'><meter id='${s}_${t}_meter' value=0 min=0 max=1000 style='width: 100%'></meter></td>`)) : (o.append('<td style="width: 13px"></td>'), o.append($(`<td class='pr-xl-3 stats_hand_qualifier'>&nbsp;&nbsp;${p[t]}</td>`).prepend($(`<input type='checkbox' id='${s}_${t}_box' class='${s}_${r}_subqualifier' checked>`).change(T))).append(`<td id='${s}_${t}_percent' class='stats_hand_percent'>0.0%</td>`).append(`<td class='stats_hand_meter'><meter id='${s}_${t}_meter' value=0 min=0 max=1000 style='width: 100%'></meter></td>`)), $(`#${s}_body`).append(o)
              }
            }
          }()
      }();
    const K = o.makeHiddenCard(55).attr({
      id: "board1",
      tabindex: "0"
    }).css("margin", "0px 5px 0px 0px").addClass("ml-auto");
    o.addCardSelect(K);
    const I = o.makeHiddenCard(55).attr({
      id: "board2",
      tabindex: "0"
    }).css("margin", "0px 5px 0px 0px");
    o.addCardSelect(I);
    const S = o.makeHiddenCard(55).attr({
      id: "board3",
      tabindex: "0"
    }).css("margin", "0px 12px 0px 0px");
    o.addCardSelect(S);
    const R = o.makeHiddenCard(55).attr({
      id: "board4",
      tabindex: "0"
    }).css("margin", "0px 12px 0px 0px");
    o.addCardSelect(R);
    const E = o.makeHiddenCard(55).attr({
      id: "board5",
      tabindex: "0"
    }).css("margin", "0px 0px 0px 0px").addClass("mr-auto");
    o.addCardSelect(E), $("#board").append(K, I, S, R, E);
    const H = o.makeHiddenCard(55).attr({
      id: "hole1",
      tabindex: "0"
    }).css("margin", "0px 5px 0px 0px").addClass("ml-auto");
    o.addCardSelect(H);
    const U = o.makeHiddenCard(55).attr({
      id: "hole2",
      tabindex: "0"
    }).css("margin", "0px 0px 0px 0px");
    o.addCardSelect(U), $("#hole_cards").prepend(H, U), $("#random_board").click((function() {
      return o.setCardRandom("board1"), o.setCardRandom("board2"), o.setCardRandom("board3"), o.setCardRandom("board4"), o.setCardRandom("board5"), c()
    })), $("#clear_board").click((function() {
      return o.resetCard("board1"), o.resetCard("board2"), o.resetCard("board3"), o.resetCard("board4"), o.resetCard("board5"), c()
    })), $("#flop_combos_all").on("shown.bs.collapse", c), $("#turn_combos_all").on("shown.bs.collapse", c), $("#river_combos_all").on("shown.bs.collapse", c)
  })()
})();
