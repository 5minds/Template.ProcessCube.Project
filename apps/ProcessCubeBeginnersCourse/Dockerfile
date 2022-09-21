FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/ProcessCubeBeginnersCourse/frontend
COPY apps/ProcessCubeBeginnersCourse/frontend/package.json apps/ProcessCubeBeginnersCourse/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/ProcessCubeBeginnersCourse
COPY apps/ProcessCubeBeginnersCourse/ProcessCubeBeginnersCourse.csproj .
RUN dotnet restore
