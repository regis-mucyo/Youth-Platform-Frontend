
const ProgressBar = ({ current, total, sectionTitle }) => {
    const percentage = (current / total) * 100

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-accent">
                    {sectionTitle} - Question {current + 1} of {total}
                </h3>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
                <div
                    className="bg-accent h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Total Progress: {current} of {total} questions completed
            </p>
        </div>
    )
}

export default ProgressBar
