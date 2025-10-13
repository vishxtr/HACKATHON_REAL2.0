// Load environment variables from .env file for client-side use
// This script loads the .env file and makes variables available as window globals

async function loadEnv() {
    try {
        const response = await fetch('.env');
        if (!response.ok) {
            console.warn('Could not load .env file');
            return;
        }
        const envText = await response.text();
        const envVars = {};

        // Parse .env file (simple key=value format)
        envText.split('\n').forEach(line => {
            line = line.trim();
            if (line && !line.startsWith('#')) {
                const [key, ...valueParts] = line.split('=');
                if (key && valueParts.length > 0) {
                    const value = valueParts.join('=').trim();
                    // Remove quotes if present
                    const cleanValue = value.replace(/^["']|["']$/g, '');
                    envVars[key.trim()] = cleanValue;
                }
            }
        });

        // Make available globally
        window.GROQ_API_KEY = envVars.GROQ_API_KEY;
        console.log('Environment variables loaded successfully');
    } catch (error) {
        console.warn('Failed to load environment variables:', error);
    }
}

// Load environment variables when script runs
loadEnv();
