Monitoring & troubleshooting

- web ui dashboard
- metrics server -> cluster wide aggregator of resource usage data
- kube-state-metrics -> listens to the kubernetes api server and generates metrics about the state of the objects.
- prometheus
- grafana
- datadog

commands:

kubectl create -f ./ -R -> create all yml files in current folder and recursively through sub folders

kubectl get pod [name] -o yaml

kubectl describe pod [name]

kubectl exec [pod-name] -it sh

kubectl logs [name] -c [container-name]

kubectl logs -p [pod-name] ----> previous pod

kubectl logs --tail=20 [pod-nam]

kubectl logs --since=10s [pod-name]

kubectl logs -l app=backend --all-containers=true  ---> return all logs for pods mathcing label

kubectl top nodes  -> gives memory and cpu usage of node/pod ...etc

kubectl debug myapp -it --copy-to=myapp-debug --container=myapp --sh

kubectl get events --field-selector type=warning --all-namespaces   --> get warning evetns of pods in a namespace
