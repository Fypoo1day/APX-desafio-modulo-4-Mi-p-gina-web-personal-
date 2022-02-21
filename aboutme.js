function addDataAboutMe(params) {
  const template = document.querySelector("#aboutMe__template");
  const container = document.querySelector(".aboutMe");

  template.content.querySelector(".aboutMe__img-template").src =
    "http:" + params.imagen;

  template.content.querySelector(".aboutMe__text-title").textContent =
    params.titulo;

  template.content.querySelector(".aboutMe__text-p").textContent =
    params.descripcion;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getAboutMe() {
  return fetch(
    "https://cdn.contentful.com/spaces/frohtlwzwi3p/environments/master/entries?access_token=HNTuCI6ohHDb1RtMiV_dk8F9gCfA0UYHdkWwxURuESQ&content_type=aboutMe"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((i) => {
        const imgId = i.fields.imagen.sys.id;
        const img = getImgS(imgId, data);

        return {
          titulo: i.fields.titulo,
          descripcion: i.fields.descripcion,
          imagen: img.fields.file.url,
        };
      });
      return fieldsCollections;
    });
}

function getImgS(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getAboutMe().then(function (info) {
    for (const s of info) {
      addDataAboutMe(s);
    }
  });
}

main();
