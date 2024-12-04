document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
  
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        const idx = lunr(function () {
          this.field('title');
          this.field('content');
          this.ref('url');
          data.forEach(doc => this.add(doc));
        });
  
        searchInput.addEventListener('input', function () {
          const query = this.value.trim();
          resultsContainer.innerHTML = '';
          if (query) {
            const results = idx.search(query);
            results.forEach(result => {
              const item = data.find(doc => doc.url === result.ref);
              const div = document.createElement('div');
              div.innerHTML = `<a href="${item.url}">${item.title}</a>`;
              resultsContainer.appendChild(div);
            });
          }
        });
      });
  });
  