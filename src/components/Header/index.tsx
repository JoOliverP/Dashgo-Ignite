import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })
   return (
      <Flex 
         w="100%"
         as="header"
         maxWidth={1480}
         h="20"
         mx="auto"
         px="6"
         align="center"
      >
         <Logo />
         {isWideVersion  && <SearchBox /> }
         

         <Flex
            align="center"
            ml="auto"
         >
           
            <NotificationsNav />
            <Profile showProfileData={isWideVersion}/>
         </Flex>


      </Flex>
   );
}