function gen(pageNum) {
  const page = db[pageNum];
  const title = document.getElementById("page-title");
  const text = document.getElementById("page-txt");
  const options = document.getElementById("page-options");

  console.log(page);

  title.innerHTML = page.title;

  text.innerHTML = "";
  page.txt.forEach(p => {
    text.innerHTML += `<p>${p}</p>`;
  });

  options.innerHTML = "";
  page.options.forEach((o, i) => {
    options.innerHTML += `<div onClick="gen(${o.to})">${i + 1}. ${o.txt}</div>`;
  });
}
