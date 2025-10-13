// Load environment variables for client-side use
// For static sites, we set the API key directly since .env files aren't served

window.GROQ_API_KEY = 'YOUR_API_KEY_HERE';
console.log('API key loaded successfully');
