// storage
// firebase storage library

import app from './index';
import 'firebase/storage';

const storage = app.storage();

// get storage url for given file - returns a promise
//. memoize this fn - simplest way of caching the info
//. actually can retrieve the urls with python and store in a json file, and include in bundle.js,
// so won't need this - can use the urls directly - for apngs and jpgs.
export function getStorageUrl(filepath) {
  const fileUrl = process.env.REACT_APP_FILE_URL; // http://localhost:8000/ or gs://moveto-io.appspot.com/
  // get url from firebase storage
  if (fileUrl.startsWith('gs:')) {
    const ref = storage.ref(filepath);
    const promise = ref.getDownloadURL();
    return promise;
  }
  // otherwise just use localhost for url
  const promise = new Promise((resolve) => {
    const url = fileUrl + filepath;
    resolve(url);
  });
  return promise;
}
