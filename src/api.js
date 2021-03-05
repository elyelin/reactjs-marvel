const marvel = {
  render: () => {
    const urlAPI =
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2d78ed127d08121f443c1a6e0e9171e8&hash=1e54ce2dea65016bdd0b85c8526ca01e";
    //const container = document.querySelector("ListOfPhotoCards");
    //let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
        }
        console.log(json.data.results, "RES.JSON");
      });
  },
};

marvel.render();
