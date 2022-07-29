import './ListStudenPage.scss';

import FilterStudent from '../../../components/FilterStudent/FilterStudent';
import Footer from '../../../components/Footer/Footer';
import ListStudent from '../../../components/ListStudent/ListStudent';
import Header from './../../../components/Header/Header';
function ListStudentPage() {
    return (
        <div>
            <Header />
            <div className="ListStudentPage__content">
                <FilterStudent />
                <ListStudent />
            </div>
            <Footer />
        </div>
    );
}

export default ListStudentPage;
