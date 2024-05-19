import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { screenshot } from "../entities/Screenshot"

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<screenshot>(`/games/${gameId}/screenshots`)

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
  })
}

export default useScreenshots
