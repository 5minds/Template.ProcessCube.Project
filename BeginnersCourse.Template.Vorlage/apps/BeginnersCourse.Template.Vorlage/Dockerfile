FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/BeginnersCourse.Template.Vorlage/frontend
COPY apps/BeginnersCourse.Template.Vorlage/frontend/package.json apps/BeginnersCourse.Template.Vorlage/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/BeginnersCourse.Template.Vorlage
COPY apps/BeginnersCourse.Template.Vorlage/BeginnersCourse.Template.Vorlage.csproj .
RUN dotnet restore
