import React from 'react';
function Card(props) {
    return (

        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 mb-5 ml-2 mr-2">

            <div className="card border">
                <div class="card-header">
                    <p>{props.data.header}</p>
                    <h2>$ {props.data.month}/ month</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group ">
                        {
                            props.data.listitems.map((li) => {
                           
                                return li.enable !== false ? (<li className="li"><i class="fa fa-check" aria-hidden="true"></i> {li.list}</li>) :
                                    (<li className="li text-muted"><i class="fa fa-times opacity:50"></i>  {li.list}</li>)

                            })
                        }
                    </ul>
                    <div className='btn1'>
                    <button type="button" class="btn btn-primary mt-5 mb-5 ">Button</button>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default Card;