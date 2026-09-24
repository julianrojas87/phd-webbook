# 3.2 Efficient Live Public Transport Data Sharing for Route Planning on the Web

<div style="text-align: center">★★★</div>

**J.A. Rojas, D. Van Assche, H. Delva, P. Colpaert and R. Verborgh**

Published in the proceedings of the International Web Engineering Conference (ICWE), 2020.

**Abstract**

Web-based information services transformed how we interact with public transport. Discovering alternatives to reach destinations and obtaining live updates about them is necessary to optimise journeys and improve the quality of travellers' experience. However, keeping travellers updated with opportune information is demanding. Traditional Web APIs for live public transport data follow a polling approach and allocate all data processing on either data providers, lowering data accessibility, or data consumers, increasing the costs of innovative solutions. Moreover, data processing load increases further because previously obtained route plans are fully recalculated when live updates occur. In between solutions sharing processing load between clients and servers, and alternative Web API architectures were not thoroughly investigated yet. We study performance trade-offs of polling and push-based Web architectures to efficiently publish and consume live public transport data. We implement (i) alternative architectures that allow sharing data processing load between clients and servers, and evaluate their performance following polling- and push-based approaches; (ii) a rollback mechanism that extends the Connection Scan Algorithm to avoid unnecessary full route plan recalculations upon live updates. Evaluations show polling as a more efficient alternative on CPU and RAM but hint towards push-based alternatives when bandwidth is a concern. Clients update route plan results 8–10 times faster with our rollback approach. Smarter API design combining polling and push-based Web interfaces for live public transport data reduces the intrinsic costs of data sharing by equitably distributing the processing load between clients and servers. Future work can investigate more complex multimodal transport scenarios.
