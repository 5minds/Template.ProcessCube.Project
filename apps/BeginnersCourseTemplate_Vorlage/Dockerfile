FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/BeginnersCourseTemplate_Vorlage/frontend
COPY apps/BeginnersCourseTemplate_Vorlage/frontend/package.json apps/BeginnersCourseTemplate_Vorlage/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/BeginnersCourseTemplate_Vorlage
COPY apps/BeginnersCourseTemplate_Vorlage/BeginnersCourseTemplate_Vorlage.csproj .
RUN dotnet restore
