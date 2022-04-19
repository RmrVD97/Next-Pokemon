import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';

type Props = {
  children?:React.ReactNode,
  title?:string,
}

const origin = (typeof window === 'undefined') ?  '' :  window.location.origin;

export const Layout:FC<Props> = ({ children,title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon Info' }</title>
            <meta name="author" content="Prof.Oak" />
            <meta name="description" content="Pokedex" />
            <meta name='keywords' content='pokedex, pokemon, pokemons, pokeapi' />
            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Informacion sobre ${title}`} />
            <meta property="og:image" content={`${origin}/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding:'0px 20px',
        }}>
            { children } 
        </main>
    
    
    </>
  )
}
