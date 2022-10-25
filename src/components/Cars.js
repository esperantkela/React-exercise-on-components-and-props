const Car = ({color, name, year}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (name) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque: { name }</p>
                <p>Année: {year ? year : 'Pas de date' }</p>
                {colorInfo}
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
