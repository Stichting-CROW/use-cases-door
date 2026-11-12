# Materialenpaspoort Asfalt o.b.v. Wegconstructies-OTL en Usecase PZH

## Aanpak in beknopte stappen:
- Ingelezen in laatste versie van de Wegconstructies-OTL
- Selectie uit Materialenpaspoort Excel van benodigde velden (in aparte .csv gezet) gemaakt (MPA & Eigen MPA)
- Bekeken welke klassen en properties uit Wegconstructies-OTL (het best) matchen met die selectie
- Simpele mapping spreadsheet (.csv) gemaakt zodat navolgbaar is welke mapping we precies gebruikt hebben voor deze 31 velden
- Dan dataspecificatie (voorstel) in RDF/SHACL Turtle gemaakt, naar voorbeeld van Dataspecificatie_FamiliebenaderingKunstwerken
- In dataspecificatie middels een RDFS comments aangegeven wat de originele parameter was en ook de 'Toelichting en beperking'.
- Voorbeeld van een materialenpaspoort asfalt in RDF/Turtle gemaakt, naar voorbeeld van IMBOR2025_Exampledata_KunstwerkVasteBrug.ttl

## Resultaat
- (Voorlopige) mapping in CSV, met toelichting: Mapping Materialenpaspoort Wegconstructies-OTL v0.5.csv
- Dataspecificatie in RDF/SHACL Turtle, met toelichting en beperking (in rdfs:comment): Dataspecificatie_MaterialenpaspoortAsfalt_WCO_v0.5.ttl
- Voorbeeld van een materialenpaspoort asfalt in RDF/Turtle (LLM gegenereerd, fictieve gegevens): Exampledata_MaterialenpaspoortAsfalt.ttl

## Beperkingen en status
- Dit betreft een concept-dataspecificatie gebaseerd op Wegconstructies-OTL 0.5.
- Vier van de 31 geselecteerde parameters hebben geen passende OTL-property en zijn daarom alleen als gap gedocumenteerd (geen SHACL-eis):
  - Opdrachtgever (OpdrachtgeverNaam)
  - Laagnummer (Nummer Uitvoeringseenheid)
  - Steenslagklasse (PetrografischeSamenstelling)
  - Herkomst RAP (BouwstofType)
- Gewicht is een afgeleide waarde; zie :InformatieGewichtAfgeleid in de dataspecificatie.
- De scope beperkt zich tot de asfaltverharding in de bovenbouw (geen eigen paspoort voor fundering/onderfundering).