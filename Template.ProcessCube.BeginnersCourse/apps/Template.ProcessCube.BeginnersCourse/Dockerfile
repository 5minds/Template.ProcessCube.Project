FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/Template.ProcessCube.BeginnersCourse/frontend
COPY apps/Template.ProcessCube.BeginnersCourse/frontend/package.json apps/Template.ProcessCube.BeginnersCourse/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/Template.ProcessCube.BeginnersCourse
COPY apps/Template.ProcessCube.BeginnersCourse/Template.ProcessCube.BeginnersCourse.csproj .
RUN dotnet restore
