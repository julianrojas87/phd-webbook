# phd-webbook

Web version of my PhD dissertation, **Decentralised Linked Data architectures for the transport domain**, by Julián Andrés Rojas Meléndez — Ghent University, October 2024.

📖 Read it online: <https://julianrojas87.github.io/phd-webbook/>

## Summary

This dissertation studies whether Linked Data technologies are suited to provide decentralised, interoperable and cost-efficient solutions for transport-domain use cases in real, production environments. It is organised around three research questions: whether these technologies can support production-ready systems across the full data lifecycle (RQ1); whether they enable APIs that are more scalable and cost-efficient than traditional fully server-side designs (RQ2); and whether they support decentralised Web applications that are usable in practice (RQ3).

The questions are examined through three real-world cases:

- **Velopark** — an open platform and OWL vocabulary for bicycle parking data in Belgium, built with public authorities and parking operators, supporting both centralised and decentralised publishing.
- **Linked Connections** — a Linked Data Fragments-based API for public transport timetables, including live updates and historical data, evaluated over 22 transport networks worldwide and against OpenTripPlanner.
- **ERA Knowledge Graph** — a semantic interoperability layer over the base registries of the European Union Agency for Railways, supporting route compatibility checks across the European railway infrastructure.

The work concludes that Linked Data technologies are mature enough for production-ready, semantically interoperable systems (RQ1) and for modern decentralised Web applications (RQ3). For RQ2 the result is more nuanced: the proposed API designs are consistently cheaper and more scalable on the server side, but client-side query performance degrades on large datasets — although for smaller ones they match or outperform traditional APIs.

## Original publication

The official version of this dissertation is published by Ghent University Library:
<https://biblio.ugent.be/publication/01JAF9EW9J8SAP3EJQ0WG3F92T>

## Building

The book is built with [mdBook](https://rust-lang.github.io/mdBook/) and the
[mdbook-bib](https://github.com/francisco-perez-sorrosal/mdbook-bib) preprocessor:

```sh
cargo install mdbook mdbook-bib
mdbook build
```

Sources live in `src/`; the rendered site is written to `docs/`.
