// Load environment variables for client-side use
// For static sites, we set the API key directly since .env files aren't served

// Replace 'YOUR_API_KEY_HERE' with your actual Groq API key
// Get your API key from: https://console.groq.com/keys
window.GROQ_API_KEY = 'YOUR_API_KEY_HERE';
console.log('API key loaded successfully');
