# This script updates requireJS to the latest stable, minified version.
# It drops the new script into js/libs/require and also updates the build script

#!/bin/bash

# Make sure curl is available
curl -V >> /dev/null 2>> /dev/null
if [[ $? -ne 0  ]] ; then
  echo "ERROR: You need curl to run this script. Please install curl using your preferred package manager and try again" >& 2
  exit 1
fi

echo "Finding latest version of requireJS..."
REQUIREJS_URI=`curl -f http://requirejs.org/docs/download.html 2>> /dev/null | \
  grep -o 'http://requirejs.org/docs/release/[0-9]\.[0-9]\.[0-9]/minified/require.js'`
RJS_VERSION=`echo $REQUIREJS_URI | grep -o [0-9]\.[0-9]\.[0-9]`

echo "Fetching requireJS v$RJS_VERSION"
REQUIRE_PATH=`dirname $PWD`/js/libs/require
# If, for some reason, curl fails, we'll still have our old copy of require
mv $REQUIRE_PATH/require.js $REQUIRE_PATH/require.js.old
curl -f -# $REQUIREJS_URI -o $REQUIRE_PATH/require.js
# If curl fails...
if [[ $? -ne 0 ]] ; then
  # Put the old version of require back. Otherwise...
  mv $REQUIRE_PATH/require.js.old $REQUIRE_PATH/require.js
else
  # Remove the old version of require completely
  rm -f ../js/libs/require/require.js.old
  echo "requireJS has been updated and placed in its proper place in the libs folder"
fi
