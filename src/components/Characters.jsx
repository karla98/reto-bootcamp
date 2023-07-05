export function Characters({character}){
    if (!character) {
        return null; // Si character es undefined, retornar null
      }
    
    return(
        <div className="card">
            <h2>{character.name || '--'}</h2>
            <img src={character.image || 'img/no_image.jpg'} alt={character.name || '--'}/>
            <div className="card-description">
                <p><strong>Location:</strong>{character.location.name || '--'}</p>
                <p><strong>Status:</strong>{character.status || '--'}</p>
                <p><strong>Species:</strong>{character.species || '--'}</p>
            </div>
            <button className="card-button">More</button>

        </div>
    )
}