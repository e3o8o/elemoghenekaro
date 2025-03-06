#!/bin/bash

# Check if command and argument were provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Please provide a command (add/delete) and the required argument"
    echo "Usage:"
    echo "  For deleting:"
    echo "    ./post-utils.sh delete <filename>"
    echo "    ./post-utils.sh delete <url>"
    echo "  For adding regular post:"
    echo "    ./post-utils.sh add '{\"title\":\"My Post\",\"date\":\"2024-03-10\",\"content\":\"Post content\",\"banner\":\"optional-banner.jpg\"}'"
    echo "  For adding external post:"
    echo "    ./post-utils.sh add '{\"title\":\"External Post\",\"date\":\"2024-03-10\",\"excerpt\":\"Brief excerpt\",\"externalUrl\":\"https://example.com\",\"source\":\"Medium\"}'"
    exit 1
fi

# Run the Node.js script with all arguments
node post-utils.js "$@" 