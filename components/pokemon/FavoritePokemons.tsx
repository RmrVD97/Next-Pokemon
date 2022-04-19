import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoritePokemon } from './FavoritePokemon'


interface Props {
    favPokemons:number[],
}

export const FavoritePokemons:FC<Props> = ({favPokemons}) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
    {
        favPokemons.map( id => (
         <FavoritePokemon key={id} id={id}  />
))
               }
</Grid.Container>
  )
}
