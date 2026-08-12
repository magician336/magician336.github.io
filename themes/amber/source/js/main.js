/* main.js — 全站交互
 * 1. projects / blog 筛选 (aria-pressed 按钮 + data-* 显隐)
 * 2. Ctrl+K 跳转 (tools 页聚焦 helpers)
 * 3. 文章页阅读进度条
 */
(function () {
  'use strict';

  /* ---------- 筛选 ---------- */
  // projects: 状态 + 标签双轴; blog: 仅标签
  var state = { status: 'all', tag: 'all' };

  function applyFilters() {
    var group = document.querySelector('[data-filter-group]');
    if (!group) return;
    var kind = group.getAttribute('data-filter-group');
    var items = document.querySelectorAll(kind === 'projects' ? '.work-item' : '.post-item');
    var visible = 0;
    items.forEach(function (el) {
      var okStatus = state.status === 'all' || el.getAttribute('data-status') === state.status;
      var tags = (el.getAttribute('data-tags') || '').split(',');
      var okTag = state.tag === 'all' || tags.indexOf(state.tag) !== -1;
      var show = okStatus && okTag;
      el.hidden = !show;
      if (show) visible++;
    });
    // 空年份分组整组隐藏
    document.querySelectorAll('.year-group').forEach(function (g) {
      var any = Array.prototype.some.call(g.querySelectorAll('.work-item'), function (el) {
        return !el.hidden;
      });
      g.hidden = !any;
    });
    var empty = document.querySelector('[data-empty]');
    if (empty) empty.hidden = visible !== 0;
  }

  function press(btn, pressed) {
    btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-filter-status], [data-filter-tag], [data-clear]');
    if (!btn) return;

    if (btn.hasAttribute('data-clear')) {
      state.status = 'all';
      state.tag = 'all';
      document.querySelectorAll('[data-filter-status]').forEach(function (b) {
        press(b, b.getAttribute('data-filter-status') === 'all');
      });
      document.querySelectorAll('[data-filter-tag]').forEach(function (b) {
        press(b, b.getAttribute('data-filter-tag') === 'all');
      });
      applyFilters();
      return;
    }

    if (btn.hasAttribute('data-filter-status')) {
      state.status = btn.getAttribute('data-filter-status');
      document.querySelectorAll('[data-filter-status]').forEach(function (b) {
        press(b, b === btn);
      });
    }
    if (btn.hasAttribute('data-filter-tag')) {
      // 再点同一标签 = 取消
      var tag = btn.getAttribute('data-filter-tag');
      state.tag = state.tag === tag ? 'all' : tag;
      document.querySelectorAll('[data-filter-tag]').forEach(function (b) {
        press(b, b.getAttribute('data-filter-tag') === state.tag);
      });
    }
    applyFilters();
  });

  /* ---------- Ctrl+K: 跳到 tools 页 helpers ---------- */
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      var helpers = document.getElementById('helpers');
      if (!helpers) return;
      e.preventDefault();
      helpers.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var input = helpers.querySelector('textarea, input');
      if (input) input.focus({ preventScroll: true });
    }
  });

  /* ---------- 阅读进度条 (仅文章页) ---------- */
  var bar = document.querySelector('.read-progress');
  if (bar) {
    var onScroll = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
