import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : `/api/posts`

    // see if data already exist, global storage like Redux
    const {data, error, isLoading, mutate} =  useSWR(url, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default usePosts;