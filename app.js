
const APIKEY = 'XE4xhQrlMTcvFXims9MeGB0zze91kRAC'
let columnCounter = 1;

async function searchGiphy(query = 'minions') {
  let temp_url = 'http://api.giphy.com/v1/gifs/search';

  const response = await axios.get(temp_url, {
    params: {
      q: query,
      api_key: APIKEY,
      limit: 10
    }
  });

  let randomNumber = Math.floor(Math.random() * 10);
  return String(response.data.data[randomNumber].url);
}

function randomTestImg() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) return "https://media.giphy.com/media/VRhsYYBw8AE36/giphy.gif";
  if (randomNumber == 2) return "https://media.giphy.com/media/xCim8rRaZfHuU/giphy.gif";
  if (randomNumber == 3) return 'https://media.giphy.com/media/l3HBbltOYjoNq/giphy.gif';
}

function createImg(event) {
  event.preventDefault();

  // testURL = searchGiphy($('#search-query').value);
  let testURL = randomTestImg();
  const newImg = $('<img>').attr('src', testURL);
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