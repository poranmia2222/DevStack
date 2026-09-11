const Stack = () => {
    return (
        <aside className="border border-slate-200 rounded-2xl p-4 space-y-2 sticky top-24" >
            <h2 className="text-xl font-bold">Your Stack</h2>
            <p className="font-semibold text-sm">No technologies selected yet.</p>
            <div className="p-6 border border-dashed border-slate-400 rounded-lg">
                <p className="text-center font-semibold text-sm">Your stack is empty.</p>
            </div>
        </aside>
    );
};

export default Stack;