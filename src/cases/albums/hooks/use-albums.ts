import { useEffect, useState } from "react"
import { AlbumService } from "../services/album-service"
import type { Album } from "../../../components/types"

export function useAlbums() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = () => {
    AlbumService.listall()
      .then((dtos) => {
        const mapped: Album[] = dtos.map((dto) => ({
          id: String(dto.id),
          title: dto.title,
          artist: dto.artist,
          genre: dto.genre,
          year: Number(dto.year),
          cover: dto.cover,
        }))
        setAlbums(mapped)
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Erro ao carregar álbuns")
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const reload = () => {
    setLoading(true)
    setError(null)
    load()
  }

  return {
    albums,
    loading,
    error,
    reload,
  }
}