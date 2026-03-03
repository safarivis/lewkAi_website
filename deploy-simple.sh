#!/bin/bash
# Simple deployment using scp (if rsync not available)

VPS_USER="root"
VPS_HOST="72.62.235.141"
VPS_WEB_ROOT="/var/www/html"

echo "🚀 Deploying LewkAI website..."

# Create tar archive
cd dist
tar -czf ../lewkai-site.tar.gz .
cd ..

# Upload to server
scp lewkai-site.tar.gz ${VPS_USER}@${VPS_HOST}:/tmp/

# Extract on server
ssh ${VPS_USER}@${VPS_HOST} "
    sudo rm -rf ${VPS_WEB_ROOT}/*
    sudo tar -xzf /tmp/lewkai-site.tar.gz -C ${VPS_WEB_ROOT}/
    sudo chown -R www-data:www-data ${VPS_WEB_ROOT}
    sudo chmod -R 755 ${VPS_WEB_ROOT}
    rm /tmp/lewkai-site.tar.gz
"

# Clean up
rm lewkai-site.tar.gz

echo "✅ Deployment complete!"
echo "Visit: http://72.62.235.141"
