#!/bin/bash

sfgov-check ()  {
  echo 'cbf or cs'
  DIR=~/Sites/sfgov/
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
  elif [ $1 = "z" ]
  then
    URL=http://zakiyadesigns.com/sites.json
  else
    URL=https://vaccination-site-microservice.vercel.app/api/v1/test_sites
  fi
  lando drush config-set sfgov_vaccine.settings api_url $URL -y
  echo "api_url set to:"
  echo "$URL"
}

sfgov-testurl-pr () {
  echo "Ex: 'sfgov-testurl-pr phone 869'"

  if [ $1 = "phone" ]
  then
    URL=https://vaccination-site-microservice-git-test-html-data-sfds.vercel.app/api/v1/test_sites
  else
    URL=https://vaccination-site-microservice.vercel.app/api/v1/test_sites
  fi
  terminus drush sfgov.pr-$2 -- config-set sfgov_vaccine.settings api_url $URL
  echo "api_url set to:"
  echo "$URL"
  echo "View page at:"
  echo "https://pr-$2-sfgov.pantheonsite.io/vaccine-sites"
}
