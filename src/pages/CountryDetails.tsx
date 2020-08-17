import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import { AppState, Country } from '../types'
// import NavBar from '../Components/NavBar/navBar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useStyles from '../Components/NavBar/style'
import themeContext, { themes } from '../themeContext'
import { Button } from '@material-ui/core'



export const CountryDetails = () => {
  const { name } = useParams()
  const history = useHistory()
  const classes = useStyles()
  const { theme, switchTheme } = useContext(themeContext)
  const [open, setOpen] = React.useState(false)




  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const countries = useSelector((state: AppState) => state.countries.list)
  const country: Country | any = countries.find(
    (country) => country.name === name
  )

  const changePageToHome = () => {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: theme.code }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Button
              variant="contained"
              color="secondary"
              onClick={changePageToHome}
            >
              Home
            </Button>
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackIcon />
          </IconButton>
          <h3>Switch Theme</h3>
        </div>
        <Divider />
        <List>
          {[themes.primary, themes.secondary, themes.third].map(
            (item, code) => (
              <ListItem
                button
                key={item.code}
                onClick={() => {
                  switchTheme(item.code)
                }}
              >
                <ListItemText primary={item.color} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <section>
          <img src={country.flag} alt="flag of that country" width="250px" />
          <h1>{country.name}</h1>
          <p>
          Population of this country is : {country.population} and is situated
          in <br />
            {country.region} and <br />
            {country.subregion}
          </p>
        </section>
      </main>
    </div>
  )
}
