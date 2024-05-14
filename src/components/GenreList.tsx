import { Image, HStack, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius="8" objectFit="cover" />
            <Button whiteSpace='normal' textAlign="left" fontSize="lg" variant="link" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
      </List>
    </>
  )
}

export default GenreList
