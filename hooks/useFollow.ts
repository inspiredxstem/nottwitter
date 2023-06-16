import { useCallback, useMemo } from "react"
import useCurrentUser from "./useCurrentUser"
import useUser from "./useUser"
import useLoginModal from "./useLoginModal"
import toast from "react-hot-toast"
import axios from "axios"

const useFollow = (userId: string) => {
    const {data: currentUser, mutate: mutateCurrentUser} = useCurrentUser()
    const {mutate: mutateFetchedUser} = useUser(userId)

    const loginModal = useLoginModal()

    const isFollowing = useMemo(() => {
        const list = currentUser?.followingIds || [];

        return list.includes(userId)
    }, [userId, currentUser])

    const toggleFollow = useCallback(async() => {
        if(!currentUser){
            return loginModal.onOpen()
        }

        try {
            let request;

            if(isFollowing){
                request = () => axios.delete(`/api/follow`, {data: {userId}}) 
            } else {
                request = () => axios.post(`/api/follow`, {userId})
            }

            await request()

            mutateCurrentUser()
            mutateFetchedUser()

            toast.success('It works boogy woogy')
        } catch (error) {
            toast.error("I dont know what is wrong")
        }
    }, [currentUser, isFollowing, userId, mutateCurrentUser, mutateFetchedUser, loginModal])

    return {
        isFollowing,
        toggleFollow
    }
}

export default useFollow