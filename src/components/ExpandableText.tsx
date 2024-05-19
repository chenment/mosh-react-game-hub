import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpended] = useState(false)

  if (children.length <= limit) return <Text>{children}</Text>

  const summary = expanded ? children : children.substring(0, limit) + '...'

  return (
    <Text>
      {summary}
      <Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={1} onClick={() => setExpended(!expanded)}>{expanded ? 'Show Less' : 'Show More'}</Button>
    </Text>
  )
}

export default ExpandableText
