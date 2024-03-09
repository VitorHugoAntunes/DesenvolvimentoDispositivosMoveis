type FeedbackProps = {
  funcaoOK: () => void;
  funcaoNOK: () => void;
  textoOK: string;
  textoNOK: string;
}

const Feedback = ({ funcaoOK, funcaoNOK, textoOK, textoNOK }: FeedbackProps) => {
  return (
    <div className='d-flex justify-content-evenly m-2'>
      {/* button{type=button}.btn.btn-*2 */}
      <button type="button" className="btn btn-primary" onClick={funcaoOK}>
        {textoOK}
      </button>
      <button type="button" className="btn btn-danger" onClick={funcaoNOK}>
        {textoNOK}
      </button>
    </div>
  )
}

export default Feedback;
