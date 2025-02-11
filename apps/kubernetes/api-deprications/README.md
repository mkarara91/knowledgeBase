Admission Controllers
- customize what can run on a cluster
- may be validating, mutating or both
- limit requests to create, delete, modify objects
- do not (and cannot) block requests to read
- enforce security policies
- block insecure images from running
- compiled into the kube-apiserver binaary

Examples:
1- LimitRanger
    -apply default pod memory/cpu limits for a namespace
2- PersistentVolumeClaimResize
    - check incoming PVC resize requests. prevents resizing of all claims by default
3- namespaceAutoProvision
    - exams requests and checks if referenced ns esits and creates if not found

commands:

1- go to kube-system namespace
2- sudo cat /etc/kubernetes/manifests/kube-apiserver.yaml

kubectl describe pod kube-apiserver -n kube-system  ---> give details about api server

kubectl describe pod kube-apiserver -n kube-system | grep enable-admission-plugins -----> view api server admission plugins

kube-apiserver -h | grep enable-admission-plugins --> same as above


kube-apiserver --enable-admission-plugins=NamespaceAutoProvision,LimitRanger    -> set plugins
//             --disable-admission-plugins


kubectl version -o yaml  -> output k8s cluster info


kubectl api-resources --sort-by=name  --> lists all api resources sorted by name
//              //    --api-group=rbac.authorization.k8s.io    -> view resources for a specific group


kubectl explain deploy    -> view API group for deployments/cm/cronjobs

kubectl api-versions 


kubectl proxy 8001
curl localhost:8001/apis/certificates.k8s.io ---> get preferred version for the certificates api group
ps | grep kubectl  -> finds pid of proxy
kill -9 pid   -> kill the process