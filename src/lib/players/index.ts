import { axiosAPI } from "@/config"
import { AppPlayer } from "@/interfaces"

export const votePlayer = async(id: string) => {
    try {
        const result = await axiosAPI.post("/players/votes?id=2", { playerId: id})
        return { data: result.data as AppPlayer, message: "Player voted"  }
    } catch (error: any) {
        let message = error?.message as string
        if(error?.response){
            message = error?.response?.data as string
        }
        return { data: null, message }
    }
}