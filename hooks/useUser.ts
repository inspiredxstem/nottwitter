import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useUser = (userId: string) => {
    // see if data already exist, global storage like Redux
    const {data, error, isLoading, mutate} =  useSWR(userId ? `/api/users/${userId}` : null, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useUser;