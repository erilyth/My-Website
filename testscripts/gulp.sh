#! /bin/sh
#
# gulp.sh
# Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
#
# Distributed under terms of the MIT license.
#

echo "Running jasmine-phantom..."

gulp jasmine-phantom
JASMINE_PHANTOM_STATUS=$?

exit $((JASMINE_PHANTOM_STATS))
