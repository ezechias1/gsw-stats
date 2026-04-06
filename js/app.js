// gsw-stats/js/app.js

var currentPlayerList = [];
var currentChart = null;
var activePositionFilter = 'ALL';
var activeSearchQuery = '';

// Guard helper: format a nullable stat value with toFixed(1), or return 'N/A'
function fmt(value) {
  return value !== null && value !== undefined ? value.toFixed(1) : 'N/A';
}

// Guard helper: return numeric value or 0 (for comparison math)
function num(value) {
  return value !== null && value !== undefined ? value : 0;
}

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────

function initTheme() {
  var saved = localStorage.getItem('gsw-theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  updateThemeIcon();
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  if (current === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('gsw-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('gsw-theme', 'light');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    // Moon icon for switching back to dark
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>';
  } else {
    // Sun icon for switching to light
    btn.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/></svg>';
  }
}

// ─────────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────────

function showToast(message) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}

// ─────────────────────────────────────────────
// ANIMATED COUNTERS
// ─────────────────────────────────────────────

function animateCountUp(el, target, duration) {
  if (el.dataset.animated === 'true') return;
  el.dataset.animated = 'true';
  var isDecimal = String(target).indexOf('.') !== -1;
  var start = 0;
  var startTime = null;

  function ease(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var val = start + (target - start) * ease(progress);
    if (isDecimal) {
      el.textContent = val.toFixed(1);
    } else {
      el.textContent = Math.round(val);
    }
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = isDecimal ? target.toFixed(1) : Math.round(target);
    }
  }
  requestAnimationFrame(step);
}

function setupCounterObserver() {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        var el = entries[i].target;
        var raw = el.getAttribute('data-count');
        if (raw) {
          var target = parseFloat(raw);
          animateCountUp(el, target, 1500);
        }
        observer.unobserve(el);
      }
    }
  }, { threshold: 0.3 });

  var elements = document.querySelectorAll('[data-count]');
  for (var i = 0; i < elements.length; i++) {
    elements[i].dataset.animated = 'false';
    observer.observe(elements[i]);
  }
}

// ─────────────────────────────────────────────
// TIMELINE SCROLL ANIMATION
// ─────────────────────────────────────────────

function setupTimelineObserver() {
  if (!('IntersectionObserver' in window)) return;
  var items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('visible');
        observer.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.2 });

  for (var i = 0; i < items.length; i++) {
    observer.observe(items[i]);
  }
}

// ─────────────────────────────────────────────
// SVG FALLBACK MARKUP
// ─────────────────────────────────────────────

var silhouetteSVG = '<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>';

// ─────────────────────────────────────────────
// TASK 3: Landing Page
// ─────────────────────────────────────────────

function initHome() {
  var playerPool = players.current;
  var player = playerPool[Math.floor(Math.random() * playerPool.length)];

  document.getElementById('featured-name').textContent = player.name;
  document.getElementById('featured-meta').textContent =
    '#' + player.number + ' · ' + player.position + ' · ' + player.height;

  var grid = document.getElementById('featured-stats');
  var stats = [
    { label: 'PPG', value: player.career.ppg },
    { label: 'RPG', value: player.career.rpg },
    { label: 'APG', value: player.career.apg },
    { label: 'FG%', value: player.career.fgPct }
  ];

  var html = '';
  for (var i = 0; i < stats.length; i++) {
    var val = stats[i].value;
    var display = fmt(val);
    var countAttr = val !== null && val !== undefined ? ' data-count="' + val + '"' : '';
    html += '<div class="stat-card">' +
      '<div class="stat-value"' + countAttr + '>' + display + '</div>' +
      '<div class="stat-label">' + stats[i].label + '</div>' +
      '</div>';
  }
  grid.innerHTML = html;

  setupCounterObserver();
  setupTimelineObserver();
}

// ─────────────────────────────────────────────
// FILTER BAR
// ─────────────────────────────────────────────

function buildFilterBar(containerId) {
  var sidebar = document.getElementById(containerId);
  if (!sidebar) return;

  var positions = ['ALL', 'PG', 'SG', 'SF', 'PF', 'C'];
  var html = '<div class="filter-bar">';
  html += '<input type="text" class="filter-search" id="filter-search" placeholder="Search players..." oninput="onFilterChange()" />';
  html += '<div class="filter-positions">';
  for (var i = 0; i < positions.length; i++) {
    var active = positions[i] === 'ALL' ? ' active' : '';
    html += '<button class="filter-pos-btn' + active + '" data-pos="' + positions[i] + '" onclick="setPositionFilter(\'' + positions[i] + '\')">' + positions[i] + '</button>';
  }
  html += '</div></div>';
  html += '<div id="sidebar-list"></div>';
  sidebar.innerHTML = html;
}

function setPositionFilter(pos) {
  activePositionFilter = pos;
  var btns = document.querySelectorAll('.filter-pos-btn');
  for (var i = 0; i < btns.length; i++) {
    if (btns[i].getAttribute('data-pos') === pos) {
      btns[i].classList.add('active');
    } else {
      btns[i].classList.remove('active');
    }
  }
  onFilterChange();
}

function onFilterChange() {
  var searchInput = document.getElementById('filter-search');
  activeSearchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  renderFilteredSidebar();
}

function renderFilteredSidebar() {
  var filtered = [];
  for (var i = 0; i < currentPlayerList.length; i++) {
    var p = currentPlayerList[i];
    var matchPos = activePositionFilter === 'ALL' || p.position === activePositionFilter;
    var matchSearch = activeSearchQuery === '' || p.name.toLowerCase().indexOf(activeSearchQuery) !== -1;
    if (matchPos && matchSearch) {
      filtered.push(p);
    }
  }

  var container = document.getElementById('sidebar-list');
  if (!container) return;

  var activeId = '';
  var currentActive = document.querySelector('.sidebar-item.active');
  if (currentActive) activeId = currentActive.getAttribute('data-id');
  if (!activeId && filtered.length) activeId = filtered[0].id;

  var html = '';
  for (var j = 0; j < filtered.length; j++) {
    var p = filtered[j];
    var activeClass = p.id === activeId ? ' active' : '';
    var delay = j * 0.04;
    html += '<div class="sidebar-item slide-in' + activeClass + '" data-id="' + p.id + '" onclick="selectPlayer(\'' + p.id + '\')" style="animation-delay:' + delay + 's">' +
      '<img class="sidebar-thumb" src="img/players/' + p.id + '.png" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="sidebar-thumb-fallback" style="display:none">' + silhouetteSVG + '</div>' +
      '<div class="sidebar-item-info">' +
        '<div class="player-name">' + p.name + '</div>' +
        '<div class="player-number">#' + p.number + ' · ' + p.position + '</div>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

// ─────────────────────────────────────────────
// TASK 4: Roster / Legends shared rendering
// ─────────────────────────────────────────────

function renderSidebar(playerList, containerId) {
  buildFilterBar(containerId);
  renderFilteredSidebar();
}

function renderPlayerDetail(player) {
  // Destroy previous chart
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }

  var accoladesHtml = '';
  if (player.accolades && player.accolades.length) {
    accoladesHtml = '<div class="accolades">';
    for (var i = 0; i < player.accolades.length; i++) {
      accoladesHtml += '<span class="accolade-tag">' + player.accolades[i] + '</span>';
    }
    accoladesHtml += '</div>';
  }

  var gamesSeasons = 'GP ' + player.gamesPlayed + ' · ' + player.seasons + ' Seasons';
  if (player.yearsWithWarriors) {
    gamesSeasons += ' · ' + player.yearsWithWarriors + ' Years with Warriors';
  }

  var careerStats = [
    { label: 'PPG',  value: player.career.ppg },
    { label: 'RPG',  value: player.career.rpg },
    { label: 'APG',  value: player.career.apg },
    { label: 'SPG',  value: player.career.spg },
    { label: 'BPG',  value: player.career.bpg },
    { label: 'FG%',  value: player.career.fgPct },
    { label: '3P%',  value: player.career.threePct },
    { label: 'FT%',  value: player.career.ftPct }
  ];

  var statGridHtml = '';
  for (var j = 0; j < careerStats.length; j++) {
    var v = careerStats[j].value;
    var display = fmt(v);
    var countAttr = v !== null && v !== undefined ? ' data-count="' + v + '"' : '';
    statGridHtml += '<div class="stat-card">' +
      '<div class="stat-value"' + countAttr + '>' + display + '</div>' +
      '<div class="stat-label">' + careerStats[j].label + '</div>' +
      '</div>';
  }

  var seasonRowsHtml = '';
  if (player.seasonStats && player.seasonStats.length) {
    for (var k = 0; k < player.seasonStats.length; k++) {
      var s = player.seasonStats[k];
      seasonRowsHtml += '<tr>' +
        '<td>' + s.season + '</td>' +
        '<td>' + s.team + '</td>' +
        '<td>' + s.gp + '</td>' +
        '<td>' + fmt(s.ppg) + '</td>' +
        '<td>' + fmt(s.rpg) + '</td>' +
        '<td>' + fmt(s.apg) + '</td>' +
        '<td>' + fmt(s.fgPct) + '</td>' +
        '<td>' + fmt(s.threePct) + '</td>' +
        '</tr>';
    }
  }

  var photoHtml = '<img src="img/players/' + player.id + '.png" alt="' + player.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
    '<div class="player-photo-fallback" style="display:none">' + silhouetteSVG + '</div>';

  var html = '<div class="player-detail fade-in">' +
    '<img src="img/warriors-logo.svg" alt="" class="player-watermark" />' +
    '<div class="player-header">' +
      '<div class="player-photo">' + photoHtml + '</div>' +
      '<div class="player-info">' +
        '<h2>' + player.name + '</h2>' +
        '<p class="player-meta">#' + player.number + ' · ' + player.position + ' · ' + player.height + ' · ' + player.weight + '</p>' +
        '<p class="player-meta">' + player.from + ' · Drafted ' + player.drafted + '</p>' +
        '<p class="player-meta">' + gamesSeasons + '</p>' +
        accoladesHtml +
      '</div>' +
    '</div>' +
    '<h3 style="font-size:11px;letter-spacing:4px;color:var(--text-muted);text-transform:uppercase;margin:0 0 16px;position:relative;z-index:1;">Career Averages</h3>' +
    '<div class="stat-grid" style="grid-template-columns:repeat(4,1fr);">' + statGridHtml + '</div>' +
    '<div class="career-chart-wrapper"><h3>Points Per Game by Season</h3><canvas id="career-chart"></canvas></div>' +
    '<h3 style="font-size:11px;letter-spacing:4px;color:var(--text-muted);text-transform:uppercase;margin:40px 0 0;position:relative;z-index:1;">Season by Season</h3>' +
    '<div class="season-table-wrapper">' +
      '<table class="season-table">' +
        '<thead><tr>' +
          '<th>Season</th><th>Team</th><th>GP</th>' +
          '<th>PPG</th><th>RPG</th><th>APG</th><th>FG%</th><th>3P%</th>' +
        '</tr></thead>' +
        '<tbody>' + seasonRowsHtml + '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>';

  document.getElementById('player-detail').innerHTML = html;

  // Render career chart if Chart.js is available
  if (typeof Chart !== 'undefined' && player.seasonStats && player.seasonStats.length) {
    renderCareerChart(player);
  }

  // Setup animated counters for career stats
  setupCounterObserver();
}

// ─────────────────────────────────────────────
// CAREER CHART (Chart.js)
// ─────────────────────────────────────────────

function renderCareerChart(player) {
  var ctx = document.getElementById('career-chart');
  if (!ctx) return;

  var labels = [];
  var data = [];
  for (var i = 0; i < player.seasonStats.length; i++) {
    labels.push(player.seasonStats[i].season);
    data.push(player.seasonStats[i].ppg);
  }

  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var gridColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)';
  var tickColor = isLight ? '#888' : '#666';

  currentChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'PPG',
        data: data,
        borderColor: '#FFC72C',
        backgroundColor: 'rgba(29, 66, 138, 0.2)',
        pointBackgroundColor: '#FFC72C',
        pointBorderColor: '#FFC72C',
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: tickColor, font: { size: 10 } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: tickColor, font: { size: 10 } },
          beginAtZero: true
        }
      }
    }
  });
}

function selectPlayer(id) {
  var player = null;
  for (var i = 0; i < currentPlayerList.length; i++) {
    if (currentPlayerList[i].id === id) {
      player = currentPlayerList[i];
      break;
    }
  }
  if (!player) return;

  var items = document.querySelectorAll('.sidebar-item');
  for (var j = 0; j < items.length; j++) {
    if (items[j].getAttribute('data-id') === id) {
      items[j].classList.add('active');
    } else {
      items[j].classList.remove('active');
    }
  }

  renderPlayerDetail(player);
}

function initRoster() {
  currentPlayerList = players.current;
  renderSidebar(currentPlayerList, 'sidebar');
  renderPlayerDetail(currentPlayerList[0]);
}

// ─────────────────────────────────────────────
// TASK 5: Legends Page
// ─────────────────────────────────────────────

function initLegends() {
  currentPlayerList = players.legends;
  renderSidebar(players.legends, 'sidebar');
  renderPlayerDetail(players.legends[0]);
}

// ─────────────────────────────────────────────
// TASK 6: Compare Page
// ─────────────────────────────────────────────

function getAllPlayers() {
  return players.current.concat(players.legends);
}

function populateDropdowns() {
  var all = getAllPlayers();
  var sel1 = document.getElementById('player1-select');
  var sel2 = document.getElementById('player2-select');
  var opts = '';
  for (var i = 0; i < all.length; i++) {
    opts += '<option value="' + all[i].id + '">#' + all[i].number + ' ' + all[i].name + '</option>';
  }
  sel1.innerHTML = '<option value="">Select Player 1</option>' + opts;
  sel2.innerHTML = '<option value="">Select Player 2</option>' + opts;

  // Check for query params (share link)
  var params = new URLSearchParams(window.location.search);
  var p1 = params.get('p1');
  var p2 = params.get('p2');

  if (p1 && p2) {
    sel1.value = p1;
    sel2.value = p2;
  } else {
    sel1.value = 'curry';
    sel2.value = 'chamberlain';
  }

  updateComparison();
}

function updateComparison() {
  var sel1 = document.getElementById('player1-select');
  var sel2 = document.getElementById('player2-select');
  var id1 = sel1 ? sel1.value : '';
  var id2 = sel2 ? sel2.value : '';
  var result = document.getElementById('comparison-result');
  var shareBar = document.getElementById('share-bar');

  if (!id1 || !id2) {
    result.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:60px 0;font-size:13px;letter-spacing:2px;">SELECT TWO PLAYERS TO COMPARE</div>';
    if (shareBar) shareBar.style.display = 'none';
    return;
  }

  var all = getAllPlayers();
  var p1 = null, p2 = null;
  for (var i = 0; i < all.length; i++) {
    if (all[i].id === id1) p1 = all[i];
    if (all[i].id === id2) p2 = all[i];
  }

  if (!p1 || !p2) {
    result.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:60px 0;font-size:13px;letter-spacing:2px;">SELECT TWO PLAYERS TO COMPARE</div>';
    if (shareBar) shareBar.style.display = 'none';
    return;
  }

  if (shareBar) shareBar.style.display = 'flex';

  var statDefs = [
    { label: 'PPG',  key: 'ppg' },
    { label: 'RPG',  key: 'rpg' },
    { label: 'APG',  key: 'apg' },
    { label: 'SPG',  key: 'spg' },
    { label: 'BPG',  key: 'bpg' },
    { label: 'FG%',  key: 'fgPct' },
    { label: '3P%',  key: 'threePct' },
    { label: 'FT%',  key: 'ftPct' }
  ];

  var html = '<div class="compare-players">' +
    '<div class="compare-player-header">' +
      '<div class="compare-player-name">' +
        '<div style="font-size:20px;font-weight:300;letter-spacing:1px;">' + p1.name + '</div>' +
        '<div style="font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-top:4px;">#' + p1.number + ' · ' + p1.position + ' · ' + p1.gamesPlayed + ' GP</div>' +
      '</div>' +
      '<div class="compare-player-name" style="text-align:right;">' +
        '<div style="font-size:20px;font-weight:300;letter-spacing:1px;">' + p2.name + '</div>' +
        '<div style="font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-top:4px;">#' + p2.number + ' · ' + p2.position + ' · ' + p2.gamesPlayed + ' GP</div>' +
      '</div>' +
    '</div>';

  for (var j = 0; j < statDefs.length; j++) {
    var def = statDefs[j];
    var v1 = p1.career[def.key];
    var v2 = p2.career[def.key];
    var n1 = num(v1);
    var n2 = num(v2);
    var max = Math.max(n1, n2);
    var w1 = max > 0 ? (n1 / max) * 100 : 0;
    var w2 = max > 0 ? (n2 / max) * 100 : 0;
    var lead1 = n1 >= n2 ? ' leader' : '';
    var lead2 = n2 >= n1 ? ' leader' : '';
    var fill1 = n1 >= n2 ? 'fill leader' : 'fill trailing';
    var fill2 = n2 >= n1 ? 'fill leader' : 'fill trailing';
    var countAttr1 = v1 !== null && v1 !== undefined ? ' data-count="' + v1 + '"' : '';
    var countAttr2 = v2 !== null && v2 !== undefined ? ' data-count="' + v2 + '"' : '';

    html += '<div class="compare-row">' +
      '<div class="compare-side">' +
        '<span class="compare-value' + lead1 + '"' + countAttr1 + '>' + fmt(v1) + '</span>' +
        '<div class="compare-bar" style="justify-content:flex-end;">' +
          '<div class="' + fill1 + '" style="width:0%;"></div>' +
        '</div>' +
      '</div>' +
      '<div class="compare-label">' + def.label + '</div>' +
      '<div class="compare-side">' +
        '<div class="compare-bar">' +
          '<div class="' + fill2 + '" style="width:0%;"></div>' +
        '</div>' +
        '<span class="compare-value' + lead2 + '"' + countAttr2 + '>' + fmt(v2) + '</span>' +
      '</div>' +
    '</div>';
  }

  html += '</div>';
  result.innerHTML = html;

  // Animate compare bars from 0
  setTimeout(function() {
    var fills = result.querySelectorAll('.fill');
    var barIndex = 0;
    for (var k = 0; k < statDefs.length; k++) {
      var def2 = statDefs[k];
      var vv1 = num(p1.career[def2.key]);
      var vv2 = num(p2.career[def2.key]);
      var maxVal = Math.max(vv1, vv2);
      var ww1 = maxVal > 0 ? (vv1 / maxVal) * 100 : 0;
      var ww2 = maxVal > 0 ? (vv2 / maxVal) * 100 : 0;
      if (fills[barIndex]) fills[barIndex].style.width = ww1.toFixed(1) + '%';
      barIndex++;
      if (fills[barIndex]) fills[barIndex].style.width = ww2.toFixed(1) + '%';
      barIndex++;
    }
  }, 50);

  // Setup counter animations for compare values
  setupCounterObserver();
}

// ─────────────────────────────────────────────
// SHARE COMPARISON
// ─────────────────────────────────────────────

function getCompareUrl() {
  var sel1 = document.getElementById('player1-select');
  var sel2 = document.getElementById('player2-select');
  if (!sel1 || !sel2) return '';
  var base = window.location.origin + window.location.pathname;
  return base + '?p1=' + encodeURIComponent(sel1.value) + '&p2=' + encodeURIComponent(sel2.value);
}

function shareComparison() {
  var url = getCompareUrl();
  if (navigator.share) {
    navigator.share({ title: 'Warriors Player Comparison', url: url });
  } else {
    copyCompareLink();
  }
}

function copyCompareLink() {
  var url = getCompareUrl();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function() {
      showToast('Link copied to clipboard!');
    });
  } else {
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Link copied to clipboard!');
  }
}

function initCompare() {
  populateDropdowns();
}

// ─────────────────────────────────────────────
// Page Router
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initTheme();

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHome();
  if (page === 'roster.html') initRoster();
  if (page === 'legends.html') initLegends();
  if (page === 'compare.html') initCompare();
});
