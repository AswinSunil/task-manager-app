Project Description: A simple task manager application in which you can see POST requests to create a task, delete a task, etc. The application uses github actions for CI pipeline and Argocd for CD pipeline.

This repo (task-manager-app) is used by github actions for constructing CI pipeline.

Since the workflow is set to trigger manually go to your online repo->actions tab-> click the Build, Push Docker Image and Deploy action and click on run workflow. What this workflow will do:

1. Build a docker image from the docker file we provided.
2. Push the image to our GHCR
3. Update the image tag used in deployment.yaml file of gitops-repo