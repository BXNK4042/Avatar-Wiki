import Aang_img from '../assets/Aang_2.jpg'

function Aang() {
    return (
        <div>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="align-middle text-center col">
                        <img className='w-75' src={Aang_img} alt="" />
                    </div>
                    <div className="my-auto col">
                        <h2 className='text-start fw-bold'>AANG</h2>
                        <p className='text-start'>Aang is the last Airbender and the Avatar, <br />
                        destined to master all four elements and maintain world balance. <br />
                        Playful and kind, he loves adventure but carries great responsibility. <br />
                        Courageous and wise, he strives to bring peace to all nations.</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Aang