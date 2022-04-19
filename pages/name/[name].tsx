import { Grid, Card, Button, Container,Text,Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import React, { useState } from 'react'
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import {GetStaticProps, NextPage,GetStaticPaths} from 'next';

import { Pokemon } from '../../interfaces';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces/pokemonlist';
import { getPokemonInfo } from '../../utils/PokemonGetInfo';


interface Props {
    pokemon:Pokemon,
}


const PokemonByNamePage:NextPage<Props> = ({pokemon}) => {

    const [IsInFav, setIsInFav] = useState(  typeof window === 'object' && localFavorites.existInFavorites(pokemon.id) );

    const onToggle = () => {
      localFavorites.toggleFavorites(pokemon.id);
      setIsInFav(!IsInFav);
  
       if (IsInFav) return;
  
       confetti({
         zIndex:999,
          particleCount: 100,
          spread: 360,
          angle: -100,
          origin: { 
            x: 1,
            y: 0
          }
       })
  
    }



  return (
    <Layout title={pokemon.name}>
    <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
      <Grid xs={ 12 } sm={ 4 } >
        <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
        </Card>
      </Grid>

      <Grid xs={ 12 } sm={ 8 }>
        <Card>
          <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text h1 transform='capitalize'>{ pokemon.name }</Text>

            <Button
              onClick={onToggle}
              color="gradient"
              ghost={!IsInFav}
            >
              Guardar en favoritos
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>

            <Container direction='row' display='flex' gap={ 0 }>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

            </Container>


          </Card.Body>  


        </Card>
      </Grid>

   </Grid.Container>

</Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    //  const { data } = await  // your fetch function here 
  
     // const pokemon151 = [...Array(151)].map( (value,index) => `${ index +1 }` );
      const  { data }  = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
        
      const pokemons:string[] = data.results.map( (pokemon) => pokemon.name );

      
       return {
          paths:pokemons.map( name => ({
              params: {
                  name,
              }
          }))
          ,
          fallback: "blocking"
      }
  }
  
  export const getStaticProps:GetStaticProps = async({params}) => {
  
    const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo( name )
    }
  }
  }

export default PokemonByNamePage;