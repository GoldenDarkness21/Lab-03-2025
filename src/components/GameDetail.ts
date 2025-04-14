import { fetchGameById } from '../api/fetchGames';

class GameDetail extends HTMLElement {
  async setGame(id: string) {
    const data = await fetchGameById(id);

    const requirements = data.minimum_system_requirements;
    const screenshots = data.screenshots;

    this.innerHTML = `
      <div class="detail-card">
        <h2>${data.title}</h2>
        <img src="${data.thumbnail}" alt="${data.title}">
        <p><strong>Status:</strong> ${data.status}</p>
        <p><strong>Genre:</strong> ${data.genre}</p>
        <p><strong>Platform:</strong> ${data.platform}</p>
        <p><strong>Publisher:</strong> ${data.publisher}</p>
        <p><strong>Developer:</strong> ${data.developer}</p>
        <p><strong>Release Date:</strong> ${data.release_date}</p>
        <p><strong>Short Description:</strong> ${data.short_description}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        
        ${
          requirements
            ? `
          <h3>Minimum System Requirements:</h3>
          <ul>
            <li><strong>OS:</strong> ${requirements.os}</li>
            <li><strong>Processor:</strong> ${requirements.processor}</li>
            <li><strong>Memory:</strong> ${requirements.memory}</li>
            <li><strong>Graphics:</strong> ${requirements.graphics}</li>
            <li><strong>Storage:</strong> ${requirements.storage}</li>
          </ul>`
            : ''
        }

        ${
          screenshots?.length
            ? `
          <h3>Screenshots:</h3>
          <div class="screenshots">
            ${screenshots.map((s: any) => `<img src="${s.image}" alt="screenshot">`).join('')}
          </div>
        `
            : ''
        }

        <button id="back">Back</button>
      </div>
    `;

    this.querySelector('#back')?.addEventListener('click', () => {
      window.dispatchEvent(new Event('back-to-list'));
    });
  }
}

customElements.define('game-detail', GameDetail);


