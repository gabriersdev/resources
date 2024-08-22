"use strict";

(() => {
  const resources = {
    'resume': 'https://drive.google.com/file/d/1YxNVMs6_fc5RJZMHcHdJgrN1pxigx9Cu/view/',
    'portfolio': 'https://gabriersdev.github.io/portfolio/',
    'linkedin': 'https://www.linkedin.com/in/gabrielribeirodev/',
    'github-profile': 'https://github.com/gabriersdev/',
    'gist-profile': 'https://gist.github.com/gabriersdev/',
  }

  class Alert{
    #title; 
    #text;
    #btnLabel;
    #btnAction;

    /***
     * @constructs constructor
     * @param {String} title 
     * @param {String} text 
     * @param {String} btnLabel 
     * @param {String} btnAction 
     * @returns {null} Constructor is not return
     */
    constructor(title, text, btnLabel, btnAction) {
      this.#title = title
      this.#text = text
      this.#btnLabel = btnLabel
      this.#btnAction = btnAction
    }

    render() {
      document.body.innerHTML += `
      <div>
        <div class="box-mensagem">
          <div class="texto-pagina-centralizado-alt">
            <h2 class="titulo-texto-pagina-centralizado">${this.#title}</span></h2>
            <br>
            <p class="label-texto-pagina-centralizado">${this.#text}</p>
            <br>
            ${ this.#btnLabel ? '<button data-action-pagina class="btn-principal" id="acao-pagina" name="acao-pagina">${this.#btnLabel}</button>' : '' }
          </div>
        </div>
      </div>`

      if (this.#btnAction && typeof this.#btnAction === 'string') {
        if (this.#btnAction.trim().length > 1 && this.#btnAction.search('http') != -1) {
          document.querySelector('#acao-pagina').addEventListener('click', () => {
            window.location.replace(this.#btnAction)
          })
        }
      } else {
        setTimeout(this.#btnAction, 3000)
      }
    }
  }


  const params = new URL(window.location).searchParams
  if (params.has('resource') && params.get('resource').toLowerCase() in resources) {
    window.location.replace(resources[params.get('resource')])
  } else if (params.has('resource') && !(params.get('resource').toLowerCase() in resources)) {
    new Alert('There is no action for the reported resource!', 'Redirecting to github.io/gabriersdev...', null, () => { window.location.href = 'https://www.github.com/gabriersdev' }).render()
  } else {
    new Alert('Valid parameter not provided!', 'Redirecting to github.io/gabriersdev...', null, () => { window.location.href = 'https://www.github.com/gabriersdev' }).render()
  }
})();
