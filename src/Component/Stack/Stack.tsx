const Stack = () => {
    return (
        <div className="border border-slate-200 rounded-2xl p-4 space-y-2">
            <h2 className="text-xl font-bold">Your Stack</h2>
            <p className="font-semibold text-sm">No technologies selected yet.</p>
            <div className="p-6 border border-dashed border-slate-400 rounded-lg">
                <p className="text-center font-semibold text-sm">Your stack is empty.</p>
            </div>
        </div>
    );
};

export default Stack;