/* tools.js — tools 页小工具
 * 1. stable softmax
 * 2. 复杂度曲线 (canvas)
 */
(function () {
  'use strict';

  /* ---------- stable softmax ---------- */
  var smIn = document.querySelector('[data-softmax-in]');
  var smRun = document.querySelector('[data-softmax-run]');
  var smOut = document.querySelector('[data-softmax-out]');

  if (smRun && smIn && smOut) {
    smRun.addEventListener('click', function () {
      var nums = smIn.value.trim().split(/[\s,]+/).map(Number).filter(function (v) {
        return !isNaN(v);
      });
      if (!nums.length) {
        smOut.textContent = '// empty input — paste numbers separated by spaces';
        return;
      }
      var m = Math.max.apply(null, nums);
      var exps = nums.map(function (v) { return Math.exp(v - m); });
      var sum = exps.reduce(function (a, b) { return a + b; }, 0);
      var out = exps.map(function (v) { return (v / sum).toFixed(4); });
      smOut.textContent = '[ ' + out.join('  ') + ' ]';
    });
  }

  /* ---------- 复杂度曲线 ---------- */
  var cxN = document.querySelector('[data-complexity-n]');
  var cxRun = document.querySelector('[data-complexity-run]');
  var cxCanvas = document.querySelector('[data-complexity-canvas]');

  if (cxRun && cxN && cxCanvas) {
    var ctx = cxCanvas.getContext('2d');
    var curves = [
      { label: 'O(n)', fn: function (n) { return n; }, color: '#6FCFEB' },
      { label: 'O(n log n)', fn: function (n) { return n * Math.log2(Math.max(n, 2)); }, color: '#FFB000' },
      { label: 'O(n^2)', fn: function (n) { return n * n; }, color: '#8A8A94' }
    ];

    function plot() {
      var nMax = Math.max(10, Math.min(10000, Number(cxN.value) || 200));
      var W = cxCanvas.width, H = cxCanvas.height, pad = 28;
      var yMax = curves[2].fn(nMax); // O(n^2) 最大

      ctx.clearRect(0, 0, W, H);
      // 底色与坐标轴
      ctx.fillStyle = '#16161A';
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = '#1E1E24';
      ctx.beginPath();
      ctx.moveTo(pad, pad / 2);
      ctx.lineTo(pad, H - pad);
      ctx.lineTo(W - pad / 2, H - pad);
      ctx.stroke();

      curves.forEach(function (c) {
        ctx.strokeStyle = c.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (var n = 1; n <= nMax; n++) {
          var x = pad + (n / nMax) * (W - pad * 1.5);
          var y = (H - pad) - (c.fn(n) / yMax) * (H - pad * 1.5);
          if (n === 1) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
        // 末端标注
        ctx.fillStyle = c.color;
        ctx.font = '11px "JetBrains Mono", monospace';
        var lx = pad + (W - pad * 1.5) + 4;
        var ly = (H - pad) - (c.fn(nMax) / yMax) * (H - pad * 1.5);
        ctx.fillText(c.label, Math.min(lx, W - 80), Math.max(ly, 12));
      });

      ctx.fillStyle = '#5C5C66';
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.fillText('n=' + nMax, W - pad - 30, H - pad + 16);
      ctx.fillText('ops=' + Math.round(yMax), pad + 4, pad / 2 + 12);
    }

    cxRun.addEventListener('click', plot);
    plot();
  }
})();
