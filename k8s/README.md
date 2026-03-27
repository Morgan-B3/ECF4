# Kubernetes manifests (ECF4)

## Files

- `00-namespace.yaml`: namespace `ecf4`
- `01-configmap.yaml`: ConfigMap
- `02-secret.yaml`: Secret
- `03-mysql-pv.yaml`: MySQL persistent volume
- `04-mysql-pvc.yaml`: MySQL persistent volume claim
- `05-mysql-deployment.yaml`: MySQL deployment
- `06-mysql-service.yaml`: MySQL service
- `07-redis-deployment.yaml`: Redis deployment
- `08-redis-service.yaml`: Redis service
- `09-authentication-deployment.yaml`: authentication-service deployment
- `10-authentication-service.yaml`: authentication-service service
- `11-common-data-deployment.yaml`: common-data-service deployment
- `12-common-data-service.yaml`: common-data-service service
- `13-payment-deployment.yaml`: payment-service deployment
- `14-payment-service.yaml`: payment-service service
- `15-client-deployment.yaml`: React client deployment
- `16-client-service.yaml`: React client NodePort service

## Before apply

1. Build local images from the project root:
   - `docker-compose build`
2. If using kind, load images into cluster nodes:
   - `kind load docker-image ecf4-authentication-service:latest --name ecf4`
   - `kind load docker-image ecf4-common-data-service:latest --name ecf4`
   - `kind load docker-image ecf4-payment-service:latest --name ecf4`
   - `kind load docker-image ecf4-client:latest --name ecf4`
3. Optionally change secret values in `02-secret.yaml`.

## Deploy

```bash
kubectl apply -f k8s/
```

## Verify

```bash
kubectl get all -n ecf4
kubectl get pvc -n ecf4
```

Client URL (NodePort default):
- `http://<node-ip>:30080`
