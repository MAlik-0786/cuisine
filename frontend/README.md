# 🍳 CuiSine - AI Recipe Generator

A simple MERN stack application where users can select ingredients they have in their kitchen and get AI-generated recipes using Google's Gemini AI.

## ✨ Features

- 🎯 Select ingredients from a predefined list
- ➕ Add custom ingredients
- 🤖 AI-powered recipe generation using Gemini
- 🎨 Beautiful, modern UI with gradient designs
- 📱 Fully responsive design
- ⚡ Fast and simple to use

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **AI**: Google Gemini AI
- **Styling**: Vanilla CSS with modern gradients

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

## 🚀 Setup Instructions

### 1. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy .env.example to .env and add your API key
copy .env.example .env

# Edit .env file and add your Gemini API key:
# GEMINI_API_KEY=your_actual_api_key_here
# PORT=5000

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal
# Navigate to the root folder (cuisine)
cd ..

# The dependencies are already installed
# Just start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎮 How to Use

1. **Select Ingredients**: Click on ingredient buttons to select them (they'll turn purple)
2. **Add Custom Ingredients**: Type in the search box and click "Add" or press Enter
3. **Remove Ingredients**: Click the × button on selected ingredient tags
4. **Generate Recipe**: Click "Make Recipe" button
5. **View Results**: Your AI-generated recipe will appear at the bottom!

## 📁 Project Structure

```
cuisine/
├── backend/
│   ├── server.js          # Express server with Gemini AI
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables (create this)
├── src/
│   ├── App.jsx           # Main React component
│   ├── App.css           # Component styles
│   ├── index.css         # Global styles
│   └── main.jsx          # React entry point
├── index.html            # HTML template
└── package.json          # Frontend dependencies
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient background
- **Glassmorphism**: Semi-transparent card with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Poppins font from Google Fonts
- **Responsive Design**: Works on all screen sizes

## 🔧 Troubleshooting

### Backend not connecting?
- Make sure backend server is running on port 5000
- Check if .env file has correct GEMINI_API_KEY
- Verify no other app is using port 5000

### Recipe not generating?
- Check browser console for errors
- Verify Gemini API key is valid
- Make sure you have internet connection

### Port already in use?
- Change PORT in backend/.env file
- Update API URL in src/App.jsx (line 71)

## 📝 Notes for Beginners

- **Frontend** runs on Vite (fast development server)
- **Backend** runs on Express (simple web server)
- **API calls** use fetch() to connect frontend to backend
- **State management** uses React useState hooks
- **Styling** uses vanilla CSS (no frameworks needed)

## 🌟 Future Enhancements

- Save favorite recipes
- Share recipes with friends
- Filter by cuisine type
- Dietary restrictions
- Cooking difficulty levels
- Image generation for recipes

## 📄 License

MIT License - Feel free to use this project for learning!

## 🤝 Contributing

This is a beginner-friendly project. Feel free to:
- Add more ingredients
- Improve the UI
- Add new features
- Fix bugs

---

Made with ❤️ using MERN Stack and Gemini AI
