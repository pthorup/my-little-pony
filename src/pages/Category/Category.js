import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PonyDataContext } from './../../components/PonyDataContextProvider'
import randomColor from 'randomcolor'

const Category = () => {
    const categories = useRef([
        'Alicorn',
        'Unicorn',
        'Earth',
        'Pegasus',
        'Dragon',
        'Human',
    ])

    const [selectedCat, setSelectedCat] = useState(categories)
    const { ponyData, loading, error } = useContext(PonyDataContext)

    const ponyFiltered = ponyData.filter(
        (pony) =>
            pony.kind !== undefined &&
            pony.image !== undefined &&
            pony.kind[0] === selectedCat
    )

    const ponyList = ponyFiltered.map((pony) => {
        return (
            <div key={pony.id}>
                <Link to={`/category/${selectedCat}/${pony.id}`}>
                    <img
                        className='PonyList-image'
                        src={pony.image[0]}
                        alt={pony.name}
                    />
                </Link>
            </div>
        )
    })

    return (
        <section>
            <h2>Types of Ponies</h2>

            <nav>
                {categories.current.map((category, index) => (
                    <div key={index}>
                        <button
                            onClick={(e) => setSelectedCat(e.target.value)}
                            value={category}
                        >
                            {category[0].toUpperCase() + category.slice(1)}
                        </button>
                    </div>
                ))}
            </nav>
            <div className='Category-content'>
                {loading && <div>Loading...</div>}
                {<div>{ponyList}</div>}
                {error ? error : null}
            </div>
        </section>
    )
}

export default Category
