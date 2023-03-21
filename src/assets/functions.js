const callBDD = async (page) =>{
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = response.json()
    return data;
}

export {callBDD};