import { TiArrowBack } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './style';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <S.Header>
            {location.pathname !== '/' && (
                <TiArrowBack
                    size={30}
                    color="#fff"
                    className="back-button"
                    onClick={() => navigate(-1)}
                />
            )}
            <h1>Tudo Delicioso</h1>
        </S.Header>
    );
};

export default Header;
