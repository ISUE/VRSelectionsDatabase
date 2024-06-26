## to generate on win

### set env variable for BASE_URL
set BASE_URL=http://45.56.116.241/

### generate the static pages
yarn generate

### serve locally to test
npx serve .output/public

### transfer to the server
scp -P PORT -r ./.output/public/* USER@IP:/home/www/website