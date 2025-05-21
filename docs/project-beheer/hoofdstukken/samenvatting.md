**Verkenning NLCS - IMBOR**
Dit document beschrijft de verkenning van oplossingsrichtingen voor het uitwisselen van informatie tussen een beheerder die werkt met informatiemodellen als IMBOR en GWSW in een areaalbeheerpakket en een projectteam (ingenieursbureau, aannemer), dat werkt met ontwerp- en revisietekeningen conform NLCS. De vraag daarbij is, hoe het beste een verbinding tussen de NLCS standaard enerzijds, en de informatiemodellen anderzijds gemaakt kan worden. Het verzoek om deze verkenning op te stellen komt voort uit het [=DOOR=]-programma. 

**Use cases**<br>
De in de verkenning onderzochte use cases zijn:
* Use case ontwerpen en bouwen met NLCS
* Use case Nijmegen
* Pilot Dordrecht
* Use case netbeheerders
* Use case Amsterdam
* Use case [=BIM Basis Infra=]
Uit de use cases blijkt een algemene behoefte aan het op orde krijgen van informatie en informatiemanagement. Daarbij heeft elke partij eigen scripts en dataflows om aan te sluiten op de eigen datasilo's in applicaties. Een korte termijn matchings-oplossing ligt daarom niet voor de hand. 

**Informatieproces beheer - project**<br>
Het doel van de aansluiting tussen NLCS en andere informatiemodellen is het uitwisselen van informatie tijdens een project, in dit document zijn de processtappen op hoofdlijnen beschreven en is per stap onderzocht wat daar nu de meest voorkomende oplossingen zijn die gebruikt worden in de use cases. Een matching tussen NLCS en IMBOR kan op twee momenten relevant zijn:
1. Als de beheerder de startsituatie voor het project levert: geometrie en objectpaspoorten 
2. Als het project na uitvoering revisiegegevens oplevert aan de beheerder.


**Bestaande relaties tussen standaarden**<br>
Bij de NLCS standaard zijn de afgelopen jaren relaties gelegd naar andere standaarden, met als doel informatie op basis van die standaard te kunnen transformeren naar een NLCS tekening, of informatie uit de NLCS tekening te transformeren naar data volgens die standaard. Deze relaties zijn meestal niet-semantisch opgesteld in de vorm van mappingstabellen tussen attributen in de dataset en de laagnaam en het symbool op de NLCS tekening:
* NLCS - IMGeo / Basisregistratie Grootschalige Topografie: matching naar dataset
* NLCS - GWSW / PDOK THema Stedelijk Water: alignen informatiemodel naar huidige NLCS
* NLCS - Nationale verkeersbordenregistratie: matching naar dataset
* NLCS - IMBOR: deze vergelijking is een verkenning van de verschillen en niet opgenomen in de standaard.

**Ontwikkelpad NLCS: Objectgericht**<br>
Met de BIM Basis Infra is een plan opgesteld om de NLCS Objectgericht te maken. Dit gebeurt door de NLCS te vertalen naar een informatiemodel op basis van de NEN 2660-2. Hiermee zouden 3D modellen in IFC geclassificeerd kunnen worden op basis van NLCS. Daarnaast zou dit de mogelijkheid bieden om informatie uit 2D of 3D modellen te gebruiken voor het automatiseren van processen zoals hoeveelheidsberekeningen, het valideren van ontwerpen of oplevering van revisiegegevens aan de beheerder.

**Lange termijn oplossing**<br>
Op de lange termijn is de meest duurzame en schaalbare oplossing, om het informatiemodel van NLCS op te stellen en deze te harmoniseren met de andere informatiemodellen. Vervolgens kunnen ontology alignments worden opgesteld als er nog specifieke datatransformaties gedaan moeten kunnen worden, bijvoorbeeld het bundelen van gedetailleerde ontwerpinformatie naar minder gedetailleerde beheerinformatie.

**Korte termijn oplossing**<br>
In de verkenning is onderzocht of een korte termijn oplossing nodig is voor de aansluiting tussen NLCS en IMBOR. Er is geen standaard geo-dataset vanuit beheer waar een mapping


