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
  console.log('called main');

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
