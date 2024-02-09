import dummy from "../assets/images/dummy.jpg"

const DeveloperTeam = () => {
    const Developer = [
        {id:1,
         name:"[Developer Name]",
        position:"Team Lead, SE"
        },
        {id:2,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:3,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:4,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:5,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:6,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:7,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        {id:8,
         name:"[Developer Name]",
        position:"Software Engineer"
        },
        
        
        

    ]

    console.log(Developer.length);
    return (
         <div>
            <div >
                <div className="flex justify-center my-8">
                    <h1 className="bg-[#B981C6] text-4xl w-fit font-bold py-2 px-4">Development Team</h1>
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

export default DeveloperTeam;