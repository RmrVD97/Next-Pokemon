import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
    id:number,
}




export const FavoritePokemon:FC<Props> = ({id}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`pokemon/${id}`)
    }

  return (
    < Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } onClick={onClick}>
          <Card hoverable clickable css={{ padding: 10 }}>
          <Card.Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
              width={'100%'}
              height={ 140 }
          />
          </Card>
      </Grid>
  )
}
