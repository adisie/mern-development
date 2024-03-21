
// styles
import './Home.css';

const Home = () => {
    // images
    const images = [
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
        "https://companynewheroes.com/wp-content/blogs.dir/18/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683.jpg",
        "https://yes-please.nl/wp-content/uploads/2020/10/Voor-op-de-site-YP.jpg",
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg",
        "https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg",
        "https://images.lifestyleasia.com/wp-content/uploads/2019/10/18094733/1128_01_2610.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg",
        "https://img.freepik.com/free-photo/close-up-handsome-professional-man-cross-arms-chest-looking-confident-camera-smiling-determined-standing-against-white-background_176420-53771.jpg",
        "https://deadline.com/wp-content/uploads/2020/09/johnathan-majors.jpg",
    ]
  return (
    <div>
        <h3>Avatars</h3>
        <div className="avatars">
            {
                images.map((item,index)=>(
                    <img key={index} src={item} className='avatar' onClick={()=>{
                        console.log(index)
                    }}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home