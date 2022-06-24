# London Towers

A small app to display a few of the iconic landmarks in central London, seen from Canary Wharf.

![Screenshot of the London Towers app](./app-screenshot.png)

Build with React/NextJS, TypeScript, and Tailwindcss, running with a MongoDB backend for storing information about each landmark.
The service can be build to a Docker image and includes configuration for deployment on [Kubernetes](https://kubernetes.io) (which is a bit overkill, but this shows a relative basic setup on Kubernetes with an app connected to a persisted database).

## Development

To develop locally, you will need to startup an [mongodb](https://mongodb.com) instance.
If you have already installed [Docker](https://docker.com), run the following command:

```sh
docker run --rm --name towers-db -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo
```

You can then run the dev server with the command below, which should run and host the app on `localhost:3000`:

```sh
yarn dev
```

The repository includes a `.env.local` file where the credentials and connection details for mongo is defined.

## Deployment on Kubernetes

The `kube` directory contains a basic configuration for deploying the app with mongo on Kubernetes.
The easiest way to get started locally is using [minikube](https://minikube.sigs.k8s.io/docs/).
You will also need `kubectl` installed and avaliable locally.
On Mac, both can be installed with brew: `brew install minikube kubectl`.

After installation, run:

```sh
minikube start
```

And now you should have a local cluster up and running.

I prefer to put everything in a namespace when working with Kubernetes.
This can be created and set as the default with:

```sh
kubectl create namespace <your-namespace>
kubectl config set-context --current --namespace=london-towers
```

### Create MongoDB

For MongoDB, we will create the Deployment itself, a Service to expose it internally, along with a PersistentVolumeClaim to ensure the data remains even if the container goes down.
The credentials used for the database is also defined as secrets in Kubernetes.
These can be seen in `mongodb-secrets.yaml`.
A `mongodb-client` is also created, which allows you to connect directly to the mongodb instance and manage it from there.

To create the resources for MongoDB, navigate to `kube/mongo/` and run:

```sh
kubectl apply -f .
```

If you want to access the mongodb from the client, use `kubectl exec deployment/mongo-client -it -- /bin/bash`.
When inside the client, use `mongo --host mongo-nodeport-svc --port 27017 -u <username> -p <password>` to connect to the database.

### Create service

To create the necessary Deployment, Service, and Ingress for the app to run, navigate to the `kube/app` directory and run apply again:

```sh
kubectl apply -f .
```

As minikube does not expose anything outside of the cluster by default, you can use a port forward to access the app from your browser on [localhost:4000](http://localhost:4000):

```sh
kubectl port-forward service/towers-service 4000:3000
```

And now everything should be up and running!

### Building image locally for minikube

By default Kubernetes will pull the desired image from [Docker Hub](https://hub.docker.com).
If you want to build and use your local image from development, you will have to build it inside the minikube context.
In your desired shell, first run the following command to set the context for minikube to your local docker environment.

```sh
eval $(minikube docker-env)
```

Afterwards you can build the image locally as you usually would.

```sh
docker build --tag oliverflecke/london-towers:latest .
```

You can use Kubernetes rollout feature to update the deployment with the lastest image.
Note that this will disconnect the port forwarding from earlier, so you will have to restart that.

```sh
kubectl rollout restart deployment/towers
```
