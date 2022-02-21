function addServiceCard(params) {
  const template = document.querySelector("#services__card-template");
  const container = document.querySelector(".services__content");

  template.content.querySelector(".services__card-title").textContent =
    params.title;

  template.content.querySelector(".services__card-text").textContent =
    params.description;

  template.content.querySelector(".services__card-img").src =
    "http:" + params.image;

  template.content.querySelector(".services__card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/frohtlwzwi3p/environments/master/entries?access_token=HNTuCI6ohHDb1RtMiV_dk8F9gCfA0UYHdkWwxURuESQ&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((i) => {
        const imgId = i.fields.image.sys.id;
        const img = getImgS(imgId, data);
        return {
          title: i.fields.title,
          description: i.fields.description,
          image: img.fields.file.url,
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
  getServices().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
}

main();
