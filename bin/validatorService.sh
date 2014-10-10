#!/usr/bin/env bash

node validatorService.js ../config/validator.json 8181  >> validator.log 2>&1 &
