# 4.5 Discussion

The implementation of our proposed solution allowed us to achieve semantic interoperability over the considered data sources, which stood as independent and disconnected data silos before. Our architecture relies entirely on semantic web technologies and tools, starting from the KG generation and ending with a RDF-native Web application that supports the addressed RCC use case.

## 4.5.1 Solution features

Next we outline the main features of our proposed solution:

### 4.5.1.1 Fully declarative KG generation

One key feature of our proposed solution relates to the ERA KG generation process, which is accomplished following a fully declarative approach. In other words, no pre-processing steps nor dedicated software/scripts are required to generate the RDF triples of the ERA KG. The KG generation rules are defined as RML mapping rules, which are executed by an existing and general purpose engine, that follows the given rules to produce the desired RDF triples. This feature has an important value from a data governance perspective, considering that no additional ad hoc software needs to be maintained. The RML mapping rules become the central resource for the ERA KG generation process, which can be adjusted or extended to include additional data sources, with significantly less effort compared to developing and maintaining additional software for every new data source to be included in the ERA KG. Furthermore, the mappings can be reused and adapted by IMs to produce their own internal KGs.

### 4.5.1.2 KG enrichment flexibility

We were also able to explore and alternative solution to integrate additional data originated directly from an IM, to address the missing connectivity issue of the railway infrastructure. This approach demonstrated the flexibility that graph-based data models hold, considering that adding additional data sources requires significantly less effort, than for example, altering a relational data model, potentially introducing breaking changes for the applications that depend on it.

### 4.5.1.3 Cost-efficient KG publishing and querying

Our architecture design was made, with data publishing and querying cost-efficiency as a guiding principle. As described in [section 4.4.2](ch_4.4_solution.md#442-architecture-overview), the ERA KG is published on triple stores with support for SPARQL querying. However the user application that supports the RCC use case does not perform direct SPARQL queries over these triple stores. Instead, it downloads specific parts of the KG via an API, over which it applies its business logic. Such an approach is no different to traditional REST-based application design over relational databases, where applications are given access to data via APIs only, and do not have unbounded querying access to the database(s) [@@Chaudhuri_VLDB_2000, @@Fielding_IT_2002]. In contrast to most API implementations, the APIs implemented in this architecture, follow the hypermedia constraints defined by REST, providing self-describing data responses via hypermedia metadata controls. In other words, the API data responses include additional metadata that describe how it can be used by client applications to retrieve more relevant data for a particular query. Such descriptions enable the creation of smarter and more autonomous client applications, avoiding the need of hard-coding the application according to specific API interfaces.

More importantly the API design in this architecture has been done to maximize the cacheability of API responses. By following a geospatial fragmentation approach, which suits the RCC use case, the API publishes fragments of the ERA KG that can be cached both on client- and server-side. This further reduces the computational cost on the triple stores, which only need to process once the query for a given fragment. A client application that requested a certain data fragment does not need to request it again (client cache) and has full flexibility to perform any type of further processing on the data it contains. When another client application needs access to the same type of data, it can rely on server-side cached API responses which also improve overall application performance.

### 4.5.1.4 Shortest path querying over an RDF KG

The ability to indirectly support calculation of path finding queries, is an important feature of our architectural design. Our approach not only enables solving this particular type of queries, but also opens the door for clients to implement any path finding algorithm and further customize them to better suit their requirements. Such level of specialization of algorithms is not always possible to be defined through general purpose query languages or it could potentially result in highly inefficient queries.

## 4.5.2 Limitations and open challenges

The identified limitations of our approach include:

### 4.5.2.1 Performance of long distance queries

One of the main limitations of our proposed solution is related to the trade-off between server computational cost and query performance, that is introduced when shifting query processing tasks to the client. This is particularly visible when dealing with long distance route calculations, due to the increasing amount of data fragments that needs to be fetched and processed by the client. Different alternatives could be explored to address this limitation:

#### Server-side route planning engine

This is the most common approach followed by route planning solutions. It requires setting a dedicated engine (e.g., [postGIS-based system](https://pgrouting.org/)), which imports the whole topology graph and then is capable of executing a route planning algorithm over it. The drawbacks of this approach include the considerable increase of computational load for the server and less flexibility for client applications to select and tailor the algorithms for their own needs. But more importantly, available solutions do not support RDF data out of the box, which introduces an additional burden for the architecture by having to convert and keep in sync the ERA KG towards the required format of the route planning engine.

#### Non-standard Graph Database

Another alternative is to replace the standard RDF triple store by a graph database that has support for route plan querying (e.g. [Stardog](https://docs.stardog.com/query-stardog/path-queries) or [Neo4J](https://neo4j.com/docs/graph-data-science/current/algorithms/dijkstra-source-target/) both with RDF support). Again the drawbacks of this approach are related to scalability and application flexibility, but they also may lead to vendor-locking issues, since they rely on non-standard solutions.

#### Speed-up Techniques

The application of speed-up techniques for shortest path algorithms, such as Contraction Hierarchies [@@Dibbelt_JEA_2016] or Multilevel Dijkstra [@@Delling_TS_2017], stands as a possible solution. These techniques rely on preprocessing steps that create summarizations of the graph topology, allowing to quickly compute long-distance path queries. They have been applied mostly to road networks graphs, where hierarchies of roads (highway, road, residential street, etc) can be used to create summaries for long distances. In principle they could also be applied to the railway topology graph. The drawbacks of these approaches are related to the introduction of additional complexity for creating the graph summaries that need to be managed and kept in sync with the original KG. However, they could still allow full flexibility for client applications to perform any business logic, since the summaries are only additional data that does not change the original RDF triples of the ERA KG.

### 4.5.2.2 KG based on stale sources

The KG generation process is periodically performed over stale versions of the base registry relational databases. To accurately reflect the real state of the railway network, is necessary to capture in *real-time* the changes introduced into the source databases, and immediately reflect them in the ERA KG. Other use cases such as signalling and interlocking, require precise and accurate data to guarantee safe vehicle operations. Approaches such as [Linked Data Event Streams](https://w3id.org/ldes/specification), remain to be investigated to support this requirements.

### 4.5.2.3 Hardcoded compatibility check rules

The compatibility check rules, were directly implemented into the source code of the RCC client application. This constitutes a limitation, given that it makes more difficult to maintain and evolve the rules. Also, it makes the rules to be indistinguishable from the application, hindering their potential reusability in other use cases. Alternatives to address this issue could explore the use of Notation3 or SHACL rules to declaratively define the RCC rules, which can be then independently managed and published for applications such as the RCC client to consume and evaluate.
