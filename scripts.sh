#!/bin/bash

sfgov-check ()  {
  echo 'cbf or cs'
  DIR=/Users/rona/Sites/sfgov/
  MODULE_PATH=web/modules/custom/sfgov_vaccine
  CS_PATH=vendor/bin/php$1
  EXTENSIONS=php,module,inc,install,test,profile,theme,css,info
  IGNORE=node_modules,bower_components,vendor
  $DIR$CS_PATH --config-set colors 1
  $DIR$CS_PATH --standard=Drupal --extensions=$EXTENSIONS --ignore=$IGNORE $DIR$MODULE_PATH
  $DIR$CS_PATH --standard=DrupalPractice --extensions=$EXTENSIONS --ignore=IGNORE $DIR$MODULE_PATH
}

