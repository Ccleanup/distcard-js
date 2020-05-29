import React from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Player</th>
            <th>Cards</th>
        </tr>
        </thead>
    )
}

const TableBody = props => {
    const shuffled = props.shuffled
    const noCard = props.noCard
    const noPlayer = props.noPlayer

    const chunks = []
    while (shuffled.length) {
      chunks.push(shuffled.splice(0, noCard))
    }

    const rows = chunks.map((chunk, index) => {

        if (index < noPlayer ) {
            
            return (
                <tr key={index}>
                    <td>Player {index + 1}:</td>
                    <td>{chunk.map(v => v+",")}</td>
                </tr>
            )
        } else {
            return null
        }
    
    })

    return <tbody >{rows}</tbody>
}

const Table = props => {
    const shuffled = props.shuffled()
    const noCard = props.noCard()
    const noPlayer = props.noPlayer()

    return (
        <table>
            <TableHeader />
            <TableBody shuffled={shuffled} noCard={noCard} noPlayer={noPlayer}/>
        </table>
    )
    
}

export default Table