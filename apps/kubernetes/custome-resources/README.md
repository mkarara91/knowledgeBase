Custom resource Definition (CRD)
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: applications.example.com
spec:
  group: example.com
  scope: NameSpaced
  names:
    plural: applications
    singular: application
    kind: Application
    shortNames:
      - app