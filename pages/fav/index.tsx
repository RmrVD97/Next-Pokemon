import { Card, Grid } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon';
import { NoFav } from '../../components/ui'
import { localFavorites } from '../../utils';

const Index = () => {

  const [favs, setfavs] = useState<number[]>([]);

  useEffect(() => {
      setfavs(localFavorites.pokemon());
  }, [])
  

  return (
    <Layout>
        <h1>Favoritos</h1>

        { 
            favs.length === 0 ?
            ( <NoFav/> ) :
            <FavoritePokemons favPokemons={favs} />
        }
       
    </Layout>
  )
}

export default Index