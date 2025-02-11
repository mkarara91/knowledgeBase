Helm is a package manager for K8s
- tool for managing K8s packages called "charts"
- use charts to install, upgrade, and uninstall k8s apps
- Helm client - command line client for end users
- helm library - logic for executing operations

commands:
----------- find charts and repos
helm search hub --> defaults to artifact Hub
helm repo add [repo name] [url]
helm repo update
helm search repo
helm search repo --version ----> lists all versions
------------ learn about chart values
helm values -> overrides default values
helm show values --> list current values
helm pull --untar  --->  expand chart and view files
------------- install upgrade uninstall
helm install [release-name] [repo/chart] --value=yamlFile --version=version
helm install [release-name] [repo/chart] --version=version --set property=value
helm upgrade
helm uninstall
------
helm list --> lists all of the releases for a specified namespace (uses current namespace context if namespace not specified)