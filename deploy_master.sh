#!/usr/bin/env bash

composer install
cd www
drush updb -y
drush cr
drush fra -y
cd themes/custom/aplmineral
gulp styles