# Show images
docker images

# Run image with env variables
docker run -e NAME_VARIABLE_ENV=VALUE -p PORT_RUN:PORT_EXPOSE_DOCKERFILE IMAGE_ID | REPOSITORY