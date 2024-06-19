FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get -q update && \
  curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
  apt-get install -y \
  nodejs

WORKDIR /apps/Template.ProcessCube.Project/frontend
COPY apps/Template.ProcessCube.Project/frontend/package.json apps/Template.ProcessCube.Project/frontend/package-lock.json ./
RUN npm i

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/Template.ProcessCube.Project
COPY apps/Template.ProcessCube.Project/Template.ProcessCube.Project.csproj .
RUN dotnet restore
