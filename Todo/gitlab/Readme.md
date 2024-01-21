# Authenticate with the container Registry

# CI_REGISTRY_USER CI/CD Variable

- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY

# CI job token

- docker login -u $CI_JOB_USER -p $CI_JOB_TOKEN $CI_REGISTRY

# Personal Access token

- docker login -u <username> -p <access token> $CI_REGISTRY
