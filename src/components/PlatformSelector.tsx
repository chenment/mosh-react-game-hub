import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platform } from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  setSelectedPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ selectedPlatformId, setSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms()
  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => <MenuItem key={platform.id} onClick={() => setSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
