import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useCurrentUser = () => {
    // see if data already exist, global storage like Redux
    const {data, error, isLoading, mutate} =  useSWR('/api/current', fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;