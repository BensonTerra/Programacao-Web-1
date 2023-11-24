export async function get(apiBaseUrl) 
{
  try {
    const response = await fetch(`${apiBaseUrl}`);
    return handleResponse(response);
  }
  catch (error) 
  {
    throw error;
  }
}

async function handleResponse(response)
{
    if (!response.ok)
    {
        const errorMessage = await response.text();
        throw new Error(`API request failed with status ${response.status} ${errorMessage}`)
    }
    const data =  await response.json()
    return data
}