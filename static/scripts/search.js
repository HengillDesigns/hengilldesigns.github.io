// Extract the 'q' parameter from the URL
const params = new URLSearchParams(window.location.search);
const query = params.get('q');

const searchTitle = document.getElementById('search-title');
const resultsDiv = document.getElementById('results');
const resultCountDiv = document.getElementById('result-count'); // New element for result count

fetch('/wiki.txt')
    .then(response => {
        if (!response.ok) throw new Error("Failed to connect");
        return response.text();
    })
    .then(data => {
        const entries = data.trim().split('\n').map(line => {
            const parts = line.split(' ');
            const title = parts.slice(0, -1).join(' ');
            const link = parts[parts.length - 1];
            return { title, link };
        });

        // Update the title
        if (query) {
            searchTitle.textContent = `Search Results for "${query}"`;

            // Display matching results
            const filteredResults = entries.filter(entry =>
                entry.title.toLowerCase().includes(query.toLowerCase())
            );

            // Show result count
            resultCountDiv.textContent = `${filteredResults.length} results`;

            if (filteredResults.length > 0) {
                resultsDiv.innerHTML = filteredResults.map(entry => `
                    <div class="result">
                        <h2><a href="${entry.link}" target="_blank">${entry.title}</a></h2>
                    </div>
                `).join('');
            } else {
                resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
            }
        } else {
            searchTitle.textContent = "Search Results";
            resultsDiv.innerHTML = "<p>Please enter a search query.</p>";
            resultCountDiv.textContent = ""; // Clear result count when no query is provided
        }
    })
    .catch(error => {
        console.error(error);
        resultsDiv.innerHTML = "<p>Failed to load search results.</p>";
    });
