Commands:
docker build -t name -f [file location] . 

docker ps -> lists all containers

docer image ls -> lists all images

docker save [imagename]:[imagetag] --output [name or tar] -> compress to tar

docker save --format oci-archive -o [name]

docker save [name] | gzip > image.tar.gz


docker commit <container> <imagename> ---> creates an image from container

docker image tag [oldname] mkarara/ckad:docker --> rename image

docker image rm [name]  -> remove image