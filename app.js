const APIKEY = 'XE4xhQrlMTcvFXims9MeGB0zze91kRAC'
let columnCounter = 1;

async function createImg(event) {
  event.preventDefault();
  let baseUrl = 'http://api.giphy.com/v1/gifs/search';

  const response = await axios.get(baseUrl, {
    params: {
      q: $('#search-query').val(),
      api_key: APIKEY,
      limit: 10
    }
  });

  let randomNumber = Math.floor(Math.random() * 10);
  let giphyURL = response.data.data[randomNumber].images.original.url;

  const newImg = $('<img>').attr('src', giphyURL);
  newImg.addClass('rounded-xl mb-2 w-full');

  $(`#giphy-col-${columnCounter}`).append(newImg);

  columnCounter++;
  if (columnCounter > 3) columnCounter = 1;
}

function removeImgs(event) {
  event.preventDefault();
  columnCounter = 1;
  $('img').remove();
}

$('#search-submit').click(createImg);
$('#search-remove').click(removeImgs);