import zuko_img from '../assets/Zuko.png'

function Zuko(){
    return(
        <div>
            <div className="container text-center mt-5 mb-5">
                <div className="row">
                    <div className="my-auto align-middle text-center col">
                        <h2 className='text-end fw-bold'>Zuko</h2>
                        <p className='text-end'>Zuko, the exiled Fire Nation prince, seeks the Avatar to regain his honor. <br />
                        Torn between duty and morality, he struggles with his identity. 
                        <br />He eventually redeems himself by aiding the Avatar against his own nation.</p>
                    </div>
                    <div className="col">
                        <img className='w-75' src={zuko_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zuko