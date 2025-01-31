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
spec: ---> ReplicaSet spec
  replicas: 5 ---> number of pods
  minReadySeconds: 1 -----> seconds new pods shoud wait before checking if pod is healthy and ready (0 default should be 10 at least)
  progressDeadlineSeconds: 60 -----> seconds to wait before reporting stalled Deployment
  revisionHistoryLimit: 5 ----> number of replica sets to be left in history to enable rolling back to (10 default)
  strategy:
    type: RollingUpdate  ---> default Or Reacreate strategy
    rollingUpdate:
      maxSurge: 1  ----> max number of pods that can exceed replica count during updates (25% default)
      maxUnavailable: 1  ---> max number of pods that are not operational during updates (25%)
  selector: -----> used to select the template
    matchLabels:
      tier: frontend
  template: -----------------> Template to use to create pods/containers (selector should match label)
    metadata:
      labels:
        tier: frontend
    spec: ---> Pod spec
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

kubectl create -f file.deployment.yml --save-config --record ---> store deployment in revision history also used with apply

kubectl apply -f file.deployment.yml -> change or create

kubectl rollout status deployment [name] ---> get information about the deployment

kubectl rollout history deployment [name] ---> get history info

kubectl rollout history deployment [name] --revision=2 

kubectl rollout undo -f filename --> rollback to previous one
 
kubectl rollout undo deployment [name] --to-revision=2 ---> rollback to specific version


imperative deployment RS scaling

kubectl scale deployment [name] --replicas=5
kubectl scale -f file.deployment.yml --replicas=5


How to update Existing pods:
- rolling updates
- blue-green
- canary
- rollbacks


Rolling updates:
- ReplicaSets increase new pods while decreasing old pods
- Service handles loadbalancing traffic to available pods done through matching labels
- new pods only scheduled on available nodes
- two stategies:
  - rolling update (default)
  - Recreate (can result in down-time)


  Canary Deployments:
  just create a new deployemnt yaml with same label and new image but only using a smaller percentage of replicas

  Blue Green deployments:
  Require 2 identical hardware environments
  1 is active and other is idle

  Idea is to create separate services one accesible to public service and reaches blue deployment, other is a test service internally accesible and reaches green deployments.
  move public service to green deployment if tests passes. delete old deployment.

  Key considerations:
  - how many pods are being deployed to each environemnt
  - how many memory is required
  - what other cpu requirements
  - Other considerations(volumes, sessions, node affinity)

  A blue green deployment involves 3 main k8s resources:
  - Test Service
  - Public Service
  - Deployment