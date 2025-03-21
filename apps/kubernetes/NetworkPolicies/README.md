NetworPolicies:
- all rules are allow rules, if rule does not match deny the request
- Network Policies are name spaced
- cluster needs to be running a plugin that supports them
- Ingress rules affect requests that are coming IN to the label/namespaced matched pods
- Egress rules affect requests that are made by the label/namespaced matched pods (OUT)
a resource type

apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: test-network-policy
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: db  ---> apply rules to pods matching this label
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:  -----> providing the values of from as a list (-) is OR otherwise AND
    - ipBlock:
        cidr: 172.17.0.0/16
        except:
        - 172.17.1.0/24
    - namespaceSelector:
        matchLabels:
          project: myproject
    - podSelector:
        matchLabels:
          role: frontend
    ports:  --> allows trafic to following ports
    - protocol: TCP
      port: 6379
  egress:
  - to:
    - ipBlock:
        cidr: 10.0.0.0/24 ----> ip addresses allocated to pods
    ports:
    - protocol: TCP
      port: 5978 -> port the requests are coming into