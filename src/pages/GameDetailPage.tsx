import { Heading, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import useGame from "../hooks/useGame"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </div>
  )
}

export default GameDetailPage