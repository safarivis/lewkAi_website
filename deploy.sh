#!/bin/bash
# LewkAI Website Deployment Script
# Run this from your local machine after building

set -e

# VPS Configuration
VPS_USER="root"
VPS_HOST="72.62.235.141"
VPS_WEB_ROOT="/var/www/html"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting LewkAI deployment...${NC}"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: dist/ folder not found!${NC}"
    echo "Run 'npm run build' first."
    exit 1
fi

# Backup current site (optional but recommended)
echo -e "${YELLOW}📦 Creating backup on server...${NC}"
ssh ${VPS_USER}@${VPS_HOST} "
    if [ -d ${VPS_WEB_ROOT} ]; then
        BACKUP_NAME=\"backup_\$(date +%Y%m%d_%H%M%S)\"
        sudo cp -r ${VPS_WEB_ROOT} /root/\${BACKUP_NAME}
        echo \"Backup created: /root/\${BACKUP_NAME}\"
    fi
"

# Sync files to server
echo -e "${YELLOW}📤 Uploading files to VPS...${NC}"
rsync -avz --delete \
    --exclude='*.txt' \
    --exclude='CLAUDE.md' \
    dist/ ${VPS_USER}@${VPS_HOST}:${VPS_WEB_ROOT}/

# Set correct permissions
echo -e "${YELLOW}🔐 Setting permissions...${NC}"
ssh ${VPS_USER}@${VPS_HOST} "
    sudo chown -R www-data:www-data ${VPS_WEB_ROOT}
    sudo chmod -R 755 ${VPS_WEB_ROOT}
"

# Verify deployment
echo -e "${YELLOW}✅ Verifying deployment...${NC}"
ssh ${VPS_USER}@${VPS_HOST} "ls -la ${VPS_WEB_ROOT}/"

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo ""
echo "Test your site:"
echo "  - http://72.62.235.141"
echo "  - http://lewkai.com (if DNS is configured)"
echo ""
echo "Check these URLs:"
echo "  - http://72.62.235.141/robots.txt"
echo "  - http://72.62.235.141/sitemap.xml"
