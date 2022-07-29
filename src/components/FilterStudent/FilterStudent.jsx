import './FilterStudent.scss';

function FilterStudent() {
    return (
        <div className="FilterStudent__wrapper">
            <div className="FilterStudent__left">
                <h1>Lớp: K11A-CNTT</h1>

                <ul className="FilterStudent__left-options">
                    <li>SV chưa đánh giá</li>
                    <li>SV đã đánh</li>
                    <li>Done</li>
                </ul>
            </div>
        </div>
    );
}

export default FilterStudent;
