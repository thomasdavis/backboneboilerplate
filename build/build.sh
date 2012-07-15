rm -rf output
node r.js -o build.js
node r.js -o cssIn=../css/styles.css out=output/css/styles.css

cp ../index.html output/index.html
SEDCMD='sed -i'
if [[ $OSTYPE == *"darwin"* ]]; then
  SEDCMD=$SEDCMD' .tmp' 
fi
SEDCMD=$SEDCMD' s/js\/libs\/require\/require.js/http:\/\/requirejs.org\/docs\/release\/1.0.5\/minified\/require.js/g output/index.html'
$SEDCMD
rm -f output/*.tmp
