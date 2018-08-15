// api
// api calls

//. move this elsewhere


import places from 'data/places';
import params from 'data/params.hjson';
import { getStorageUrl } from 'lib/firebase/storage';


// fetch place details
// right now we just get this from places.hjson which is included in the bundle,
// but eventually might need to make it asynchronous.
function fetchPlace(placeId) {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    const place = places.getPlace(placeId);
    resolve(place);
  });
}

// fetch picture urls
// each place can have pictures associated with it, with relative filepaths.
// the filepaths are resolved to either localhost urls or Firebase Storage urls.
//. just does the first image for now - eventually might want a dynamic carousel of images.
//. will eventually precache the firebase storage urls, so could include in bundle -
//  then wouldn't need async here.
function fetchPictures(place) {
  return new Promise((resolve, reject) => {
    const pics = place && place.pics;
    if (pics && pics.length > 0) {
      const pic = pics[0];
      if (pic.filepath) {
        // pic.filepath is eg "TX/austin/cities/Austin-Austin_Evening-320px.jpg"
        const path = params.folderPlacePics + '/' + pic.filepath;
        // in development mode this will fetch from localhost:8000.
        // in production mode will fetch from firebase storage,
        // which translates a path into an obfuscated url.
        getStorageUrl(path).then(url => {
          place.pics[0].url = url;
          resolve(place);
        }).catch(error => {
          reject(error);
        });
      }
    } else {
      resolve(place);
    }
  });
}


export default { fetchPlace, fetchPictures };
