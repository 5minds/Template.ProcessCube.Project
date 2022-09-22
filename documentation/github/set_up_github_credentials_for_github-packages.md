# Einrichten der GitHub-Zugriffsrechte für GitHub-Packages

## GitHub-PAT generieren

Zur Authentifizierung für GitHub-Packages wird ein GitHub-PAT (Personal-Access-Token) mit bestimmten Rechten benötigt.
Dafür muss bei GitHub unter `Settings` -> `Developer settings` -> `Personal access tokens` -> `Generate new token` mindestens der scope `read:packages` selektiert werden.
Dieser Token sollte sicher bewahrt werden, da er nur einmal eingesehen werden kann.

Es kann auch ein bereits vorhandener GitHub-PAT verwendet werden, wenn er die vorhin genannte Bedingung erfüllt.

*[GitHub-Doku: Generierung eines PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)*

## Authentifizierung einrichten

Sowohl in der `.npmrc` als auch in der `nuget.config` wird dieser GitHub-PAT benötigt. Darüber hinaus benötigt die `nuget.config` auch den dazugehörigen GitHub-Username.

Damit diese Parameter nicht immer wieder als Klartext eingefügt werden müssen, kann man sie von der `.zshrc` exportieren lassen, sodass der Quellcode nicht angepasst werden muss und man nicht aus Versehen seinen PAT commited.

Um diese Parameter in der `.zshrc` exportieren zu lassen, kann folgender Befehl eingegeben werden:

```zsh
echo 'export GITHUB_PAT="{YOUR_GITHUB_PAT}"\nexport GITHUB_USERNAME="{YOUR_GITHUB_USERNAME}"' >> ~/.zshrc
```

Hier muss `{YOUR_GITHUB_PAT}` durch den GitHub-PAT mit jeweiligen Rechten und `{YOUR_GITHUB_USERNAME}` mit dem dazugehörigen GitHub-Username ersetzt werden.
