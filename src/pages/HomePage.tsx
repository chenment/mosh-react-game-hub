import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid.tsx'
import GameHeading from '../components/GameHeading.tsx'
import GenreList from '../components/GenreList.tsx'
import PlatformSelector from '../components/PlatformSelector.tsx'
import SortSelector from '../components/SortSelector.tsx'

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
        lg: `'aside main'`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="5">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage
