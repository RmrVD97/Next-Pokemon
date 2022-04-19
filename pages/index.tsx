import { Button, Card, Grid, Row, Spacer,Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layouts'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons:SmallPokemon[],
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
   <>
   <Layout title='Listado de Pokemon'>
    
    
     <Grid.Container gap={2} justify='flex-start'>
       {
          pokemons.map((pokemon) => {
            return <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
          } )
        }
       

        


     </Grid.Container>
     
   </Layout>
   
   </>
  )
}

export const getStaticProps:GetStaticProps = async(context) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


    const pokemons:SmallPokemon[] = data.results.map((pokemon,index) => { 
     
      pokemon.id = index+1;
      pokemon.img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
      return pokemon;
    }  );

  return {
    props: {

      pokemons,
    }, // will be passed to the page component as props
  }
}


export default HomePage
