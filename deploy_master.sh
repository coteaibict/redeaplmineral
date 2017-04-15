#!/usr/bin/env bash

composer install
cd www
drush updb -y
drush fra -y
drush rr