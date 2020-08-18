import Preload from "preload-it";
import { RESOURCE_TO_PRELOAD } from "./constants";
const preloader = Preload();

function preloadFunc() {
  this.fetch(RESOURCE_TO_PRELOAD);

  this.oncomplete = (items) => {
    console.log(items);
  };

  this.onprogress = (event) => {
    console.log(event.progress + "%");
  };

  this.onfetched = (item) => {
    console.log(item);
  };

  this.onerror = (item) => {
    console.log(item);
  };
}

export const preloadHandler = preloadFunc.bind(preloader);
