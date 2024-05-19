import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner, Text } from "@chakra-ui/react"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)
  console.log(game)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <div>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </div>
  )
}

export default GameDetailPage
