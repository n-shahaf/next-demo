// dynamic route /dynamic/[id]/page.tsx
export default async function DynamicPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <div>
            <h1>Dynamic route: {id}</h1>
        </div>
    )
}