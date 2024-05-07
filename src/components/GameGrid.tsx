import { SimpleGrid } from "@chakra-ui/react"
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenres"

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const skeletons = Array.from({ length: 6 })

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={3}>
        {isLoading && skeletons.map((_, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
