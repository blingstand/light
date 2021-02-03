# CORS 
pb : “No 'Access-Control-Allow-Origin' header is present on the requested resource” in django


1/ installer
> $ pip install django-cors-headers 


2/ configuer

- settings.py 

> CORS_ALLOWED_ORIGINS = ["http://localhost:4200","http://localhost:8000"]
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]