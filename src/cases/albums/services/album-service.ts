import { api } from "../../../lib/axios"
import type { AlbumDTO } from "../dtos/album";

const ENDPOINT = '/albums.json?key=6cef9860'

export const AlbumService = {
    async listall(): Promise<AlbumDTO[]>{
        const result = await api.get<AlbumDTO[]>(ENDPOINT);
        return result.data;
    }
}