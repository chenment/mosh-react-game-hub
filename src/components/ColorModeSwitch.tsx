import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Switch colorScheme="green" value={colorMode} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
