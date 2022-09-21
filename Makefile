SHELL := /bin/zsh

DOCKER_IMAGES = $(shell docker images --filter=reference="5minds/education-project-BeginnersCourseTemplate_Vorlage" -q)

PACKAGE_LOCK_JSON_PATH = "./apps/BeginnersCourseTemplate_Vorlage/frontend/package-lock.json"
NODE_MODULES_PATH = "./apps/BeginnersCourseTemplate_Vorlage/frontend/node_modules"
DIALOGS_DIST_PATH = "./apps/BeginnersCourseTemplate_Vorlage/frontend/dist"
ATLAS_ENGINE_DB_PATH = ".processcube/engine/db/atlasengine.sqlite"

run:
	npm --prefix ./apps/BeginnersCourseTemplate_Vorlage/frontend install
	docker-compose build && docker-compose up

up:
	docker-compose up

build:
	npm --prefix ./apps/BeginnersCourseTemplate_Vorlage/frontend install
	npm --prefix ./apps/BeginnersCourseTemplate_Vorlage/frontend run build
	docker-compose build

clean:
	docker-compose down;\
	docker-compose -f docker-compose.yml -f docker-compose.tests.yml down \
	docker-compose rm -f app;
	@if [ "$(DOCKER_IMAGES)" != "" ]; then \
		docker rmi $(DOCKER_IMAGES) --force;\
	fi
	@if test -e ${PACKAGE_LOCK_JSON_PATH}; then\
		rm ${PACKAGE_LOCK_JSON_PATH};\
	fi
	@if test -e ${NODE_MODULES_PATH}; then\
		rm -rf ${NODE_MODULES_PATH};\
	fi
	@if test -e ${DIALOGS_DIST_PATH}; then\
		rm -rf ${DIALOGS_DIST_PATH};\
	fi
	@if test -e ${ATLAS_ENGINE_DB_PATH}; then\
		rm -f ${ATLAS_ENGINE_DB_PATH};\
	fi

test:
	echo ${GITHUB_PAT} | docker login ghcr.io -u ${GITHUB_USERNAME} --password-stdin
	docker compose -f docker-compose.yml -f docker-compose.tests.yml build && docker compose -f docker-compose.yml -f docker-compose.tests.yml up --abort-on-container-exit
