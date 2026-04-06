// gsw-stats/js/app.js

var currentPlayerList = [];

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
    { label: 'PPG', value: player.career.ppg.toFixed(1) },
    { label: 'RPG', value: player.career.rpg.toFixed(1) },
    { label: 'APG', value: player.career.apg.toFixed(1) },
    { label: 'FG%', value: player.career.fgPct.toFixed(1) }
  ];

  var html = '';
  for (var i = 0; i < stats.length; i++) {
    html += '<div class="stat-card">' +
      '<div class="stat-value">' + stats[i].value + '</div>' +
      '<div class="stat-label">' + stats[i].label + '</div>' +
      '</div>';
  }
  grid.innerHTML = html;
}

// ─────────────────────────────────────────────
// TASK 4: Roster Page
// ─────────────────────────────────────────────

function renderSidebar(playerList, containerId) {
  var container = document.getElementById(containerId);
  var html = '';
  for (var i = 0; i < playerList.length; i++) {
    var p = playerList[i];
    var activeClass = i === 0 ? ' active' : '';
    html += '<div class="sidebar-item' + activeClass + '" data-id="' + p.id + '" onclick="selectPlayer(\'' + p.id + '\')">' +
      '<div class="player-name">' + p.name + '</div>' +
      '<div class="player-number">#' + p.number + ' · ' + p.position + '</div>' +
      '</div>';
  }
  container.innerHTML = html;
}

function renderPlayerDetail(player) {
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
    { label: 'PPG',  value: player.career.ppg.toFixed(1) },
    { label: 'RPG',  value: player.career.rpg.toFixed(1) },
    { label: 'APG',  value: player.career.apg.toFixed(1) },
    { label: 'SPG',  value: player.career.spg.toFixed(1) },
    { label: 'BPG',  value: player.career.bpg.toFixed(1) },
    { label: 'FG%',  value: player.career.fgPct.toFixed(1) },
    { label: '3P%',  value: player.career.threePct.toFixed(1) },
    { label: 'FT%',  value: player.career.ftPct.toFixed(1) }
  ];

  var statGridHtml = '';
  for (var j = 0; j < careerStats.length; j++) {
    statGridHtml += '<div class="stat-card">' +
      '<div class="stat-value">' + careerStats[j].value + '</div>' +
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
        '<td>' + s.ppg.toFixed(1) + '</td>' +
        '<td>' + s.rpg.toFixed(1) + '</td>' +
        '<td>' + s.apg.toFixed(1) + '</td>' +
        '<td>' + s.fgPct.toFixed(1) + '</td>' +
        '<td>' + s.threePct.toFixed(1) + '</td>' +
        '</tr>';
    }
  }

  var html = '<div class="player-detail fade-in">' +
    '<div class="player-header">' +
      '<div class="player-photo">' +
        '<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>' +
      '</div>' +
      '<div class="player-info">' +
        '<h2>' + player.name + '</h2>' +
        '<p class="player-meta">#' + player.number + ' · ' + player.position + ' · ' + player.height + ' · ' + player.weight + '</p>' +
        '<p class="player-meta">' + player.from + ' · Drafted ' + player.drafted + '</p>' +
        '<p class="player-meta">' + gamesSeasons + '</p>' +
        accoladesHtml +
      '</div>' +
    '</div>' +
    '<h3 style="font-size:11px;letter-spacing:4px;color:var(--text-muted);text-transform:uppercase;margin:0 0 16px;">Career Averages</h3>' +
    '<div class="stat-grid" style="grid-template-columns:repeat(4,1fr);">' + statGridHtml + '</div>' +
    '<h3 style="font-size:11px;letter-spacing:4px;color:var(--text-muted);text-transform:uppercase;margin:40px 0 0;">Season by Season</h3>' +
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
  sel1.value = 'curry';
  sel2.value = 'chamberlain';
  updateComparison();
}

function updateComparison() {
  var sel1 = document.getElementById('player1-select');
  var sel2 = document.getElementById('player2-select');
  var id1 = sel1 ? sel1.value : '';
  var id2 = sel2 ? sel2.value : '';
  var result = document.getElementById('comparison-result');

  if (!id1 || !id2) {
    result.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:60px 0;font-size:13px;letter-spacing:2px;">SELECT TWO PLAYERS TO COMPARE</div>';
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
    return;
  }

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
    var max = Math.max(v1, v2);
    var w1 = max > 0 ? (v1 / max) * 100 : 0;
    var w2 = max > 0 ? (v2 / max) * 100 : 0;
    var lead1 = v1 >= v2 ? ' leader' : '';
    var lead2 = v2 >= v1 ? ' leader' : '';
    var fill1 = v1 >= v2 ? 'fill leader' : 'fill trailing';
    var fill2 = v2 >= v1 ? 'fill leader' : 'fill trailing';

    html += '<div class="compare-row">' +
      '<div class="compare-side">' +
        '<span class="compare-value' + lead1 + '">' + v1.toFixed(1) + '</span>' +
        '<div class="compare-bar" style="justify-content:flex-end;">' +
          '<div class="' + fill1 + '" style="width:' + w1.toFixed(1) + '%;"></div>' +
        '</div>' +
      '</div>' +
      '<div class="compare-label">' + def.label + '</div>' +
      '<div class="compare-side">' +
        '<div class="compare-bar">' +
          '<div class="' + fill2 + '" style="width:' + w2.toFixed(1) + '%;"></div>' +
        '</div>' +
        '<span class="compare-value' + lead2 + '">' + v2.toFixed(1) + '</span>' +
      '</div>' +
    '</div>';
  }

  html += '</div>';
  result.innerHTML = html;
}

function initCompare() {
  populateDropdowns();
}

// ─────────────────────────────────────────────
// Page Router
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHome();
  if (page === 'roster.html') initRoster();
  if (page === 'legends.html') initLegends();
  if (page === 'compare.html') initCompare();
});
