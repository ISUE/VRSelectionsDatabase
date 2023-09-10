# vr_selections
Currently at [http://45.56.116.241/](http://45.56.116.241/)

### Deploying with Nginx

1) Clone the repository
    ```bash
    git clone https://github.com/ISUE/vr_selections
    cd vr_selections
    ```
2) Install Nginx
    ```bash
    sudo apt update
    sudo apt install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```
    At this point if you go to the publix IP, it should show the "Welcome to Nginx" page.
3) Place files into hosted directory. For now, just a dir in user's home.
    ```bash
    cp ./* /home/mykola/www/
    ```
4) Configure Nginx to serve from this directory
    
    Open the file using
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

    Then, locate the line with "root" and replace it with the targer directory
    ```cfg
    root /home/mykola/www/
    ```

5) Reload Nginx
    ```bash
    sudo systemctl reload nginx
    ```

6) It should work now. GET on port 80 at server's public IP, like
    45.56.116.241:80

If doesn't work idk, ask ChatGPT.
