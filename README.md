# to-pet

## Projekt 1 - TODO App - Backend 3

Detta dokument beskriver det första projektet som är en del av examinering av kursen Backend 3. Projektet kan utföras enskilt eller i grupper om två. 
Vid frågor, kontakta kursansvarig lärare.

### Översikt
Målet med detta projekt är att utveckla en fullständig TODO applikation som låter en användare se, skapa, och redigera TODO listor. För ett exempel på hur en sådan applikation kan fungera, se t.ex. Google Keep (https://keep.google.com).

Projektet kan genomföras enskilt eller i grupper om två. Oavsett om man gör det själv eller i grupp så skall projektet utföras enligt agil projektmetodik (Se Föreläsning 2 - Agil projektform). Det innebär bl.a. en skriftlig standup varje kursdag där ni beskriver vad ni gjort sen sist.

### Grundläggande krav (Godkänt)
Applikationen skall utvecklas i NodeJS med ExpressJS som applikationsramverk, MongoDB som databas, och ReactJS som frontend-lösning. 
Applikationen skall kunna hantera flera TODO listor och användaren ska kunna skapa nya, redigera befintliga, och radera enskilda listor. 

- Varje lista ska innehålla följande detaljer:
- Rubrik (text)
- Innehåll (text)
- Datum för senaste redigering (datum)

Applikationen ska kunna visa en översikt av alla listor samt detaljer för enskilda listor.

Koden för applikationen skall publiceras på GitHub. All kod måste vara snyggt och korrekt formatterad. Kommentarer i koden skall vara relevanta och bortkommenterade stycken med kod är inte godkänt vid inlämning. 

### Utökade krav (Väl Godkänt)
Utöver ovanstående krav så skall applikationen ha följande extra funktioner.

Stöd för flera inloggade användare. Inloggningen ska ske på ett säkert vis, antingen med användarnamn + lösenord, eller med en federerad inloggning (t.ex. Google, Facebook, GitHub eller dylikt). Lagras lösenord i applikationen så skall dessa skyddas korrekt (se föreläsning om Säkerhet)

Varje användare har en egen uppsättning av TODO listor som andra användare inte kan se.

Innehållet i varje TODO lista ska kunna formateras med hjälp av Markdown. Se t.ex. https://uiwjs.github.io/react-md-editor/. Detta innebär att texten skall lagras som Markdown i databasen och renderas i frontend med korrekt formatering.

Koden för applikationen skall innehålla relevanta enhetstester och projekten ska ha statisk kodanalys. Alla tester och statisk kodanalys ska passera utan fel eller varningar.

### Tekniska krav
Följande komponenter måste används i det färdiga projektet, både för G och VG.
- MongoDB för lagring av data
- ExpressJS som applikationsramverk

Valet av frontend lösning för detta projekt är valfritt (d.v.s., välj mellan någon view-lösning från ExpressJS eller t.ex. ReactJS.).

### Redovisning
Projektet ska redovisas löpande i form av skriftlig standup från projektdeltagarna (Se föreläsningen med Torbjörn om Agil projektform). Det slutgiltiga projektet ska redovisas som ett fullstack projekt på GitHub. Datum för sista redovisningsdag presenteras på studentportalen.


