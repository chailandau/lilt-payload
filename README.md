# Long Island Laser Tag Payload

Payload is a config-based TypeScript headless CMS. It is being used in conjuction with NextJS to create a headless build for Long Island Laser Tag.

## How to Use

`yarn dev` will start the website and reload on any changes.

### Docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`
