# Google Cloud Storage Emulator GUI

This is to Connect Google Cloud Emulator running through 'oittaa/gcp-storage-emulator' on local.


## Getting started

### docker


The following environment variables need to be set.

- `PROJECT_ID`: Google Cloud project ID
- `API_ENDPOINT`: The emulator endpoint 


Below is the Example of Docker-Compose .
gcs-gui-emulator is the UI Image which will connect to gcp-cloud-storage

````
services:
  gcp-cloud-storage:
    image: oittaa/gcp-storage-emulator:latest
    networks:
      - emulator-network
    ports:
      - 8080:8080
  gcs-gui-emulator:
    image: shushant76/gcs-gui-emulator:latest
    environment:
      - API_ENDPOINT=http://gcp-cloud-storage:8080
      - PROJECT_ID=tlk-dev01-eng01-9115
    networks:
      - emulator-network
    ports:
      - 3000:3000 #port on which UI is going to be hosted
      - 3002:3002 #this port is for gcs-gui-emulator internal node service that connects to GC-EMULATOR
networks:
  emulator-network:
    driver: bridge
````

 # creating Bucket In Google Cloud Emulator (Node js)
 
 ````
  const storage = new Storage({
      projectId: projectId,
      apiEndpoint: apiEndpoint
    }).createBucket(uploadBucketName);
 ````
 
 <img width="799" alt="image" src="https://github.com/shushantkpal/gcs-gui-emulator/assets/58916316/2bcf0afb-65e6-432e-a3ff-83dfcb9c077e">

