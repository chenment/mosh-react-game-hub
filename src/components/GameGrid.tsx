import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"
import React from "react"

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 })

  if (error) return <p>{error.message}</p>

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading && skeletons.map((_, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data?.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page.results.map(game =>
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            )}
          </React.Fragment>
        )}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Box>
  )
}

export default GameGrid
