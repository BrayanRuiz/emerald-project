import { AppRouter } from './AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
        </QueryClientProvider>
    )
}

export default App
