FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/Template.ProcessCube.Project/frontend
COPY apps/Template.ProcessCube.Project/frontend/package.json apps/Template.ProcessCube.Project/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/Template.ProcessCube.Project
COPY apps/Template.ProcessCube.Project/Template.ProcessCube.Project.csproj .
RUN dotnet restore
