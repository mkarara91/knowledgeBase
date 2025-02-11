Readiness probes determine if a pod should receive requests

Liveness probes determine if a pod is healthy and running as expected

Failed pod containers are recreated by default (restartPolicy defaults to always)


Probe Types:
ExecAction - executes an action inside the container
TCPSocketAction - TCP check against the container's IP address on a specified port
HttpGetAction - HTTP Get request against container

probes results:
- success
- failure
- unknown

example yaml:

spec:
  containers:
  - name: nginx
    image: nginx:alpine
    readinessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 2   -> wait 2 seconds
      periodSeconds: 5    -> check every 5 seconds
    livenessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 15
      timeoutSeconds: 2    -> wait 2 seconds before reporting success
      periodSeconds: 5
      failureThreshold: 1   -> allow only 1 failure before restarts