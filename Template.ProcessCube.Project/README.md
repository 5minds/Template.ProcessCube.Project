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

```zsh
dotnet build
# bzw:
dotnet build apps/Template.ProcessCube.Project
```

### Build

Folgender Befehl:

- Baut das apps/Template.ProcessCube.Project Projekt
- Installiert die NPM-Pakete
- Baut das Frontend
- Baut/pulled die benötigten Docker-Images

```zsh
dotnet msbuild -t:Setup
```

### Start

Zum Starten des Projekts kann `docker compose up` aufgerufen werden, **nachdem** das `Setup` erfolgreich ausgeführt wurde.
Zur Vereinheitlichung und Vereinfachung wird das Projekt gestartet mit:

```zsh
dotnet msbuild -t:Up
```

Wenn `Setup` und `Up` nacheinander ausgeführt werden sollen:

```zsh
dotnet msbuild -t:Start
```

Daraufhin wird der Docker Container zusammengebaut und gestartet.

### Aufräumen

Das Aufräumen der App wird automatisch nach einem Clean des Projektes durchgeführt, wenn das `Clear` Target entsprechend konfiguriert ist.

```xml
<Target Name="Clear" AfterTargets="Clean">
```

Folgender Befehl:

- Löscht die Ausgabe der vorigen Builds
- Räumt die Docker-Container ab
- Löscht das Docker-Image der App
- Löscht die `node_modules` und die `package-lock.json` im Frontend
- Löscht die Datenbank der 5Minds Engine

```zsh
dotnet clean
```

Bei einem folgenden `Setup` werden **alle** Dateien neu geladen und gebaut.
---#if (add-ui-tests)

## UI-Test mit Robot-Framework

Grundlegende UI-Tests sind in diesem Projekt bereits vorbereitet.
Diese liegen im Ordner `./integration-tests` und benutzen das Robot Framework.

Das Test-Framework wird über das Docker Image `5minds/testimage` über die `docker-compose.tests.yml` eingebunden.

Die Tests werden über integrierte MSBuild Targets in der Datei
`apps/Template.ProcessCube.Project/Template.ProcessCube.Project.ui-tests.targets`
initialisiert und gestartet.

### Start UI-Test

Zum Aufrufen gehen wir in das Projektverzeichnis im Terminal.

```zsh
dotnet msbuild -t:Test
```

Jetzt sollten die UI-Tests durchlaufen und ein Result liefern.

### Bereinigung

Folgender Befehl

- Löscht den zuvor erstellten Ordner mit den Testergebnissen /testresults
- Entfernt den im Docker Projekt-Container angelegten Test-Container

```zsh
dotnet msbuild -t:TestClean
```

## UI-Tests

Wenn du die manuelle Integration des Robot Frameworks noch einmal genauer erklärt haben möchtest,
schau dir den Artikel [Getting Started - Robot Framework](https://processcube-kurs.dev.5minds.cloud/docs/advanced/09_getting_started_robot_framework) im ProcessCube Kurs an

Wenn du jetzt wissen willst, wie man Tests schreibt, schau dir die Master Class zum Thema [Robot Framework](https://processcube-kurs.dev.5minds.cloud/docs/masterClass/robot_framework) an.
---#endif
