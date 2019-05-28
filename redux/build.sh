#!/usr/bin/env bash
npm run-script build
cp Staticfile ./build
cp manifest.yml ./build
