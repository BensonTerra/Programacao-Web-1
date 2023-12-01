export async function get(apiBaseUrl,resources="")
{
    try 
    {
        const response = await fetch(`${apiBaseUrl}/${resources}`)
        return handleResponse(response)
    } 
    catch (error) 
    {
        throw error
    }
}

export async function post(apiBaseUrl, resources, data)
{
    try 
    {
        const response = await fetch(`${apiBaseUrl}/${resources}`,
        {
            method: 'POST',
            headers:
            {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    } 
    catch (error) 
    {
        throw error
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