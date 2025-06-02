**Verkenning NLCS - IMBOR**
Dit document beschrijft de verkenning van oplossingsrichtingen voor het uitwisselen van informatie tussen een beheerder die werkt met informatiemodellen als IMBOR en GWSW in een areaalbeheerpakket en een projectteam (ingenieursbureau, aannemer), dat werkt met ontwerp- en revisietekeningen conform NLCS. De vraag daarbij is, hoe het beste een verbinding tussen de NLCS standaard enerzijds, en de informatiemodellen anderzijds gemaakt kan worden. Het verzoek om deze verkenning op te stellen komt voort uit het [=DOOR=]-programma. 

**Use cases**<br>
De in de verkenning onderzochte use cases zijn:
* Use case ontwerpen en bouwen met NLCS met diverse relaties naar landelijke registraties 
* Use case Nijmegen
* Pilot Dordrecht
* Use case netbeheerders
* Use case Amsterdam
* Use case [=BIM Basis Infra=] en het Bestuursakkoord Digitale Gebouwde Omgeving '27.

Uit de use cases en huidige praktijk blijkt dat niet wordt gewerkt met één duidelijke dataflow met datatransformaties tussen beheer en project. Er zijn grote verschillen tussen organisaties.

In de praktijk wordt vooral ingezet op manieren om om te gaan met de verschillen tussen GIS en CAD, omdat veel organisaties hun beheer- en projectinformatie nog steeds in die silo's beheren. Oplossingen waarbij alleen met semantische informatie wordt uitgewisseld, worden nog niet ondersteund door de bestaande softwareleveranciers.

**Informatieproces beheer - project**<br>
Het doel van de aansluiting tussen NLCS en andere informatiemodellen is het uitwisselen van informatie tijdens een project, in dit document zijn de processtappen op hoofdlijnen beschreven en is per stap onderzocht wat daar nu de meest voorkomende oplossingen zijn die gebruikt worden in de use cases. Een matching tussen NLCS en IMBOR, GWSW of andere beheermodellen is voor deze uitwisselingsmomenten relevant waardoor:
1. De beheerder de startsituatie voor het project kan leveren: geometrie en objectpaspoorten.
2. De beheerder de minimale dataset voor revisie kan specificeren in de gebruikte "talen": de beheertaal IMBOR/GWSW/.. en ontwerptaal NLCS.
3. Het project na uitvoering revisiegegevens kan opleveren aan de beheerder op basis van een minimale dataset.  

Voor deze uitwisselmomenten ziin transformaties en validaties tussen beheerdata in GIS, ontwerp- en bouwgegevens in CAD én inmetingen nodig, omdat elk type softwarepakket eigen uitwisselformaten kent en beperkingen ken in het soort data dat kan worden ingelezen. Dit gebeurt nu vaak met eigen scripts van de geo-afdeling, en zou collectief ontwikkeld kunnen worden voor korte termijn oplossingen. 

**Korte termijn oplossing**<br>
In de verkenning is onderzocht of een korte termijn tussenoplossing nodig is voor de aansluiting tussen NLCS en IMBOR, vooruitlopend op de architectuur van samenhangende standaarden op lange termijn. Op korte termijn is elk van de varianten van de alignments geschikt voor de beschreven uitwisselingen. Er is nog wel kennis nodig vanuit verschillende vakgebieden om NLCS en IMBOR correct te matchen, er zitten nu nog veel open vragen in de vergelijking.
Zolang vanuit het DOOR programma geen breed gedragen use case komt met een heel specifieke datatransformatie, lijkt er geen noodzaak om geld uit te geven aan een korte termijn oplossing. Men kan beter mee ontwikkelen naar een lange termijn oplossing. 

**Lange termijn oplossing**<br>
Op lange termijn is **variant 3: alignen van informatiemodellen met een NLCS-classificatie** de oplossing die de meeste toepassingen biedt in de gehele keten, en de laagste beheerlast geeft in het onderling afstemmen van standaarden. Omdat aan deze oplossing wordt gewerkt in collectief verband, binnen beleidsmaatregel 3 van Bestuursakkoord Digitale Gebouwde Omgeving '27, is de aanbeveling aan het DOOR programma om het gereserveerde budget voor de alignment tussen NLCS en IMBOR te besteden aan de digiDeal NLCS Objectclassificatie. Gelderland gaat hierin in de eerste fase de aansluiting van de NLCS classificatie van verhardingen en/of kunstwerken op IMBOR beheerdata beproeven. De hiervoor benodigde classificatie van NLCS en alignment naar IMBOR zou een logische besteding zijn van het DOOR budget en ervoor zorgen dat ontwikkelingen van de lagere overheden samen met de ketenpartners gedaan worden.