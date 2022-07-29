import { useContext } from 'react';
import { Fragment, useEffect, useState } from 'react';
import './Form.scss';
import { DataContext } from './../../context/dataContext';

function Form({ ...items }) {
    const data = useContext(DataContext);

    const [total, setTotal] = useState(0);
    const [arrSave, setArrSave] = useState([]);
    const [arrValue, setArrValue] = useState([]);

    const handleSubmit = (e) => {
        if (arrValue.length < 6) {
            e.preventDefault();
            alert('Bạn cần hoàn thành tất cả các mục!');
        } else items.func(true);
    };

    const handlOnclick = (e) => {
        const ID = parseInt(e.target.dataset.id);
        const valueInt = parseInt(e.target.value);

        if (arrSave.length === 0) {
            setArrSave([ID]);
            setArrValue([valueInt]);
        } else if (arrSave.length > 0) {
            arrSave.forEach((item, index) => {
                if (item === ID) {
                    setArrValue(arrValue.splice(index, 1));
                    setArrSave(arrSave.splice(index, 1));
                }
            });
            setArrSave([...arrSave, ID]);
            setArrValue([...arrValue, valueInt]);
        }
    };
    useEffect(() => {
        let newArray1 = [];
        let newArray2 = [];

        arrSave.forEach((item, index) => {
            if (item < 10) {
                newArray1.push(arrValue[index]);
            } else newArray2.push(arrValue[index]);
        });
        let result1 = newArray1.reduce((total, sum) => total + sum, 0);
        let result2 = newArray2.reduce((total, sum) => total + sum, 0);
        result1 > 20 ? setTotal(20 + result2) : setTotal(result1 + result2);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrSave]);

    return (
        <div className="Form__wrapper" style={!items.isShow ? { display: 'block' } : { display: 'none' }}>
            <form className="Form__inner">
                <div className="form-info">
                    <h1>phiếu đánh giá kết quả rèn luyện cho sinh viên</h1>
                    <div className="student-info">
                        <span>Họ và tên:</span>
                        <span>Ngày sinh:</span>
                        <span>Mã số SV:</span>
                        <span>Lớp:</span>
                        <span>Khoa:</span>
                        <span>Khóa:</span>
                        <span>Học kỳ:</span>
                        <span>Năm học:</span>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th rowSpan={2}>tt</th>
                            <th rowSpan={2}>nội dung đánh giá</th>
                            <th rowSpan={2}>thang điểm</th>
                            <th colSpan={2}>điểm đánh giá</th>
                        </tr>
                        <tr>
                            <th>do sv tự đánh giá</th>
                            <th>do tập thể đánh giá</th>
                        </tr>
                    </thead>
                    {data.map((content, index1) => (
                        <tbody key={index1}>
                            <tr>
                                <td style={{ textAlign: 'center' }}>
                                    <b>{content.number}</b>
                                </td>
                                <td>
                                    <span className="title">{content.title}</span>
                                    <span className="note">{content.notetitle}</span>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <b>{content.ladder}</b>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>

                            {content.contents.map((value, index2) => (
                                <Fragment key={index2}>
                                    <tr key={index2}>
                                        <td rowSpan={value.Details.length + 1}>
                                            {value.pathNumber ? value.pathNumber : `${index1 + 1}.${index2 + 1}`}
                                        </td>
                                        <td>
                                            <i>{value.criteria}</i>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    {value.Details.map((item, index3) => (
                                        <tr key={index3}>
                                            <td>+ {item.detail}</td>

                                            <td
                                                style={{
                                                    textAlign: 'center',
                                                    boxSizing: 'border-box',
                                                }}
                                            >
                                                <b>
                                                    {item.point === '' ? (
                                                        <textarea
                                                            type="text"
                                                            className="input-text"
                                                            name={item.detail}
                                                            required
                                                        ></textarea>
                                                    ) : (
                                                        `+ ${item.point} điểm`
                                                    )}
                                                </b>
                                            </td>

                                            {items.type === 'student' ? (
                                                <td style={{ textAlign: 'center' }}>
                                                    {item.point === '' ? (
                                                        ''
                                                    ) : (
                                                        <input
                                                            data-id={`${index1}${index2}`}
                                                            type="radio"
                                                            name={`value${index1}${index2}`}
                                                            className="input-check "
                                                            value={item.point}
                                                            onClick={handlOnclick}
                                                        />
                                                    )}
                                                </td>
                                            ) : (
                                                <td></td>
                                            )}

                                            {items.type === 'teach' ? (
                                                <td style={{ textAlign: 'center' }}>
                                                    {item.point === '' ? (
                                                        ''
                                                    ) : (
                                                        <input
                                                            data-id={`${index1}${index2}`}
                                                            type="radio"
                                                            name={value.criteria}
                                                            className="input-check "
                                                            value={item.point}
                                                            onClick={handlOnclick}
                                                        />
                                                    )}
                                                </td>
                                            ) : (
                                                <td></td>
                                            )}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    ))}
                    <tfoot>
                        <tr>
                            <th colSpan={2}>TỔNG CỘNG</th>
                            <th></th>
                            <th>{total}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                <button type="submit" className="btn-send" onClick={handleSubmit}>
                    Gửi đánh giá
                </button>
            </form>
        </div>
    );
}

export default Form;
