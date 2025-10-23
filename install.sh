#!/bin/bash

echo "Installing Jonathan Kawasaki Portfolio Website..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "npm is not available. Please check your Node.js installation."
    exit 1
fi

echo "Node.js version:"
node --version
echo
echo "npm version:"
npm --version
echo

echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi

echo
echo "✅ Installation completed successfully!"
echo
echo "To start the development server, run:"
echo "  npm run dev"
echo
echo "To build for production, run:"
echo "  npm run build"
echo

