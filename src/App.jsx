import React from 'react'
import CharacterList from './components/CharacterList'
import Character from './components/Character'
import {useEffect, useState} from 'react'

function App() {
    return (
        <div className='bg-dark text-white'>
            <h1 className='text-center display-1 py-4'>Rick And Morty</h1>
            <CharacterList/>
        </div>
    )
}

export default App