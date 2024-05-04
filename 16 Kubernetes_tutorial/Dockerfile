# https://www.baeldung.com/ops/docker-local-images-minikube
# https://blog.logrocket.com/deploy-react-app-kubernetes-using-docker

#@ Docker
#* 01. Build: docker build -t react-docker-app -f Dockerfile .
#* 02. Run: docker run -p 3000:80 react-docker-app

#@ Kubernetes
#* 03. eval $(minikube -p minikube docker-env)
#* 04. minikube image ls --format table
#* 05. minikube image build -t react-docker-app2 -f Dockerfile . (local Docker image without DockerHub)
#* 06. minikube image ls --format table
#* 07. kubectl create namespace react-docker
#* 08. kubectl config set-context --current --namespace=react-docker
#* 09. kubectl apply -f deployment.yaml
#* 10. kubectl get deployment -w
#* 11. kubectl apply -f load-balancer.yaml
#* 12. kubectl get services -w
#* 13. minikube ip -> App: http://your_minikube_ip:31000
#* 14. kubectl scale deployment react-docker --replicas=10
#* 15. kubectl scale deployment react-docker --replicas=3


FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# React app for production
RUN npm run build

# Using Nginx for serving static files
FROM nginx:alpine

# Copying the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
