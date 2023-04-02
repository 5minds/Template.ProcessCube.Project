# Template.ProcessCube.Project

Dieses Template dient dem Zweck das Erstellen einer Anwendung in Verbindung mit dem ProcessCube zu vereinfachen.

## Wie wurde das Template umgesetzt?

Das Template ist ein .NET-Template, welches nach dem Standard der [Template-Engine](https://github.com/dotnet/templating/wiki) erstellt wurde.

Dafür wurde ein Ordner `.template.config` mit einer `template.json` angelegt.
In dieser `template.json` sind sämtliche notwendige Informationen, wie Author, Parameter, Post-Actions etc., für das Template definiert. [Weitere Informationen](https://docs.microsoft.com/de-de/dotnet/core/tools/custom-templates#templatejson)

Das Template ist schließlich als NuGet-Paket auf GitHub unter [https://nuget.pkg.github.com/5minds/index.json](https://nuget.pkg.github.com/5minds/index.json) gepushed worden.

Folgend werden Vorraussetzungen, Installation und Anwendung des Templates erläutert.

## Grundvorraussetzungen

### Docker

<https://www.docker.com/get-started>

### .NET 6.0

<https://dotnet.microsoft.com/en-us/download/dotnet/6.0>

### Node.js

Um das Projekt starten zu können ist die Installation von Node.js vorrausgesetzt, welches von [der offiziellen Webseite](https://nodejs.org/en/download/)
heruntergeladen werden kann.

## NuGet-Source hinzufügen

1. Generiere GitHub-PAT mit dem Recht Pakete lesen zu dürfen - [Ausführliche Anleitung](documentation/github/set_up_github_credentials_for_github-packages.md)

2. **NuGet-Source hinzufügen**

    `USERNAME` muss durch den GitHub Nutzernamen des Accounts ersetzt werden, mit welchem im letzten Schritt der PAT generiert wurde.

    `PAT` muss dementsprechend durch den zugehörigen GitHub-PAT ersetzt werden.

    ```zsh
    dotnet nuget add source --username USERNAME --password PAT --store-password-in-clear-text --name 5minds "https://nuget.pkg.github.com/5minds/index.json"
    ```

    Output:

    ```text
    Package source with Name: 5minds added successfully.
    ```

## Template installieren

Es gibt 2 Varianten das Template zu installieren.
Die 1. Variante ist für die Standardnutzung gedacht.
Damit das Template relativ schmerzlos vor einem Release getestet werden kann, sind im der Makefile entsprechende Befehle definiert.

1. NuGet registry:

    ```zsh
    dotnet new -i Template.ProcessCube.Project
    ```

2. Repositoy:

    ```zsh
    make template
    ```

    ```zsh
    make install-template
    ```

## Template anwenden

1. In einen Ordner der Wahl navigieren, wo die Anwendung generiert werden soll.
2. Eine neue Anwendung generieren

    ```zsh
    dotnet new processcubeproject -o "My.Cool.Tutorial"
    ```

    `My.Cool.Tutorial` ist hier der Beispielname des Projekts.

    Wenn Sie sich schon im Ordner befinden, in dem die Anwendung liegen soll, können Sie die `-o` Option durch die `-n` Option austauschen. Das verhindert, dass die Anwendung in einen Ordner gelegt wird, der zusätzlich im aktuellen Verzeichnis generiert wird.

    **Optionen**:
    | Name                 | Description                              | Type  | Default |
    |----------------------|------------------------------------------|-------|---------|
    | -aut, --add-ui-tests | Add UI tests to the project              | bool  | false   |

3. Anwendung starten:

    Zu `My.Cool.Tutorial` navigieren.

    ```zsh
    make run
    ```

Standardmäßig ist das Portal dann unter <http://localhost:8082/> zu erreichen. Wenn Sie einen anderen Portal-Port angeben muss dieser im angegeben Link ausgetauscht werden.

Selbiges gilt für den Port der Engine. Standardmäßig ist die Engine unter <http://localhost:8000/> zu erreichen.

## Template veröffentlichen

Wurde am Template entwickelt und eine es will eine neue Version des Templates veröffentlicht werden, müssen bestimmte Dinge beachtet werden.

Klassischerweise werden neue Template Versionen durch die [Github-CI](.github/workflows/publish_template.yml) automatisch verpackt und auf GitHub hochgeladen.
Dies geschieht jedes Mal, wenn auf `main` oder `develop` gepushed wird, beispielsweise in Form eines Merges eines Feature-Branches.
Damit dies sauber vonstattengeht, muss die Paketversion des Templates in der globalen [.csproj](TemplateHandler.csproj) entsprechend erhöht werden.
