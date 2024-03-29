import dummy from "../assets/images/dummy.jpg"

const MeetUp = () => {
    const founder = [
        {id:1,
         name:"Founder one",
        position:"Founder/ CEO"
        },
        {id:2,
         name:"Founder two",
        position:"Founder/ CEO"
        },
        {id:3,
         name:"[VP Name]",
        position:"VP, Development & Growth"
        },
        {id:4,
         name:"[VP Name]",
        position:"VP, Development & Growth"
        },
        {id:5,
         name:"[VP Name]",
        position:"VP, Development & Growth"
        },
        
    ]
    return (
        <div>
            <div >
                <h1 className="text-4xl font-bold mt-10 text-center">Meet Our Team</h1>
                <div className="flex justify-center my-8">
                    <h1 className="bg-[#B981C6] text-4xl w-fit font-bold py-2 px-4">Leadership Management Team</h1>
                </div>
                <div className="flex justify-center">

                    {
                    founder.slice(0, 2).map(fo =>
                        <div className="flex flex-col mx-10 items-center" key={fo.id}>
                            <div>
                                <img src={dummy} alt="" />
                                
                            </div>
                            <h4 className="text-xl font-semibold">{ fo.name}</h4>
                            <p className="text-lg">{ fo.position}</p>
                        </div>    
                        )
                }
                </div>
                <div className="flex justify-center">

                    {
                    founder.slice(2, 5).map(fo =>
                        <div className="flex flex-col mx-10 items-center" key={fo.id}>
                            <div>
                                <img src={dummy} alt="" />
                                
                            </div>
                           <h4 className="text-xl font-semibold">{ fo.name}</h4>
                            <p className="text-lg">{ fo.position}</p>
                        </div>    
                        )
                }
                </div>
                
            </div>
        </div>
    );
};

export default MeetUp;