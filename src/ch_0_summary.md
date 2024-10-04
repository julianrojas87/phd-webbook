# Summary

Data interoperability has been and continues to be an important open challenge both
in the public and private sector. The state of the art on interoperability, suggests
that a multidisciplinary approach, involving both technical and human coordination,
is needed in order to truly achieve interoperability within and across organisational
boundaries. In this direction, the Semantic Web vision was proposed more than two
decades ago. Thanks to well placed and previously agreed upon semantic data models,
the existence of intelligent agents that can reason across a Web of data would be made
possible, and thus automatically solve the interoperability challenge. Unfortunately,
this vision continues to be a dream to this day. However decentralised Linked Data
technologies, which are sourced from the efforts of the original Semantic Web vision,
are gaining traction despite their negative reputation and an increasing adoption can
be observed both in the public and private sector.

In the last decade, the European Union has been continuously advocating for
more interoperable systems and data, and has laid multiple legal frameworks (e.g., the
European Interoperability Framework, the Open Data Directive, the Interoperability
Act, among others) to promote and support the transformation of (public) organisations
and development of new digital services that are interoperable by design and
by default. In this landscape, the Transport domain is regarded as one of the key
sectors and high-value data sources by the EU where the efforts for interoperability
should be prioritised, given its direct impact on citizen life and on the fight against
global issues such as climate change.

The most recent technological trends, also sourced from EU initiatives such as
Data Spaces, go towards decentralised system infrastructures. Data Spaces recognise
the practical impossibility of centralising all the knowledge in one single place, and
aim to allow for sovereign, trustful and legally compliant governance of data assets
within and across organisations. This raises the need for interoperability solutions that
allow organisations to migrate legacy technology stacks and maintain data life cycles
(creation, publication and consumption) at low operational costs. Here, Linked Data
technologies are suited to provide a technical framework for reaching interoperability,
given their native decentralised nature sourced from the Web itself.

This PhD work studies the use of decentralised architectures based on Linked
Data technologies over 3 real-world use case scenarios coming from the transport sector,
namely (i) publishing bicycle infrastructure information for public use; (ii) public
transport route planning over the Web and; (iii) railways infrastructure data integration
for supporting route compatibility checks. Concretely I study the suitability of
Linked Data technologies to support practical solutions for use cases within these scenarios
and whether Linked Data technologies can be adopted for production-ready systems.
The challenges studied in this work include, the feasibility of creating
decentralised Web applications using modern and developer friendly frameworks over
semantically described Linked Data, and analysing the scalability and limitations of
Linked Data based solutions and their capabilities to achieve automated data integration
that facilitates interoperability.

The main contributions of this dissertation include the provision of evidence on
the use and adoption of Linked Data technologies as an interoperable solution for
real and important use cases in the transport domain. For instance, to this date
municipalities and 11 private organisations continue to use the Velopark solution that
supports the decentralised publishing and maintenance of semantically annotated
bicycle parking data in Belgium. Also the system architecture created for ERA to integrate
and publish a knowledge graph containing information about the European railway
infrastructure and authorised railway vehicles, motivated the agency to make Linked
Data technologies the default setting for new data endeavours. More importantly,
the ERA Vocabulary has been adopted as an official building block for the Common
European Mobility Data Space and as a reference data model in the EU legislation.

The main conclusion drawn from this PhD work is that Linked Data technologies
are ready for the real world. Practical (user-oriented) Web applications can be
created and supported over decentralised and cost-efficient architectures based on
Linked Data technologies. Examples of this can be seen in the case of the Velopark
user application for visualising and looking for bicycle parkings of specific characteristics,
and in the case of the route compatibility check application that allows to calculate
custom routes over the European railway network and assess its physical
and technical compatibility with given vehicle types, which is maintained by the EU Agency for
Railways. Both applications remain operational to this day. In this PhD work, we also
see that alternative design of data interfaces that aim for a more balanced
(computational) cost distribution among data publishers and consumers, are able to provide
scalable and cost-efficient technical solutions for interoperable data exchange. This is
evidenced in the study made in this work of Linked Data-based APIs for the case of
public transport route planning, whose foundational principles and results can also be
applied to other use cases, even outside the transport domain. However, additional
research is needed to overcome the observed limitations in terms of performance
when handling large volumes of data. For example, with more complex API designs
that allow for more granular access to particular and relevant, yet still cost-efficiently
published, data subsets for given queries. Lastly, it is important to note
that a common denominator observed throughout the different scenarios explored during this
PhD work, is the fact that the main obstacles for interoperability using Linked Data
technologies were not of technical nature but of human nature. Changing mindsets
of people in charge could prove to be more challenging than building the technical
solutions that provide interoperability across systems, although as this work shows, is
not impossible. The quick development of demonstrators that highlighted
the benefits of Linked Data technologies and at the same time showed that solutions could
be built in relatively short time spans and at low costs, proved to be the key asset to
overcome this type of human-made obstacles.

Future work should focus on the development of technical specifications
that allow for low-cost and flexible data exchange architectures
that overcome the limitations of the data dump vs query API dichotomy.
This should be complemented by ways to describe data sources, not only at a metadata level,
but also at a granular content level in a way that enables applications
to autonomously discover and efficiently select sources relevant for their queries,
thus moving us a step closer to the original Semantic Web dream.
Also, multiple challenges will arise when trying to provide functional
solutions for all the required dimensions, necessary to accomplish the vision of Data
Spaces based on Linked Data technologies.