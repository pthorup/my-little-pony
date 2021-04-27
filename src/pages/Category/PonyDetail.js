import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PonyDataContext } from './../../components/PonyDataContextProvider'

const PonyDetail = ({ favourites, onFavouriteClick }) => {
    const { ponyData, loading, error } = useContext(PonyDataContext)

    const { ponyId } = useParams()
    const ponyIdInt = parseInt(ponyId)

    const { id, image, name, residence, occupation, kind, url } = ponyData.find(
        (item) => item.id === ponyIdInt
    )
    const [favourited, setFavourited] = useState([])

    useEffect(() => {
        const found = favourites.includes(id)
        found ? setFavourited(true) : setFavourited(false)
    }, [id, favourites])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyData && (
                <div>
                    <div>
                        {image.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                alt={name}
                                width='100'
                                className='PonyDetail-image'
                            />
                        ))}
                    </div>
                    <div>
                        <h2>{name ? name : 'Unknown'} </h2>

                        <h3>Residence</h3>
                        <p>{residence ? residence : 'Unknown'}</p>

                        <h3>Occupation</h3>
                        <p>{occupation ? occupation : 'Unknown'}</p>

                        <h3>Kind</h3>
                        <p>{kind.join(', ')}</p>

                        <p>
                            <a href={url} target='_blank' rel='noreferrer'>
                                Read more (external link)
                            </a>
                        </p>

                        <div
                            onClick={() => onFavouriteClick(id)}
                            title='favourited'
                        >
                            {favourited ? '💜' : '🤍'}
                        </div>
                    </div>
                </div>
            )}

            {error ? error : null}
        </div>
    )
}

export default PonyDetail
