import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
   showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
   return (
      <Flex
         align="center"
      >
         { showProfileData && (
            <Box mr="4" textAlign="right" >
               <Text>Jo oliveira</Text>
               <Text color="gray.300" fontSize="small">
                  jo.oliver@gmail.com
               </Text>
            </Box>
         )}
         <Avatar size="md" name="Jo Oliveira" src="https://github.com/JoOliverP.png" />
      </Flex>
   );
}