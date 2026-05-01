function Exam10NestedLayout({children}) {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam10NestedLayout
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Exam10NestedLayout;