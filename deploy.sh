#!/usr/bin/env sh

# Stop the script when occur errors.
set -e

# Build
npm run build

# cd to the output dcirectory of the build
cd dist

# Upload to git repository.
git init
git add -A
git commit -m 'deploy'

git push -f root@39.100.226.244:lot.git master

cd ..