

const MeetUp = () => {
    const founder = [
        {
         name:"Founder one",
        position:"Founder/ CEO"
        },
        {
         name:"Founder two",
        position:"Founder/ CEO"
        },
        {
         name:"[VP Name]",
        position:"VP, Development & Growth"
        },
        {
         name:"[VP Name]",
        position:"VP, Development & Growth"
        },
        {
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
                
            </div>
        </div>
    );
};

export default MeetUp;