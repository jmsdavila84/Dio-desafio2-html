function mostrarSecao(id) {
  const artigos = document.querySelectorAll(".main article");
  artigos.forEach(artigo => (artigo.style.display = "none"));

  const ativo = document.getElementById(id);
  if (ativo) {
    ativo.style.display = "block";
    gerarAnchors(ativo);
  }
}

function gerarAnchors(artigo) {
  const anchorsAside = document.querySelector(".anchors");
  anchorsAside.innerHTML = "<h2>Neste Artigo</h2><ul></ul>";

  const lista = anchorsAside.querySelector("ul");
  const titulos = artigo.querySelectorAll("h1, h2, h3");

  titulos.forEach(titulo => {
    if (titulo.id) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${titulo.id}`;
      link.textContent = titulo.textContent;
      li.appendChild(link);
      lista.appendChild(li);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSecao("react"); // Exibe React por padrão
});
