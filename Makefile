
SHELL := /bin/zsh

template:
	rm -r artifacts
	dotnet pack -o artifacts

install-template: uninstall-template
	dotnet new -i artifacts/*.nupkg

uninstall-template:
	cd ~ && dotnet new --uninstall Template.ProcessCube.Project || echo "No template uninstalled because there was no template"
