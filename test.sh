#!/bin/sh

node tests/server.js &
NODE_PID=$!

./node_modules/.bin/jasmine tests/integration.js

echo Killing node with pid $NODE_PID
kill $NODE_PID