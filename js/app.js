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
// Page Router
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHome();
  if (page === 'roster.html') initRoster();
  if (page === 'legends.html') { if (typeof initLegends === 'function') initLegends(); }
  if (page === 'compare.html') { if (typeof initCompare === 'function') initCompare(); }
});
