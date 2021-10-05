#!/usr/bin/env bash

# regex to validate in commit msg
error_msg="Aborting commit. Your commit message is missing a OMT issue number ([name]feat:#OMT-1 content)"
commit_message=$(cat "$1")

check_commit_msg() {
  local REGEX='^\[.+\]((chore|docs|fix|refactor|style|test)\:|feat\:\#OMT\-[0-9]+)'
  if [[ ! $commit_message =~ $REGEX ]]; then
    echo >&2 $error_msg
    exit 1
  fi
}

check_commit_msg
