import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { TrpcRouter } from '@fullStack/backend/src/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export const trpc = createTRPCReact<TrpcRouter>()

const qureyClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

export const TrpcProvider = ({ children }: { children: ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={qureyClient}>
      <QueryClientProvider client={qureyClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
