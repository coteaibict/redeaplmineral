#!/usr/bin/env bash

cd www
drush updb -y
drush fra -y
drush rr