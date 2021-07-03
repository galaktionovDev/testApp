function getPhotoByTag(tagName) {
  return DATA_INSTA
    .filter(function(data) {
      return data.tags.some(function(tag) {
        return tag === tagName;
      });
    })
    .map(function(data) {
      return data.images.low_resolution.url;
    });
}

function renderPhoto(element, photos) {
  $(element).empty()
  photos.forEach(function(photo) {
    $(element).append('<li><img src="' + photo + '"></li>');
  });
}

function addPhotoToThirdColumn(photos1, photos2) {
  var array3 = photos1.filter(function(obj){
    return photos2.indexOf(obj) >= 0;
  });
  array3.forEach(function(photo) {
    $('ul.ul-3').append('<li><img src="' + photo + '"></li>');
  });
}

var photosInFirstColumn = getPhotoByTag(document.getElementById('Tag-1').value);
var photosInSecondColumn = getPhotoByTag(document.getElementById('Tag-2').value);

renderPhoto($('ul.ul-1'), photosInFirstColumn);
renderPhoto($('ul.ul-2'), photosInSecondColumn);
addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn);

document.getElementById('btn-1').addEventListener("click", function () {
  photosInFirstColumn = getPhotoByTag(document.getElementById('Tag-1').value);
  renderPhoto($('ul.ul-1'), photosInFirstColumn);
  addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn);
});

document.getElementById('btn-2').addEventListener("click", function () {
  photosInSecondColumn = getPhotoByTag(document.getElementById('Tag-2').value);
  renderPhoto($('ul.ul-2'), photosInSecondColumn);
  addPhotoToThirdColumn(photosInFirstColumn,photosInSecondColumn);
});