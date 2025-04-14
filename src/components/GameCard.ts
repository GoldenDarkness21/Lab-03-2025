class GameCard extends HTMLElement {
    connectedCallback() {
      const id = this.getAttribute('id');
      const title = this.getAttribute('title');
      const thumbnail = this.getAttribute('thumbnail');
      const genre = this.getAttribute('genre');
  
      this.innerHTML = `
        <div class="card" style="cursor:pointer;">
          <img src="${thumbnail}" alt="${title}">
          <h3>${title}</h3>
          <p>${genre}</p>
        </div>
      `;
  
      this.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('view-game-detail', { detail: { id } }));
      });
    }
  }
  
  customElements.define('game-card', GameCard);
  