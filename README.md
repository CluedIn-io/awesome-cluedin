# Awesome CluedIn
A collection of awesome things regarding the CluedIn ecosystem.

## SDK

- [CluedIn Postman Collection](https://github.com/romaklimenko/cluedin/tree/main/postman) - CluedIn Postman collection
- [cluedin](https://pypi.org/project/cluedin/) – a Python client for CluedIn API

## Continuous Deployment

- [CluedIn.Product.Toolkit](https://github.com/CluedIn-io/CluedIn.Product.Toolkit) - Sync configuration between environments


## Enrichers

All open-source enricher built for CluedIn

| Enricher | Description | Package name | Source Code Link |
|--|--|--|--|
| [Brreg](/preparation/enricher/brreg) | Finds information about Norwegian companies. | CluedIn.Provider.ExternalSearch.Bregg | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.Brreg) |
| [Clearbit](/preparation/enricher/clearbit) | Finds company logo and domain information. | CluedIn.Provider.ExternalSearch.ClearBit | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.ClearBit) |
| [Companies House](/preparation/enricher/companies-house) | Finds information about UK companies. Uses the company name to return public information including registered office address, filing history, and so on. | CluedIn.Provider.ExternalSearch.CompanyHouse | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.CompanyHouse) |
| [CVR](/preparation/enricher/cvr) | Retrieves information from the Danish state's register of information about businesses. | CluedIn.Provider.ExternalSearch.CVR | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.CVR) |
| [Duck Duck Go](/preparation/enricher/duckduckgo) | Retrieves information from the DuckDuckGo search engine. Returns website and general information about the organization. | CluedIn.ExternalSearch.Providers.DuckDuckGo.Provider | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.DuckDuckGo) |
| [Gleif](/preparation/enricher/gleif) | Finds information using the Legal Entity Identifier (LEI) of an organization. | CluedIn.Provider.ExternalSearch.Gleif | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.Gleif) |
| [Google Maps](/preparation/enricher/google-maps) | Cleans, standardizes, and enriches international postal addresses with geocoding information. Returns correct information about company address. | CluedIn.Provider.ExternalSearch.GoogleMaps | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.GoogleMaps) |
| [Knowledge Graph](/preparation/enricher/knowledge-graph) | Finds entities using the Google Knowledge Graph API. | CluedIn.Provider.ExternalSearch.KnowledgeGraph | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.KnowledgeGraph) |
| [Libpostal](/preparation/enricher/libpostal) | Parses and normalizes street addresses using statistical NLP and open data. Returns international street address. | CluedIn.Provider.ExternalSearch.Libpostal | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.libpostal) |
| [Open Corporates](/preparation/enricher/open-corporates) | Finds information on all companies worldwide. Returns VAT/TAX number. | CluedIn.Provider.ExternalSearch.OpenCorporates | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.OpenCorporates) |
| [PermID](/preparation/enricher/perm-id) | Retrieves information about organizations from the PermID database. | CluedIn.ExternalSearch.Providers.PermId.Provider | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.Permid) |
| [Vatlayer](/preparation/enricher/vatlayer) | Validates and cleans EU VAT numbers. | CluedIn.Provider.ExternalSearch.Providers.VatLayer | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.VatLayer) |
| [Web](/preparation/enricher/web) | Retrieves information about organizations through their websites. | CluedIn.ExternalSearch.Providers.Web | [Source Code](https://github.com/CluedIn-io/CluedIn.Enricher.Web) |
