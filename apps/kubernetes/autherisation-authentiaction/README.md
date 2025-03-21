Roles:

apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-viewer
rules:
- apiGroupds: [""]
  resources: ["pods", "nodes"]
  verbs: ["list"]   -> actions


  RoleBinding to bind a user to role

  apiVersion: rbac.authorization.k8s.io/v1
  kind: RoleBinding  --> or ClusterRoleBinding
  metadata:
    name: pod-viewer-binding
  subjects:
  - kind: User
    name: username
    namespace: default
  roleRef:
  - kind: Role   -> or ClusterRole
    name: pod-viewer-role
    apiGroup: rbac.authorization.k8s.io