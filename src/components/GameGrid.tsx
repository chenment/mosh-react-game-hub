import { SimpleGrid, Spinner } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { GameQuery } from "../App"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 })

  if (error) return <p>{error.message}</p>

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
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
    </InfiniteScroll>
  )
}

export default GameGrid
