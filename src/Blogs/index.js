import "./index.css"
const Blog = () =>{
    return (
        <div>
            <div className="container">
            <h1 className='heading'>Blogs</h1>
            </div>
            <div className='book-intro'>
            <img src="/Images/book.png" alt='born a crime' className='book'/>
            <p className='title'>Born A Crime By Trevor Noah</p>
            </div>
            <p className='blogs'>Our Blogs</p>
            <div className='links'>
                <div>
                <img src="/Images/trevor.png" alt='Trevor' className='trevor'/>
                <a href='https://born-a-crime.vercel.app/'className='learn'>Learn more</a>
                </div>
               <div>
               <img src="/Images/trevor.png" alt='Trevor' className='trevor'/>
               <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
               </div>
               <div>
               <img src="/Images/trevor.png" alt='Trevor' className='trevor'/>
               <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
               </div>
            </div>
        </div>
    )
}
export default Blog;