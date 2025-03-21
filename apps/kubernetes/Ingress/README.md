Ingress

- Allows the cluster loadbalancer to have a 1: many relationship with Application services
- only allows http/https
- you need to have an ingress controller installed

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-wildcard-host
spec:
  rules:
  - host: "foo.bar.com"
    http:
      paths:
      - pathType: Prefix
        path: "/bar"
        backend:
          service:
            name: service1
            port:
              number: 80
  - host: "*.foo.com"
    http:
      paths:
      - pathType: Prefix
        path: "/" --> default path matching
        backend:
          service:
            name: service2
            port:
              number: 80

useful commands:

kubectl get ingressclass
kubectl describe/get ing