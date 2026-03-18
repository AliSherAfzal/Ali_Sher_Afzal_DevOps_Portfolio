# DevOps Portfolio

This is a static portfolio site for Ali Sher Afzal with a Docker and CI/CD setup.

## Run locally with Docker

```bash
docker compose up --build
```

Open `http://localhost:8080`.

## CI/CD workflow

`.github/workflows/docker-ci.yml`:

- Builds the Docker image on pull requests.
- Builds and pushes the image to GHCR on pushes to `main`.
