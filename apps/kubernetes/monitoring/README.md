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

lubectl logs -p [pod-name] ----> previous pod