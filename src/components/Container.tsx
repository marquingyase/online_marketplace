export default function Container({ children, cn }: { children: React.ReactNode; cn?: string }) {
    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${cn}`}>
            {children}
        </div>
    );
}