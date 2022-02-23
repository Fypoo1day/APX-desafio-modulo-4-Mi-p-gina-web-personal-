function addDataP(result) {
  const templateEl = document.querySelector("#portfolio");
  const container = document.querySelector(".portfolio__container");

  templateEl.content.querySelector(".portfolio__img").src =
    "http:" + result.imagen;

  //   templateEl.content.querySelector(".portfolio__link").href = result.link;

  templateEl.content.querySelector(".portfolio__card-title").textContent =
    result.titulo;

  templateEl.content.querySelector(".portfolio__card-p").textContent =
    result.texto;

  const clone = document.importNode(templateEl.content, true);
  container.appendChild(clone);
}

function getDataP() {
  return fetch(
    "https://cdn.contentful.com/spaces/frohtlwzwi3p/environments/master/entries?access_token=HNTuCI6ohHDb1RtMiV_dk8F9gCfA0UYHdkWwxURuESQ&content_type=portfolio"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      const items = json.items.map((i) => {
        const imgId = i.fields.imagen.sys.id;
        const img = getImgP(imgId, json);
        return {
          titulo: i.fields.titulo,
          texto: i.fields.texto,
          imagen: img.fields.file.url,
        };
      });
      return items;
    });
}

function getImgP(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getDataP().then(function (works) {
    for (const w of works) {
      addDataP(w);
    }
  });

  headerComponent(document.querySelector(".header__portfolio"));
  footerComponent(document.querySelector(".footer"));
}
main();
