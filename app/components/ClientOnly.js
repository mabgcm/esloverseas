import { useEffect, useState } from 'react';

export default function ClientOnly({ children }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    if (!isClient) {
        return null;
    }

    return <>{children}</>;
}