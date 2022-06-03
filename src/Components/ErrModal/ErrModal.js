import './ErrModal.css';

function ErrModal(props) {

    return (
        <div className='modal'>
            <div className='modal_content'>
                <h3>Sorry!</h3>
                <p>Input is invalid or cannot be found. Please try again...</p>
                <button className='close' onClick={props.hideModal}>OK</button>
            </div>
        </div>
    )
}

export default ErrModal;