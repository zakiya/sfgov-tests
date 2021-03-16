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

sfgov-testurl-local () {
  echo "Ex: 'sfgov-testurl-local phone' or 'sfgov-testurl-local'"
  if [ $1 = "phone" ]
  then
    URL=https://vaccination-site-microservice-git-main-sfds.vercel.app/api/v1/appointments
  else
    URL=https://vaccination-site-microservice.vercel.app/api/v1/test_sites
  fi
  lando drush config-set sfgov_vaccine.settings api_url $URL -y
  echo "api_url set to:"
  echo "$URL"
}

sfgov-testurl-pr () {
   echo "Ex: 'sfgov-testurl-pr 208'"
 drush sfgov.pr-$1 -- config-set sfgov_vaccine.settings api_url https://vaccination-site-microservice.vercel.app/api/v1/test_sites
}
