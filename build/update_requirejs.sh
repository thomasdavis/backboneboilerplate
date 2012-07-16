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

# Don't update unless we have to
BASE_RJS_VERSION=`cat .requirejs_version`
if [[ $RJS_VERSION = $BASE_RJS_VERSION ]] ; then
  echo "You're version of requireJS is up to date with the latest stable version ($RJS_VERSION)" >& 2
  exit 0
fi

echo "You're about to upgrade requireJS from version $BASE_RJS_VERSION to $RJS_VERSION."
echo -n "Would you like to continue? [y/N]: "

read CONFIRM
if [[ "$CONFIRM" = "N" ]] ; then
  echo "Update aborted"
  exit 2
elif [[ "$CONFIRM" != "y" ]] ; then
  echo "Unrecognized response"
  exit 3
fi

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

sed -i "" "s/^REQUIRE_VERSION='[0-9]\.[0-9]\.[0-9]'/REQUIRE_VERSION='$RJS_VERSION'/g" ./build.sh
echo "Build script has been updated to use the latest requireJS version"

# Finally, store the new version of requireJS in .requirejs_version
echo $RJS_VERSION > .requirejs_version
