import  { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  useColorMode,
  
  Button,
  Menu,
  MenuButton,
  
 
  Stack,
  
  Input
  
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Container from '../Components/Container'

const Navbar = () =>
 {
  const { colorMode, toggleColorMode } = useColorMode();
  const [search, setSearch] = useState("");

  return (
    <>
      <Box  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' px={4}>
        <Flex   h={16} alignItems={'center'} justifyContent={'space-between'}>

        <Input w='40%'type='search' variant='filled' placeholder='type to filter...' 
          onChange={(e) => setSearch(e.target.value)}/>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://conferences.tiu.edu.iq/iccrams/wp-content/uploads/2019/08/female-avatar-1.jpg'}
                  />
                </MenuButton>
               
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        <Container props={search} />
      </Box>
    </>
  );
}




export default Navbar;