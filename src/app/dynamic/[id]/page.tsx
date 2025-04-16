// dynamic route /dynamic/[id]/page.tsx
export default function DynamicPage({ params }: { params: { id: string } }) {
    console.log(params.id);
    return (
        <div>Dynamic route: {params.id}</div>
    );
}