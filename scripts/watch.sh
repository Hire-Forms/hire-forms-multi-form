#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external classnames \
	--external immutable \
	--external react \
	--outfile 'derequire > build/index.js' \
	--standalone HireFormsMultiForm \
	--transform [ babelify --plugins object-assign ] \
	--verbose