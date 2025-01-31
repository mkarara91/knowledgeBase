Services:

ClusterIP:
What it does:
Exposes the service internally within the cluster.
The service gets a cluster-wide IP address.
Can only be accessed by other pods inside the cluster

Microservices communication inside the cluster (e.g., a frontend calling a backend service).

piVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80  # Service port
      targetPort: 8080  # Container port

use name or describe service and get ip

NodePort
🔹 What it does:
Exposes the service externally on each node’s IP at a static port (range 30000-32767).
Can be accessed using <NodeIP>:<NodePort>.
Works on all cluster nodes, even if the pod is running on only one of them.
📌 Use case:
Useful for debugging or accessing services externally without a load balancer.

apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
      nodePort: 32080  # Exposes service on <NodeIP>:32080

Hard to use in production (because Node IPs may change).
Not ideal for high-traffic applications.


LoadBalancer
🔹 What it does:
Exposes the service externally using a cloud provider’s load balancer.
Works only in cloud environments (AWS, GCP, Azure, etc.).
The LoadBalancer distributes traffic to multiple nodes.
📌 Use case:
Exposing services to the internet in cloud environments.
Suitable for production deployments

apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080

How to access it:
After creation, get the external IP assigned by the cloud provider:


kubectl get svc my-service

Look for the EXTERNAL-IP field and access:


curl http://<External-IP>:80