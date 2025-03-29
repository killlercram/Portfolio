// exporting all the image url we have in the assets folder
//This will help us in dynamically importing the urls.
export const getImageUrl = (path) => {
  return new URL (`assets/${path}`, import.meta.url).href;
}