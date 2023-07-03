import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppBar, Box, Button, Dialog, Drawer, IconButton,  Toolbar, Typography} from '@mui/material'
import Close from '@mui/icons-material/Close'
import  MenuIcon  from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [showModalCloseButton, setShowModalCloseButton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setModalOpen(true)
        }, 10000)
    }, [setModalOpen])

    useEffect(() => {
        setTimeout(() => {
            setShowModalCloseButton(true)
        }, 13000)
    }, [setShowModalCloseButton])

  return (
    <div className={styles.container}>
      <Head>
        <title>Sally's Sweet Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed" open={drawerOpen}>
      <Toolbar sx={{
        justifyContent: 'space-between',
      }}>
        <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography>
          My Fantastic App
        </Typography>
        <Button sx={{
            backgroundColor: 'pink'
        }}
        variant="contained"
                onClick={() => alert('You joined!')}
                tabIndex={-1}
        >
          Join Now
        </Button>
      </Toolbar>
      </AppBar>

      <Drawer  open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="right">
        <Box sx={{ margin: '10px'}}>
          <div>Sidebar Content</div>
          <Button
              sx={{ marginTop: '20px'}}
              variant="outlined"
            onClick={() => alert('You joined!')}
              >Join Now
          </Button>
        </Box>
      </Drawer>

        <Dialog open={modalOpen}>
            <Box sx={{ margin: '25px'}}>

            <Typography>Would you like to buy our other products?</Typography>
            <Button onClick={() => alert('Yippee!')}>Yes please!</Button>
            {showModalCloseButton && <Button sx={{ color: 'lightblue'}} onClick={()=> setModalOpen(false)}>No, take me back</Button>}
            </Box>
        </Dialog>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Amazing Site Aggregator
        </h1>

        <p className={styles.description}>
          Get links to all of your favourite websites:
        </p>

        <div className={styles.grid}>
          <a href="https://google.com" className={styles.card} role="table">
            <h4>Google</h4>
            <p>Search for web results from across the globe</p>
          </a>

          <a href="https://bing.com" className={styles.card} target="_blank">
            <h2>Bing</h2>
            <p>Search for web results from across the globe</p>
          </a>

          <p className={styles.description2}>and many more to come...</p>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
