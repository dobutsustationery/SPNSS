#!/bin/bash

# Configuration
DOMAINS=("spnss.com" "www.spnss.com")

echo "Starting deployment verification for: ${DOMAINS[*]}"
echo "--------------------------------------------------"

for DOMAIN in "${DOMAINS[@]}"; do
    echo "Checking domain: $DOMAIN"
    
    # 1. Check DNS Resolution
    IP=$(dig +short "$DOMAIN" | tail -n1)
    if [ -z "$IP" ]; then
        echo "  [FAIL] DNS resolution failed for $DOMAIN"
    else
        echo "  [OK] DNS resolves to: $IP"
    fi

    # 2. Check HTTP to HTTPS Redirect
    echo "  Checking HTTP to HTTPS redirect..."
    RESPONSE=$(curl -sI "http://$DOMAIN")
    HTTP_CODE=$(echo "$RESPONSE" | grep "HTTP/" | awk '{print $2}')
    LOCATION=$(echo "$RESPONSE" | grep -i "location:" | awk '{print $2}' | tr -d '\r')

    if [[ "$HTTP_CODE" =~ ^3[0-9][0-9]$ ]]; then
        if [[ "$LOCATION" == https://* ]]; then
            echo "  [OK] HTTP $HTTP_CODE redirect to $LOCATION"
        else
            echo "  [WARN] HTTP $HTTP_CODE redirect to non-HTTPS location: $LOCATION"
        fi
    else
        echo "  [FAIL] No redirect found (HTTP $HTTP_CODE). Expected 3xx redirect to HTTPS."
    fi

    # 3. Check for GitHub Headers (if applicable)
    GH_ID=$(echo "$RESPONSE" | grep -i "x-github-request-id")
    if [ -n "$GH_ID" ]; then
        echo "  [INFO] GitHub Request ID found: $GH_ID"
    fi

    echo ""
done

echo "Verification complete."
