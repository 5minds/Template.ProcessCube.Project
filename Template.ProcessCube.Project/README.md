# Template.ProcessCube.Project

## Grundvoraussetzungen

### Docker

<https://www.docker.com/get-started>

### .NET 6.0

<https://dotnet.microsoft.com/en-us/download/dotnet/6.0>

### Node.js

Um das Projekt starten zu können ist die Installation von Node.js vorausgesetzt, welches von [der offiziellen Webseite](https://nodejs.org/en/download/)
heruntergeladen werden kann.

## Build und Start

Dieser Abschnitt zeigt die Grundlegenden Befehle, die zum Starten des Projekts notwendig sind.

### Basic Build

Wenn nur ein csproj in der Solution enthalten ist, dann kann das Projekt innerhalb der Solution gebaut werden mit

```zsh
dotnet build
```

, denn es wird dann das einzige Projekt in der Solution gebaut.

Bei mehreren Projekten gehe in den Ordner apps/Template.ProcessCube.Project/

```zsh
cd apps/Template.ProcessCube.Project/
```

### Build

Folgender Befehl:

- Installiert die NPM-Pakete
- Baut das Frontend
- Baut/pulled die benötigten Docker-Images

```zsh
dotnet build /t:Setup
```

### Start

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

### Aufräumen

Folgender Befehl:

- Räumt die Docker-Container ab
- Löscht das Docker-Image der App
- Löscht die `node_modules` und die `package-lock.json` im Frontend
- Löscht die Datenbank der 5Minds Engine

```zsh
dotnet build /t:Clean
```
