import element from '../assets/4 Element.jpg'
import './content.css'

function Element() {
    return (
        <div>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="my-auto align-middle text-center col">
                        <h2 className='fw-bold'>BENDING ARTS</h2>
                        <p>The four elemental bending arts <br />
                        are based on the four classical elements: <br />
                        water, earth, fire, and air</p>
                        <button className='btn btn-primary py-2 px-3 border border-0 rounded-5 bg-black text-white'>MORE INFORMATION</button>
                    </div>
                    <div className="col">
                        <img className='w-50' src={element} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Element