Deployments:
- A declarative way to manage pods using ReplicaSet

ReplicaSet:
- A declarative way to manage Pods


Yaml example:

apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  labels:
    app: my-nginx
    tier: frontend
spec:
  replicas: 5 ---> number of pods
  selector: -----> used to select the template
    matchLabels:
      tier: frontend
  template: -----------------> Template to use to create pods/containers (selector should match label)
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: my-nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
        resources:
          limits:
            memory: "128Mi"
            cpu: "200m" #200 millicpu or 20% of cpu



commands:

kubectl create -f file.deployment.yml --save-config ----> store current properties in resource's annotations(later we can apply)

kubectl apply -f file.deployment.yml -> change or create


imperative deployment RS scaling

kubectl scale deployment [name] --replicas=5
kubectl scale -f file.deployment.yml --replicas=511


How to update Existing pods:
- rolling updates
- blue-green
- canary
- rollbacks