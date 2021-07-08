#!/bin/bash

sfgov-check ()  {
  echo 'ex: sfgov-check sfgov_utilities'
  DIR=~/Sites/sfgov/
  MODULE_PATH=web/modules/custom/$1
  PHP_PATH=vendor/bin/php
  EXTENSIONS=php,module,inc,install,test,profile,theme,css,info
  IGNORE=node_modules,bower_components,vendor
  
  COMMANDS=( cbf cs )

  for COMMAND in "${COMMANDS[@]}"
  do
  $DIR$PHP_PATH$COMMAND --config-set colors 1
  $DIR$PHP_PATH$COMMAND --standard=Drupal --extensions=$EXTENSIONS --ignore=$IGNORE $DIR$MODULE_PATH
  $DIR$PHP_PATH$COMMAND --standard=DrupalPractice --extensions=$EXTENSIONS --ignore=IGNORE $DIR$MODULE_PATH
  done
}

sfgov-testurl-local () {
  echo "Ex: 'sfgov-testurl-local phone' or 'sfgov-testurl-local'"
  if [ $1 = "phone" ]
  then
    URL=https://vaccination-site-microservice-git-test-html-data-sfds.vercel.app/api/v1/test_sites
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

sfgov-term ()  {
  echo 'ex: sfgov-term 718'
  PR=$1

  if [ -z $2 ]
  then
    COMMAND=uli
  else
    COMMAND=$2
  fi

  term
  terminus drush sfgov.pr-$PR $COMMAND
  echo "terminus drush sfgov.pr-$PR $COMMAND"

}

sfgov-perm-reset ()  {
  echo 'ex: sfgov-perm-reset [pull]'

  DIR=~/Sites/sfgov/
  PULL=$1

  cd $DIR
  gh pr checkout 945
  if [ -z $1 ]
  then
    echo 'not pulling db'
  else
    lando pull --code=none --database=live --files=none
  fi
  composer install
  lando drush updb
  lando drush en permissions_filter
  lando drush cim
  lando drush cr
  lando drush uli
}

sfgov-reset ()  {
  echo 'ex: sfgov-reset 926 [pull]'

  DIR=~/Sites/sfgov/
  PULL=$1

  cd $DIR
  gh pr checkout $1
  if [ -z $2 ]
  then
    echo 'not pulling db'
  else
    lando pull --code=none --database=pr-$1 --files=none
  fi
  composer install
  lando drush updb
  lando drush cim
  lando drush cr
  lando drush uli
}
