import dummy from "../assets/images/dummy.jpg"

const SalesAndMerketing = () => {
    const Developer = [
        {id:1,
         name:"[Employee Name]",
        position:"Team Lead"
        },
        {id:2,
         name:"[Employee Name]",
        position:"Sales Officer"
        },
        {id:3,
        name:"[Employee Name]",
        position:"Sales Officer"
        },
        {id:4,
          name:"[Employee Name]",
        position:"Sales Officer"
        },
        {id:5,
         name:"[Employee Name]",
        position:"Marketing Officer"
        },
        {id:6,
         name:"[Employee Name]",
        position:"Marketing Officer"
        },
        {id:7,
          name:"[Employee Name]",
        position:"Marketing Officer"
        },
        
        
        
        

    ]

    console.log(Developer.length);
    return (
         <div className="mb-14">
            <div >
                <div className="flex justify-center my-8">
                    <h1 className="bg-[#B981C6] text-4xl w-fit font-bold py-2 px-4">Sales and Marketing Team</h1>
                </div>
                <div className="flex justify-center">

                    {
                    Developer.slice(0, 4).map(fo =>
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
                    Developer.slice(4, 7).map(fo =>
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

export default SalesAndMerketing;