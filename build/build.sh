rm -rf output
node r.js -o build.js
node r.js -o cssIn=../css/styles.css out=output/css/styles.css

cp ../index.html output/index.html
REQUIRE_VERSION='1.0.5'
SEDCMD='sed -i'
if [[ $OSTYPE == *"darwin"* ]]; then
  SEDCMD=$SEDCMD' .tmp'
fi
SEDCMD=$SEDCMD' s/js\/libs\/require\/require.js/http:\/\/requirejs.org\/docs\/release\/'$REQUIRE_VERSION'\/minified\/require.js/g output/index.html'
$SEDCMD
rm -f output/*.tmp
