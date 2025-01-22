Volumes

 types:
 - emptyDir: Empty directory for storing "transient" data (shares the Pod's lifetime) useful for sharing files between containers running in a Pod

 - hostPath: Pod mounts into the node's filesystem
    types include: 
      - DirectoryOrCreate
      - Directory
      - FileOrCreate
      - File
      - Socket
      - CharDevice
      - BlockDevice

 - nfs: An NFS (Network File System) share mounted into the Pod

 - configMap/secret: Special types of volumes that provide a Pod with access to K8s resources

 - persistentVolumeClaim: Provides Pods with a more persistent storage option that is abstracted from the details
    - PersistentVolume (PV) is a cluster-wide storage unit provisioned by an administrator with a lifecycle independent from a pod
    - PersistentVolumeClaim (PVC) is a request for a storage unit (PV)

 - cloud: cluster wide storage

StorageClasses
- is a template for creating PVs through creating a PVC so you don't have to create a pv first

StatefulSet:
- used to create stateful deployments like a DB
