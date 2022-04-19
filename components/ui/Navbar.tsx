import { useTheme,Text, Spacer,Link } from '@nextui-org/react'
import React from 'react'
import Image from "next/image"
import NextLink from 'next/link';


export const Navbar = () => {

    const {theme} = useTheme();


  return (
    <div style={{
        backgroundColor: theme?.colors.gray800.value,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent:'start',
        padding:'0px 20px',

    }}>

      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Logo'
        width={70}
        height={70}
      />

      <NextLink href='/' passHref >
        <Link>
         <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
       

        <Spacer css={{ flex:1 }} />

        <NextLink href='/fav' passHref >
        <Link>
        <Text color='white' h3>Favoritos</Text>
        </Link>
      </NextLink>

       


    </div>
  )
}
