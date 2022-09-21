FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/BeginnersCourseTemplate/frontend
COPY apps/BeginnersCourseTemplate/frontend/package.json apps/BeginnersCourseTemplate/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/BeginnersCourseTemplate
COPY apps/BeginnersCourseTemplate/BeginnersCourseTemplate.csproj .
RUN dotnet restore
