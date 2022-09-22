SHELL := /bin/zsh

DOCKER_IMAGES = $(shell docker images --filter=reference="5minds/education-project-Template.ProcessCube.BeginnersCourse" -q)

PACKAGE_LOCK_JSON_PATH = "./apps/Template.ProcessCube.BeginnersCourse/frontend/package-lock.json"
NODE_MODULES_PATH = "./apps/Template.ProcessCube.BeginnersCourse/frontend/node_modules"
ATLAS_ENGINE_DB_PATH = ".processcube/engine/db/atlasengine.sqlite"

run: build up

build: npm-install
	npm --prefix ./apps/Template.ProcessCube.BeginnersCourse/frontend run build
	docker compose build

up:
	docker compose up

clean:
	docker compose down;\
	docker compose rm -f app;
	@if [ "$(DOCKER_IMAGES)" != "" ]; then \
		docker rmi $(DOCKER_IMAGES) --force;\
	fi
	@if test -e ${PACKAGE_LOCK_JSON_PATH}; then\
		rm ${PACKAGE_LOCK_JSON_PATH};\
	fi
	@if test -e ${NODE_MODULES_PATH}; then\
		rm -rf ${NODE_MODULES_PATH};\
	fi
	@if test -e ${ATLAS_ENGINE_DB_PATH}; then\
		rm -f ${ATLAS_ENGINE_DB_PATH};\
	fi

npm-install:
	npm --prefix ./apps/Template.ProcessCube.BeginnersCourse/frontend install
