# HorecaTeamHub - Functional design

Na al mijn jaren in de horeca ben ik er achter gekomen dat de leidinggevenden in kleinere restaurants vaak geen handig management systeem hebben.

Alles moet hier vaak handmatig in excel sheets bijgehouden worden en bestellingen worden vaak via de mail verzonden.

De groente bestelling naar een vishandelaar sturen, weer tussen de papieren recepten zoeken of hier bepaalde allergenen in zitten.. dit is allemaal erg foutgevoelig.

Het doel van mijn horeca management app is dat het voor de leidinggevende in de keuken makkelijker is om:

* bestellingen te plaatsen
* menu kaarten waarbij je via klikken op de gerechten naar de bijbehorende recepten en allergenen wordt gestuurd
* recepten database

Er komt een onderscheid tussen gebruikers waaronder eigenaar (owner), leidinggevenden (admin) en normale werknemers(user).

Leidinggevenden kunnen bestellingen plaatsen waardoor er een bestelling gemaild wordt naar het juiste adres en hiervoor een melding krijgt dat deze juist verzonden is.

Reeds geplaatste bestellingen worden dan als bestand/lijst opgeslagen en kunnen terug bekeken worden.
Ook kunnen leidinggevenden recepten toevoegen en aanpassen en allergenen van de gerechten bekijken.

Werknemers kunnen ideeën voor gerechten of recepten uploaden en daarbij opmerkingen plaatsen.
Werknemers kunnen recepten inzien (opmerkingen plaatsen voor eventuele wijzigingen) en de bestelhistorie bekijken.

Alleen leidinggevenden kunnen recepten permanent toevoegen of aanpassen.

## Functionele eisen
### Algemeen:
* Gebruikers (user, admin, owner) kunnen inloggen.
* Er wordt in het systeem bekeken welk soort account het is.
* Er wordt gekeken of de username correct is.
* Er wordt gekeken of het wachtwoord correct is.
* Gebruikers kunnen een profielfoto uploaden.
* Eenmaal ingelogd hebben de gebruikers een dropdown menu waarin naam, datum en logout te zien is.
* Eenmaal ingelogd hebben de gebruikers een menu aan de linkerkant waar ze mijn recepten, mijn gerechten, uren, wijzig gegevens kunnen aanpassen.
* Homehub waar gebruikers voor elkaar berichten kunnen achterlaten, met de datum erbij en welke gebruiker dit heeft geplaatst.

### Bestelsysteem:
* Leidinggevenden (admin en owner) kunnen bestellingen plaatsen.
* Bestellingen worden ondertekend door de gebruiker die besteld.
* Op moment van verzenden wordt de bestelling naar de juiste leverancier verzonden.
* Alle users kunnen comments plaatsen naast de bestellijsten (bijv. graag dit *** meebestellen).
* De commentbox naast de bestellijsten wordt bij elke bestelling automatisch weer leeg gemaakt.
* Leidinggevenden (admin en owner) kunnen bestellijsten maken.
* De bestellingen worden opgeslagen in een database.  
* Als de bestelling wordt aangevinkt als correct krijgt men eerst een preview te zien voordat deze verzonden wordt.
* Bestellingen kunnen uitgeprint worden.
* Pop up melding dat de bestelling succesvol is verzonden.

## Menukaarten:
* Menukaarten worden in een keuze menu beschikbaar.
* De gerechten in deze menukaarten zijn aanklikbaar en worden gelinkt naar de gerechten tab.
* In de gerechten tab kan je klikken op de componenten en zo kom je bij de recepten.
* De gerechten op de menukaarten zijn sorteerbaar op 3 soorten allergenen.

### Recepten database:
* Alle users kunnen recepten bekijken.
* Alle users kunnen recepten uploaden.
* Alle users kunnen recepten toevoegen met een formulier.
* Leidinggevenden (admin) en chef (owner) kunnen recepten goedkeuren voor in de database.
* Leidinggevenden (admin) en koks (user) mogen opmerkingen plaatsen bij gerechten en menukaarten.
* Leidinggevenden (admin) kunnen recepten opslaan in een database.
* Leidinggevenden (admin) en chef (owner) kunnen deze recepten aanpassen.
* Aanpassingen worden pas van kracht nadat de chef (owner) de wijziging hebben goedgekeurd.
* Chef (owner) kan menukaarten bewerken.
* Recepten kunnen gesorteerd worden op 3 soorten allergenen.
* Recepten kunnen gesorteerd worden op soort.
* Recepten kunnen uitgeprint worden.

## Niet functionele eisen
* Een gebruiksvriendelijke layout met logo's die bekend zijn.
* Laad icoontje zien tijdens het wachten.
* Bedrijfslogo wordt getoond.
* Laat in de navigatiebalk zien welke gebruiker ingelogd is.
* Welkom bericht bij het inloggen.
* Gebruiker kan gewerkte uren bijhouden in zijn eigen account omgeving.
* Site moet snel geladen worden.
* Slot icoontje op onderdelen waar gebruikers niet bij kunnen.
* Wordt later uitgebreid met meerdere allergenen*


# Use Cases
### Use case #1
| Use case #1 | Account aanmaken |
|---|---|
|  Actor | Een medewerker van het restaurant. |
| Main success scenario | Een medewerker gaat een account aanmaken voor het restaurant en kan hier later mee inloggen in het systeem.|


| Use case #1  |  Account aanmaken |
|---|---|
| Actor | De gebruiker.  |
| Trigger | Krijgt te horen van de baas dat hij/zij een account aan kan maken om  in te loggen in het systeem. |
| Preconditie 1 | De gebruiker is medewerker van het restaurant. |
| Preconditie 2 | De gebruiker heeft een email adres. |
| Main success scenario | 1. De gebruiker komt op de website. |
| |2. De gebruiker klikt op registreren. |
| |3. De gebruiker vult het registratie formulier in. |
| |4. De gebruiker krijgt een pop-up bevestiging. |
| |5. De applicatie gaat weer automatisch naar het inlog scherm. |
| |6. De gebruiker kan nu inloggen. |
|Postconditie | Gebruiker heeft een account aangemaakt en kan inloggen in het systeem. |


| Alternatief scenario 3A |  |
|---|---|
| Formulier: verkeerd email adres ingevuld. |  |
| | De gebruiker voert zijn email adres in en krijgt een melding dat het geen geldig email adres is. |
| | In een warning-message word gevraagd om een geldig email adres in te vullen en waar deze aan moet voldoen. |
| | Ga verder bij stap 3 van het main succes scenario. |
| Postconditie | De gebruiker heeft een geldig email adres ingevuld en kan nu verder gaan met het registratie formulier. |


| Alternatief scenario 3A |  |
|---|---|
| Formulier: wachtwoord voldoet niet aan de gestelde eisen. |  |
| | De gebruiker voert een wachtwoord in en krijgt een melding dat het niet voldoet aan de gestelde eisen. |
| | In een warning-message word gevraagd om een geldig wachtwoord in te vullen en nogmaals aan welke eisen dit moet voldoen. |
| | Ga verder bij stap 3 van het main succes scenario. |
| Postconditie | De gebruiker heeft een geldig wachtwoord gekozen en kan nu verder gaan met het registratie formulier. |

---
### Use case #2
| Use case #2  |  Gebruiker logt in. |
|---|---|
|  Actor |Een kok van het restaurant. |
| Main success scenario | Een kok zijn werkdag begint en hij/zij opent de applicatie, het aanmeld scherm komt in beeld en de kok voert zijn gebruikersnaam en wachtwoord in. Er komt een pop up melding met Welkom (gebruikersnaam)!. Het gaat na de pop up melding automatisch door naar de home hub van de applicatie. |


| Use case #2  |  Gebruiker logt in. |
|---|---|
| Actor | De gebruiker.  |
| Trigger | Komt aan op het werk en wil inloggen voor de updates in het home hub. |
| Preconditie 1 | De gebruiker heeft een account. |
| Main success scenario | 1. De gebruiker komt op de website. |
| |2. De gebruiker vult zijn username in. |
| |3. De gebruiker vult zijn wachtwoord in. |
| |4. De gebruiker logged in. |
| |5. De gebruiker krijgt een welkom pop-up melding. |
| |6. De gebruiker wordt naar het home-hub gestuurd. |
|Postconditie | Gebruiker kan de berichten lezen in de home hub en weet wat er moet gebeuren op de werkvloer. |


| Alternatief scenario 2A |  |
|---|---|
| Username verkeerd ingevuld |  |
| | De gebruiker voert zijn username in en krijgt een melding dat de username niet bekend is.|
| | In een warning-message word gevraagd om naar het Registreren “kopje” te gaan of een andere username in te vullen. |
| | Ga verder bij stap 2 van het main succes scenario. |
| Postconditie | De gebruiker heeft een username aangemaakt of heeft een juiste username ingevuld en kan nu verder gaan met inloggen. |


| Alternatief scenario 2B |  |
|---|---|
| Wachtwoord verkeerd ingevuld |  |
| | De gebruiker voert zijn username en wachtwoord in en krijgt een melding dat het wachtwoord niet bekend is. |
| | In een warning-message word gevraagd om het wachtwoord opnieuw in te vullen. |
| | Ga verder bij stap 2 van het main succes scenario. |
| Postconditie | De gebruiker heeft een username aangemaakt of heeft een juiste username ingevuld en kan nu verder gaan met inloggen. |


| Alternatief scenario 2C |  |
|---|---|
| Wachtwoord vergeten |  |
| | De gebruiker voert zijn username en wachtwoord in en krijgt een melding dat het wachtwoord niet bekend is. |
| | In een warning-message word gevraagd om het wachtwoord opnieuw in te vullen. |
| | De gebruiker is zijn wachtwoord vergeten. |
| | De gebruiker klikt op “Wachtwoord vergeten”. |
| | De gebruiker moet zijn e mail adress invullen waar het laatst bekende wachtwoord naar toe word gestuurd. |
| | Ga verder bij stap 3 van het main succes scenario. |
| Postconditie | De gebruiker heeft een username aangemaakt of heeft een juiste username ingevuld en kan nu verder gaan met inloggen.

---
### Use case #3
| Use case #3  |  Bestelling plaatsen. |
|---|---|
|  Actor | Een leidinggevende of eigenaar. |
| Main success scenario | Een gebruiker is ingelogd (minimaal gebruiksniveau admin) en wil een bestelling plaatsen. Hij/zij klikt op Bestellen in de navigatiebar en er komt een menu aan de linkerkant waarbij hij/zij kiest bij welke leverancier er besteld moet worden. Bestelling word ingevoerd, checkbox aangevinkt, preview bekeken en de bestelling wordt verzonden waarop de gebruiker een succes pop up in beeld krijgt. |


| Use case #3  |  Bestelling plaatsen. |
|---|---|
| Actor | De gebruiker, minimaal gebruiksniveau admin.  |
| Trigger | Er moet een bestelling geplaatst worden bij een leverancier. |
| Preconditie 1 | De gebruiker heeft een account met het juiste gebruikersniveau. |
| Main success scenario | 1. De gebruiker logt in op het systeem. |
| |2. De gebruiker klikt op bestellen in de navigatie-bar. |
| |3. De gebruiker kiest de juiste leverancier uit het menu. |
| |4. De gebruiker vult zijn bestelling in. |
| |5. De gebruiker vinkt de checkbox aan en krijgt een preview te zien. |
| |6. De gebruiker klikt op verzend bestelling. |
| |7. De gebruiker krijgt een pop-up: Bestelling succesvol verzonden!. |
|Postconditie | De bestelling is geplaatst en deze wordt opgeslagen in een database zodat deze later weer bekeken kan worden. |


| Alternatief scenario 1A |  |
|---|---|
| Gebruiksniveau niet voldoende |  |
| | De gebruiker logt in op het systeem. | 
| | De gebruiker klikt op bestellen. |
| | In een warning-message word aangegeven dat de gebruiker niet bevoegd is om te bestellen, graag inloggen als een andere gebruiker. |
| | Ga verder bij stap 1 van het main succes scenario. |
| Postconditie | De gebruiker is uitgelogd en heeft aan een andere gebruiker gevraagd of deze de bestelling wilt plaatsen. |


| Alternatief scenario | 6A |
|---|---|
| Checkbox niet aangeklikt |  |
| | De gebruiker klikt op verzend bestelling. |
| | In een warning-message word aangegeven dat de checkbox niet aangevinkt is en dat de preview eerst bekeken moet worden.|
| | Ga verder bij stap 5 van het main success scenario. |
| Postconditie | De gebruiker vinkt de checkbox aan, controleert de preview en klikt nogmaals op verzenden, pop up melding verschijnt dat de bestelling succesvol is verzonden. |

---
### Use case #4
| Use case #4  | Recept toevoegen. |
|---|---|
|  Actor | Een werknemer uit het restaurant. |
| Main success scenario | Een gebruiker is ingelogd op het systeem en hij/zij wil een nieuw recept toevoegen. De gebruiker opent de het tabblad en krijg een leeg formulier te zien waarop hij/zij alle gevraagde informatie invuld. Het recept wordt nu toegevoegd aan de nieuwe recepten tab in afwachting van goedkeuring door een leidinggevende of eigenaar. |


| Use case #4  | Recept toevoegen.  |
|---|---|
| Actor | Een werknemer uit het restaurant.  |
| Trigger | Er moet een nieuw recept toegevoegd worden aan de recepten database.  |
| Preconditie 1 | De gebruiker is werkzaam in het restaurant. |
| Preconditie 2 | Het recept bestaat nog niet in de database. |
| Main success scenario | 1. De gebruiker logt in op het systeem. |
| |2. De gebruiker klikt op recepten in de navigatie-bar. |
| |3. De gebruiker klikt in het linker menu op nieuw recept toevoegen. |
| |4. De gebruiker wordt naar een nieuw scherm met een leeg recept formulier gestuurd. |
| |5. De gebruiker vult alle gevraagde informatie uit het formulier in |
| |6. De gebruiker vinkt de checkbox aan. |
| |7. De gebruiker klikt op voeg nieuw recept toe. |
| |8. De gebruiker krijgt een pop-up: Recept succesvol verzonden, in afwachting van goedkeuring!. |
|Postconditie | Het recept is toegevoegd met alle gevraagde informatie en is in afwachting van goedkeuring. |


| Alternatief scenario  5A|  |
|---|---|
| Niet alle gevraagde informatie ingevuld. |  |
| | De gebruiker vult de informatie van het recept in het formulier in. | 
| | De gebruiker vinkt de checkbox aan.|
| | De gebruiker klikt op voeg nieuw recept toe. |
| | De gebruiker krijgt een foutmelding dat niet alle vereiste informatie is ingevuld. |
| | De invulvelden waar de informatie mist krijgen een warning-message waarbij aangegeven wordt wat er ingevuld dient te worden. |
| | Ga weer verder bij stap 5 van het main success scenario. |
| Postconditie | De gebruiker heeft wel alle gevraagde informatie toegevoegd en het recept is succesvol verzonden.|


| Alternatief scenario 6A | |
|---|---|
| Checkbox niet aangeklikt |  |
| | De gebruiker klikt op voeg nieuw recept toe. |
| | In een warning-message word aangegeven dat de checkbox niet aangevinkt is en dat deze aangevinkt moet worden.|
| | Ga verder bij stap 6 van het main success scenario. |
| Postconditie | De gebruiker vinkt de checkbox aan,  klikt nogmaals op verzenden en een  pop up melding verschijnt dat het recept succesvol verzonden is. |

### Use case #5
| Use case #5  | Gerecht toevoegen aan menukaart. |
|---|---|
|  Actor | Een werknemer uit het restaurant. |
| Main success scenario | Een gebruiker wil een gerecht toevoegen aan de gerechten database. De gebruiker gebruikt hiervoor de gerechten knop in de navigatie-bar en kiest daarna in het keuze menu links welk type gerecht hij wilt toevoegen. Vult daarna alle gevraagde informatie in en voegt deze toe aan het systeem. De admin of owner moet later dit gerecht goedkeuren, tenzij ze het gerecht zelf hebben toegevoegd.


| Use case #5  | Gerecht toevoegen aan menukaart.  |
|---|---|
| Actor | Een werknemer uit het restaurant.  |
| Trigger | Er moet een nieuw gerecht toegevoegd worden aan een menukaart.  |
| Preconditie 1 | De gebruiker is werkzaam in het restaurant. |
| Preconditie 2 | Het gerecht staat nog niet in het huidige menu. |
| Main success scenario | 1. De gebruiker logt in op het systeem. |
| |2. De gebruiker klikt op gerechten in de navigatie-bar. |
| |3. De gebruiker klikt in het linker menu op het gerecht. |
| |4. De gebruiker kan rechtsboven bij het gerecht op een + klikken waar er een drop down menu komt waarop men de kaart kan kiezen waarbij deze moet worden toegevoegd. |
| |5. De gebruiker klikt op voeg gerecht toe aan kaart. |
| |6. De gebruiker krijgt een pop-up: Gerecht succesvol toegevoegd. |
|Postconditie | Het gerecht is toegevoegd aan de menukaart en kan nu voortaan in het menu bekeken worden. |


| Alternatief scenario 4a |  |
|---|---|
| Gebruiker niet bevoegd om gerechten aan menu's toe te voegen.|  |
| | De gebruiker klikt op de + om het gerecht aan een menu toe te voegen. | 
| | De gebruiker krijgt een warning-message dat hij/zij niet bevoegd is om gerechten aan menu's toe te voegen. |
| | De gebruiker plaatst een opmerking naast het gerecht dat deze moet worden toegevoegd aan een kaart. |
| Postconditie | De gebruiker heeft middels de commentbox aangegeven dat een gerecht moet worden toegevoegd aan een menukaart. |


| Alternatief scenario 3a | |
|---|---|
| Gerecht niet in juiste soort. |  |
| | Gebruiker ziet dat een gerecht niet in het juiste type is onderverdeeld. |
| | Gebruiker klikt op wijzig gerecht. |
| | Gebruiker wijzigt het type en slaat dit opnieuw op. |
| | Gebruiker gaat verder bij stap 4 van het main success scenario. |
| Postconditie | De gebruiker heeft een gerecht qua type aangepast en opgeslagen. |

