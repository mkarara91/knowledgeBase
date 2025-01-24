Secrets

- contains small amounts of sensitive data
- avoids storing secrets in container images, in files or in deployment manifests
- mount secrets into pods as files or as environment variables
- k8s only makes secrets available to Nodes tha have a pod requesting the secret
- stored in tempfs on a node (not on disk)

best practices:
- Enable encryption at rest for cluster data (https://kubernets.io/docs/tasks/administer-cluster/encrypt-data)
- Limit access to etcd (where secrets are stored) to only admin users
- Use SSL/TLS for etcd peer-to-peer communication
- Manifest (YAML/JSON) files only base64 encode the Secret
- Pods can access Secrets, so secure which users can create pods in which namespace. Role-based access control can be used (RBAC)

creating using YAML:
- any secret data is only base64 encoded in manifest file

apiVersion: v1
kind: Secret
metadata:
  name: db-passwords
type: Opaque
data:
  app-password: cGFzxwsdfsdfQ= --> base64 encoded
  admin-password: xcsgvsgfdgdfQ=

Yaml config for Pods

apiVersion: apps/v1
...
spec:
  template:
  ...
  spec
    containers: ...
    env:
    - name: DATABASE_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-passwords
          key: db-password
  --------------------------
  spec --> accessing Secret values through a volume
    volumes:
      - name: secrets
        secret:
          secretName: db-passwords --> secret name configured in k8s
    containers:
      volumeMounts:
      - name: secrets
        mountPath: etc/db-passwords
          readonly: true




commands:
kubectl create secret generic my-secret --from-literal=pwd-password -> create secret and store securely in k8s

kubectl create secret generic my-secret --from-file=ssh-privatekey=~/.ssh/id_rsa --from-file=ssh-publickey=~/.ssh/id_rsa.pub -> create secret from file

kubectl create secret tls tls-secret --cert=path/to/tls.cert --key=path/to/tls.key -> create secret from key pair

kubectl get secrets -> get all secrets

kubectl get secrets db-passwords -o yaml -> get one secret as yaml
