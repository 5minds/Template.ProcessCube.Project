# Einrichten der GitHub-Zugriffsrechte für GitHub-Packages

## GitHub-PAT generieren

Zur Authentifizierung für GitHub-Packages wird ein GitHub-PAT (Personal-Access-Token) mit bestimmten Rechten benötigt.
Dafür muss bei GitHub unter `Settings` -> `Developer settings` -> `Personal access tokens` -> `Generate new token` mindestens der scope `read:packages` selektiert werden.
Dieser Token sollte sicher bewahrt werden, da er nur einmal eingesehen werden kann.

Es kann auch ein bereits vorhandener GitHub-PAT verwendet werden, wenn er die vorhin genannte Bedingung erfüllt.

[GitHub-Doku: Generierung eines PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
