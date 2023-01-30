import {useEffect, useState} from "react"
import Character from "./Character"

function NavPage({page,setPages}) {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <p>Page : {page}</p>
            <button
                onClick={() => {
                    setPages(page + 1)
                }}
                className='btn btn-primary btn-sm '>Next Page</button>
        </div>
    )
}

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPages] = useState(1)

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setLoading(false)
            setCharacters(data.results);
        }

        fetchData()
    }, [page])


    return (
        <div className="container">
            <NavPage page={page} setPages={setPages}/>
            {
                loading ? ( <h1>loading</h1>) : 
                <div className="row">
                {
                    characters.map(character => {
                        return (
                            <div className="col-md-4" key={character.id}>
                                <Character  character={character}/>
                            </div>
                        )
                    })
                }
                </div>
            }
            <NavPage page={page} setPages={setPages}/>
        </div>
    )
}

export default CharacterList