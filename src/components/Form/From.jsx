import { Fragment, useEffect, useState } from 'react';
import './Form.scss';

function Form({ ...items }) {
    const formContent = [
        {
            number: 'I',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP (Khung điểm từ 0 đến 20 điểm)',
            notetitle: '(Nếu tổng số điểm > 20 điểm sẽ quy về điểm tối đa là 20 điểm)',
            ladder: '0 - 20',
            contents: [
                {
                    criteria: 'Ý thức và thái độ trong học tập',
                    Details: [
                        {
                            detail: ' Ý thức và thái độ trong học tập tốt: đăng ký học đủ khối lượng và đúng thời gian quy định,không bị nhắc nhở về thái độ trong quá trình học tập, tinh thần vượt khó trong học tập',
                            point: 5,
                        },
                        {
                            detail: ' Bị nhắc nhở về ý thức và thái độ học tập',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Kết quả học tập',
                    Details: [
                        {
                            detail: ' ĐTBHT từ 3,60 đến 4,00',
                            point: 10,
                        },
                        {
                            detail: ' ĐTBHT từ 3,20 đến 3,59',
                            point: 8,
                        },
                        {
                            detail: ' ĐTBHT từ 2,50 đến 3,19',
                            point: 7,
                        },
                        {
                            detail: ' ĐTBHT từ 2,00 đến 2,49',
                            point: 5,
                        },
                        {
                            detail: ' ĐTBHT < 2,00',
                            point: 0,
                        },
                        {
                            detail: 'Điểm trung bình học kỳ (thang điểm 4) đạt: ',
                            point: '',
                        },
                    ],
                },
                {
                    criteria: 'Ý thức chấp hành nội quy - quy chế thi',
                    Details: [
                        {
                            detail: ' Chấp hành tốt nội quy - quy chế thi',
                            point: 5,
                        },
                        {
                            detail: ' Vi phạm quy chế thi ',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria:
                        'Ý thức và thái độ tham gia các câu lạc bộ học thuật, các hoạt động học thuật, hoạt động ngoại khóa, hoạt động NCKH',
                    Details: [],
                },
                {
                    pathNumber: 'a',
                    criteria: 'Câu lạc bộ học thuật, các hoạt động học thuật, hoạt động ngoại khóa',
                    Details: [
                        {
                            detail: ' Tham gia các CLB, các hoạt động học thuật, hoạt động ngoại khóa',
                            point: 3,
                        },
                        {
                            detail: ' Thành viên BTC các CLB, hoạt động học thuật, hoạt động ngoại khóa',
                            point: 2,
                        },
                        {
                            detail: ' Đã tham gia/thành viên BTC của CLB, hoạt động: ',
                            point: '',
                        },
                        {
                            detail: 'Không tham gia ',
                            point: 0,
                        },
                    ],
                },
                {
                    pathNumber: 'b',
                    criteria: 'Tham gia các cuộc thi về học thuật, olympic',
                    Details: [
                        {
                            detail: ' Đạt giải nhất ',
                            point: 3,
                        },
                        {
                            detail: ' Đạt giải nhì',
                            point: 2,
                        },
                        {
                            detail: ' Đạt giải ba',
                            point: 1,
                        },
                        {
                            detail: 'Không tham gia ',
                            point: 0,
                        },
                    ],
                },
                {
                    pathNumber: 'c',
                    criteria: 'Tham gia và hoàn thành NCKH sinh viên',
                    Details: [
                        {
                            detail: 'Đạt giải A NCKH ',
                            point: 3,
                        },
                        {
                            detail: 'Đạt giải B NCKH ',
                            point: 2,
                        },
                        {
                            detail: 'Đạt giải C NCKH ',
                            point: 1,
                        },
                        {
                            detail: 'Không tham gia ',
                            point: 0,
                        },
                    ],
                },
            ],
        },
        {
            number: 'II',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC CHẤP HÀNH NỘI QUY, QUY CHẾ, QUY ĐỊNH TRONG HỌC VIỆN (Khung điểm từ 0 đến 25 điểm)',
            notetitle: '',
            ladder: '0 - 25',
            contents: [
                {
                    criteria:
                        'Ý thức chấp hành các văn bản chỉ đạo của cấp trên: thực hiện nghĩa vụ tham gia đánh giá chất lượng giảng dạy của giảng viên ',
                    Details: [
                        {
                            detail: ' Chấp hành đầy đủ',
                            point: 5,
                        },
                        {
                            detail: ' Không chấp hành đầy đủ',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Chấp hành quy định đóng học phí',
                    Details: [
                        {
                            detail: ' Đầy đủ, đúng hạn',
                            point: 4,
                        },
                        {
                            detail: ' Đóng chậm học phí so với quy định',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Chấp hành quy định về nội, ngoại trú',
                    Details: [
                        {
                            detail: ' Chấp hành tốt, không vi phạm',
                            point: 4,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Chấp hành quy định mượn, trả sách của thư viện',
                    Details: [
                        {
                            detail: ' Chấp hành tốt',
                            point: 3,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Chấp hành quy định của y tế, nhà xe, bảo vệ,…',
                    Details: [
                        {
                            detail: ' Chấp hành tốt',
                            point: 4,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Chấp hành các nội quy, quy chế khác của Học viện',
                    Details: [
                        {
                            detail: ' Chấp hành tốt, không vi phạm',
                            point: 5,
                        },
                        {
                            detail: ' Bị xử lý kỷ luật ',
                            point: 0,
                        },
                    ],
                },
            ],
        },
        {
            number: 'III',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC VÀ KẾT QUẢ THAM GIA CÁC HOẠT ĐỘNG CHÍNH TRỊ, XÃ HỘI, VĂN HÓA, VĂN NGHỆ, THỂ THAO, PHÒNG CHỐNG CÁC TNXH: Khung điểm từ 0 đến 20 điểm ',
            notetitle: '(nếu tổng số điểm > 20 điểm sẽ quy về điểm tối đa là 20 điểm)',
            ladder: '0 - 20',
            contents: [
                {
                    criteria: 'Ý thức tham gia các hoạt động chính trị, xã hội do Học viện tổ chức và điều động ',
                    Details: [
                        {
                            detail: ' Tích cực',
                            point: 5,
                        },
                        {
                            detail: ' Đầy đủ',
                            point: 3,
                        },
                        {
                            detail: ' Không đầy đủ',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Ý thức tham gia sinh hoạt lớp, sinh hoạt đoàn thể',
                    Details: [
                        {
                            detail: ' Tích cực',
                            point: 5,
                        },
                        {
                            detail: ' Đầy đủ',
                            point: 3,
                        },
                        {
                            detail: ' Không đầy đủ',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Tham gia các hoạt động văn hóa, văn nghệ, thể thao',
                    Details: [
                        {
                            detail: ' Tích cực',
                            point: 5,
                        },
                        {
                            detail: ' Đầy đủ',
                            point: 3,
                        },
                        {
                            detail: ' Không đầy đủ',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Ý thức phòng chống ma túy và các tệ nạn xã hội khác',
                    Details: [
                        {
                            detail: ' Tích cực',
                            point: 5,
                        },
                        {
                            detail: ' Đầy đủ',
                            point: 3,
                        },
                        {
                            detail: ' Không đầy đủ',
                            point: 0,
                        },
                    ],
                },
            ],
        },
        {
            number: 'IV',
            title: 'ĐÁNH GIÁ VỀ PHẨM CHẤT CÔNG DÂN VÀ QUAN HỆ VỚI CỘNG ĐỒNG: Khung điểm từ 0 đến 25 điểm',
            notetitle: '',
            ladder: '0 - 25',
            contents: [
                {
                    criteria: 'Ý thức chấp hành chủ trương của Đảng, chính sách, pháp luật của Nhà nước',
                    Details: [
                        {
                            detail: ' Chấp hành tốt  ',
                            point: 10,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Lối sống, thái độ quan hệ với thầy cô giáo, CBCNV và SV trong Học viện',
                    Details: [
                        {
                            detail: ' Có lối sống lành mạnh, quan hệ đúng mực ',
                            point: 5,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Có tinh thần giúp đỡ bạn bè, người nghèo, người gặp khó khăn',
                    Details: [
                        {
                            detail: ' Có',
                            point: 2,
                        },
                        {
                            detail: ' Không',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria: 'Ý thức giữ gìn trật tự ATXH và an toàn giao thông',
                    Details: [
                        {
                            detail: ' Chấp hành tốt',
                            point: 3,
                        },
                        {
                            detail: ' Vi phạm',
                            point: 0,
                        },
                    ],
                },
                {
                    criteria:
                        'Tham gia công tác xã hội (hiến máu nhân đạo, tình nguyện mùa hè xanh, tiếp sức mùa thi hoặc các công tác XH khác)',
                    Details: [
                        {
                            detail: ' Có tham gia',
                            point: 5,
                        },
                        {
                            detail: ' Không tham gia',
                            point: 0,
                        },
                    ],
                },
            ],
        },
        {
            number: 'V',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC VÀ KẾT QUẢ THAM GIA CÔNG TÁC PHỤ TRÁCH LỚP, CÁC ĐOÀN THỂ, TỔ CHỨC TRONG HỌC VIỆN HOẶC SINH VIÊN ĐẠT THÀNH TÍCH ĐẶC BIỆT TRONG HỌC TẬP, RÈN LUYỆN(Khung điểm từ 0 đến 25 điểm)',
            notetitle: '',
            ladder: '0 - 10',
            contents: [
                {
                    criteria:
                        'Sinh viên được phân công quản lý lớp, các tổ chức Đoàn, Hội và các tổ chức khác trong nhà Học viện hoàn thành tốt nhiệm vụ',
                    Details: [
                        {
                            detail: ' Bí thư; Chi ủy viên chi bộ Đảng; UVBCH Đoàn Học viện; Bí thư & Phó bí thư LC Đoàn',
                            point: 5,
                        },
                        {
                            detail: ' UV BCH Liên chi đoàn, Bí thư chi đoàn, Đội trưởng SVTN, Chủ nhiệm Câu lạc bộ, Lớp trưởng',
                            point: 4,
                        },
                        {
                            detail: ' Phó bí thư chi đoàn, UV BCH chi đoàn, Phó đội trưởng đội SVTN, Phó chủ nhiệm Câu lạc bộ, Lớp phó',
                            point: 3,
                        },
                        {
                            detail: ' Thành viên tích cực của các CLB, đội tuyển Olympic, đội văn nghệ, thể thao',
                            point: 2,
                        },
                        {
                            detail: ' Hoạt động kém hiệu quả hoặc không gương mẫu',
                            point: 0,
                        },
                        {
                            detail: ' Nhiệm vụ được phân công',
                            point: '',
                        },
                    ],
                },
                {
                    criteria: 'Được khen thưởng hoàn thành tốt nhiệm vụ',
                    Details: [
                        {
                            detail: ' Được kết nạp Đảng',
                            point: 5,
                        },
                        {
                            detail: ' Đạt yêu cầu khi tham gia học lớp nâng cao nhận thức về Đảng',
                            point: 3,
                        },
                        {
                            detail: ' Khen thưởng cấp Bộ và tương đương trở lên',
                            point: 5,
                        },
                        {
                            detail: ' Khen thưởng cấp Học viện',
                            point: 4,
                        },
                        {
                            detail: ' Khen thưởng cấp Khoa',
                            point: 3,
                        },
                        {
                            detail: ' Đã được khen thưởng',
                            point: '',
                        },
                        {
                            detail: 'Không tham gia ',
                            point: 0,
                        },
                    ],
                },
            ],
        },
    ];

    const [total, setTotal] = useState(0);
    const [arrSave, setArrSave] = useState([]);
    const [arrValue, setArrValue] = useState([]);

    const handleSubmit = (e) => {
        if (arrValue.length < 6) {
            //23
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
                    {formContent.map((content, index1) => (
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
