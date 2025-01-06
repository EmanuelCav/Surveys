import MenuIcon from '@mui/icons-material/Menu';

const Menu = ({ handleMenu }: { handleMenu: () => void }) => {
  return (
    <MenuIcon color={'warning'} fontSize='large' sx={{ cursor: 'pointer', mx: 4 }} onClick={handleMenu} />
  )
}

export default Menu