class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
  static sanitize (string){
    return string.replace(/[^A-Za-z0-9-']+/g, "");

  }
  static titleize(){

  }
}
let formatter = new Formatter("crocodile");
formatter.capitalize;
let formatter1 = new Formatter ("ca$@#tching cold");
