<b>Aanleiding</b><br>
Binnen het DOOR-programma van Stichting CROW is een use case ingebracht door Zuid-Holland met als onderwerp een materialenpaspoort asfalt, op te leveren bij aanleg of reparatie van een weg. Binnen de use case werd duidelijk, dat hierbij de inbreng van wegenbouwers noodzakelijk is om te komen tot een realistisch haalbare dataset. Hierop is een vertegenwoordiging van de samenwerkende wegenbouwers rondom het PIM-platform uitgenodigd om samen te werken aan de use case; binnen dit platform werd al langer gewerkt aan een productpaspoort asfalt. Ook de provincie Gelderland en het Nationaal Platform Wegverharding hebben zich aangesloten. Deze gehele groep noemen wij hieronder “de initiatiefnemers”. 
De initiatiefnemers zijn in gesprek geweest over een materialenpaspoort, waarbij duidelijk is geworden dat hierbij een goede afweging moet worden gemaakt tussen tegengestelde belangen.
<br><br>
<b>Proces</b><br><br>
Binnen de use case is in tien opeenvolgende werksessies samengewerkt gewerkt aan:

1. Vaststellen van vraagstuk, toegevoegde waarde, belanghebbenden, wensen en verwachtingen en de randvoorwaarden om het materialenpaspoort tot een succes te maken. Hierbij is duidelijk geworden dat dit alleen kan als het materialenpaspoort asfalt door alle wegbeheerders in Nederland gebruikt gaat worden, omdat dit de noodzakelijke schaal is waarbij de benodigde investeringen in assetinformatiesystemen en software haalbaar zijn.
2. Vaststellen van de inhoud van het paspoort en zorgen voor naadloze aansluiting op het bijbehorende informatiemodel, de nog als standaard vast te stellen Weginfra-NL die ontwikkeld is bij het NPDW.
3. Toetsen of deze informatie redelijkerwijs kan worden opgeleverd. De bestaande assetinformatiesystemen van wegbeheerders zullen hoe dan ook moeten worden uitgebreid om de paspoortinformatie te kunnen verwerken, omdat deze informatie niet is opgenomen in de huidige versie van de standaard die hiervoor bestaat, het IMBOR.

<br><br>
<b>Definitie materialenpaspoort asfalt</b><br><br>
Vrij naar de definitie uit CB23, specifiek gemaakt voor asfalt:
> Een digitale standaard dataset die een asfaltconstructie vastlegt. Het beschrijft de constructie opbouw en samenstelling in bouwstoffen ten behoeve van toekomstige recycling of hergebruik.

Doel van het paspoort: Ondersteuning van circulair bouwen met materiaalvoorraden en bescherming van het milieu. De belangrijkste doelen zijn: hoogwaardig hergebruik van materialen, vermindering gebruik primaire grondstoffen, levensduurverlengend onderhoud.
<br><br>
Door de wegbeheerders is daarnaast het perspectief van veiligheid ingebracht, weten welke toevoegingen zijn gebruikt in het asfalt in het geval later blijkt dat deze negatieve effecten op milieu of gezondheid blijken te hebben. Vanuit het oogpunt van de wegenbouwers is het paspoort ook een voorbereiding op de Europese verplichting in het kader van productpaspoorten. Het paspoort wordt door beide groepen nadrukkelijk niet gezien als data waarmee de contractuele eisen en verplichtingen kunnen worden gecontroleerd. De wegenbouwers geven daarnaast aan liever niet het exacte recept te vermelden omdat dit concurrentiegevoelige informatie is.
<br><br>
<b>Inhoud paspoort: Groeipad</b><br><br>

De initiatiefnemers hebben het volgende vastgesteld: om goed te kunnen worden toegepast door kleine en grote partijen, moet een materialenpaspoort gestandaardiseerd zijn op landelijke schaal, zodat er een investeringsperspectief is voor zowel de wegenbouwer en wegbeheerders, als hun softwareleveranciers, om te materialenpaspoort te kunnen opstellen, verwerken en distribueren. Daarnaast moet het haalbaar en betaalbaar zijn om de data vast te leggen. Daarom wordt een groeipad voorgesteld waarin steeds een voor de markt haalbare toevoeging kan worden gedaan aan het paspoort:
* **Fase 1 MengselOntwerp**. In fase 1 wordt gefocust op het ontwerp, het theoretische mengsel.. Geometrie kan alleen op het niveau van de constructie worden geleverd, op basis van de uitvoeringstekeningen waarin is aangegeven welke constructie waar is aangelegd.
* **Fase 2. Geometrie op constructielaagniveau**. Op dit moment wordt in uitvoeringstekeningen aangegeven waar een nieuwe constructie (of een deel van de constructie) moet worden aangelegd. Deze geometrie wordt als eerste toegevoegd aan het paspoort. Op langere termijn is wellicht mogelijk om elke laag een eigen geometrie mee te geven, of zelfs elke uitvoeringseenheid.
* **Fase 3 Toetsingen**. Op dit moment worden allerlei gegevens verzameld in documenten. De trend is om hier data van te maken. Voor elke toetsing, MKI-berekening, of dergelijke zou een dataset ontwikkeld kunnen worden. Dit vraagt om een stappenplan waarbij dit in de systemen van de wegenbouwers kan worden ingericht. Door dit uit te stellen tot fase 3 wordt voorkomen dat de informatielevering vraagt dubbel invoeren van gegevens en handwerk bij het opleveren van een werk. 
* **Fase 4 MengselGerealiseerd**. De komende jaren moet duidelijk worden welke meetgegevens nodig zijn voor hergebruik van asfalt of voor datagedreven beheer.

<br><br>
<b>Inhoud paspoort fase 1</b><br><br>
De inhoud van het paspoort bestaat in grote lijnen uit:
1. **Metadata van het materialenpaspoort**. Elk paspoort bevat generieke informatie over de herkomst van de dataset. Daarbij is gekozen voor een minimale set gegevens, waarmee kan worden herleid welke hoofdaannemer het materialenpaspoort heeft opgesteld. Voor de wegbeheerder is dit voldoende om te traceren onder welk contract het paspoort is opgesteld, zonder dat contractuele informatie onderdeel wordt van een paspoort voor langjarig gebruik.
2. **2.	Data over de constructie
In fase 1 is alleen van de constructie een geometrie bekend. 
<br><br>
<b>Advies Uitwisselformaat fase 1</b><br><br>
Voor het uitwisselformaat kan in praktische zin worden gekozen tussen een GIS-formaat (zoals GDB of Geopackage) wat aansluit op de huidige areaalbeheersystemen van wegbeheerders, of een semantisch rijk formaat als rdf. Het materialenpaspoort bevat informatie waarvoor in de geometrische uitwisselformaten geen standaardoplossing is, zoals meervoudige samenstellingen van concepten zonder geometrie. Ook is het gebruik van rdf een goede voorbereiding op het federatief delen van assetinformatie. Daarom heeft het de voorkeur om rdf te gebruiken, nog specifieker: JSON-LD, omdat deze laatste de voorkeurskeuze is vanuit ESPR (Ecodesign for Sustainable Products, de Europese verordening(EU) 2024/1781) en bijbehorende CEN/CENELEC JTC 24 voor Digital Product Pasports. Praktische implementatie en adoptie bij leveranciers en beheerders zijn aandachtspunten bij deze keuze omdat deze partijen nu nog grotendeels beheren op basis van 2D geo-informatie. 
<br><br>
<b>Advies vervolg</b><br><br>
Vervolgstappen die geadviseerd worden:

1. Opschalen en verbreden van het draagvlak voor het materialenpaspoort, onder meer door een openbare tervisielegging en bestuurlijke afstemming via Stuurgroep DOOR en de Sponsorboard van het NPDW.
2. In gebruik name als open standaard zodat wegenbouwers en wegbeheerders gezamenlijk kunnen werken aan implementatie en adoptie, met daarbij behorende afspraken over structurele financiering van zowel het informatiemodel als het materialenpaspoort.


