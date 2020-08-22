import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { searchCountries } from '../../redux/actions/'
import themeContext, { themes } from '../../themeContext'
import CountryLists from '../Country/country' 
import Cart from '../Cart'
import useStyles from './style'
import { AppState } from '../../types'

export default function NavBar() {
  const classes = useStyles()
  const { theme, switchTheme } = useContext(themeContext)
  const dispatch = useDispatch()
  const cartItems = useSelector((state: AppState) => state.countries.inCart)

  const [toggleMenu, setToggleMenu] = useState(false)
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog)
  }

  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    setCartCount(cartItems.length)
  }, [cartItems])

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleNewSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(searchCountries(e.target.value))
  }

  // I will dispatch action to seachCountries from here using useDispatch

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
            Countries
          </Typography>
          <div className={classes.search}>
            <IconButton className={classes.searchIcon} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              autoComplete="off"
              placeholder="Search…"
              onChange={handleNewSearchChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            aria-label="shopping Cart"
            className={classes.grow}
            onClick={menuToggle}
          >
            <Badge badgeContent={cartCount} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          {toggleMenu ? (
            <div className="cart-list" aria-label="selected items">
              <Cart />
            </div>
          ) : (
            <div></div>
          )}
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
      <main className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        <br></br>
        <CountryLists /> 
      </main>
    </div>
  )
}