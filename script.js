// Open modal
document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("addTrackModal").style.display = "flex";
  });
  
  // Close modal
  document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("addTrackModal").style.display = "none";
  });
  
  // Close modal when clicking outside of modal content
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("addTrackModal")) {
      document.getElementById("addTrackModal").style.display = "none";
    }
  });
  
  async function carregarMusicas(){
    const url = 'https://675b512e9ce247eb1936449d.mockapi.io/musicas'
    const resposta = await fetch(url)
    const dadosMusicas = await resposta.json()
    /*console.log(dadosMusicas)*/
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    dadosMusicas.forEach(musica => {
        const estruturaHtmlMusica = `
        <tr>
            <td>${musica.id}</td>
            <td class="faixa">
              <img
                src="${musica.capa}"
                alt=""
              />
              <div>${musica.nome}</div>
            </td>
            <td>${musica.streams}</td>
            <td>${musica.duracao}</td>
            <td><a href="#" class="play-button">▶</a></td>
          </tr>
        `
        tbody.innerHTML += estruturaHtmlMusica
    })
  }
  
carregarMusicas()
  
  