#!/bin/bash
echo "-------------------------------"
echo "Starting Documentation Setup"
echo "-------------------------------"

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "Homebrew is not installed. Please install Homebrew from https://brew.sh/ and re-run this script."
    exit 1
else
    echo "Homebrew is installed."
fi

# Install Python3 if not already installed (or update it)
if ! command -v python3 &> /dev/null; then
    echo "Python3 is not installed. Installing Python3 via Homebrew..."
    brew install python
else
    echo "Python3 is installed: $(python3 --version)"
fi

# Install MkDocs and MkDocs Material using pip
echo "Installing MkDocs and MkDocs Material..."
pip3 install --upgrade pip
pip3 install mkdocs mkdocs-material

echo "-------------------------------"
echo "Documentation setup is complete!"
echo "You can now build your site using MkDocs."
echo "-------------------------------"
