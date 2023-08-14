import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const CloseButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <button
      className='close-button'
      onClick={() => navigate('../')}
    >
      <AiOutlineClose size={30} />
    </button>
  )
}

export default CloseButton