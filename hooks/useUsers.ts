import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useUsers = () => {
    // see if data already exist, global storage like Redux
    const {data, error, isLoading, mutate} =  useSWR('/api/users', fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useUsers;