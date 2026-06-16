#!/bin/bash
echo "=== Docker image analysis ==="
echo
for image in $(docker image --format "{{.repository}}:{{.Tag}}" | grep -v "<none>"); do
	echo " Size: $(docker images --format "{{.Size}}" $image)"
	echo " Created $(docker inspect --format='{{.Created}}' $image)"
	echo " Architecture: $(docker inspect --format='{{.Architecture}}' $image)"
	echo " Layers: $(docker history $images --quiet | wc -l)"
	echo "---"
done
