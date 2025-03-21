ConfigMaps:
- ConfigMaps provide a way to inject configuration data into containers
- store it in key value pairs
- data must be less than 1 mb

ConfigMaps can be accessed from a Pod using:
- Environment variables (key/value)
- ConfigMap Volume (access as files)
- as an argument
- with self written code

Commands:
kubectl create configmap [name]
  - --from-file
  - --from-env-file
  - --from-literal

  or normal apply yaml file

  kubectl get cm [name] -o yaml --> see the details inside cm

  Yaml config for Pods

  apiVersion: apps/v1
  ...
  spec:
    template:
    ...
    spec
      containers: ...
      env: -> gets one value only
      - name: Enemies
        valueFrom:
          configMapKeyRef:
            name: app-settings -> configmap name
            key: enemies
      --------------------------
      envFrom: ---> load everything from configmap
      - configMapRef:
        name: app-settings
      
Creating volumes from config map, each key is converted to a file - value is added into the file
      --------------------------
 apiVersion: apps/v1
  ...
  spec:
    template:
    ...
    spec
      volumes:
        - name: app-config-vol
          configMap:
            name: app-settings
      containers:
        volumeMounts:
          - name: app-config-vol
            mountPath: /etc/config
