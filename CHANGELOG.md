# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v2.0.0

_September 6 2021_

-   Update dependencies, devDependencies and peerDependencies.
-   Separate base config and Vue, Vue 3.x configs into separate files to allow for the appropriate config to be loaded depending on project requirements, using the base config as the default config.
-   Add, modify and remove rules.
-   Overhaul testing setup.
-   Add GitHub Actions workflow for testing.

## v1.0.2

_February 13 2020_

-   Enforce no space before named function opening paranthesis.

## v1.0.0

_February 12 2020_

-   Initial commmit; structure based on `@justeat/eslint-config-fozzie` which extends `eslint-config-airbnb-base`, extended Airbnb base config and added in overrides for rules that we wanted to specify.
