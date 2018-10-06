var charts = require('chart.js');
var $ = require("jquery");


$(document).ready(function () {
  $('.pilot-sidebar').load('./resources/html/pilot-sidebar.html', function() {
    $('.pilot-expander').click(function () {
      if ($(this).hasClass('btn')) {
        toggleExpander('pilot', this);
      }
    });
  });
  $('.mech-sidebar').load('./resources/html/mech-sidebar.html', function() {
    $('.mech-expander').click(function () {
      if ($(this).hasClass('btn')) {
        toggleExpander('mech', this);
      }
    });
  });
  $('.main').load('./resources/html/mech-sheet.html', function () {
    setCharts()
  });

});

function toggleExpander(expanderType, element) {
  $(element).toggleClass('open btn');
  $($(element).find("." + expanderType + '-sub')).toggle();
  $($(element).find("." + expanderType + '-open-info')).toggle("swing");

  $('.' + expanderType + '-expander').each(function () {
    if (this !== element && $(this).hasClass('open')) {
      $(this).toggleClass('open btn');
      $($(this).find("." + expanderType + '-sub')).toggle();
      $($(this).find("." + expanderType + '-open-info')).toggle("swing");
    }
  });
}

function setCharts() {
  var ctx = document.getElementById("damagechart").getContext('2d');
  var damagechart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["M", 1, 5, 10, 15, 20, 25, 30, "35+"],
      datasets: [{
          label: 'Maximum Damage',
          data: [10, 15, 20, 15, 11, 11, 10, 5, 0, 0],
          backgroundColor: '#F2B13433',
          borderColor: '#F2B134',
          borderWidth: 1
        },
        {
          label: 'Average Damage',
          data: [5, 8.2, 11.3, 10, 7, 2.2, 1.8, 1.1, 0],
          backgroundColor: '#F3573B33',
          borderColor: '#F3573B',
          borderWidth: 3,
          fill: false
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#5F909C'
          },
          gridLines: {
            color: '#0000001A'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#5F909C'
          },
          gridLines: {
            color: '#0000001A'
          }
        }]
      },
      legend: {
        labels: {
          fontColor: '#5F909C'
        }
      }
    }
  });

  var ctx = document.getElementById("rolechart").getContext('2d');
  var rolechart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Melee', 'Ranged', 'Support', 'Control', 'Repair'],
      datasets: [{
        data: [7, 9, 4, 3, 4],
        backgroundColor: '#5F909C33',
        borderColor: '#5F909C',
        borderWidth: 1,
      }],
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          suggestedMax: 10,
          display: false
        },
        pointLabels: {
          fontColor: '#5F909C'
        },
        angleLines: {
          color: '#0000001A'
        },
        gridLines: {
          color: '#0000001A'
        },
      },
      legend: {
        display: false
      }
    }
  });
}