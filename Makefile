
SHELL := /bin/zsh

template:
	rm -r artifacts
	dotnet pack -o artifacts

install-template:
	dotnet new -i artifacts/*.nupkg
