let page = 1;
let size = 12;
let apiHeaders = new Headers();
apiHeaders.append("Authorization", "");

function getData() {
  fetch(`https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`, {
    method: "GET",
    headers: apiHeaders,
  })
    .then((req) => req.json())
    .then((res) => {
      res.photos.map((item) => {
        let container = document.getElementById("contailer");
        let itemdata = `<div>
            <img src=${item.src.tiny}/>
        </div>`;
        container.insertAdjacentHTML("beforeend", itemdata);
      });
    })
    .catch((err) => {
      let container = document.getElementById("contailer");
      let itemdata = `<div>
            Error 404
        </div>`;
      container.insertAdjacentHTML("beforeend", itemdata);
    });
}
getData();

function showData() {
  setTimeout(() => {
    page++;
    console.log(page);
    getData();
  }, 300);
}

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
});
