"use client"

import axios from "axios";

function Exam01AsyncControl() {

    const handleBtn1 = () => {
        axios.get("http://localhost/database/board/list", {
            params: {
                pageNo: 1
            }
        })
            .then((response) => { console.log(response.data) })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("마무리 작업") });
    };

    const handleBtn2 = async() => {
        try {
            const response = await axios.get("http://localhost/database/board/list", {
                params: {
                    pageNo: 1
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("마무리 작업");
        }
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam01AsyncControl
            </div>
            <div className="card-body">
                <button onClick={handleBtn1} className="btn btn-info btn-sm me-2">then-catch-finally</button>
                <button onClick={handleBtn2} className="btn btn-info btn-sm me-2">async-await</button>
            </div>
        </div>
    );
}

export default Exam01AsyncControl;