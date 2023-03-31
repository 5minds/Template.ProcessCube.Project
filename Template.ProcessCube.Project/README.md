# Template.ProcessCube.Project
Nach dem Erzeugen eines neuen Templates, kann dieses Bearbeitet werden
## Grundvorraussetzungen

### Docker

<https://www.docker.com/get-started>

### .NET 6.0

<https://dotnet.microsoft.com/en-us/download/dotnet/6.0>

### Node.js

Um das Projekt starten zu können ist die Installation von Node.js vorrausgesetzt, welches von [der offiziellen Webseite](https://nodejs.org/en/download/)
heruntergeladen werden kann.

## Build und Start
Dieser Abschnitt zeigt die Grundlegenden Befehle, die zum Starten des Projekts notwendig sind:

### Basic Build
Wenn nur ein csproj in der Solution enthalten ist, dann kann Projekt innerhalb der Solution gebaut werden mit

```zsh
dotnet build
```
, denn es wird dann das einzige Projekt in der Solution gebaut.

Bei mehreren Projekten gehe in den Ordner apps/Template.ProcessCube.Project/
```zsh
cd apps/Template.ProcessCube.Project/
```

### Docker erzeugen
Um Docker und NPM Pakete vorzubereiten rufe das Setup Target auf:
```zsh
dotnet build /t:Setup
```

### Projekt/Docker starten
Zum Starten des Projekts kann `docker compose up` aufgerufen werden, **nachdem** das Setup erfolgreich ausgeführt wurde.
Zur Vereinheitlichung und Vereinfachung wird das Projekt gestartet mit:

```zsh
dotnet build /t:Up
```

oder wenn **Setup** und **Up** nacheinander ausgeführt werden sollen:
```zsh
dotnet build /t:Start
```
daraufhin wird der Docker Container zusammengebaut und gestartet.

### Stoppen
Das Anhalten des Docker Containers erfolgt über die Tastenkombination
```zsh
ctrl + C
```
oder im Docker Desktop Programm über das Stop-Symbol

### Aufräumen
zum Entfernen und zurücksetzen des gesamten Docker-Projekts wird
```zsh
dotnet build /t:Clear
```
aufgerufen.
