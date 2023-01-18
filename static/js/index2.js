const EXAMPLES = {
  'co3d': [
    'apple',
    'book',
    'cup',
    'kidsbackpack',
    'suitcase',
    'toyplane1',
    'toyplane2',
    'volleyball',
  ],
  'iphone': [
    'boot',
    'bottle',
    'chair',
    'dyson',
    'pikachu',
    'plant',
    'pushcar',
    'quest2',
    'questpro',
    'rubiks',
    'spyro',
    'towers',
  ],
};


function main() {
  setupTabs();
  setupModals();
}


function openModal(elem) {
  $(elem).addClass('is-active');
  $('#plot-loading-div').show();
  $('#plot-div').hide();
}


function closeModal(elem) {
  $(elem).removeClass('is-active');
  $('#plot-div').empty();
}


function setupModals() {
  // Add click events on buttons to open the modal
  $('.js-modal-trigger').click(function() {
    const modal_id = $(this).data('target');
    const modal = document.getElementById(modal_id);
    const scene_dir = 'static/resources/' + $(this).data('path');
    const pc_path = scene_dir + '/pointcloud.json';
    const fmt_path = scene_dir + '/fmt.json';
    openModal(modal);
    $.getJSON(pc_path, function(data) {
      console.log(data);
      const plot_data = [
        {
          type: "scatter3d",
          mode: "markers",
          x: data.x,
          y: data.y,
          z: data.z,
          marker: {
            size: 3,
            color: data.color,
          }
        }
      ];
      const layout = {
        height: 800,
        width: 800,
        margin: {
          l: 0,
          r: 0,
        },
        scene: {
          aspectmode: 'cube',
          xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false,
            showaxeslabels: false,
          },
          yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false,
            showaxeslabels: false,
          },
          zaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false,
            showaxeslabels: false,
          },
          camera: {
            up: {
              x: 0.0,
              y: 1.0,
              z: 0.0,
            }
          }
        }
      }
      $('#plot-loading-div').hide();
      $('#plot-div').show();
      Plotly.newPlot('plot-div', plot_data, layout);
    });
  });

  $('.modal-background,.modal-close,.modal-card-head,.delete,.modal-card-front').click(function() {
    const modal = this.closest('.modal');
    closeModal(modal);
  });
}


function setupTabs() {
  // Set up click handlers for the tabs
  $('#tabs li').on('click', function() {
    let tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tabs-content div').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
  });
}

$(document).ready(main);
