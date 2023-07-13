# Impact Intell Portal

## Setup
```shell script
cp readme/.env .env
composer install
```

## Webpack Setup
```shell script
npm install
```

For one-time build dev, requires to re-run on changes
```shell script
npm run dev
```

For watcher and browserSync, make sure you edit the `.env` file to match your requirements for hosting the project for 
proxy.
```shell script
npm run watch
```

```dotenv
# Webpack
BROWSER_SYNC_HOST=http://localhost
BROWSER_SYNC_PORT=3000
```

If you are not using any hosting software, you can still use php to host it locally with port 80:
```shell script
sudo php artisan serve --port=80
```
