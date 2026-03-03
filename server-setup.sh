#!/bin/bash
# Server setup script - Run ONCE on your VPS
# SSH into your server and run: bash server-setup.sh

set -e

echo "🖥️ Setting up web server on Ubuntu 24.04..."

# Update system
apt update && apt upgrade -y

# Install nginx
apt install -y nginx rsync

# Configure firewall
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable

# Create web root
mkdir -p /var/www/html
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

# Configure nginx for static site
cat > /etc/nginx/sites-available/lewkai << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/html;
    index index.html index.htm;
    
    server_name _;  # Accept any hostname
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/lewkai /etc/nginx/sites-enabled/default

# Test nginx config
nginx -t

# Restart nginx
systemctl restart nginx
systemctl enable nginx

echo "✅ Server setup complete!"
echo ""
echo "Next steps on your LOCAL machine:"
echo "  1. cd lewkai-site/"
echo "  2. npm run build"
echo "  3. ./deploy.sh"
echo ""
echo "Your site will be available at:"
echo "  http://72.62.235.141"
