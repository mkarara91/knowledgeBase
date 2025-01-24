Commands:

kubectl logs [pod-name]

kubectl logs [pod-name] -c [container-name]

kubectl logs -p [pod-name] -> view logs of previously running pod

kubectl logs -f [pod-name] -> stream logs

kubectl describe pod [pod-name]

kubectl get pod/deployment [pod-name] -o yaml -->more detailed view in yaml or json format

kubectl exec [pod-name] -it sh