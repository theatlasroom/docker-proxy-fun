# Readme
Testing docker, deploying 2 nginx proxied apps.
This is a simple example showing config for 2 seperate services running in containers that can be proxied via an nginx service that runs in a seperate container.

Useful for hosting multiple apps on a single VPS

Uses `docker-compose` files to build services and nginx proxy

* [proxy](./proxy) - nginx proxy for multiple services, proxying based on virtual host settings
* [good-job](./good-job) - app 1
* [ma-man](./ma-man) - app 2


## Usage
* Install docker for your platform
* Ensure you have `docker-compose` working
* Create a network called `nginx-proxy`:
```
$ docker network create nginx-proxy
```
* Set host configs
```
$ sudo vi /etc/hosts # or whatever the window equivalent is

# Add the following lines into the hosts file
...
127.0.0.1 goodjob.app
127.0.0.1 maman.app
...
```
* Start the nginx-proxy
```
$ cd proxy
$ docker-compose up
```
* Start each app separately
```
$ cd (good-job|ma-man)
$ docker-compose up
```
* navigate to each app and enjoy
