"use strict";
var CITATIONS_INDEX = new Map();

(() => {
    // Re-organize references alphabetically if at the bibliography page
    const bibliography = document.querySelectorAll('.bib_div');

    if (bibliography.length > 0) {
        const parentElement = bibliography.item(0).parentElement;
        // Sort references by title
        const sortedBiblio = Array.from(bibliography).sort((a, b) => {
            return a.getAttribute('data-citation-title').localeCompare(b.getAttribute('data-citation-title'));
        });

        sortedBiblio.forEach((biblio, index) => {
            const br = biblio.nextElementSibling;
            parentElement.appendChild(biblio);
            parentElement.appendChild(br);
            // Adjust original index
            biblio.firstElementChild.innerHTML = `[${index + 1}]`;
        });

    } else {
        // Otherwise load all referecens from refs.bib and adjust citation indexes in the text
        fetch(path_to_root + 'bibliography/refs.bib')
            .then(response => response.text())
            .then(bibtext => {
                // Sort citations by title
                const parsedCitations = BibtexParser.parseToJSON(bibtext).sort((a, b) => a.title.localeCompare(b.title));

                for (let i = 0; i < parsedCitations.length; i++) {
                    const citation = parsedCitations[i];
                    CITATIONS_INDEX.set(citation.id, { index: i + 1, citation });
                }

                // Set global citation indexes
                const loadedCitations = document.querySelectorAll('span[data-citation-key]');
                if (loadedCitations.length > 0) {
                    for (let citation of loadedCitations) {
                        const citationKey = citation.getAttribute('data-citation-key');
                        const citationData = CITATIONS_INDEX.get(citationKey);
                        if (citationData) {
                            citation.innerHTML = `<a href="bibliography.html#${citationKey}">${citationData.index}</a>`;
                        }
                    }
                }
            });
    }
})();