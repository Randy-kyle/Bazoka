exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://clarasu.netlify.app',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': 'https://clarasu.netlify.app',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    // Input validation
    if (!username || !password) {
      return {
        statusCode: 400,
        headers: { /* ... */ },
        body: JSON.stringify({ error: 'Username and password required' })
      };
    }

    // Check credentials (use environment variables in production)
    const validCredentials = (
      username === 'randy kyle' && 
      password === 'randy76'
    );

    if (validCredentials) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': 'https://clarasu.netlify.app',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          success: true,
          message: 'Authentication successful'
        })
      };
    } else {
      return {
        statusCode: 401,
        headers: { /* ... */ },
        body: JSON.stringify({ 
          success: false,
          error: 'Invalid credentials'
        })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://clarasu.netlify.app',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        details: error.message 
      })
    };
  }
};
