#!/usr/bin/env bash

if [ "$TRAVIS" = "true" ]
then
  git config --global user.email "nico060984@gmail.com"
  git config --global user.name "npm gh-pages"
fi

./node_modules/.bin/gh-pages \
  # ADJUST YOUR REMOTE HERE
  --repo https://$GITHUB_TOKEN@github.com/nlarche/curriculum_vitae.git \
  # TO HIDE YOUR $GITHUB_TOKEN!
  # this is really important
  --silent