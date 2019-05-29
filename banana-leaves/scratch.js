// cDM finds map div ele relative to html/css positioning
// in browser and sets to variable that adjusts styling
// if css is adjusted, querySelector path must also be adjusted
componentDidMount(){
  getMapDiv();
  getDiv();
}

getMapDiv(){
  let mapDiv = document.querySelector("#root > div > div.AppContainer > div > div.contact-info > div.map > div")
  mapDiv.style = "align-self: center; position: fixed; z-index: -1;"
  mapDiv.id = 'mapDiv'
  // console.log(mapDiv)
}

getDiv(){
  let appDiv = document.querySelector("#root > div > div.AppContainer > div")
  appDiv.class = "app-div"
  console.log(appDiv)
}
